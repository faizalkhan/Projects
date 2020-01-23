$(function(){
    
    $(".input-group-btn .dropdown-menu li a").click(function(){

        var selText = $(this).html();
    
        //working version - for single button //
       //$('.btn:first-child').html(selText+'<span class="caret"></span>');  
       
       //working version - for multiple buttons //
       $(this).parents('.input-group-btn').find('.btn-search').html(selText);

   });
	
	$('.datetimepicker').datetimepicker({
//format: 'DD/MMM/YYYY'
		  // format: 'DD/MM/YYYY HH:MM'
});


});
function popup (obj){
	console.log(obj);
	$(obj).modal({
		
                backdrop: 'static',
                keyboard: false,
                show: true
            });
} 
$(function () {
    $('input').iCheck({
      checkboxClass: 'icheckbox_square-blue',
      radioClass: 'iradio_square-blue',
      increaseArea: '20%' // optional
    });
  });

function toggleIcon(e) { 

    $(e.target).prev(this).find(".more-less").toggleClass('glyphicon-plus glyphicon-minus');
	
	if($(e.target).parent().prev().find('.more-less').length > 0)
	{
		$(e.target).parent().prev().find('.more-less').toggleClass('glyphicon-plus glyphicon-minus');
	}
	
}
$('.panel-group').on('hidden.bs.collapse', toggleIcon);
$('.panel-group').on('shown.bs.collapse', toggleIcon);

