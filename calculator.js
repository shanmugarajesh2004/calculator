function displayvalue(val) {
  document.getElementById("display").value =
    document.getElementById("display").value + val;
}

function cleard() {
  document.getElementById("display").value = "";
}

function calculator() {
  let answer = document.getElementById("display").value;
  let result = eval(answer);
  document.getElementById("display").value = result;
}
