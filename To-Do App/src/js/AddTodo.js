import {array} from './entry.js';
var i = 1; var count=1;
export class Addtodo{
    constructor(item,due){
        this.item=item;
        this.due=due;
    }
    addTask(){ 
    var row = document.createElement("tr");
    var point = document.createElement("td");
    var pointer=document.createElement("img");
    pointer.src="src/images/giphy.gif";
    pointer.width="20";
    pointer.height="20";
    pointer.appendChild(point);
    row.appendChild(pointer);
    var col1 = document.createElement("td");
    var text = document.createTextNode(this.item);  
    col1.appendChild(text);
    row.appendChild(col1);
    var col = document.createElement("td");
    var due = document.createTextNode(this.due);  
    col.appendChild(due);
    row.appendChild(col);

    var str = "a" + i;
    row.id = str;
    var col2 = document.createElement("td");
    var checkbox1 = document.createElement('input');
    checkbox1.type = "radio";
    var status="task"+i;
    checkbox1.name = status;
    checkbox1.value = "todo";
    checkbox1.id = "todo";
    checkbox1.checked = "true";
    var label1 = document.createElement('label');
    label1.htmlFor = "todo";
    label1.appendChild(document.createTextNode('To Do'));
    col2.appendChild(checkbox1);
    col2.appendChild(label1);
    row.appendChild(col2);
    var col4 = document.createElement("td");
    var checkbox3 = document.createElement('input');
    checkbox3.type = "radio";
    checkbox3.name = status;
    checkbox3.value = "prog";
    checkbox3.id = "prog";
    var label3 = document.createElement('label');
    label3.htmlFor = "prog";
    label3.appendChild(document.createTextNode('In Progress'));
    col4.appendChild(checkbox3);
    col4.appendChild(label3);
    row.appendChild(col4);

    var col3 = document.createElement("td");
    var checkbox2 = document.createElement('input');
    checkbox2.type = "radio";
    checkbox2.name = status;
    checkbox2.value = "done";
    var str1 = "done" + i;
    checkbox2.id = str1;
    var label2 = document.createElement('label');
    label2.htmlFor = str1;
    label2.appendChild(document.createTextNode('Done'));
    col3.appendChild(checkbox2);
    col3.appendChild(label2);
    row.appendChild(col3);

    var col5 = document.createElement("td");
    var del = document.createElement('img');
    del.src = "src/images/d.png";
    del.height="20";
    del.width="20";
    //del.style.hover="height : 25%; width : 25%;"
    del.name = "delete";
    col5.appendChild(del);
    row.appendChild(col5);
    alert("Task Added to the list!");
      // sort();
    document.getElementById("x").appendChild(row);
    del.addEventListener("click", function () {
      if (document.getElementById(str1).checked == false) {
        alert("The task is not done yet!");
      } else {
        let element = document.getElementById(str);
        element.parentNode.removeChild(element);
        console.log(array);
         for(const [key,value] of array)
         array.delete(`${key}`);
        alert("Deleted the Task!");
      }
    });
    i++;
    count++;
}
}