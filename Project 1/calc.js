function calculator(){
  var one= parseInt(document.getElementById("number1").value);
  var two= parseInt(document.getElementById("number2").value);
  var op = document.getElementById("operator").value;
  var result;

  if (op == "+"){
      result = one + two;
      document.getElementById("result-p").innerHTML = " Result: "+ result;
  } else if(op== "-") {
      result = one-two;
      document.getElementById("result-p").innerHTML = " Result: "+ result;
  } else if (op == "*") {
      result = one * two;
      document.getElementById("result-p").innerHTML = " Result: "+ result;
  } else {
      result = one / two;
      document.getElementById("result-p").innerHTML = " Result: "+ result;
  }

  

}