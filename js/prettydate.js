/*
 * JavaScript Pretty Date
 * Copyright (c) 2008 John Resig (jquery.com)
 * Licensed under the MIT license.
 * Modified 2011 Charles Smith (phase2technology.com)
 */

// Takes an ISO time and returns a string representing how
// long ago the date represents.
function prettyDate(time){
	var date = new Date((time || "").replace(/-/g,"/").replace(/[TZ]/g," ")),
		diff = (((new Date()).getTime() - date.getTime()) / 1000),
		day_diff = Math.floor(diff / 86400);
			
	if ( isNaN(day_diff) || day_diff < 0 )
		return;

	return day_diff == 0 && (
			diff < 60 && Drupal.t("just now") ||
			diff < 120 && Drupal.t("1 minute ago") ||
			diff < 3600 && Math.floor( diff / 60 ) + Drupal.t(" minutes ago") ||
			diff < 7200 && Drupal.t("1 hour ago") ||
			diff < 86400 && Math.floor( diff / 3600 ) + Drupal.t(" hours ago")) ||
		day_diff == 1 && Drupal.t("Yesterday"); 
	
}

// If jQuery is included in the page, adds a jQuery plugin to handle it as well
if ( typeof jQuery != "undefined" )
	jQuery.fn.prettyDate = function(){
		return this.each(function(){
			var date = prettyDate(this.title);
			if ( date )
				jQuery(this).text( date );
		});
	};

(function($){
  $(document).ready(function(){
    $('.prettydate').prettyDate();
    setInterval(function(){ $('.prettydate').prettyDate(); }, 5000);
  });
}(jQuery));

//get those ajax loads done asap
Drupal.behaviors.prettydate = function(context){
  $('.prettydate', context).prettyDate();
}
