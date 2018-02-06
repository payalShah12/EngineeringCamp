function robot(paths)
{
var N=0;
var E=1;
var S=2;
var W=3;
 var res=[];
  for(var j=0;j<paths.length;j++)
  {
    var path=paths[j].split("");
    var x = 0, y = 0;
    var dir = N;
   for (var i=0; path[i]; i++)
     {
      var move = path[i];
      if (move == 'R')
        dir = (dir + 1)%4;
      else if (move == 'L')
        dir = (4 + dir - 1)%4;
      else 
      {
         if (dir == N)
            y++;
         else if (dir == E)
            x++;
         else if (dir == S)
            y--;
         else 
            x--;
      }
    
  }
    if(x==0 && y==0)
      res[j]="Yes";
      else
      res[j]="No";
  console.log("Is the Robot in Circle? : " + res[j]);
  
  }
 
}


var paths=["GRGL","GLGLGLG"];
robot(paths);