import {goto} from './entry.js';
import {item} from './itemTemplate.js';
import {item_id} from './item_id.js';
    export function item_func()
        {
        var sid=document.getElementById("sid").value;
        var name=document.getElementById("name").value;
        var price=document.getElementById("price").value;
        var qty=document.getElementById("qty").value;
       
        var row = document.createElement("tr");
            var point = document.createElement("td");
            var pointer=document.createElement("img");
            pointer.src="giphy.gif";
             pointer.width="20";
             pointer.height="20";
              pointer.appendChild(point);
              row.appendChild(pointer);
        var col1 = document.createElement("td");
        var s_id = document.createTextNode(sid);
        col1.appendChild(s_id);
        row.appendChild(col1);

          var col2 = document.createElement("td");
        var n = document.createTextNode(name);
        col2.appendChild(n);
        row.appendChild(col2);

          var col3 = document.createElement("td");
        var p = document.createTextNode(price);
        col3.appendChild(p);
        row.appendChild(col3);

          var col4 = document.createElement("td");
        var q = document.createTextNode(qty);
        col4.appendChild(q);
        row.appendChild(col4);
         document.getElementById("x").appendChild(row);
         item_id();
        }