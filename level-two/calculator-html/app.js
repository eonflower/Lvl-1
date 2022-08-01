const addBtn = document.getElementById("addBtn")
const subBtn = document.getElementById("subBtn")
const multBtn = document.getElementById("multBtn")


addBtn.addEventListener("click", function() {
    add1 = parseInt(document.getElementById("add1").value)
    add2 = parseInt(document.getElementById("add2").value)
    document.getElementById('result').value = add1 + add2
});

subBtn.addEventListener("click", function() {
    sub1 = parseInt(document.getElementById("sub1").value)
    sub2 = parseInt(document.getElementById("sub2").value)
    document.getElementById('result').value = sub1 - sub2
});

multBtn.addEventListener("click", function() {
    mult1 = parseInt(document.getElementById("mult1").value)
    mult2 = parseInt(document.getElementById("mult2").value)
    document.getElementById('result').value = mult1 * mult2
});