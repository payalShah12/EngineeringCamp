window.onload=()=>{
var host=document.getElementById('shadowHost');
var shadowRoot = host.attachShadow({mode: 'open'});
shadowRoot.appendChild(document.getElementById('tmpl').content)
}