function fetch(){
	var ajax=new XMLHttpRequest();

	ajax.onreadystatechange = function() {
		if (ajax.readyState == 4 && ajax.status == 200) {
			console.info('success', ajax.responseText);
			alert('Success! Response was ' + ajax.responseText);
			document.getElementById('getresponse').innerHTML = ajax.responseText;
		}
	}

	ajax.open("GET", "http://localhost:4567/fetch", true);
	ajax.send();
}


function send(){
	var ajax=new XMLHttpRequest();

	ajax.onreadystatechange = function() {
		if (ajax.readyState == 4 && ajax.status == 200) {
			console.info('success', ajax.responseText);
			alert('Success! Response was ' + ajax.responseText);
			document.getElementById('postresponse').innerHTML = ajax.responseText;
		}
	}

	ajax.open("POST", "http://localhost:4567/send", true);
	ajax.send();
}
