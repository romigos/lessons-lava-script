//js 12 площа і периметр трикутника
function perimetr() {
    var a = parseInt(document.f1.a.value);
    var b = parseInt(document.f1.b.value);
    var c = parseInt(document.f1.c.value);
    var per = a + b + c;
    alert(per);
}
function ploshcha() {
        var a = parseInt(document.f1.a.value);
        var b = parseInt(document.f1.b.value);
        var c = parseInt(document.f1.c.value);
        var d = a + b + c;
        var per = d/2;
        alert(per);
}