 import {emp} from './empTemplate.js';
 export var i=1;
 export function id()
    {
          //document.body.style.backgroundImage = "url('images.jpg')";
         // document.body.style.backgroundRepeat = "no-repeat";
        document.getElementById("uid").value=i;
        document.getElementById("name").value="";
        document.getElementById("dob").value="";
        document.getElementById("f").checked=false;
        document.getElementById("m").checked=false;
        i++;
    }
 