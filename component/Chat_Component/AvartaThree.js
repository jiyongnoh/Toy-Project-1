import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { FBXLoader } from 'three/addons/loaders/FBXLoader.js';

export default function AvartaThree() {
  const canvasRef = useRef(null); // canvas 태그를 참조하기 위한 ref

  useEffect(() => {
    // 1. Three.js 기본 설정
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    // 알파 채널 활성화
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
    });

    renderer.setSize(window.innerWidth / 5, window.innerHeight / 5);
    renderer.setClearColor(0x000000, 0); // 투명 배경 설정

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    // camera.position.set(0, 0, 0);
    scene.position.set(0, 0, 0);
    camera.position.set(0, 0, 15);
    // camera.lookAt(scene.position);

    // 2. 기본 큐브 생성
    // const geometry = new THREE.BoxGeometry(1, 1, 1);
    // const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
    // const cube = new THREE.Mesh(geometry, material);
    // scene.add(cube);

    // 3. 조명 추가
    const ambientLight = new THREE.AmbientLight(0xffffff, 3);
    ambientLight.position.set(0, 0, 20);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 10);
    // directionalLight.castShadow = true;
    directionalLight.position.set(0, 0, 20);
    scene.add(directionalLight);

    // 4. FBX 모델 로드
    let loadedFBX = null; // 전역 변수로 FBX 모델 저장
    let mixer = null; // 전역 변수로 FBX 모델 저장
    const loader = new FBXLoader();
    loader.load(
      '/soye_3model/Idle.fbx', // FBX 파일 경로
      (fbx) => {
        fbx.scale.set(0.05, 0.05, 0.05); // 크기 조정
        fbx.position.set(0, -10, 0); // 큐브 앞에 배치
        // fbx.rotation.set(0, 0, 0); // 모델 회전

        scene.add(fbx);
        // 로드된 FBX를 전역 변수에 저장
        loadedFBX = fbx;

        // 애니메이션 가져오기
        const animations = fbx.animations;

        // 애니메이션 이름 출력
        // animations.forEach((clip, index) => {
        //   console.log(`애니메이션 ${index}: ${clip.name}`);
        // });
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

    // 5. 애니메이션 루프
    function animate() {
      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);

      if (loadedFBX) {
        loadedFBX.traverse((child) => {
          if (blendShapeIndex < 0) return;
          if (child.isMesh) {
            const morphInfluences = child.morphTargetInfluences;
            if (morphInfluences) {
              for (let i = 0; i < morphInfluences.length; i++)
                morphInfluences[i] = 0;
              morphInfluences[blendShapeIndex] = Math.abs(weight);
              if (weight >= 0.0) {
                weight += 0.01;
                if (weight > 1.0) weight = -weight;
              }
              if (weight < 0.0) {
                weight += 0.01;
                if (weight >= 0.0) weight = 0.0;
              }
              //console.log("weight =" + weight);
            }
          }
        });
      }
    }
    animate();

    // 6. 창 크기 변경 대응
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth / 5, window.innerHeight / 5);
    });

    // 버튼 클릭 이벤트 리스너 추가
    let blendShapeIndex = -1;
    let weight = 0.0;
    document
      .querySelectorAll('button[name="blendShapeButton[]"]')
      .forEach((button) => {
        button.addEventListener('click', (event) => {
          blendShapeIndex = parseInt(button.value); // 버튼의 value를 통해 블렌드 쉐입 인덱스 가져옴

          if (loadedFBX) {
            loadedFBX.traverse((child) => {
              if (child.isMesh) {
                if (blendShapeIndex == -1) {
                  child.material.wireframe = true;
                  return;
                }
                if (blendShapeIndex == -2) {
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
                  //   console.log(`블렌드 쉐입 ${blendShapeIndex} 활성화 완료`);
                }
              }
            });
          } else {
            console.error('FBX 모델이 아직 로드되지 않았습니다.');
          }
        });
      });

    return () => {
      // 정리 작업
      window.removeEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      });
    };
  }, []);

  return (
    <AvartaThreeContainer>
      <ThreeCanvas ref={canvasRef} />
      <ButtonContainer>
        <button name="blendShapeButton[]" value="-1">
          WIREFRAME
        </button>
        <button name="blendShapeButton[]" value="-2">
          SHADING
        </button>
        <br />
        <button name="blendShapeButton[]" value="0">
          Eye_Close
        </button>
        <button name="blendShapeButton[]" value="1">
          Happy
        </button>
        <button name="blendShapeButton[]" value="2">
          Sad
        </button>
        <button name="blendShapeButton[]" value="3">
          Angry
        </button>
        <button name="blendShapeButton[]" value="4">
          Surprised
        </button>
        <button name="blendShapeButton[]" value="5">
          Disgusted
        </button>
        <br />
        <button name="blendShapeButton[]" value="6">
          Mouth_A
        </button>
        <button name="blendShapeButton[]" value="7">
          Mouth_E
        </button>
        <button name="blendShapeButton[]" value="8">
          Mouth_I
        </button>
        <button name="blendShapeButton[]" value="9">
          Mouth_O
        </button>
        <button name="blendShapeButton[]" value="10">
          Mouth_U
        </button>
      </ButtonContainer>
    </AvartaThreeContainer>
  );
}

const AvartaThreeContainer = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
  }
`;

const ButtonContainer = styled.div`
  width: 300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 768px) {
  }
`;

const ThreeCanvas = styled.canvas`
  @media (max-width: 768px) {
  }
`;
