
C = console.info.bind(
// ========================================
// Variables
// ========================================
function hello(){
	C('Hello World!');
}

hello();

function hello(){
	// Local variable
	var firstName = 'Charles';
	C('Hello, ' + firstName);
}

hello();

var firstName = 'Charles';
// Global variable
function hello(){
	C('Hello, ' + firstName);
}

hello();
