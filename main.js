javascript:(function(document){
	
	if (!window.jQuery) {
		var jQuery = document.createElement('script');
		jQuery.setAttribute('type', 'text/javascript');
		jQuery.setAttribute('charset', 'UTF-8');
		jQuery.setAttribute('src', 'http://code.jquery.com/jquery-1.11.1.min.js');
		document.body.appendChild(jQuery);
	}

	var script = document.createElement("script");
	script.src = "https://rawgit.github.com/tallboy/faithful/master/faithful.js";
	document.getElementsByTagName("head")[0].appendChild(script);

}(document));
	
