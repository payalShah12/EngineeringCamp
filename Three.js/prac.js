
    var scene=new THREE.Scene(),
    renderer=new THREE.WebGLRenderer(),
    light= new THREE.AmbientLight(0xffffff),
    camera,
    box1;
    var room=[
       new THREE.MeshBasicMaterial({ map : new THREE.TextureLoader().load('images/wall2.jpeg'), side : THREE.BackSide }),
        new THREE.MeshBasicMaterial({ map : new THREE.TextureLoader().load('images/wall2.jpeg'), side : THREE.BackSide}),
        new THREE.MeshBasicMaterial({ map : new THREE.TextureLoader().load('images/wall1.jpg'), side : THREE.DoubleSide }),
        new THREE.MeshBasicMaterial({ map : new THREE.TextureLoader().load('images/floor.jpg'), side : THREE.DoubleSide }),
        new THREE.MeshBasicMaterial({ map : new THREE.TextureLoader().load('images/wall2.jpeg'), side : THREE.BackSide}),
        new THREE.MeshBasicMaterial({ map : new THREE.TextureLoader().load('images/wall1.jpg'), side : THREE.DoubleSide })        
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
  var extrudeSettings = {
	steps: 2,
	amount: 16,
	bevelEnabled: true,
	bevelThickness: 1,
	bevelSize: 1,
	bevelSegments: 1
};

// var geometry = new THREE.ExtrudeGeometry( room, extrudeSettings );
        var controls = new THREE.OrbitControls(camera,render.domElement);
        scene.add(camera);
        box1 = new THREE.Mesh(
            new THREE.BoxGeometry(150,40,60),            
            new THREE.MeshFaceMaterial(room)
        );

        box1.name="box";
        scene.add(box1);
        render();
    }
    function render(){
        renderer.render(scene,camera);
        requestAnimationFrame(render);
    }
    window.onload=initScene;

function add(){
    var box;
    var room=[
        new THREE.MeshBasicMaterial({ map : new THREE.TextureLoader().load('images/wall5.jpg'), side : THREE.BackSide }),
        new THREE.MeshBasicMaterial({ map : new THREE.TextureLoader().load('images/wall3.jpg'), side : THREE.BackSide}),
        new THREE.MeshBasicMaterial({ map : new THREE.TextureLoader().load('images/wall5.jpg'), side : THREE.DoubleSide }),
        new THREE.MeshBasicMaterial({ map : new THREE.TextureLoader().load('images/floor2.jpg'), side : THREE.DoubleSide }),
        new THREE.MeshBasicMaterial({ map : new THREE.TextureLoader().load('images/wall3.jpg'), side : THREE.BackSide}),
        new THREE.MeshBasicMaterial({ map : new THREE.TextureLoader().load('images/wall3-win.jpg'), side : THREE.BackSide })        
    ];
        box = new THREE.Mesh(new THREE.BoxGeometry(200,60,100),new THREE.MeshFaceMaterial(room));
        box.name="box";
        scene.remove(box1);
        scene.add(box);
}

