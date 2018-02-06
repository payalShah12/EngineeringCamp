var avg=()=> 
{
var a="Hello World! Welcome to Possible...";
var words=a.split(" ");
var spaces=a.match(new RegExp(" ", "g")).length;
  var n=(a.length-spaces)/words.length;
  console.log("\n\n The Average of \"" + a +"\" : " + n +"\n\n");
}
  
avg();

