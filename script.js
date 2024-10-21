let Equle1 = document.getElementById("Equle1");
let Clear = document.getElementById("Clear");
let eg = document.getElementById("eg");
let tar = document.getElementById("tar");
let dar = document.getElementById("dar");
let eqs = document.getElementById("eqs");
function zed() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    if ( num1 == "" || num2 == "" ) {
        alert("Enter Number == !!");
        return false;
        return true;
    }
}
eg.onclick = function () {
    if (zed());
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let smr2 = +num1 + +num2;
    document.getElementById("Equle1").innerHTML = "The Output is = " + smr2;

}
Clear.onclick = function () {
    let num1 = document.getElementById("num1").value = "";
    let num2 = document.getElementById("num2").value = "";
    document.getElementById("Equle1").innerHTML = "Operator";
}
tar.onclick = function () {
    if (zed());
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let smr2 = +num1 - +num2;
    document.getElementById("Equle1").innerHTML = "The Output is = " + smr2;
}
dar.onclick = function () {
    if (zed());
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let smr2 = +num1 * +num2;
    document.getElementById("Equle1").innerHTML = "The Output is = " + smr2;
}
eqs.onclick = function () {
    if (zed());
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let smr2 = +num1 / +num2;
    document.getElementById("Equle1").innerHTML = "The Output is = " + smr2;
}