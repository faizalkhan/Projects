//$('.confirmation').on('click', 'button', function(){
//$(this).closest('.confirmation').find('.ticket').slideToggle();
//});
//$('.confirmation .view-boarding-pass').on('click', function() {
//$(this).closest('.ticket').find('img').show();
//});

$(document).ready(function() {
confirmation.init();
});
var confirmation = {
	init: function()
	 { 
	 $('.confirmation').on('click', 'button', this.loadConfirmation);
	 $('.confirmation').on('click','.view-boarding-pass', this.showBoardingPass)	 
	 },
		
		
loadConfirmation: function(){
	
$.ajax('add-templates.html', {
	 success:function(response)	{ $('.ticket').html(response).slideToggle();},
	 error: function(request, errorType, errorMessage) {alert('Error: ' + errorType + ' with message: ' + errorMessage);},
     timeout:3000,
	 beforeSend: function() { $('.confirmation').addClass('is-loading'); },
     complete: function() { $('.confirmation').removeClass('is-loading'); },
	 });
},
showBoardingPass:function(event) {
event.preventDefault;
$(this).closest('.ticket').find('img').show();
},
};