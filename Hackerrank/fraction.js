function fraction(list)
{
    console.log("\n\n");
    for(var j=0;j<list.length;j++)
    {
        var a=list[j];
    var num=a.split("\+");
    var n=num[0].split("\/");
    var num1=n[0];
    var den1=n[1];
    var m=num[1].split("\/");
    var num2=m[0];
    var den2=m[1];
    var rnum=(num1*den2)+(num2*den1);
    var rden=(den1*den2);

    for(var i = 1; i <= rnum && i <= rden; ++i)
        {
            if(rnum % i == 0 && rden % i == 0)
                gcd = i;
        }
rnum=rnum/gcd;
rden=rden/gcd;
    console.log("\t\t"+rnum + "/" + rden);

    }
    
       console.log("\n\n");
}

list=["722/148+360/176","978/1212+183/183","358/472+301/417","780/309+684/988","258/840+854/686"];
fraction(list);