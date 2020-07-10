
/*========================================
Project Name: PureCalc
Version: 1.0
Author: Kalpesh Singh
Inspired From: dribbble.com/oneMoreArray =======================================*/
function blinker() {
    $('.blink-me').fadeOut(200);
    $('.blink-me').fadeIn(200);
}
setInterval(blinker, 500);

function getnumber(num){
   
    var  result = document.getElementById("result")
    result.value += num; //poriani value bhi raha takay
}
function clearesult(){
    var  result = document.getElementById("result")
    result.value = "" //poriani value bhi raha takay
    
    
}
function getresult(){
    var  result = document.getElementById("result")
    result.value = eval (result.value)
}
