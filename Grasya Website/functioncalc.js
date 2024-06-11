function calc(p1, p2) {
    return Number(p1) + Number(p2);
}

function add1() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let result = calc(num1, num2);
    document.getElementById("sum").value = result;
}

function sub(p1, p2) {
    return Number(p1) - Number(p2);
}

function substraction() {
    let sub1 = document.getElementById('sub1').value;
    let sub2 = document.getElementById('sub2').value;
    let result = sub(sub1, sub2);
    document.getElementById("subs").value = result;
}

function mul(p1, p2) {
    return Number(p1) * Number(p2);
}

function multiplication() {
    let multiply1 = document.getElementById('multiply1').value;
    let multiply2 = document.getElementById('multiply2').value;
    let result = mul(multiply1, multiply2);
    document.getElementById("prod").value = result;
}

function div(p1, p2) {
    return Number(p1) / Number(p2);
}

function division() {
    let div1 = document.getElementById('div1').value;
    let div2 = document.getElementById('div2').value;
    let result = div(div1, div2);
    document.getElementById("quotient").value = result;
}