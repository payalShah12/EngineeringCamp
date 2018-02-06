import {item} from './itemTemplate.js';
  export var j=1;
  export var  item_id=()=>
    {
        console.log("Item");
        document.getElementById("sid").value=j;
        document.getElementById("name").value="";
        document.getElementById("price").value="";
        document.getElementById("qty").value="";
        j++;
    }