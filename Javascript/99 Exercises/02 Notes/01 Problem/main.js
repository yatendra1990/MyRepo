app = {
	onSave: function(){
	},

	onClear: function(){
	},

	init: function(){
		if (console)C = console.info.bind(console);elseC = function(){};

		C('hello world!');

	}
}
app.init();

// window.onload = function(){
// 	if (console)C = console.info.bind(console);elseC = function(){};

// 	C('hello world!');
// }
