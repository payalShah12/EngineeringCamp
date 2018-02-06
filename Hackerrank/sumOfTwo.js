function sum()
{
    var a=[6, 6, 3, 9, 3, 5, 1];
    var k=12,i,j,count=0,sum=0;
    var n=a.length;
    var set=[];
    for(i=0;i<n;i++)
    {
        for(j=i+1;j<n;j++)
        {
            sum=a[i]+a[j];
            if(sum==k && !set.includes(a[i]) && !set.includes(a[j]) && i!=j)
            {
                set.push(a[i]);
                set.push(a[j]);
                count++;
            }
            
        }
    }
    console.log(count);
}

sum();