import {page} from './template.js';
import {Addtodo} from './AddTodo.js';
import {find} from './Search.js';
import {sortTable} from './sort.js';
document.getElementById("bdy").innerHTML = page;
export let array = new Map();
window.todoList=()=>
{
    let task=document.getElementById("todoInput").value;
    let due=document.getElementById("date").value;
    let sub=new Addtodo(task,due);
     if (task == "") {
        alert("There is no task entered. Please Type something!");
    } 
     else if(due == "") {
         alert("Please Enter a due Date!");
    }
     else { 
        //sort();
    sub.addTask();
    array.set(task,due);
    }
}
window.search=()=>
{
    let tasks=document.getElementById("s").value;  
    find(tasks,array);
}