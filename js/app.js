
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

			/*use complete button to move completed items from "to-do" to "done" list*/
			todoItem.on('click', function() {
				var item = $(this).text()
				var reAdd = '<img class="re-add">'
				var removeItem = '<img class="delete">'
				var addedItem = $('<li class="done-items">' + reAdd + item + removeItem + '</li>')


				$('#bought').prepend(addedItem);
				$(todoItem).detach();

				/*re-add items from "done" back to "to-do"*/
				
				
				$(addedItem).on('click', function() {
					$('#groceries').append(todoItem);
					$(this).detach();
					
				})
				

				$('.delete').click(function() {
					$(this).parent().remove();
				})
			})
		}
	})
})


