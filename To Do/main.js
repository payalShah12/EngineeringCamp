var i = 1;

var todoList=()=> {
  
  var item = document.getElementById("todoInput").value;
  if (item == "") {
    alert("There is no task entered. Please Type something!");

  } else {
   // var x=document.getElementById("x");
    var row = document.createElement("tr");
    var col1 = document.createElement("td");
    var text = document.createTextNode(item);
   // var newItem = document.createElement("li");
   col1.appendChild(text);
   row.appendChild(col1);
    var str = "a" + i;
    row.id = str;
    //row.appendChild(text);
    //document.getElementById("todoList").appendChild(newItem);

    var col2 = document.createElement("td");
    //x.appendChild(col2);
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
    //x.appendChild(col4);
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
   // x.appendChild(col3);
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
    //x.appendChild(col5);
    var del = document.createElement('button');
    del.innerHTML = "Delete Task";
    del.name = "delete";
    col5.appendChild(del);
    row.appendChild(col5);
    alert("Task Added to the list!");
    document.getElementById("x").appendChild(row);
    del.addEventListener("click", function () {
      if (document.getElementById(str1).checked == false) {
        alert("The task is not done yet!");
      } else {
        element = document.getElementById(str);
        element.parentNode.removeChild(element);
        alert("Deleted the Task!");
      }
    });
    i++;
  }
}