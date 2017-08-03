$(document).ready(function() {


	$('#fetch').click(function(){
		$.ajax({
			url: 'http://10.91.25.4:9292/fetch'
			,type: 'GET'
			,dataType: 'json'
			,success: function(response) {
				console.info('success', response)
				$('#response').text(response.message);
			}
		});
	});

	$('#send').click(function(){
		$.ajax({
			url: 'http://10.91.25.4:9292/send'
			,type: 'POST'
			,dataType: 'json'
			,success: function(response) {
				console.info('success', response)
				$('#postresponse').text(response.message);
			}
		});
	});

});