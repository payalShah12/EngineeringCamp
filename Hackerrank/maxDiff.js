function diff()
{
  var a=[2, 3, 10, 2, 4, 8, 1];
  var n=a.length;
  var max=0, diff=0;
  for(var i=n-1;i>0;i--)
    {
   if(a[i]>max)
    max=a[i];
      diff=Math.max(diff,max-a[i]);
      }
  if(diff==0)
    console.log("-1");
  else 
    console.log("Maximum Difference in the array : "+diff);
  
}

diff();