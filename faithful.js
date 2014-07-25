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

	var modalAction = function() {
		var modal = $('.modal');
		var type = modal.find('.activitypopup-left').text();
		type = type.toLowerCase();
		
		console.log('TYPEEEE', type);

		switch (type) {
			case 'read':
			case 'watch':
			case 'browse':
				$('.activityhyperlink').click();
				break;
			default:
				break;	
		}

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

			console.log('TIME: ', time, 'OVERLAY: ', hasOverlay);
			if (hasOverlay === 0 && time === 0) {
				activityEl.click();
				setTimeout(function(){
					modalAction();
				}, 2000);
			}
		});

	};

	releasetheKraken();
}(window));