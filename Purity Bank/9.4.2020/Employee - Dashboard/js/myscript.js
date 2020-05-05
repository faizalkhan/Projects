var purityBank = (function()
{
	
	function datatables()
	{
	    $("#RecentRFQ").DataTable({		
	    "bSort": false,
        "dom": '<"search-top"f>t<""l>p'
	    });
	}
    
    function tablestatus()
    {
        
      $('#status tr td').each(function() {
                
                   var texto = $(this).text();
                  var textimg =  $(this).find('td img').length>0;
                   if(texto == ''  )
                   {
                       $(this).css('background-color', '#fff');
                    }
                   else if(texto == 'novalues')
                    {
                        $(this).css('background-color', '#f5f5f5');
                    }
                    else if(textimg == '' )
                    {
                       $(this).css('background-color', '#fff');
                    }                 
                
    
      });
      
    }
    
    
    function errorMessage()
    {
                $(".error-message").hide();
        
        $(document).on("click", ".display-error", function()
         {         
            
             $(".error-message").show();
            
            
        })
        
         $(document).on("click", ".ok-error-message", function()
         {
      
            
             $(".error-message").hide();
            
            
        })
        
    }
      
       
    
    
	return {
		datatables: datatables,
        tablestatus : tablestatus,
        errorMessage : errorMessage
		
	}
	
})();