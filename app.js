//variables....

let container;
let camera;
let renderer;
let scene;
let bong;
let weed;

function init() {
    container = document.querySelector('.scene');

    //Create the scene..
    scene = new THREE.Scene();

    const fov = 35;
    const aspect = container.clientWidth / container.clientHeight;
    const near = 0.1;
    const far = 500;

    //camera set-up...
    camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(0,0.5,15);

    const amient = new THREE.AmbientLight(0x404040, 5);
    scene.add(amient);

    const light = new THREE.DirectionalLight(0xFFFFFF, 5);
    light.position.set(10,10,100); 
    scene.add(light);

    //Renderer set-up...
    //antialias: true interpolates between pixels to smoothes the rendering
    //alpha: true removes default background as black
    renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    container.appendChild(renderer.domElement);

    //LOAD THE 3D MODELS...
    let loader = new THREE.GLTFLoader();
    loader.load('./3D/bong/scene.gltf', function(gltf){
        scene.add(gltf.scene);
        weed = gltf.scene.children[0];
        animate();
    });
}

function animate(){
    requestAnimationFrame(animate);
    weed.rotation.z += 0.01;
    weed.rotation.y += 0.02;
    weed.rotation.x -= 0.02
    renderer.render(scene,camera);
}

init(); 