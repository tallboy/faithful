(function(window){

	var newScore = 0;

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

	var getActivityType = function(el) {
		var description = el.find('.earn-pointActivity');
		return description.text();
	};

	var setScoreToAdd = function() {
		console.log('*** Points added on refresh: ' + newScore + '***');
	};

	var modalAction = function() {
		var modal = $('.modal');
		$('.activityhyperlink').click();
		$('.modal').modal('hide');

		return true;
	};

	var openModal = function(el) {
		var activityEl = el;
		var timeEl = activityEl.find('.time').text();
		var time = getTime(timeEl);
		var hasOverlay = activityEl.find('.darkoverlay').length;

		console.log('TIME: ', time, 'OVERLAY: ', hasOverlay);
		if (hasOverlay === 0 && time === 0) {
			activityEl.click();
			setTimeout(function() {
				modalAction();
			}, 2000);
		}

		return true;
	};

	var releasetheKraken = function() {
		
		var activityElements = $('div[data-target="#ActivityPopup"]');

		$.each(activityElements, function(){
			var activityEl = $(this);
			var activityType = getActivityType(activityEl);
			activityType = activityType.toLowerCase().trim();
			console.log('TYPE', activityType);

			switch (activityType) {
				case 'read':
				case 'watch':
				case 'browse':
				var openModalEvent = openModal(activityEl);
				if (openModalEvent) {
					newScore += 5;
					setScoreToAdd();
				}
				break;
				default:
				break;	
			}
		});
	};

	setInterval(releasetheKraken(), 10000);
}(window));