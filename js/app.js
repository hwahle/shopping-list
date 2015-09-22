
$(document).ready(function() {

	
	console.log('Hello');
	


	/*  submit button for the input field */
	$('#add-button').click(function() {
		if( $('input#add-items').val().trim().length == 0 ) {
			/*alert("add item here")*/
			$('#error').show();
			$('input#add-items').val("");
		} else {
			var todoItem = $('<li class="items">' + '<img class="complete">' + $('input#add-items').val() + '<img class="delete">' + '</li>')
			$('#groceries').prepend(todoItem);
			$('input#add-items').val("");
			$('#error').hide();

			$('.delete').click(function() {
		$(this).parent().remove();
	})




	/*use complete button to move completed items to done list below*/
	todoItem.on('click', function() {
		var item = $(this).text()
		var reAdd = '<img class="re-add">'
		var removeItem = '<img class="delete">'
		

		$('#bought').prepend('<li class="done-items">' + reAdd + item + removeItem + '</li>');
		$(todoItem).detach();

		$('.re-add').click(function() {
			$(this).parent().append('<li class="items>' + '<img class="complete"' + this + '</li>');
			
			

		})

	$('.delete').click(function() {
		$(this).parent().remove();
	})
	})
		}
		})
		})

