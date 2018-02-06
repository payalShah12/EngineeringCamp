var example=(function(){
    "use strict";
    var scene=new THREE.Scene(),
    renderer=new THREE.WebGLRenderer(),
    light= new THREE.AmbientLight(0xffffff),
    camera,
    sphere;
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
        camera.position.z=80;
         window.addEventListener('resize', function(){
            var width = window.innerWidth;
            var height = window.innerHeight;
            renderer.setSize(width,height);
            camera.aspect = width/height;
            camera.updateProjectionMatrix();
        });
        var controls = new THREE.OrbitControls(camera,render.domElement);
        scene.add(camera);
        var material  = new THREE.MeshBasicMaterial({

            color : 0xff0000,
            wireframe : true
        }
        );
        
        sphere =new THREE.Mesh(
            new THREE.SphereGeometry( 
            15,
            15,
            15),
            material);
        sphere.name="sphere";
        scene.add(sphere);
        render();
    }
    function render(){
        sphere.rotation.y +=0.01;
        renderer.render(scene,camera);
        requestAnimationFrame(render);
    };
    window.onload=initScene;

    return{
        scene : scene,
        sphere : sphere
    }
})();
