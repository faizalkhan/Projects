var Godrej = (function () {
 
	function menuDropdown() {
    $('.dropdown').hover(function () {
      $(this).find('.dropdown-menu').stop(true, true).delay('200').fadeOut(10).slideDown('9000');
    }, function () {
      $(this).find('.dropdown-menu').stop(true, true).delay('200').fadeOut(10).slideUp('9000');
    });
  }

  function selectcategoryDropdown() {
    jQuery('.drop-down').append('<div class="button"></div>');

    jQuery('.drop-down').append('<ul class="select-list"></ul>');


    jQuery('.drop-down select option').each(function () {


      var bg = jQuery(this).css('background-image');

      jQuery('.select-list').append('<li class="clsAnchor"><span value="' + jQuery(this).val() + '" class="' + jQuery(this).attr('class') + '" style=background-image:' + bg + '><b>' + jQuery(this).text() + '</b></span></li>');

    });

    jQuery('.drop-down .button').html('<span  class="norepeat" style=background-image:' + jQuery('.drop-down select').find(':selected').css('background-image') + '><b>'
      + jQuery('.drop-down select').find(':selected').text() + '</b></span>' + '<a href="javascript:void(0);" class="select-list-link"> <img src="images/down_arrow.jpg"/></a>');


    jQuery('.drop-down ul li').each(function () {

      if (jQuery(this).find('span').text() == jQuery('.drop-down select').find(':selected').text()) {
        jQuery(this).addClass('active');
      }
    });


    jQuery('.drop-down .select-list span').on('click', function () {
      var dd_text = jQuery(this).text();
      var dd_img = jQuery(this).css('background-image');
      var dd_val = jQuery(this).attr('value');
      jQuery('.drop-down .button').html('<span  class="norepeat" style=background-image:' + dd_img + '><b>' + dd_text + '</b></span>' + '<a href="javascript:void(0);" class="select-list-link"> <img src="images/down_arrow.jpg"/></a>');
      jQuery('.drop-down .select-list span').parent().removeClass('active');
      jQuery(this).parent().addClass('active');
      $('.drop-down select[name=options]').val(dd_val);
      $('.drop-down .select-list li').slideUp();
    });
    jQuery('.drop-down .button').on('click', 'a.select-list-link, .norepeat', function () {
      jQuery('.drop-down ul li').slideToggle();
    });
    /* End */
  }
    
    function searchToggle()
    {
         $("#search-button, #search-icon").click(function(e){
         e.preventDefault();
         $("#search-button, #search-form").toggle();
         }); 
    }
              
      function menuScroll()
    {
        $(window).scroll( function() { 
          
      var scrolled_val = $(document).scrollTop().valueOf();
  
      if(scrolled_val > 88)
          {
              $('.dropdown-menu').hide();
          }
         
});
    }
      
            
            
            
            
            function dropdownalignment()
            {
              $(".dropdown").hover(function()
           {
      
                var menuPos =  $(this).offset();          
                var menuPosLeft =  menuPos.left + 12;                
                var paddingLeft = Math.round(menuPosLeft);
                if( paddingLeft >= 786)
                {
                  $(".dropdown-toggle").parent().find('.menu-bg').css("padding-left", "347px");
                }
                else
                {
                   $(".dropdown-toggle").parent().find('.menu-bg').css("padding-left", paddingLeft + "px");  
                }        
               return false;                
            })
        
           }
        
    
        function Scrollbar()
            {
           $('.latest-update').perfectScrollbar();
                
                
                
                      
           }
            
    
             function updateStatusScrollbar()
            {
            $('.update-status').perfectScrollbar();
             
           }
     
                     
                     
      function updatestatusitem()
      {
        
        
         $(document).on('click', '.countries-menu li a', function(event)
        {
             event.preventDefault();    
             var divid = $(this).attr('href');        
             $('.country').hide();             
             $('.countries-menu li').removeClass('active');   
             $(this).parent().addClass('active');          
             if($(divid).hasClass('country'))
                {
                    $(divid).show();
                }
                       
        });
     }
       


  return {
    menuDropdown: menuDropdown,
    selectcategoryDropdown: selectcategoryDropdown,
    searchToggle : searchToggle,
    dropdownalignment: dropdownalignment,
    menuScroll:menuScroll,
    Scrollbar :Scrollbar,
    updateStatusScrollbar:updateStatusScrollbar,
    updatestatusitem :updatestatusitem,
  };


})();
