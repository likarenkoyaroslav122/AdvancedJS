(function(){

debugger;
var ul = document.querySelector("ul[data-clear-items='true']");
var list = ul.getElementsByTagName('li');

function ran(){
ul.removeChild(list[list.length-1])

}

setInterval(ran,1000);

}());