var screenText  = document.getElementById('screenText');
var calcButtons = document.getElementsByClassName('calc-btn');
var operationButtons = document.getElementsByClassName('oper-btn');

var calculator = {
	previousValue : 0,
	operation : null,
	operationQueued: false
};

var update = function(){
	if(screenText.innerHTML != 0){
		screenText.innerHTML += this.innerHTML;
	} else {
		screenText.innerHTML = this.innerHTML;
	}
};

for(var i = 0; i < calcButtons.length; i++){
	calcButtons[i].addEventListener("click",update,false);
}


