			
////////////////////////////////////////////////////////////////////////////////////////
var scene = new THREE.Scene();
scene.background = new THREE.Color( 0xa0a0a0 );
scene.fog = new THREE.Fog( 0xa0a0a0, 10, 50 );
const hemiLight = new THREE.HemisphereLight( 0xffffff, 0x8d8d8d, 3 );
hemiLight.position.set( 0, 20, 0 );
scene.add( hemiLight );
/********************************************* */
const meshe = new THREE.Mesh( new THREE.PlaneGeometry( 100, 100 ), new THREE.MeshPhongMaterial( { color: 0xcbcbcb, depthWrite: false } ) );
				meshe.rotation.x = - Math.PI / 2;
				meshe.receiveShadow = true;
				scene.add( meshe );
/******************************************** */

/////////////////////////////////////////////////////////////////////////////////////
var geometry = new THREE.BoxGeometry(3, 1.5, 0.5);
var textureloader = new THREE.TextureLoader();
//scene.background=textureloader;
var material = new THREE.MeshBasicMaterial({color:'#ff0000'});/*{ map: textureloader.load('background.png'),side: THREE.BackSide }*/
var mech = new THREE.Mesh(geometry, material);
mech.position.set(0, 0, 0);

scene.add(mech);
var border = new THREE.BoxGeometry(3.1, 1.6, 0.6);
var material2 = new THREE.MeshBasicMaterial({
  color: 0xffffff,
  wireframe: false,
});
var border2 = new THREE.BoxGeometry(3.1, 1.6, 0.6);
var material22 = new THREE.MeshBasicMaterial({
  color: 0x000000,
  wireframe: false,
});
////////////////////////////////////////////////////////////////

const dirLight = new THREE.DirectionalLight( 0xffffff, 3 );
				dirLight.position.set( - 3, 10, - 10 );
				dirLight.castShadow = true;
				dirLight.shadow.camera.top = 2;
				dirLight.shadow.camera.bottom = - 2;
				dirLight.shadow.camera.left = - 2;
				dirLight.shadow.camera.right = 2;
				dirLight.shadow.camera.near = 0.1;
				dirLight.shadow.camera.far = 40;
				scene.add( dirLight );

///////////////////////////////////////////////////////////////
var mech_border=[ new THREE.Mesh(border2, material22),new THREE.Mesh(border2, material22)];
var mech2 = new THREE.Mesh(border, material2);
var mech3 = new THREE.Mesh(border, material2);
scene.add(mech2);
scene.add(mech3);
scene.add(mech_border[0]);
scene.add(mech_border[1]);
mech2.position.set(3,0,0);
mech3.position.set(-3,0,0);
mech_border[0].position.set(3,0,0);
mech_border[1].position.set(-3,0,0);
var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0,0,10);
scene.add(camera);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);
renderer.render(scene, camera);


function animate() {
  requestAnimationFrame(animate);
  var Xdirection = -1;
  if (camera.rotation.z > 6.01) {
    Xdirection = 1;
  }
  if (camera.rotation.z  <- 6.01) {
    Xdirection = -1;
  }
  
  //mech.position.x += 0.01 * Xdirection;
    
     mech.rotation.x += 0.01;
     mech.position.z -= 0.05;
     mech2.rotation.x -= 0.01;
     //mech2.position.z += 1.09;
     if(mech2.position.z>8.1)
     mech2.position.z=-27.9;
     mech.rotation.y += 0.01;
     mech2.rotation.y -= 0.01;
     mech3.rotation.x -= 0.01;
     //mech3.position.z += 0.79;
     if(Xdirection===-1){
     //mesh3.material.color.set("blue");
     camera.rotation.z+=0.01;
     }else{
      camera.rotation.z-=0.01;
     }
     mech3.rotation.y -= 0.01;
     mech.rotation.z+=0.01;
     //camera.position.z+=0.01;
     camera.rotation.z+=0.01;
    // camera.rotation.y+=0.01;
  renderer.render(scene, camera);
}

animate();