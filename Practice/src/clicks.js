import Rx from 'rxjs/Rx';
function count()
{
var button=document.querySelector('button');
Rx.Observable.fromEvent(button,'click')
.throttleTime(1000)
.scan(count=>count+1,0)
.subscribe(count=>console.log(`clicked ${count} times`));
}

/*var arr=[2,4,5,2,7,9,8];
console.log(arr);
Rx.Observable.create(arr)
.scan(num=>(num%2))
.subscribe(num=>console.log(`${num}`));*/