var Tawazun = (function () {

	function MaxHeights() {

		if ( $(window).width() <= 991) {

			$(".left-wrapper").css('height', 'auto');
			$(".right-wrapper").css('height', 'auto');
			$(".quicklinks-height").css('height', 'auto');			
			$(".eservice-height").css('height', 'auto');
			
			$(".listdocuments-wrapper").css('height', 'auto');
		//	 $(".upcomingevent").css('height', 'auto');

		} else {
		
			$(".left-wrapper").height("");
			$(".right-wrapper").height("");
			$(".quicklinks-height").height("");
			$(".eservice-height").height("");
			$(".listdocuments-wrapper").height("");
        //$(".upcomingevent").height("");
       var MaxHeight = Math.max($(".left-wrapper").height(), $(".right-wrapper").height());   
		
	   
			
			
			$(".left-wrapper").height(MaxHeight);
			$(".right-wrapper").height(MaxHeight);
			//$(".quicklinks-height").height(450);
			//$(".eservice-height").height(493);			
			$(".listdocuments-wrapper").height(470);
           // $(".upcomingevent").height(490);

		}
	}


	function annoucementsheight() {

		var annoucementsheight = $('#annoucements').height();
		if (annoucementsheight > 720) {
			$("#annoucements").mouseover(function () {

				$("#annoucements").css({
					"overflow-x": "hidden",
					"height": "719px",
					"margin-right": "-11px"
				});
			});
			$("#annoucements").mouseout(function () {
				$("#annoucements").css({
					"overflow-x": "",
					"height": "",
					"margin-right": ""
				});

			});

		}

	}
	
	
	function videoPopUpControls()
	{
		$('[data-toggle]').click(function(event) {
			
			event.preventDefault();
	
		   if (($('.myVideo').find('video').attr('autoplay') === 'autoplay')) {
			     $('.myVideo').find('video').get(0).play();
           }
		});
		
		$(".close").click(function() {
			
			$('.myVideo').find('video').each(function() {
				$(this).get(0).pause();
				
			});
		});
		
	}
	
	


	function quicklinksheight() {

		var quicklinksheight = $('#quicklinks').height();

		if (quicklinksheight >= 495) {

			$("#quicklinks").mouseover(function () {



				$("#quicklinks").css({
					"overflow-x": "hidden",
					"height": "450px",
					"margin-right": ""
				});
			});

			$("#quicklinks").mouseout(function () {
			
			});
			
		}
		var eserviceheight = $('#eservice').height();

		if (eserviceheight >= 495) {

			$("#eservice").mouseover(function () {



				$("#eservice").css({
					"overflow-x": "hidden",
					"height": "493px",
					"margin-right": "-11px"
				});
			});

			$("#eservice").mouseout(function () {
				$("#eservice").css({
					"overflow-x": "",
					"height": "",
					"margin-right": ""
				});
			});

		}


		
		}











	function addingfields()

	{


		$('.add').on('click', function (e) {

			e.preventDefault();

			var id = $(this).parent().next().find('.form-group').attr('id');


			if (id === 'Certifications') {
				$('<div/>').addClass('new-text-div row')
					.html($('<div class="col-md-3"><input type="text" class="form-control col-md-3" placeholder=""> </div>' +
						'<div class="col-md-3"><input type="text" class="form-control col-md-3" placeholder=""> </div>' +
						'<div class="col-md-3"><input type="text" class="form-control col-md-3" placeholder=""> </div>' +
						'<div class="col-md-3"><input type="text" class="form-control col-md-3" placeholder=""> </div>'
					).addClass('extrafields'))
					.append($('<div/>').addClass('remove box-headers box-title').text('Remove').html('<img src = "images/remove-icon.png"> Remove ')).insertAfter('#' + id);

			} else {
				$('<div/>').addClass('new-text-div')
					.html($('<textarea class="form-control" rows="3" placeholder=""></textarea>').addClass('someclass'))
					.append($('<div/>').addClass('remove box-header box-title').text('Remove').html('<img src = "images/remove-icon.png"> Remove ')).insertAfter('#' + id);

			}







		});




		$(document).on('click', 'div.remove', function (e) {
			e.preventDefault();
			$(this).closest('div.new-text-div').remove();
			$(this).closest('row').remove();
		});
	}





	function selectoptions() {
		$('input').on('ifChecked', function () {
			if ($(this).is(':checked')) {
				$('label').removeClass('label');
				$(this).parent().parent().addClass('label');
			}
		});

	}









	function poll() {
		$('input').on('ifChecked', function () {






			var isChecked = $(".flat-red").prop("checked");



			$('.poll-wrapper').find('.checked').parent().css('background-color', 'red');

			if (isChecked === true) {


				$('.question-wrapper').show();
			} else {
				$('.poll-wrapper').find('.checked').parent().css('background-color', 'red');
				$('.question-wrapper').hide();
			}

		});
	}

	function polladd() {
		$('body').on('click', '.addoption', function () {
			$(this).remove();
			$('.addoptions').append('<div class="col-md-6"><div class="form-group"><input type="text" name="customername" placeholder="" class="form-control"> <span class="badge bg-red addoption">+</span> </div> </div> ');
		});
	}





	function profileimageupload() {
		$(document).on("change", ".uploadFile", function () {
			var uploadFile = $(this);
			var files = !!this.files ? this.files : [];
			if (!files.length || !window.FileReader) return; // no file selected, or no FileReader support

			if (/^image/.test(files[0].type)) { // only image file
				var reader = new FileReader(); // instance of the FileReader
				reader.readAsDataURL(files[0]); // read the local file

				reader.onloadend = function () { // set image data as background of div
					//alert(uploadFile.closest(".upimage").find('.imagePreview').length);
					uploadFile.closest(".imgUp").find('.imagePreview').css("background-image", "url(" + this.result + ")");

					$('.img-icon').css("z-index", "99");


				}
			}

		});
	}









	$(window).resize(function () {
		MaxHeights();
		quicklinksheight();
		annoucementsheight();
     


	});

	function fileinput() {

		$('#filecount').filestyle({
			input: false,
			buttonName: 'btn-add btn-sm',
			iconName: 'glyphicon glyphicon-plus'
		});
		$("#filecount").change(function () {
			MaxHeights();
		});
	}



	function datetimepickers() {
		$('.datetimepicker').datetimepicker({
			format: 'DD/MM/YYYY'
		});

	}


	function icheck() {
		$('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
			checkboxClass: 'icheckbox_minimal-blue',
			radioClass: 'iradio_minimal-blue'
		});
		//Red color scheme for iCheck
		$('input[type="checkbox"].minimal-red, input[type="radio"].minimal-red').iCheck({
			checkboxClass: 'icheckbox_minimal-red',
			radioClass: 'iradio_minimal-red'
		});
		//Flat red color scheme for iCheck
		$('input[type="checkbox"].flat-red, input[type="radio"].flat-red').iCheck({
			checkboxClass: 'icheckbox_flat-green',
			radioClass: 'iradio_flat-green'
		});
	}


	// Setup form validation on the #register-form element



	function datatables() {
		$('#room_list').DataTable({

			responsive: true,
			"bLengthChange": false,
			autoWidth: false,
			
			  "ordering": false,
      "info":     false,
			"searching": false,
    
			
			/********

			"fnDrawCallback": function () {


				$('th').each(function () {

					if (($(this).hasClass('sorting')) || ($(this).hasClass('sorting_desc'))) {
						$(this).attr({
							title: 'Sort Ascending'
						});


					} else {
						$(this).attr({
							title: 'Sort Descending'
						});
					}







				});
			},




			initComplete: function () {
				this.api().columns().every(function () {

					var column = this;


					if (column[0] != 5) {
						var optionValues = [];

						var list = $("").text();








						var select = $('<select onclick="event.stopPropagation()"><option value="">Choose</option></select>')
							.appendTo($(column.header()).empty())

						.on('change', function () {
							var val = $.fn.dataTable.util.escapeRegex(
								$(this).val()
							);

							column
								.search(val ? '^' + val + '$' : '', true, false)
								.draw();
						});




						column.data().unique().sort().each(function (d, j) {

							var divEle = $('<div />');
							var objs = $(d).selector;
							divEle.html(d);
							divEle.find('i').remove();

							optionValue = divEle.text().trim();




							optionValues.push(optionValue);

						});

						optionValues.filter(function (item, pos) {

							if (optionValues.indexOf(item) == pos) {
								select.append($('<option>', {
									value: item
								}).text(item));
							}

						});

					}


				});
			}
********/

		});

		$('#room_list').on('responsive-resize', function (e, datatable, columns) {
			var count = columns.reduce(function (a, b) {
				return b === false ? a + 1 : a;
			}, 0);
		});

		MaxHeights();


	}


	function menuNavigation() {
		$('.sidebar-menu li').on('click', function () {


			$('.sidebar-menu li.active').removeClass('active');

			$(this).first().addClass('active');

			window.location = $(this).find("a").attr("href");
			return false;

		

		});
	}


	function ArchivesNavigations() {

		$('.archives-wrapper p a').on('click', function (event) {
			event.preventDefault();
			$('.archives-wrapper .active').removeClass('active');

			$(this).first().addClass('active');

			//window.location=$(this).find("a").attr("href"); return false;

			//  return false;

		});
	}


	function selectcontrols() {
		$("select option[value='']").each(function (index, item) {
			if (index == 0) {
				$(this).empty();
				key = "Contract ID";
				$(this).append($("<option></option>")
					.attr("value", key)
					.text(key));
			}



			if (index == 1) {
				$(this).empty();
				key = "Contract Type";
				$(this).append($("<option></option>")
					.attr("value", key)
					.text(key));
			}


			if (index == 2) {
				$(this).empty();
				key = "Customer Name";
				$(this).append($("<option></option>")
					.attr("value", key)
					.text(key));
			}

			if (index == 3) {
				$(this).empty();
				key = "Valid until";
				$(this).append($("<option></option>")
					.attr("value", key)
					.text(key));
			}


			if (index == 4) {
				$(this).empty();
				key = "Signed On";
				$(this).append($("<option></option>")
					.attr("value", key)
					.text(key));
			}



			if (index == 5) {
				$(this).empty();
				key = "View";
				$(this).append($("<option></option>")
					.attr("value", key)
					.text(key));
			}

		});

       
        


	}
    function homeCalendar()
		{
			$('.calendar').pignoseCalendar();
		}
	
	 function homeTooptip()
		{
		$("[data-toggle=tooltip]").tooltip();
		}
    
    
    function homescrollbars() { 
    
    
    
     $('.slim-scroll').slimScroll({
        height: '200px'
    });
	
	 $('.meeting-slim').slimScroll({
        height: '130px'
    });
	
	 $('.quick-slim').slimScroll({
        height: '449px'
    });
		 $('.eservice-slim').slimScroll({
        height: '474px'
    });
	
		 $('.upcomingevents-slim').slimScroll({
        height: '450px'
    });
	var ourslim= $('.ourvalues-slim').height();

     if(ourslim >= 437)
         {
             			 $('.ourvalues-slim').slimScroll({
        height: '408px'
    });
         }
    
    
    
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  var target = $(e.target).attr("href") // activated tab
    var sharedbyme = $('.sharedbyme-slim').height();
     debugger;
      if(sharedbyme >= 437)
         {
             
    		 $('.sharedbyme-slim').slimScroll({
        height: '408px'
    });
         }
   var myrequest = $('.myrequest-slim').height();
      
      if(myrequest >= 437)
         {
    		 $('.myrequest-slim').slimScroll({
        height: '408px'
    });
         }
	
	
                  var mypending = $('.mypending-slim').height();
      
      if(mypending >= 437)
         {
    		 $('.mypending-slim').slimScroll({
        height: '408px'
    });
         }
        
        
  

});
    
    
    
    
    
    
    
    
    
    
    }
   


	    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  var target = $(e.target).attr("href") // activated tab
  
            
              
	
        });
	
	function calendar()
	{

		
			    /* initialize the external events
     -----------------------------------------------------------------*/
    function init_events(ele) {
      ele.each(function () {

        // create an Event Object (http://arshaw.com/fullcalendar/docs/event_data/Event_Object/)
        // it doesn't need to have a start or end
        var eventObject = {
          title: $.trim($(this).text()) // use the element's text as the event title
        }

        // store the Event Object in the DOM element so we can get to it later
        $(this).data('eventObject', eventObject)

        // make the event draggable using jQuery UI
        $(this).draggable({
          zIndex        : 1070,
          revert        : true, // will cause the event to go back to its
          revertDuration: 0  //  original position after the drag
        })

      })
    }

    init_events($('#external-events div.external-event'))

    /* initialize the calendar
     -----------------------------------------------------------------*/
    //Date for the calendar events (dummy data)
    var date = new Date()
    var d    = date.getDate(),
        m    = date.getMonth(),
        y    = date.getFullYear()
    $('#calendar').fullCalendar({
	    header: {
        left  : 'prev,next',
        center: 'title',
        right : 'agendaDay,agendaWeek,month'
      },
      buttonText: {
        today: 'today',
        month: 'Month',
        week : 'Week',
        day  : 'Day',
		list : 'List'
      },
        
 
         eventMouseover: function (data, event, view) {

                   
     tooltip = '<div class="tooltiptopicevent" style="width:auto;height:auto;background:#fff;position:absolute;z-index:10001;padding:10px 10px 10px 10px ;  line-height: 200%; border:solid 1px #f2c1af"><h3 class="box-title">'+ data.heading + '</h3> <i class="fa time"> </i><span style="padding-left:5px; font-size:10px; color:#707070">' + data.time + '</span></br>' +  '<i class="fa location"></i><span class="locationwrap"></span><span style="padding-left:5px; font-size:10px; color:#707070">' + data.location + '</span></div>';

            $("body").append(tooltip);
            $(this).mouseover(function () {
                $(this).css('z-index', 10000);
                $('.tooltiptopicevent').fadeIn('500');
                $('.tooltiptopicevent').fadeTo('10', 1.9);
            }).mousemove(function (e) {
                $('.tooltiptopicevent').css('top', e.pageY + 10);
                $('.tooltiptopicevent').css('left', e.pageX + 20);
            });


        },
        eventMouseout: function (data, event, view) {
            $(this).css('z-index', 8);

            $('.tooltiptopicevent').remove();

        },
      //Random default events
      events    : [
       
       
        {
          title          : '6:00 PM Sharjah',
          start          : new Date(y, m, d -18 ),
          end            : new Date(y, m, d -19 ),
		  url            : 'https://impigertech.sharepoint.com/sites/People1Solutions/Lists/TrainingCalendar/DispForm.aspx?ID=2.0.2019-06-20T03:45:00Z&Source=https%3A%2F%2Fimpigertech%2Esharepoint%2Ecom%2Fsites%2FPeople1Solutions%2FLists%2FTrainingCalendar%2Fcalendar%2Easpx',
          allDay         : false,
          backgroundColor: '#db3b05', //red
          borderColor    : '#db3b05', //red
		  timeFormat     : 'H(:mm)',
          heading :        'Sharjah',
          time           :  '6:00 PM - 9:00 PM',
          location       : 'Tawazun Economic Council'
        
        },
		  
	
		  
		     {
          title          : '6:00 PM Al Reem',
          start          : new Date(y, m, d -14 ),
          end            : new Date(y, m, d -15 ),
		  url            : 'https://impigertech.sharepoint.com/sites/People1Solutions/Lists/TrainingCalendar/DispForm.aspx?ID=2.0.2019-06-20T03:45:00Z&Source=https%3A%2F%2Fimpigertech%2Esharepoint%2Ecom%2Fsites%2FPeople1Solutions%2FLists%2FTrainingCalendar%2Fcalendar%2Easpx',
          allDay         : false,
          backgroundColor: '#db3b05', //red
          borderColor    : '#db3b05', //red
		  timeFormat     : 'H(:mm)',
          heading :        'Al Reem',
          time           :  '6:00 PM - 9:00 PM',
          location       : 'Tawazun Economic Council'
        },
		  
		  
		  	     {
          title          : '6:00 PM Sharjah',
          start          : new Date(y, m, d -13 ),
          end            : new Date(y, m, d -12 ),
		  url            : 'https://impigertech.sharepoint.com/sites/People1Solutions/Lists/TrainingCalendar/DispForm.aspx?ID=2.0.2019-06-20T03:45:00Z&Source=https%3A%2F%2Fimpigertech%2Esharepoint%2Ecom%2Fsites%2FPeople1Solutions%2FLists%2FTrainingCalendar%2Fcalendar%2Easpx',
          allDay         : false,
          backgroundColor: '#db3b05', //red
          borderColor    : '#db3b05', //red
		  timeFormat     : 'H(:mm)',
          heading :        'Sharjah',
          time           :  '6:00 PM - 9:00 PM',
          location       : 'Tawazun Economic Council'
        },
		  
		  
		  
		  {
          title           : '6:00 PM Sharjah',
          start           : new Date(y, m, d -11 ),
          end             : new Date(y, m, d -8 ),
		  url             : 'https://impigertech.sharepoint.com/sites/People1Solutions/Lists/TrainingCalendar/DispForm.aspx?ID=2.0.2019-06-20T03:45:00Z&Source=https%3A%2F%2Fimpigertech%2Esharepoint%2Ecom%2Fsites%2FPeople1Solutions%2FLists%2FTrainingCalendar%2Fcalendar%2Easpx',
          allDay         : false,
          backgroundColor: '#db3b05', //red
          borderColor    : '#db3b05', //red
		  timeFormat     : 'H(:mm)',
          heading :        'Sharjah',
          time           :  '6:00 PM - 9:00 PM',
          location       : 'Tawazun Economic Council'
        },
		
		  	  {
          title          : '6:00 PM Sharjah',
          start          : new Date(y, m, d -7 ),
          end            : new Date(y, m, d -7 ),
		  url            : 'https://impigertech.sharepoint.com/sites/People1Solutions/Lists/TrainingCalendar/DispForm.aspx?ID=2.0.2019-06-20T03:45:00Z&Source=https%3A%2F%2Fimpigertech%2Esharepoint%2Ecom%2Fsites%2FPeople1Solutions%2FLists%2FTrainingCalendar%2Fcalendar%2Easpx',
          allDay         : false,
          backgroundColor: '#db3b05', //red
          borderColor    : '#db3b05',
          heading :        'Sharjah',
          time           :  '6:00 PM - 9:00 PM',
          location       : 'Tawazun Economic Council'
		
        },
          {
          title           : '6:00 PM Sharjah',
          start           : new Date(y, m, d + 0, 0, -1),
          end             : new Date(y, m, d + 2, 0, 30),
		  url             : 'https://impigertech.sharepoint.com/sites/People1Solutions/Lists/TrainingCalendar/DispForm.aspx?ID=2.0.2019-06-20T03:45:00Z&Source=https%3A%2F%2Fimpigertech%2Esharepoint%2Ecom%2Fsites%2FPeople1Solutions%2FLists%2FTrainingCalendar%2Fcalendar%2Easpx',
          allDay          : false,
          backgroundColor: '#db3b05', //red
          borderColor    : '#db3b05',
          heading :        'Sharjah',
          time           :  '6:00 PM - 9:00 PM',
          location       : 'Tawazun Economic Council'
        }
      ],
		
      editable  : true,
      droppable : true, // this allows things to be dropped onto the calendar !!!
      drop      : function (date, allDay) { // this function is called when something is dropped

        // retrieve the dropped element's stored Event Object
        var originalEventObject = $(this).data('eventObject')

        // we need to copy it, so that multiple events don't have a reference to the same object
        var copiedEventObject = $.extend({}, originalEventObject)

        // assign it the date that was reported
        copiedEventObject.start           = date
        copiedEventObject.allDay          = allDay
        copiedEventObject.backgroundColor = $(this).css('background-color')
        copiedEventObject.borderColor     = $(this).css('border-color')

        // render the event on the calendar
        // the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
        $('#calendar').fullCalendar('renderEvent', copiedEventObject, true)

        // is the "remove after drop" checkbox checked?
        if ($('#drop-remove').is(':checked')) {
          // if so, remove the element from the "Draggable Events" list
          $(this).remove()
        }

      }
    })

    /* ADDING EVENTS */
    var currColor = '#3c8dbc' //Red by default
    //Color chooser button
    var colorChooser = $('#color-chooser-btn')
    $('#color-chooser > li > a').click(function (e) {
      e.preventDefault()
      //Save color
      currColor = $(this).css('color')
      //Add color effect to button
      $('#add-new-event').css({ 'background-color': currColor, 'border-color': currColor })
    })
    $('#add-new-event').click(function (e) {
      e.preventDefault()
      //Get value and make sure it is not null
      var val = $('#new-event').val()
      if (val.length == 0) {
        return
      }

      //Create events
      var event = $('<div />')
      event.css({
        'background-color': currColor,
        'border-color'    : currColor,
        'color'           : '#fff'
      }).addClass('external-event')
      event.html(val)
      $('#external-events').prepend(event)

      //Add draggable funtionality
      init_events(event)

      //Remove event from text input
      $('#new-event').val('')
    })

		
	}
	
 function timeRange()
	{
		
		   $('.timerange').on('click', function(e) {
	
    e.stopPropagation();
    var input = $(this).find('input');

    var now = new Date();
    var hours = now.getHours();
    var period = "PM";
    if (hours < 12) {
      period = "AM";
    } else {
      hours = hours - 12;
    }
    var minutes = now.getMinutes();

    var range = {
      from: {
        hour: hours,
        minute: minutes,
        period: period
      },
      to: {
        hour: hours,
        minute: minutes,
        period: period
      }
    };

    if (input.val() !== "") {
      var timerange = input.val();
      var matches = timerange.match(/([0-9]{2}):([0-9]{2}) (\bAM\b|\bPM\b)-([0-9]{2}):([0-9]{2}) (\bAM\b|\bPM\b)/);
      if( matches.length === 7) {
        range = {
          from: {
            hour: matches[1],
            minute: matches[2],
            period: matches[3]
          },
          to: {
            hour: matches[4],
            minute: matches[5],
            period: matches[6]
          }
        }
      }
    };
    console.log(range);

    var html = '<div class="timerangepicker-container">'+
      '<div class="timerangepicker-from">'+
      '<label class="timerangepicker-label">From:</label>' +
      '<div class="timerangepicker-display hour">' +
          '<span class="increment fa fa-angle-up"></span>' +
          '<span class="value">'+('0' + range.from.hour).substr(-2)+'</span>' +
          '<span class="decrement fa fa-angle-down"></span>' +
      '</div>' +
      ':' +
      '<div class="timerangepicker-display minute">' +
          '<span class="increment fa fa-angle-up"></span>' +
          '<span class="value">'+('0' + range.from.minute).substr(-2)+'</span>' +
          '<span class="decrement fa fa-angle-down"></span>' +
      '</div>' +
      ':' +
      '<div class="timerangepicker-display period">' +
          '<span class="increment fa fa-angle-up"></span>' +
          '<span class="value">PM</span>' +
          '<span class="decrement fa fa-angle-down"></span>' +
      '</div>' +
      '</div>' +
      '<div class="timerangepicker-to">' +
      '<label class="timerangepicker-label">To:</label>' +
      '<div class="timerangepicker-display hour">' +
          '<span class="increment fa fa-angle-up"></span>' +
          '<span class="value">'+('0' + range.to.hour).substr(-2)+'</span>' +
          '<span class="decrement fa fa-angle-down"></span>' +
      '</div>' +
      ':' +
      '<div class="timerangepicker-display minute">' +
          '<span class="increment fa fa-angle-up"></span>' +
          '<span class="value">'+('0' + range.to.minute).substr(-2)+'</span>' +
          '<span class="decrement fa fa-angle-down"></span>' +
      '</div>' +
      ':' +
      '<div class="timerangepicker-display period">' +
          '<span class="increment fa fa-angle-up"></span>' +
          '<span class="value">PM</span>' +
          '<span class="decrement fa fa-angle-down"></span>' +
      '</div>' +
      '</div>' +
    '</div>';

    $(html).insertAfter(this);
    $('.timerangepicker-container').on(
      'click',
      '.timerangepicker-display.hour .increment',
      function(){
        var value = $(this).siblings('.value');
        value.text(
          increment(value.text(), 12, 1, 2)
        );
      }
    );

    $('.timerangepicker-container').on(
      'click',
      '.timerangepicker-display.hour .decrement',
      function(){
        var value = $(this).siblings('.value');
        value.text(
          decrement(value.text(), 12, 1, 2)
        );
      }
    );

    $('.timerangepicker-container').on(
      'click',
      '.timerangepicker-display.minute .increment',
      function(){
        var value = $(this).siblings('.value');
        value.text(
          increment(value.text(), 59, 0 , 2)
        );
      }
    );

    $('.timerangepicker-container').on(
      'click',
      '.timerangepicker-display.minute .decrement',
      function(){
        var value = $(this).siblings('.value');
        value.text(
          decrement(value.text(), 12, 1, 2)
        );
      }
    );

    $('.timerangepicker-container').on(
      'click',
      '.timerangepicker-display.period .increment, .timerangepicker-display.period .decrement',
      function(){
        var value = $(this).siblings('.value');
        var next = value.text() == "PM" ? "AM" : "PM";
        value.text(next);
      }
    );

  });

  $(document).on('click', e => {

    if(!$(e.target).closest('.timerangepicker-container').length) {
      if($('.timerangepicker-container').is(":visible")) {
        var timerangeContainer = $('.timerangepicker-container');
        if(timerangeContainer.length > 0) {
          var timeRange = {
            from: {
              hour: timerangeContainer.find('.value')[0].innerText,
              minute: timerangeContainer.find('.value')[1].innerText,
              period: timerangeContainer.find('.value')[2].innerText
            },
            to: {
              hour: timerangeContainer.find('.value')[3].innerText,
              minute: timerangeContainer.find('.value')[4].innerText,
              period: timerangeContainer.find('.value')[5].innerText
            },
          };

          timerangeContainer.parent().find('input').val(
            timeRange.from.hour+":"+
            timeRange.from.minute+" "+    
            timeRange.from.period+"-"+
            timeRange.to.hour+":"+
            timeRange.to.minute+" "+
            timeRange.to.period
          );
          timerangeContainer.remove();
        }
      }
    }
    
  });

  function increment(value, max, min, size) {
    var intValue = parseInt(value);
    if (intValue == max) {
      return ('0' + min).substr(-size);
    } else {
      var next = intValue + 1;
      return ('0' + next).substr(-size);
    }
  }

  function decrement(value, max, min, size) {
    var intValue = parseInt(value);
    if (intValue == min) {
      return ('0' + max).substr(-size);
    } else {
      var next = intValue - 1;
      return ('0' + next).substr(-size);
    }
  }	
    
		
	}

    
    
  function documentfolder() {
	 
        $('.document_folder .files_container').mouseover(function () {
				 
          $(this).find(".folder a img").attr("src", "./images/folder_1.png");
          $(this).find(".more").css("visibility","visible");
        }).mouseout(function () {
          $(this).find(".folder a img").attr("src", "./images/folder_2.png");
          $(this).find(".more").css("visibility","hidden");
        });
    }

	
	function documentfileupload()
	{
		
      $('.document .filter_content .upload_file .input-group input').on('change', function() {
           $(this).parent().parent().find('.form-control').html($(this).val().split(/[\\|/]/).pop());
      });
      $('.document .filter_content .upload_file span.btn.btn-primary').on('click', function(){
        $(this).parent().find('input[type=file]').click();
      });

	}
    
	return {
		MaxHeights: MaxHeights,
		datetimepickers: datetimepickers,
		icheck: icheck,
		//formValidation: formValidation,
		fileinput: fileinput,
		datatables: datatables,
		selectcontrols: selectcontrols,
		profileimageupload: profileimageupload,
		addingfields: addingfields,
		menuNavigation: menuNavigation,
		poll: poll,
		polladd: polladd,
		selectoptions: selectoptions,
		ArchivesNavigations: ArchivesNavigations,
		quicklinksheight: quicklinksheight,
		annoucementsheight: annoucementsheight,
		videoPopUpControls : videoPopUpControls,
		homeCalendar : homeCalendar,
		homeTooptip : homeTooptip,
        homescrollbars:   homescrollbars,
		calendar : calendar,
		timeRange : timeRange,
		documentfolder :documentfolder,
		documentfileupload : documentfileupload
	};


})();