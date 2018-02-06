import {goto} from './entry.js';
import {emp} from './empTemplate.js';
import {id} from './id.js';
    export function func(){ 
    var row = document.createElement("tr");
        
    var point = document.createElement("td");
    var pointer=document.createElement("img");
    pointer.src="giphy.gif";
    pointer.width="20";
    pointer.height="20";
    pointer.appendChild(point);
    row.appendChild(pointer);
    //fetching all the values
        var uid=document.getElementById("uid").value;
        var name=document.getElementById("name").value;
        var dob=document.getElementById("dob").value;
        var m=document.getElementById("m").checked;
        var f=document.getElementById("f").checked;

        //creating a node for id Column
        var col1 = document.createElement("td");
        var u_id = document.createTextNode(uid);
        col1.appendChild(u_id);
        row.appendChild(col1);

        //creating a node for Name Column
        var col2 = document.createElement("td");
        var n = document.createTextNode(name);
        col2.appendChild(n);
        row.appendChild(col2);

        //Creating a node for DOB Column
        var col3 = document.createElement("td");
        var birth = document.createTextNode(dob);
        col3.appendChild(birth);
        row.appendChild(col3);

        //Creating node for Gender
        var col4 = document.createElement("td");
        if(m==true)
        {
        var male= document.createTextNode("Male");
        col4.appendChild(male);
        row.appendChild(col4);
        }
    else if(f==true)
    {
         var female= document.createTextNode("Female");
        col4.appendChild(female);
        row.appendChild(col4);
    } 

    //Appending all the columns to the row
         document.getElementById("x").appendChild(row);
         //Calling id() for new id for the next entry
         id();
}
 