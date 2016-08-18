var screenText  = document.getElementById('screenText');
var calcButtons = document.getElementsByClassName('calc-btn');
var addButton = document.getElementById('add');
var subtractButton = document.getElementById('subtract');
var multiplyButton = document.getElementById('multiply');
var divideButton = document.getElementById('divide');
var equalButton = document.getElementById('equal');
var clearAllButton = document.getElementById('clearAll');
var clearButton = document.getElementById('clear');
var moduloButton = document.getElementById('modulo');

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
	}
	calculator.previousValue = screenText.innerHTML;
	calculator.operation = operationEnum.ADD;
	calculator.operationQueued = true;
	calculator.operationTouchedLast = true;
};

var subtract = function(){
	if(calculator.operationQueued == true){
		var lastNumber = parseFloat(calculator.previousValue);
		var current = parseFloat(screenText.innerHTML);
		screenText.innerHTML = lastNumber - current;
	}
	calculator.operation = operationEnum.SUBTRACT;
	calculator.previousValue = screenText.innerHTML;
	calculator.operationQueued = true;
	calculator.operationTouchedLast = true;

};

var multiply = function(){
	if(calculator.operationQueued == true){
		var lastNumber = parseFloat(calculator.previousValue);
		var current = parseFloat(screenText.innerHTML);
		screenText.innerHTML = lastNumber * current;
	}
	calculator.operation = operationEnum.MULTIPLY;
	calculator.previousValue = screenText.innerHTML;
	calculator.operationQueued = true;
	calculator.operationTouchedLast = true;
};

var divide = function(){
	if(calculator.operationQueued == true){
		var lastNumber = parseFloat(calculator.previousValue);
		var current = parseFloat(screenText.innerHTML);
		screenText.innerHTML = lastNumber / current;
	}
	calculator.operation = operationEnum.DIVIDE;
	calculator.previousValue = screenText.innerHTML;
	calculator.operationQueued = true;
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

var reset = function(){
	calculator.previousValue = 0;
	calculator.operation = null;
	calculator.operationQueued = false;
	calculator.operationTouchedLast = true;
};

var clear = function(){
	screenText.innerHTML = 0;
};
var clearAll = function(){
	reset();
	screenText.innerHTML = 0;		
};
var equal = function(){
	switch(calculator.operation){
		case 0: add();
				break;
		case 1: subtract();
				break;
		case 2: multiply();
				break;
		case 3: divide();
				break;
		default: screenText.innerHTML = 0; 
				break;
	}
	reset();
}


// add event listeners 

for(var i = 0; i < calcButtons.length; i++){
	calcButtons[i].addEventListener("click",update,false);
}

addButton.addEventListener("click",add,false);
subtractButton.addEventListener("click",subtract,false);
multiplyButton.addEventListener("click",multiply,false);
divideButton.addEventListener("click",divide,false);
equalButton.addEventListener("click",equal,false);
clearAllButton.addEventListener("click",clearAll,false);
clearButton.addEventListener("click",clear,false);
moduloButton.addEventListener("click",modulo,false);
