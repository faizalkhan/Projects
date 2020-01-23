var SLC = (function () {

	function menuNavigation() {
       
	       
		    var path = window.location.pathname.split("/").pop();
  
			if (path === '' ) {
				 path = 'index.html';
		     }								
			var target = $('.sidebar-menu li a[href="'+path+'"]');						  
			target.parents('li').addClass("active");
}
return {
		menuNavigation: menuNavigation
		
	};


})();