function view(num){
document.getElementById("result").value +=num;
}

function compute(){
let numberToEval = document.getElementById("result").value;
let evaled = eval(numberToEval);
document.getElementById("result").value = evaled;
}

function clr(){
document.getElementById("result").value = "";
}
