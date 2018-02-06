function list(set)
{
    var arr=[0,0,0,0,0];
    var i,j;
    var m=set.length;
    console.log("The original Array : "+ arr);
    for(var j=0;j<m;j++)
    {
        var x=set[j];
        var values=set[j].split(" ");
        var a=parseInt(values[0]);
        var b=parseInt(values[1]);
        var k=parseInt(values[2]);
        console.log("\nAfter Adding "+a + " " + b + " " + k+" values in the Array : ")
    for(i=a-1;i<b;i++)
    {
        arr[i]+=k;
    }
    console.log(arr);
    var max=0;
    for(i=0;i<arr.length;i++)
    {
        if(max<arr[i])
        max=arr[i];
    }

    }
        console.log("\n\nMaximum in the Array after all the additions : "+max + "\n");

}

var a=["2 3 603","1 1 286","4 4 882"];
list(a);