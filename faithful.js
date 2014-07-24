(function(window){

	var getScoreCount = function() {
		var score = $('.yardCount').text();
		return parseInt(score, 10);
	};

	var getTime = function(element) {
		var timeParts = element.split(" ");
		if (!isNaN(timeParts[1])) {
			return timeParts[1];
		} else {
			return 0;
		}
	};

	var simClickThePopup = function() {
		var popUpLink = $('.activityhyperlink');
		console.log('popUpLink', popUpLink);
		popUpLink.click();
		$('.modal').modal('hide');
	};

	var releasetheKraken = function() {
		console.log('Kraken released');
		var activityElements = $('div[data-target="#ActivityPopup"]');

		$.each(activityElements, function(){
			var activityEl = $(this);
			var timeEl = activityEl.find('.time').text();
			var time = getTime(timeEl);
			var hasOverlay = activityEl.find('.darkoverlay').length;

			if (hasOverlay === 0 && time === 0) {
				activityEl.click();
				setTimeout(function(){simClickThePopup()}, 2000);
			}
		});

	};

	releasetheKraken();
}(window));