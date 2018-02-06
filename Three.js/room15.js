var example=(function(){
    "use strict";
    var scene=new THREE.Scene(),
    renderer=new THREE.WebGLRenderer(),
    light= new THREE.AmbientLight(0xffffff),
    camera,
    box;
  
 var room=[
       new THREE.MeshPhongMaterial({ map : new THREE.TextureLoader().load('images/wall6.jpg'), side : THREE.BackSide }),
        new THREE.MeshPhongMaterial({ map : new THREE.TextureLoader().load('images/floor4-win.jpg'), side : THREE.BackSide}),
        new THREE.MeshPhongMaterial({ map : new THREE.TextureLoader().load('images/top2.jpg'), side : THREE.BackSide }),
        new THREE.MeshPhongMaterial({ map : new THREE.TextureLoader().load('images/rug3.jpg'), side : THREE.DoubleSide }),
        new THREE.MeshPhongMaterial({ map : new THREE.TextureLoader().load('images/floor4.jpg'), side : THREE.BackSide}),
        new THREE.MeshPhongMaterial({ map : new THREE.TextureLoader().load('images/floor4.jpg'), side : THREE.BackSide })        
    ];

    function initScene(){
        scene.background = new THREE.Color( 0xf0f0f0 );
        renderer.setSize(window.innerWidth,window.innerHeight);
        document.getElementById("webgl-container").appendChild(renderer.domElement);
        scene.add(light);
        camera=new THREE.PerspectiveCamera(
            35,
            window.innerWidth / window.innerHeight,
            1,
            1000
        );
        camera.position.z=300;
        window.addEventListener('resize', function(){
            var width = window.innerWidth;
            var height = window.innerHeight;
            renderer.setSize(width,height);
            camera.aspect = width/height;
            camera.updateProjectionMatrix();
        });
        
        var controls = new THREE.OrbitControls(camera,render.domElement);
        scene.add(camera);
        box = new THREE.Mesh(
            new THREE.BoxGeometry(250,100,160),
            new THREE.MeshFaceMaterial(room)
        );

        box.name="box";
        scene.add(box);
        render();
    }
    function render(){
        renderer.render(scene,camera);
        requestAnimationFrame(render);
    }
    window.onload=initScene;

    return{
        scene : scene
    }
})();









