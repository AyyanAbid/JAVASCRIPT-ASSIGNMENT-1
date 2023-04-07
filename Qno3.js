let a=prompt("Enter your 1st number");
let b=prompt("Enter your 2nd number");
let c=prompt("Enter your 3rd number");
let d=prompt("Enter your 4th number");
let e=prompt("Enter your 5th number");
if (a>b && a>c && a>d && a>e)
{
    console.log(a);
}
else if (b>a && b>c && b>d && b>e)
{
    console.log(b);
}
else if (c>a && c>b && c>d && c>e)
{
    console.log(c);
}
else if (d>a && d>c && d>b && d>e)
{
    console.log(d);
}
else
{
    console.log(e);
}