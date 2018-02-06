function sumPrime()
{
  var a=[5,3,2,7,6];
  var sum=0,flag=true;
  for(var i=0;i<a.length;i++)
    sum+=a[i];
  console.log(" The sum of the elements in the array is : "+ sum);
  for(var i=2;i<a.length;i++)
    {
      if(sum%i==0)
        flag=false;
    }
  if(flag==true)
    console.log(sum+" is a Prime Number!");
  else
    console.log(sum+" is not a Prime Number!"); 
}

sumPrime();