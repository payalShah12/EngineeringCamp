import {page} from './template.js';
import {p} from './template.js';
import Rx from 'rxjs/Rx';
import {search} from './search.js';
import {view} from './view.js';
document.getElementById("bdy").innerHTML=page;
window.find=()=>
{
    var but=document.getElementById("ID").value;
    if(but=="")
    {
        alert("You have not Entered Any city. Please enter one...");
    }
    else{
     search(but);
    }
}
window.show=()=>
{
    view();
}
