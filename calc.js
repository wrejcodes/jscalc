// first we grab relevant elements for adding event listeners
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

// enum for operations
var operationEnum = {
	ADD : 0,
	SUBTRACT : 1,
	MULTIPLY : 2,
	DIVIDE : 3,
	MODULO : 4
};

// calculator object to hold
var calculator = {
	previousValue : 0,
	operation : null, 
	operationTouchedLast: false
};

// functions for handling button presses

// our operation functions.
var add = function(){
	calculate();
	calculator.operation = operationEnum.ADD;
};

var subtract = function(){
	calculate();
	calculator.operation = operationEnum.SUBTRACT;

};

var multiply = function(){
	calculate();
	calculator.operation = operationEnum.MULTIPLY;
	
};

var divide = function(){
	calculate();
	calculator.operation = operationEnum.DIVIDE;
};

var modulo = function(){
	calculate();
	calculator.operation = operationEnum.MODULO;
}

// handeling non operational button presses

var update = function(){
	if(calculator.operationTouchedLast === true){
		screenText.innerHTML = this.innerHTML;
		calculator.operationTouchedLast = false;
	} else if(this.innerHTML == '.'){
		if(isDecimal(screenText.innerHTML)){
			return;
		} else {
			screenText.innerHTML = this.innerHTML;
		}
	} else if(screenText.innerHTML != 0){
		screenText.innerHTML += this.innerHTML;
	} else {
		screenText.innerHTML = this.innerHTML;
	}

};

// this function resets the calculator object
var reset = function(){
	calculator.previousValue = 0;
	calculator.operation = null;
	calculator.operationTouchedLast = true;
};

// clearing the current number being typed
var clear = function(){
	screenText.innerHTML = 0;
};
// clear and reset
var clearAll = function(){
	reset();
	screenText.innerHTML = 0;		
};

// our actual calculator logic
var calculate = function(){
	var lastNumber = parseFloat(calculator.previousValue);
	var current = parseFloat(screenText.innerHTML);
	switch(calculator.operation){
		case 0: screenText.innerHTML = lastNumber + current;
				break;
		case 1: screenText.innerHTML = lastNumber - current;
				break;
		case 2: screenText.innerHTML = lastNumber * current;
				break;
		case 3: screenText.innerHTML = lastNumber / current;
				break;
		case 4: screenText.innerHTML = lastNumber % current;
				break;
		default:  
				break;
	}
	// sets previous value
	calculator.previousValue = screenText.innerHTML;
	calculator.operationTouchedLast = true;

}
// handles the equal button being touched
var equal = function(){
	if(screenText.innerHTML == "8008135"){
		window.open("https://www.charitynavigator.org/index.cfm?keyword_list=breast+cancer&Submit2=Search&bay=search.results");
	}
	calculate();
	reset();
};

// check to see if the current number is a decimal
var isDecimal = function(screenText){
	for(var i = 0; i < screenText.length; i++){
		if (screenText[i] == '.'){
			return true;
		}
	}
	return false;
};


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
