app = {

	overlay: function(message) {
		var  el = document.getElementById('overlay')
			,m = document.getElementById('message')
		;
		el.style.visibility = (el.style.visibility == 'visible') ? 'hidden' : 'visible';

		if (!message || message.trim() == '')
			message = '';

		m.innerHTML = message;
	}
};

