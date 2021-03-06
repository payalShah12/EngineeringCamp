// var THREE = require("three");
var example=(function(){
    "use strict";
    var scene=new THREE.Scene(),
    renderer=new THREE.WebGLRenderer(),
    light= new THREE.AmbientLight(0xffffff),
    camera,
    box;
    var room=[
        new THREE.MeshBasicMaterial({ map : new THREE.TextureLoader().load('images/win10.jpg'), side : THREE.BackSide }),
        new THREE.MeshBasicMaterial({ map : new THREE.TextureLoader().load('images/door8w.jpg'), side : THREE.BackSide}),
        new THREE.MeshBasicMaterial({ map : new THREE.TextureLoader().load('images/wall11.jpg'), side : THREE.DoubleSide }),
        new THREE.MeshBasicMaterial({ map : new THREE.TextureLoader().load('images/floor7.jpg'), side : THREE.DoubleSide }),
        new THREE.MeshBasicMaterial({ map : new THREE.TextureLoader().load('images/wall11.jpg'), side : THREE.BackSide }),       
        new THREE.MeshBasicMaterial({ map : new THREE.TextureLoader().load('images/wall11.jpg'), side : THREE.BackSide})
    ];
    function initScene(){
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
        var extrusionsSettings = {
            steps : 1,
            amount : 1,
            bevelEnabled : false 
        };
        var controls = new THREE.OrbitControls(camera,render.domElement);
        scene.add(camera);
        box = new THREE.Mesh(
            new THREE.BoxGeometry(200,100,160),
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
