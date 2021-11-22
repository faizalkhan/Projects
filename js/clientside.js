var ADR = (function () {

function downloadtooltip() {
    $('[data-toggle="tooltip"]').tooltip();
  }    
    
  function multilistaccordion() {
    $(document).on('click', '.claimantdetailview', function (event) {
      var id = event.target.id;
      var divid = $("#" + id).parents().next()[0];
      if ($(divid).css('display') == 'none') {
        $("#" + id).parents().next().eq(0).show();

      } else {
        $("#" + id).parents().next().eq(0).hide();
      }
    });
  }

  
  function nominateArbitratortoggle() {
    $(document).on('click', '[data-target="#nominateArbitrator"]', function () {

      if ($('#nominateArbitrator').css('display') == 'none') {
        $('#nominateArbitrator').show();
      } else {
        $('#nominateArbitrator').hide();
      }


    });

  }

  function menuNavigation()
    {
     $(".sidebar .nav a").on("click", function(e){
         
       $('.sidebar .nav [id="' + active + '"]').addClass('active').closest('.nav-treeview').find('i').addClass('fa-angle-left').hide();
         
         
         $(".sidebar .nav a").removeClass("active");
         
         var setvalue = localStorage.setItem('active', e.currentTarget.id);   
         
         $(this).addClass('active');
            
     });
        
         var active = localStorage.getItem('active');
         
         console.log(active);       
        
        
        
        
    	if(active)
    {
    
        
     
        
		$(".sidebar .nav").find(".active").removeClass("active");
        
     
       $('.sidebar .nav [id="' + active + '"]').addClass('active').next().show().prev().find('i').addClass('fa-angle-down');
        
       $('.sidebar .nav [id="' + active + '"]').addClass('active').closest('.nav-treeview').show().prev().find('i').addClass('fa-angle-down');
        
       
        
    }
         
        
        
        
        
        /*if(active === 'reports1')
            {
         
             $('.nav .nav-treeview').show();
        
            }*/
     
        
        
           // for treeview
 
 
        
        
        
    /*   $(".nav-treeview a").on("click", function(e){
           
           alert("hi");
           
           
           $('.nav-treeview .nav [id="' + active + '"]').addClass('active').next().show();
           
              // $(this).addClass('active');
           
       });*/
                               
                               
        
        
        
 
        
    }
    
    
    
        function sideMenuBar()
    {
        
         
        $(document).on('click', '.nav-link', function (e) {
       if( $('body').hasClass('sidebar-collapse'))
             $('.brand-image').show(0);
             else  $('.brand-image').hide(0);
        });
     
     
     
        $(document).on('mouseenter', '.sidebar-mini.sidebar-collapse .main-sidebar', function (e) {
      
            $('.brand-image').hide();
            
        });
       $(document).on('mouseleave ', '.sidebar-mini.sidebar-collapse .main-sidebar', function (e) {
      
               $('.brand-image').show();
            
        });
        
    }
  
   function gridView()
	{
	    $("#arbitration").DataTable({	
            
               // "iDisplayLength": 20,
            //"aLengthMenu": [[10, 20, 50, -1], [10, 20, 50, "All"]],
            
            
	    "bSort": false,
            "searching" :false,
            "dom": '<"top"f>rt<"bottom"ilp><"clear">'
       // "dom": '<"search-top"f>t<""l>p'
	    });
	}
    
        function addcustomfields()
    {
           var rowIdx = 0;       
        
	     $(".addCF").click(function()
          {
		$("#customFields").append('<div class="row" id="'+ ++rowIdx + '"><div class="col-12 col-md-4"><div class="form-group"><label for="Designation" class="mb-1">Payee</label>' +
                        '<div class="form-group"><select class="form-control" id="sel1"><option>Claimant</option></select></div></div></div>'+
                       '<div class="col-12 col-md-4"><div class="form-group"><label for="Email" class="mb-1">Amount</label>' +
                       '<input type="amount" class="form-control" id="amount'+ ++rowIdx + '" placeholder="Enter email"  value="15,000" name="Email"></div></div>'+
                      '<div class="col-12 col-md-4"><div class="row"><div class="col-12 col-md-9"><div class="form-group"><label for="Mobile Number" class="mb-1">Due Date</label>'+
                      '<input type="email" class="form-control pr-5" id="email" value="31-Dec-2020"><i class="fa fa-pro-calender-grey cal-pos" aria-hidden="true"></i></div></div>'+               
                      '<div class="col-12 col-md-3"> <div class="form-group font14 delete-T text-center text-md-left text-sm-center"><a href="javascript:void(0);" class="remCF"><img class="ml-2 mt-n2" src="images/bin.png" alt=""></a></div></div></div></div></div></div>');
                  	});
        
            $("#customFields").on('click','.remCF',function(){
            $(this).parent().closest('#customFields').children().children().closest('.row').eq(0).remove();
            });
        
    }
    
    
    	       function reportsGridView()
    {
        $('#reports').DataTable( {
        "dom": 'Bfrtip',
             "searching" :false,
        //"dom": '<"top"f>rt<"bottom"ilp><"clear">',
        "bSort": false,
        //buttons: [        'excel'       ]
            
            
        buttons: [{
        extend: 'excelHtml5',
        text: 'Export',
        autoFilter: true,
        attr: {id: 'exportButton'},
        sheetName: 'data',
        title: '',
        filename: function ( ) {
            return $('#exportButton').data('filename');
        }
    }]    
            
            
            
            
            
            
            
    } );
        
        
    }
    
    
    
      function minHeight()
  {
     var minheightdiv = "";
      document.body.scrollHeight  = 0;
      
    minheightdiv = document.body.scrollHeight;
      
      
      alert(minheightdiv);
      
      
      if(minheightdiv <= 763)
          {
              $('.minH').height(minheightdiv); 
          }
      
      else
          {
              $('.minH').height(""); 
          }
 }
    $(document).ready(function()
    {
        alert("document ready");
    
        $(document).on('click', '.nav-link', function()
         {
            
           document.body.scrollHeight  = 0;
              minHeight();
        });
         minHeight();
        $(window).resize(function(){
	    // your code here
        minHeight();
          alert("resize");
        }); 

    })
    
    
    
    

  return {

    multilistaccordion: multilistaccordion,
    downloadtooltip: downloadtooltip,
    nominateArbitratortoggle: nominateArbitratortoggle,
       menuNavigation: menuNavigation,
    gridView:gridView,    
     sideMenuBar:sideMenuBar,
     addcustomfields:addcustomfields,
    reportsGridView:reportsGridView
  };


})();
