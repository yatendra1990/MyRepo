if(console) C = console.info.bind(console); else C = function(){};

// ========================================
// Overriding
// ========================================

var firstName = 'Charles';
function hello(){
	var firstName = 'Bob';
	C('Hello, ' + firstName);
}

hello();


// ========================================
// Hoisting
// ========================================

var firstName = 'Charles';
function hello(){
	C('Hello, ' + firstName);
	var firstName = 'Bob';
}

hello();


