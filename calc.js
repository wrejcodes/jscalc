var screenText  = document.getElementById('screenText');
var calcButtons = document.getElementsByClassName('calc-btn');
var addButton = document.getElementById('add');
var subtractButton = document.getElementById('subtract');
var multiplyButton = document.getElementById('multiply');
var divideButton = document.getElementById('divide');

var operationEnum = {
	ADD : 0,
	SUBTRACT : 1,
	MULTIPLY : 2,
	DIVIDE : 3
};

var calculator = {
	previousValue : 0,
	operation : null,
	operationQueued: false, 
	operationTouchedLast: false
};

// functions for handling button presses

var add = function(){
	if(calculator.operationQueued == true){
		var lastNumber = parseFloat(calculator.previousValue);
		var current = parseFloat(screenText.innerHTML);
		screenText.innerHTML = current + lastNumber;
		calculator.previousValue = screenText.innerHTML;
	}
	if(calculator.operation == null){
		calculator.operation = operationEnum.ADD;
		calculator.previousValue = screenText.innerHTML;
		calculator.operationQueued = true;
		screenText.innerHTML = 0;
	}
	calculator.operationTouchedLast = true;
};

var update = function(){
	if(calculator.operationTouchedLast === true){
		screenText.innerHTML = this.innerHTML;
		calculator.operationTouchedLast = false;
	}
	else if(screenText.innerHTML != 0){
		screenText.innerHTML += this.innerHTML;
	} else {
		screenText.innerHTML = this.innerHTML;
	}

};


// add event listeners 

for(var i = 0; i < calcButtons.length; i++){
	calcButtons[i].addEventListener("click",update,false);
}

addButton.addEventListener("click",add,false);
subtractButton.addEventListener("click",subtract,false);
multiplyButton.addEventListener("click",multiply,false);
//divideButton.addEventListener("click",divide,false);

