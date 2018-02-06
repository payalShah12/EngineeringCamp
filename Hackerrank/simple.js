function simple()
{
  var a=[2,5,8,7,1,6];
  var maxes=[5,2,3];
  var res=[];
  for(var i=0;i<maxes.length;i++)
    {
      var count=0;
      for(var j=0;j<a.length;j++)
        {
          if(a[j]<=maxes[i])
            res[i]=++count;
        }
    }
  for(i=0;i<res.length;i++)
    console.log("There are "+res[i]+" less elements than "+ maxes[i]+" in the Array");
}

simple();