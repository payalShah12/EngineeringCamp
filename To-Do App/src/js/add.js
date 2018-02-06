import {page} from './template.js';
//import {fetch} from './fetch.js';
import {AddTodo} from './AddTodo';
//document.getElementById("bdy").innerHTML=page;
let count=0;
window.todoList=()=>
{
    let task=document.getElementById("todoInput").value;
    let sub=new AddTodo(task,count);
    sub.addTask();
    count++;
    console.log(count);
}
window.go=function()
{
    let tasks=document.getElementById("search").value;
    for(var i=count;i>0;i--)
    document.getElementByID("searchList").innerHTML=tasks;
    console.log(i);
}
