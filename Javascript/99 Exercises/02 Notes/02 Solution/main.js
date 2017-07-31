var onEdit = function(b){
	//alert(b.parentElement.children[0].innerText);
	var ans = prompt('Change', b.parentElement.children[0].textContent);
	//alert(ans);
	if (ans!=null && ans.trim() != ''){
		b.parentElement.children[0].textContent = ans;
	}
}

var onDelete = function(b){
	C('onDelete', arguments, this, b);
	var ans = confirm('Are you sure you want to delete "' + b.parentElement.children[0].textContent + '"?');

	if (ans){
		b.parentElement.remove();
	}
}

var onSave = function(){
	var notefld = document.getElementById('field')
		,note = notefld.value
		// ,notehtml = '<li>' + note + '</li>'
		,notehtml = '<li><span>' + note + '</span><button onclick="onEdit(this)">Edit</button><button onclick="onDelete(this)">Delete</button>' + '</li>'
		,allnotes = document.getElementById('allnotes')
	;

	allnotes.innerHTML = allnotes.innerHTML + notehtml;

	var all = [].slice.call(document.getElementById('allnotes').querySelectorAll('span')).map(function(el){
		return el.textContent;
	});
	localStorage.setItem('storednotes', JSON.stringify(all));

	notefld.value = '';
}

var onClear = function(){
	localStorage.removeItem('storednotes');
	allnotes.innerHTML = '';
}

window.onload = function(){
	C = console.info.bind(console);

	var allnotes = document.getElementById('allnotes')
		,all
		,allnoteshtml
		,notes = localStorage.getItem('storednotes')
	;
	if (notes){
		all = JSON.parse(notes);
		all.forEach(function(note){
			allnoteshtml += '<li><span>' + note + '</span><button onclick="onEdit(this)">Edit</button><button onclick="onDelete(this)">Delete</button>' + '</li>'
		})

		// allnotes.innerHTML = localStorage.getItem('storednotes');
		allnotes.innerHTML = allnoteshtml;
	}
}
