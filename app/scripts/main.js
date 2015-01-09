
"use strict";
// clicking the 'new' button will display fields to create a new list item

var rotation = 0;

jQuery.fn.rotate = function(degrees) {
  $(this).css({
  	'-webkit-transform' : 'rotate('+ degrees +'deg)',
		'-moz-transform' : 'rotate('+ degrees +'deg)',
		'-ms-transform' : 'rotate('+ degrees +'deg)',
		'transform' : 'rotate('+ degrees +'deg)'
	});
  return $(this);
};

$('.new-item').click(function () {
	if ($('.create-item').hasClass('show-item-create')) {
		$('.new-item span').text('Create New')
		rotation += 135;
    $('.new-item img').rotate(rotation);
	} else {
		$('.new-item span').text('Close')
		$('#new-input').focus();
		rotation += 135;
    $('.new-item img').rotate(rotation);
	}
	$('.create-item').toggleClass('show-item-create');
	$('.create-item').animate({height: 'toggle'}, 400, function() {
  });
});





// store the checked checkbox in a variable
var checkedBox = $('input:checkbox:checked')

// hover on label changes label span css
$('.create-item-form').find('label').mouseenter( function(){
	$(this).children('span').css({
    'border' : '3px solid #362a34'
	});
})
// mouse leave changes label span back
$('.create-item-form').find('label').mouseleave( function(){
	var currentlyHovered = $(this)
	if (currentlyHovered !== checkedBox) {
		$(this).children('span').css({
	    'border' : '#e6e6e6'
		});
	} else {
		$(this).children('span').css({
	    'border' : '#red'
		});
	}
})





// focus in on new item input changes border color
$('.new-input').focusin( function(){
	$(this).css( "border-color", "#362a34" );
});
// focus out on new item input changes border color back
$('.new-input').focusout( function(){
	$(this).css( "border-color", "#e6e6e6" );
});

$('.save-item').click( function() {
	var val = [];
	// checks for a value in input field and makes sure a box is checked before saving
	// .length will search the dom for the number of classes that match the selector 
	if ($('.new-input').val() !== '' && $('input:checkbox:checked').length > 0 ){
		// the saved value will be equal to whatever is entered in the text box
		var text = $('.new-input').val();
		// for each checkbox that is checked, add it's value to an array named val
		$('input:checkbox:checked').each(function(i){
			return val[i] = $(this).val();
		});
		// for each item in the array check it's value against the following if/else statement to see which
		// collection should be added to
		_.each(val, function (x) {
			if (x === 'saveOne') {
				//Create a new model instance, passing in JSON object for item with input value as text
				var createItem = new Mover.Models.List({'item': text});
				// add the new model instance to collection 1
				Mover.collections.collectionOne.add(createItem);
			}

			else if (x === 'saveTwo') {
				//Create a new model instance
				var createItem = new Mover.Models.List({'item': text});
				// add the new model instance to collection 1
				Mover.collections.collectionTwo.add(createItem);
			}

			else if (x === 'saveThree') {
				//Create a new model instance
				var createItem = new Mover.Models.List({'item': text});
				// add the new model instance to collection 1
				Mover.collections.collectionThree.add(createItem);
			}
		});
		// uncheck all check boxes, reset the text field to blank and hide the editing elements	
		$('input:checkbox:checked').attr('checked', false)
		$('.new-input').val('');
		// // Close create item section and change create new button text back
		$('.new-item span').text('Create New')
		rotation += 135;
    $('.new-item img').rotate(rotation);
		$('.create-item').toggleClass('show-item-create');
		$('.create-item').animate({height: 'toggle'}, 400, function() {
	  });
	} else {
		alert("You must add a new list item and select a list to add the item to before saving");
	}
});



