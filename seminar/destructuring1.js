function pass(x,y,z)
{
    console.log(x,y,z);
}
var greet={
    x: "Hello",
    y: "Bye",
    z:"Hello Again"
}
var x=greet.x;
var y=greet.y;
var z=greet.z;
//var {x,y,z}=greet;
pass(x,y,z);