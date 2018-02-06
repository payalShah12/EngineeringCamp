import {page} from './template.js';
import {emp} from './empTemplate.js';
import {item} from './itemTemplate.js';
import {id} from './id.js';
import {item_id} from './item_id.js';
import {func} from './func.js';
import {item_func} from './item.js';
document.getElementById("bdy").innerHTML = page;
window.goto=()=>
{
    console.log(document.getElementById("menu"));
    let men=document.getElementById("menu");
    var op=men[men.selectedIndex].value;
    if(op=="emp")
    {
    document.getElementById("bdy").innerHTML=emp;   
    id();
         
    }
    else
    {
     document.getElementById("bdy").innerHTML=item; 
     item_id();       
    }
}
window.efunc=()=>
{
    func();
}
window.ifunc=()=>
{
    item_func();
}