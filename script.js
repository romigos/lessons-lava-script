//js 12 площа і периметр трикутника
function perimeterTriangle(){
    var a = parseInt(document.forma1.t1.value);
    var b = parseInt(document.forma1.t2.value);
    var c = parseInt(document.forma1.t3.value);
    var p = a+b+c;
    alert(p);
    document.forma1.res.value=p;
}
function areaTriangle(){
    var a = parseInt(document.forma1.t1.value);
    var b = parseInt(document.forma1.t2.value);
    var c = parseInt(document.forma1.t3.value);
    var d=a+b+c;
    var s=d/2;
    alert(s);
    document.forma1.res.value=s;
}