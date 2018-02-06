import {array} from './entry.js';
   export function find(tasks,array)
    {
        var flag=false;    
       if(array.has(tasks)==true)
        {
            alert("Element Found!");
            for(const [key,value] of array){
                
            document.getElementById("result").innerHTML=`
            <b>TASK :</b> ${key}     |    <b> DUE DATE : </b>${value}`;          
            }
        }
        else
        {
            alert("Sorry! This task does not exist. You may Enter though...");
        }   
    }
