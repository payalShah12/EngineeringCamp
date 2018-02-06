function circle(n,d,r,c)
{
 
    var i,j;
    var len=r.length;
    var t=[],pos=[];
    for(i=0;i<len;i++)
    {
        //var rad=[];
        //var cost=[];
        var res=[];
        var x=0;
        for(j=i+1;j<len;j++)
        {
            var sum=r[i]+r[j];
            if(sum>=d)
            {
            //rad.push(r[j]);
            //cost.push(c[j]);
            res.push(c[j]);  
            //pos.push(j);
            }       
        }
        //console.log(res);
        if(res.length<1)
        {
            t[i]=0;
        }
        else
        {
        var cost=Math.min.apply(null, res);
       t[i]=c.findIndex(cost);
        }  
         
    }
    console.log("\n After the sum  : ");
    console.log(t);      
}

    var n=5;
    var d=8;
    var r=[1,3,6,2,5];
    var c=[5,6,8,3,4];  
circle(n,d,r,c);