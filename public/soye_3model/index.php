<html lang="en">
<head>
  <meta charset="utf-8">
  <title>My first three.js app</title>
  <style>
    body { margin: 0; }
  </style>
  <script type="importmap">
  {
    "imports": {
      "three": "https://unpkg.com/three/build/three.module.min.js",
      "three/addons/": "https://unpkg.com/three/examples/jsm/"
    }
  }
  </script>
</head>
<body>

<button name="blendShapeButton[]" value="-1">WIREFRAME</button>
<button name="blendShapeButton[]" value="-2">SHADING</button>

<br>
<button name="blendShapeButton[]" value="0">Eye_Close</button>
<button name="blendShapeButton[]" value="1">Happy</button>
<button name="blendShapeButton[]" value="2">Sad</button>
<button name="blendShapeButton[]" value="3">Angry</button>
<button name="blendShapeButton[]" value="4">Surprised</button>
<button name="blendShapeButton[]" value="5">Disgusted</button>
<br>
<button name="blendShapeButton[]" value="6">Mouth_A</button>
<button name="blendShapeButton[]" value="7">Mouth_E</button>
<button name="blendShapeButton[]" value="8">Mouth_I</button>
<button name="blendShapeButton[]" value="9">Mouth_O</button>
<button name="blendShapeButton[]" value="10">Mouth_U</button>


  <script type="module">
      import * as THREE from 'three';
      import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
    import { FBXLoader } from 'three/addons/loaders/FBXLoader.js';
      import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

    // 1. Three.js 기본 설정
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setAnimationLoop(animate);
    document.body.appendChild(renderer.domElement);

	 // 2. OrbitControls 추가 (마우스 핸들링)
	 const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // 부드러운 움직임 활성화
    controls.dampingFactor = 0.05; // 감쇠 효과 강도
    controls.screenSpacePanning = false; // 수평 이동 대신 팬 모드 비활성화
    controls.minDistance = 2; // 카메라 최소 거리 (줌 제한)
    controls.maxDistance = 50; // 카메라 최대 거리
    controls.maxPolarAngle = Math.PI / 2; // 위로 이동 제한 (90도)

    // 2. 기본 큐브 생성
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.set(0, -7.5, 10);

    // 3. FBXLoader로 모델 로드
    let loadedFBX = null; // 전역 변수로 FBX 모델 저장
    let mixer = null; // 전역 변수로 FBX 모델 저장

    const loader = new FBXLoader();
    loader.load(
      './idle.fbx', // FBX 파일 경로
      (fbx) => {
		fbx.scale.set(0.05, 0.05, 0.05); // 크기 조정
        fbx.position.set(0, -10, 0); // 큐브 앞에 배치
       scene.add(fbx);
	    // 로드된 FBX를 전역 변수에 저장
  		loadedFBX = fbx;

       // 애니메이션 가져오기
          const animations = fbx.animations;

        // 애니메이션 이름 출력
        animations.forEach((clip, index) => {
          console.log(`애니메이션 ${index}: ${clip.name}`);
        });
         // 첫 번째 애니메이션 재생 예제
        if (animations.length > 0) {
          mixer = new THREE.AnimationMixer(fbx);
          const action = mixer.clipAction(animations[0]); // 첫 번째 애니메이션 클립
          action.play();
          console.log('애니메이션 플레이');
          setTimeout(() => {
            action.fadeOut(1); // 1초에 걸쳐 부드럽게 종료
            console.log('애니메이션 부드럽게 정지 시작');
          }, 3000); // 3초 후 페이드 아웃 시작
        }
        console.log(`애니메이션 클립 개수: ${fbx.animations.length}`);
       



        console.log('FBX 모델 로드 성공');
      },
      undefined,
      (error) => {
        console.error('FBX 모델 로드 실패:', error);
      }
    );

	
    
	// 조명 추가
	const ambientLight = new THREE.AmbientLight(0xffffff, 2.5); // 환경광
	scene.add(ambientLight);

	const directionalLight = new THREE.DirectionalLight(0xffffff, 2.5); // 방향광
	directionalLight.position.set(0, -7.5, 15);
	scene.add(directionalLight);

  const clock = new THREE.Clock(); // 시간 추적용 시계

    // 4. 애니메이션 루프
    function animate() {
		  controls.update(); // OrbitControls 업데이트

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      if (loadedFBX) {
        loadedFBX.traverse((child) => {
          if(blendShapeIndex < 0) return;
          if (child.isMesh) {
            const morphInfluences = child.morphTargetInfluences;
            if (morphInfluences) {
              for (let i = 0; i < morphInfluences.length; i++) morphInfluences[i] = 0;
              morphInfluences[blendShapeIndex] = Math.abs(weight);
              if(weight >= 0.0) {
                weight += 0.01;
                if(weight > 1.0) weight = -weight;
              }
              if(weight < 0.0) {
                weight += 0.01;
                if(weight >= 0.0) weight = 0.0;
              }
              //console.log("weight =" + weight);
            }
          }
        });
      }

      const delta = clock.getDelta(); // 프레임 간 시간 계산
      if (mixer) mixer.update(delta/2); // 애니메이션 업데이트

      renderer.render(scene, camera);
    }


	// 버튼 클릭 이벤트 리스너 추가
  let blendShapeIndex = -1;
  let weight = 0.0;
	document.querySelectorAll('button[name="blendShapeButton[]"]').forEach((button) => {
		button.addEventListener('click', (event) => {
			blendShapeIndex = parseInt(button.value); // 버튼의 value를 통해 블렌드 쉐입 인덱스 가져옴

			if (loadedFBX) {
			loadedFBX.traverse((child) => {
				if (child.isMesh) {
          if(blendShapeIndex == -1) {
            child.material.wireframe = true;
            return;
          }
          if(blendShapeIndex == -2) {
            child.material.wireframe = false;
            return;
          }
          const morphInfluences = child.morphTargetInfluences;

          if (morphInfluences) {
            // 모든 블렌드 쉐입 초기화
            for (let i = 0; i < morphInfluences.length; i++) {
            morphInfluences[i] = 0;
            }

            // 클릭된 버튼의 인덱스에 해당하는 블렌드 쉐입 100% 적용
            morphInfluences[blendShapeIndex] = 1;
            console.log(`블렌드 쉐입 ${blendShapeIndex} 활성화 완료`);
          }
          }
			});
			} else {
			console.error('FBX 모델이 아직 로드되지 않았습니다.');
			}
		});
	});

  </script>
</body>