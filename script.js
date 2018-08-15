//js 12 площа і периметр трикутника
function perimetr() {
    var a=document.forma1.a.value;
    var b=document.forma1.b.value;
    var c=document.forma1.c.value;
    var p=a*b*c;
   document.forma1.res.value=p;
}
function ploshcha() {
    var a=document.forma1.a.value;
    var b=document.forma1.b.value;
    var c=document.forma1.c.value;
    var d=a+b+c;
    var s=d/2;
    document.forma1.res.value=s;
}