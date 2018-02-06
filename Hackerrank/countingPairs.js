function pairs()
{
    var a=[1, 1, 2, 2, 3, 3];
    var set1=[];
    var set2=[];
    var k=1;
    var i,j,count=0,diff,x=0;
    for(i=0;i<a.length;i++)
    {
        for(j=i+1;j<a.length;j++)
        {
            
            diff=Math.abs(a[i]-a[j]);
            if(diff==k && !set1.includes(a[i]) && !set2.includes(a[j]) && i!=j)
            {
                set1.push(a[i]);
                set2.push(a[j]);
                    count++;   
            }
            
        }
    }
    console.log(count);
}

pairs();