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
/*
var x = prompt("Введите значение x ", "0");
var y = prompt("Введите значение y ", "0.0");
var integerX = parseInt("x");
var floatY = parseFloat("y");
var result = integerX + floatY;
alert (result);
document.write("result");
*/
var firstName = prompt("Введите имя", "сюда");
var lastName = prompt("Введите фамилию","сюда");
var age = prompt("Введите возраст","сюда");
document.write ("Привет, firstName");
function zapoln()
{
    x=prompt("Введите первое число");
    y=prompt("Введите второе число");
    var proiz=0;
    proiz=x*y;
    alert(proiz);
}