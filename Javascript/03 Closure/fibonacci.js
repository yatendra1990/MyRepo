C = console.info.bind(console);
var fib= function(){
	var start0=0;
	var start1=1;
	return function(){
		var next = start0 + start1;
		start0 = start1;
		start1 = next;
		return next;
	}
}();

C(fib());
C(fib());
C(fib());
C(fib());