$(document).ready(function() {

	
	console.log('Hello');


	/*  submit button for the input field */
		$('#add-button').click(function() {
			if( $('input#add-items').val().trim().length == 0 ) {
				//alert("add item here");
				$('#error').show();
				$('input#add-items').val("");
			} else {
				$('#groceries').append('<li class="items">' + '<img id="complete">' + $('input#add-items').val() + '</li>');
				$('input#add-items').val("");
				$('#error').hide();
			}
		})
			});
		

	

	
