$(document).ready(function(){


		$('#registration-form').validate({
	    rules: {
	       username: {
	        required: true,
	       required: true
	       },
		  
		 school: {
	        minlength: 6,
		maxlength:40,
	        required: true
	      },
	      
	      zipcode: {
	        minlength: 5,
		maxlength:10,
	        required: true
	      },
	      	  
	     
		   bio: {
	      	maxlength: 600,
	        required: false
	      },
		  
		  
	    },
			highlight: function(element) {
				$(element).closest('.control-group').removeClass('success').addClass('error');
			},
			success: function(element) {
				element
				.text('OK!').addClass('valid')
				.closest('.control-group').removeClass('error').addClass('success');
			}
	  });

}); // end document.ready
