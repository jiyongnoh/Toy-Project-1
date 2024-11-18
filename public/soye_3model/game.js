let threeScene, threeCamera, threeRenderer, gltfLoader;

const config = {
  type: Phaser.WEBGL,
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create,
    update: update,
  }
};

const game = new Phaser.Game(config);

function preload() {
  // Phaser의 preload에서는 Three.js 설정이 필요하지 않습니다.
}

function create() {
  // Three.js 캔버스를 Phaser에 추가
  const threeCanvas = this.add.dom(400, 300).createElement('canvas');
  threeRenderer = new THREE.WebGLRenderer({ canvas: threeCanvas.node });
  threeRenderer.setSize(800, 600);

  // Three.js Scene, Camera, Light 초기화
  threeScene = new THREE.Scene();
  threeCamera = new THREE.PerspectiveCamera(75, 800 / 600, 0.1, 1000);
  threeCamera.position.z = 5;

  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(1, 1, 1).normalize();
  threeScene.add(light);

  // GLTFLoader로 모델 로드
  gltfLoader = new THREE.GLTFLoader();
  gltfLoader.load(
    'path/to/your/model.gltf', // GLTF 파일 경로
    (gltf) => {
      const model = gltf.scene;
      threeScene.add(model);
    },
    undefined,
    (error) => {
      console.error('An error occurred while loading the glTF model:', error);
    }
  );
}

function update() {
  // 매 프레임마다 Three.js 씬 렌더링
  threeRenderer.render(threeScene, threeCamera);
}
