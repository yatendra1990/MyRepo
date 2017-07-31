var onSave = function(){
	var enterdiv = document.getElementById('entername')
		,f = document.getElementById('field')
		,namediv = document.getElementById('showname')
		,n = document.getElementById('name')
	;

	localStorage.setItem('myname', f.value);

	enterdiv.className += 'hide';

	namediv.className = '';

	n.innerHTML = 'Welcome, ' + f.value;
}

var onClear = function(){
	localStorage.clear();

	var enterdiv = document.getElementById('entername')
		,namediv = document.getElementById('showname')
	;

	enterdiv.className = '';

	namediv.className += 'hide';
}

window.onload = function(){
	if (localStorage.myname){
		var enterdiv = document.getElementById('entername')
			,namediv = document.getElementById('showname')
			,n = document.getElementById('name')
		;

		enterdiv.className += 'hide';

		namediv.className = '';

		n.innerHTML = 'Welcome, ' + localStorage.myname;
	}
}
