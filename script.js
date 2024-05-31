function clearDisplay() {
  document.getElementById("display").value = "";
}
function appendChar(char) {
  document.getElementById("display").value += char;
}
function calculate(){
    var display = document.getElementById("display").value;
    var result = eval(display);
    document.getElementById("display").value = result;
}