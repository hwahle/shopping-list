
$(document).ready(function() {

	
	console.log('Hello');


	/*  submit button for the input field */
		$('#add-button').click(function() {
			if( $('input#add-items').val().trim().length == 0 ) {
				/*alert("add item here")*/
				$('#error').show();
				$('input#add-items').val("");
			} else {
				$('#groceries').prepend('<li class="items">' + '<img class="complete">' + $('input#add-items').val() + '</li>');
				$('input#add-items').val("");
				$('#error').hide();
			}
		})

	

		/*use complete button to move completed items to done list below*/
		$('.complete').on('click', function() {
			$('#bought').prepend('<li class="done-items":first-child>' + '<img class="re-add">' + $( "li.items" ).text() + '<img class="delete">' + '</li>');
			
		})
})
