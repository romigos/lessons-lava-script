//js 12 площа і периметр трикутника
function perimeterTriangle() {
    var st1 = parseInt(document.forma1.t1.value);
    var st2 = parseInt(document.forma1.t2.value);
    var st3 = parseInt(document.forma1.t3.value);
    var perimetr = st1 + st2 + st3;
        //alert(perimetr);//
    document.getElementById('perimetr').value;
}
function areaTriangle() {
    var st1 = parseInt(document.forma1.t1.value);
    var st2 = parseInt(document.forma1.t2.value);
    var st3 = parseInt(document.forma1.t3.value);
    var d = a + b + c;
    var s = d / 2;
    alert(s);
    document.forma1.res.value = s;
}
