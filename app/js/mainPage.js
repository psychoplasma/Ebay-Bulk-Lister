window.$ = window.jQuery = require('./../../bower_components/jquery/dist/jquery.min.js')

var navItems

$(document).ready(function() {
  console.log("DOM ready");

  jQuery('.nav-item').click(function() {
    jQuery('.nav-item').removeClass('nav-item-selected')
    jQuery('.nav-item').removeClass('hover')
		$(this).addClass("nav-item-selected")
	})

})
