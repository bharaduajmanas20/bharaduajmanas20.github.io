function Add() {
	x=document.getElementById('num1').value;
	y=document.getElementById('num2').value;
    res = parseFloat(x)+parseFloat(y); 
    document.getElementById("result").innerHTML = res;	
	console.log(res);
}
function Subs() {
	x=document.getElementById('num1').value;
	y=document.getElementById('num2').value;
      res = x-y;
	  document.getElementById("result").innerHTML = res;
}
function Multiply() {
	x=document.getElementById('num1').value;
	y=document.getElementById('num2').value;
      res = x*y;
	  document.getElementById("result").innerHTML = res;
}
function Divide() {
	x=document.getElementById('num1').value;
	y=document.getElementById('num2').value;
      res = x/y;
	  document.getElementById("result").innerHTML = res;
}