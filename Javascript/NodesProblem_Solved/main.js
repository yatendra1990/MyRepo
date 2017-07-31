

var onEdit = function(b){
	//alert(b.parentElement.children[0].innerText);
	var ans = prompt('Change', b.parentElement.children[0].textContent);
	//alert(ans);
	if (ans!=null && ans.trim() != ''){
		b.parentElement.children[0].textContent = ans;
	}
}

var onDelete = function(b){
	var ans = confirm('Are you sure you want to delete "' + b.parentElement.children[0].textContent + '"?');

	if (ans){
		b.parentElement.remove();
	}
}

var onSave= function(){
		notefield=document.getElementById('field'),
		newNote='<li><span>' + notefield.value + '</span><button onclick="onEdit(this)">Edit</button><button onclick="onDelete(this)">Delete</button>' + '</li>',
		allNote=document.getElementById('allnotes');
		//alert(allNote.innerHTML);
		allNote.innerHTML=allNote.innerHTML+newNote;
		notefield.value = '';
	}

	
var onClear=function() {
	allNote.innerHTML='';
}