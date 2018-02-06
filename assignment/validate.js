export var isnum=function()
{
     
      var numbers = /^[0-9]+$/;  
      if(document.getElementById("price").value.match(numbers))  
      {   
      document.qty.focus();  
      return true;  
      }  
      else  
      {  
      alert('Please input numeric characters only');  
      return false;  
      } 

}
/*function num()
{
      var numbers = /^[0-9]+$/;
      if(document.getElementById("qty").value.match(numbers))  
      {  
      document.submit.focus();  
      return true;  
      }  
      else  
      {  
      alert('Please input numeric characters only');  
      document.qty.focus();  
      return false;  
      } 
} */