var col1 = document.getElementById("color1");
var col2 = document.getElementById("color2");
var bgcolor = document.getElementById("gradient");
var css = document.querySelector("h3");

col1.addEventListener("input", function () {
    bgcolor.style.background = "linear-gradient(to right, " 
    + col1.value 
    + "," 
    + col2.value 
    + ")";
})

col2.addEventListener("input", function () {
    bgcolor.style.background = "linear-gradient(to right, " 
    + col1.value 
    + "," 
    + col2.value 
    + ")";
})