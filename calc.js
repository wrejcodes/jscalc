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
	operationTouchedLast: false
};

// functions for handling button presses

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

var update = function(){
	if(this.innerHTML == '.'){
		if(isDecimal(screenText.innerHTML)){
			return;
		}
	}
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
	calculator.operationTouchedLast = true;
};

var clear = function(){
	screenText.innerHTML = 0;
};
var clearAll = function(){
	reset();
	screenText.innerHTML = 0;		
};
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
		default:  
				break;
	}
	calculator.previousValue = screenText.innerHTML;
	calculator.operationTouchedLast = true;

}

var equal = function(){
	if(screenText.innerHTML == "8008135"){
		window.open("https://www.charitynavigator.org/index.cfm?keyword_list=breast+cancer&Submit2=Search&bay=search.results");
	}
	calculate();
	reset();
};

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
