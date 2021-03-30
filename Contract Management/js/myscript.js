(function()
{

	    function MaxHeights()
		{
 	    if($(window).width() <= 767)
		{
				
			$("#left").css('height', 'auto');
            $("#right").css('height', 'auto');
			
		}
	    else
		{
		   $("#left").height("");
           $("#right").height("");			
		   var MaxHeight = Math.max($("#left").height(), $("#right").height());			
	       $("#left").height(MaxHeight);
           $("#right").height(MaxHeight);
		}
		}
		
		
		$(window).resize(function() {
        MaxHeights();
		
        });
	
	
	   
	
	       $(window).on("load", function ()
						{
			       MaxHeights();
		   });
	
      
})();