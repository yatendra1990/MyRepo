C = console.info.bind(console);

// ========================================
// Callback
// ========================================
var something = 'a';
[1,2,3].forEach(function(){
    something = 'b';
});

C(something);


/* ============================================= */
/* A browser window has one thread that renders  */
/* the DOM, dispatches events and executes       */
/* Javascript.                                   */
/*                                               */
/* This thread executes one code unit at a time. */
/*                                               */
/* Other code units are queued until the current */
/* code unit is finished executing.              */
/* ============================================= */

// ========================================
// Synchronous Code
// ========================================

function loadPage(){
	// $('#spinner').show();
	C('spinner.show()');
	// setupPage();
	C('setupPage()');
	// $('#spinner').hide();
	C('spinner.hide()');
}

// The DOM manipulation tasks are not executed
// until this task's stack clears. The spinner
// isn't shown until setupPage is completed.

// ========================================
// Asynchronous Code
// ========================================

var dofunc = function(){
	C('one');
};
var one = setTimeout(dofunc, 5000);
clearTimout(one);

var two = setInterval(function(){
	C('hello');
}, 1000);

clearInterval(two);