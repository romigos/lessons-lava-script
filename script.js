//js 12 площа і периметр трикутника
function perimeterTriangle() {
    var st1,st2,st3,perimetr;
    st1 = parseInt(document.forma1.t1.value);
    st2 = parseInt(document.forma1.t2.value);
    st3 = parseInt(document.forma1.t3.value);
    perimetr = st1 + st2 + st3;
    document.getElementById('res1').innerHTML = perimetr;
}
function areaTriangle() {
    var st1,st2,st3,sguare;
    st1 = parseInt(document.forma1.t1.value);
    st2 = parseInt(document.forma1.t2.value);
    st3 = parseInt(document.forma1.t3.value);
    sguare = (st1 + st2 + st3)/2;
    document.getElementById('res2').innerHTML = sguare;
}
function terra() {
    alert('РОМА УЧИ JAVASCRIPT')
}
function plus() {
    var num1,num2,result;
    num1 = parseInt(document.getElementById('n1').value);
    num2 = parseInt(document.getElementById('n2').value);
    result = num1 + num2;
    document.getElementById('out').innerHTML = result;
}
function minus() {
    var num1,num2,result;
    num1 = parseInt(document.getElementById('n1').value);
    num2 = parseInt(document.getElementById('n2').value);
    result = num1 — num2;
    document.getElementById('out').innerHTML = result;
}