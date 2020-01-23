/****************************************** TOP 5 CAMPAIGNS & TOP 5 CALL CENTER Chart ******************************************/
google.charts.load("current", {packages:['corechart']});
google.charts.setOnLoadCallback(resize);

var options = {
        'width': '100%',
        height:350,
	    // chartArea:{t,width:'100%',height:'100%'},
        bar: {groupWidth: "55%"},
		colors: ['#067d9f', '#069f55'],
		isStacked: false,
	     vAxis: {format: 'short'},
		 vAxes: {
            // Adds titles to each axis.
            0: {title: 'Patients'}
            
          },
 
    chartArea:{left:100,top:50},
			 legend: { textStyle: { color: '#444444', fontName:'proxima-nova-n4, proxima-nova, Arial, sans-serif', fontSize: 14}}
      };
  var campaignOptions = {
         // title: 'Regular health Campaign',
          pieHole: 0.4,
		 'width':'100%',
         'height':'427',
			colors: ['#5997e7', '#a10974', '#e9b24f']
			
		
        };




function resize () {

     var data1 = google.visualization.arrayToDataTable([
      ['Date', 'Called','Appt.Set'],
	  ["Camp1", 400, 200],
	  ["Camp2", 880, 710],
      ["Camp3", 820, 420],
      ["Camp4", 660, 390],
      ["Camp5", 790, 510]
]);
	
 var data2 = google.visualization.arrayToDataTable([
         ['Date', 'Called','Appt.Set'],
	     ["John", 490, 405],
	     ["Joe", 400, 380],
         ["Mike", 300, 350],
         ["Peter", 320, 320],
         ["Deve", 390, 200]
]);
	
	
	
	 var data3 = google.visualization.arrayToDataTable([
          ['Unprocessed', 'Appointment made'],
          ['Unprocessed',     60],
          ['Appointment made',10],
          ['Call Attempted',  30]
        ]);
	
      var chart1 = new google.visualization.ColumnChart(document.getElementById("columnchart_values1"));
	  var chart2 = new google.visualization.ColumnChart(document.getElementById("columnchart_values2"));
	  var chart3 = new google.visualization.PieChart(document.getElementById('donutchart'));
      chart1.draw(data1, options);
      chart2.draw(data2, options);
	  chart3.draw(data3, campaignOptions);
	
	
	
	
	
	var chart = new CanvasJS.Chart("chartContainer", {
				
				animationEnabled: true,
				axisX: {
					 
					margin: 90,
					gridColor: "#e5e5e5",
					tickColor: "#e5e5e5",
					valueFormatString: "DD MMMM"
				},
				toolTip: {
					shared: true
				},
				theme: "theme3",
		
				axisY: {
					//margin: 90,
					gridColor: "#e5e5e5",
					tickColor: "#e5e5e5",
					
				},
				legend: {
				    verticalAlign: "top",
   horizontalAlign: "center" 
				},
				data: [
				{
					type: "line",
					showInLegend: true,
					lineThickness: 1,
					name: "Deve",
					markerType: "square",
					color: "#46a109",
					dataPoints: [
					{ x: new Date(2010, 5, 3), y: 230 },
					{ x: new Date(2010, 5, 5), y: 170 },
					{ x: new Date(2010, 5, 7), y: 100 },
					{ x: new Date(2010, 5, 9), y:  150 },
					{ x: new Date(2010, 5, 11), y: 200 },
					{ x: new Date(2010, 5, 13), y: 250 }
				
					]
				},
				{
					type: "line",
					showInLegend: true,
					name: "John",
					color: "#0eaf9e",
					lineThickness: 1,

					dataPoints: [
					{ x: new Date(2010, 5, 3), y: 200 },
					{ x: new Date(2010, 5, 5), y: 230 },
					{ x: new Date(2010, 5, 7), y: 120 },
					{ x: new Date(2010, 5, 9), y:  150 },
					{ x: new Date(2010, 5, 11), y: 100 },
					{ x: new Date(2010, 5, 13), y: 80 }
					]
				},
					
					{
					type: "line",
					showInLegend: true,
					name: "Deve",
					color: "#01c0ff",
					lineThickness: 1,

					dataPoints: [
					{ x: new Date(2010, 5, 3), y: 180 },
					{ x: new Date(2010, 5, 5), y: 130 },
					{ x: new Date(2010, 5, 7), y: 190 },
					{ x: new Date(2010, 5, 9), y: 140 },
					{ x: new Date(2010, 5, 11), y: 90 },
					{ x: new Date(2010, 5, 13), y: 180 }
					]
				},
						{
					type: "line",
					showInLegend: true,
					name: "john",
					color: "#c23c0d",
					lineThickness: 1,

					dataPoints: [
					{ x: new Date(2010, 5, 3), y: 130 },
					{ x: new Date(2010, 5, 6), y: 80 },
					{ x: new Date(2010, 5, 7), y: 60 },
					{ x: new Date(2010, 5, 9), y: 140 },
					{ x: new Date(2010, 5, 11), y: 160 },
					{ x: new Date(2010, 5, 12), y: 140}
					]
				},
							{
					type: "line",
					showInLegend: true,
					name: "Mike",
					color: "#a10974",
					lineThickness: 1,

					dataPoints: [
					{ x: new Date(2010, 5, 3), y: 80 },
					{ x: new Date(2010, 5, 5), y: 80 },
					{ x: new Date(2010, 5, 7), y: 80 },
					{ x: new Date(2010, 5, 9), y: 120 },
					{ x: new Date(2010, 5, 11), y: 130 },
					{ x: new Date(2010, 5, 13), y: 120 }
					]
				}
				]
			});

			chart.render();
		}
window.onload = resize;
window.onresize = resize;

// Date range script - Start of the sscript
$("#date_range").daterangepicker({
	
	autoUpdateInput: false,
	locale: {
		"cancelLabel": "Clear",
        }
});

$("#date_range").on('apply.daterangepicker', function(ev, picker) {
      $(this).val(picker.startDate.format('YYYY-MM-DD') + ' to ' + picker.endDate.format('YYYY-MM-DD'));
	  table.draw();
});

$("#date_range").on('cancel.daterangepicker', function(ev, picker) {
      $(this).val('');
	  table.draw();
});
// Date range script - END of the script


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

