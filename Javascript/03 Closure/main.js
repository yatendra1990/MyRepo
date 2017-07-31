C = console.info.bind(console);


// ========================================
// local variables
// ========================================

function afunc() {
	var a = 4;
	return a * a;
}

var ans = afunc();

C(ans);




// ========================================
// Global variables
// ========================================

var b = 5;
function bfunc() {
	return b * b;
}

var ans = bfunc();

C(ans);



// ========================================
// Global Counter
// ========================================

var counter = 0;

function add() {
	counter += 1;
}

add();
add();
counter = 100;
add();

C(counter);


// ========================================
// Local Counter
// ========================================

function add() {
	var counter = 0;
	counter += 1;
}

add();
add();
add();

C(counter);



// ========================================
// Nested Function
// ========================================

C = console.info.bind(console);

var x = function add() {
	var counter = 0;

	return function plus() {
		counter += 1;
	}

}

add();




// ========================================
// Closure
// ========================================

var add = function() {
    var counter = 0;

	return function() {
		counter += 1;

		return counter;
	}
}();

C(add());
C(add());
C(add());

// the counter is now 3


/* -------------------------------------------- */
/* A closure is a function having access to the */
/* parent scope, even after the parent function */
/* has closed / has finished execution.         */
/* -------------------------------------------- */