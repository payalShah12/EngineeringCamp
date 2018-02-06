window.onload=()=>{
var host=document.getElementById('shadow');
console.log(host);
var shadowRoot = host.attachShadow({mode: 'open'});
var div= document.createElement('div');
div.textContent = "Can you See me Now";
shadowRoot.appendChild(div);
}