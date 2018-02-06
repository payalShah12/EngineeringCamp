import Rx from 'rxjs/Rx';
var img=document.getElementById("move");
var posTop=parseInt(img.style.top);
var posLeft=parseInt(img.style.left);
Rx.Observable.fromEvent(document,'keydown')
.filter((e) => (e.keyCode === 38))
.subscribe(()=> { 
    posTop--;
    img.style.top = posTop + "px";
});
Rx.Observable.fromEvent(document,'keydown')
.filter((e) => (e.keyCode === 39))
.subscribe(()=> { 
    posLeft++;
    img.style.left = posLeft + "px";
    if(posLeft> 1000)
    {
       //var img1=new Image();
         alert("Thhhakkkkk!!!");
        var imgl = document.createElement('img');
       img1.src="bang.png";
       document.getElementById("put").innerHTML="img1";
       
  //img1l.innerHTML = message;
  document.appendChild(imgl);

    }
    
});
Rx.Observable.fromEvent(document,'keydown')
.filter((e) => (e.keyCode === 40))
.subscribe(()=> { 
    posTop++;
    img.style.top = posTop + "px";
});
Rx.Observable.fromEvent(document,'keydown')
.filter((e) => (e.keyCode === 37))
.subscribe(()=> { 
    posLeft--;
    img.style.left = posLeft + "px";
});