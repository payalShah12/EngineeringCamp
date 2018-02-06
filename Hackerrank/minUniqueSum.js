function uniquesum()
{
  var a=[3,2,1,2,7];
  a.sort();
  var len=a.length;
  for (var i = 0; i < len; i++)
	{
  for (var j = i+1; j < len; j++) 
  {
  if (a[i] == a[j])
  {    
    a[j]=a[j]+1;
}
}
}
  console.log("The Unique Values are : ");
  var sum=0;
  for(var i=0;i<len;i++)
    {
      console.log(a[i]);
      sum+=a[i];
    }
    console.log("The Minimum unique Array Sum is : "+sum);
}

uniquesum();