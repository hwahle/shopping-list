
$(document).ready(function() {

	
	console.log('Hello');
	


	/*  submit button for the input field */
	$('#add-button').click(function() {
		if( $('input#add-items').val().trim().length == 0 ) {
			/*alert("add item here")*/
			$('#error').show();
			$('input#add-items').val("");
		} else {
			var todoItem = $('<li class="items">' + '<img class="complete">' + $('input#add-items').val() + '</li>')
			$('#groceries').prepend(todoItem);
			$('input#add-items').val("");
			$('#error').hide();



	/*use complete button to move completed items to done list below*/
	todoItem.on('click', function() {
		var reAdd = '<img class="re-add">'
		var removeItem = '<img class="delete">'
		$('#bought').prepend('<li class="done-items">' + reAdd + $( "li.items:first-child" ).text() + removeItem + '</li>');
	})
		}
		})
})
