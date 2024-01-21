$(document).ready(function () {
	$('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'))

	function updateColors() {
		var currentHour = dayjs().hour()
		console.log('currentHour: ' + currentHour)
		$('.time-block').each(function () {
			var blockHour = parseInt(
				$(this).children('textarea').attr('data-hour')
			)
			var hour = $(this).find('textarea').attr('data-hour')
			var event = localStorage.getItem('event_' + hour)

			if (event) {
				$(this).find('textarea').val(event)
			}

			if (blockHour < currentHour) {
				$(this).addClass('past')
			} else if (blockHour === currentHour) {
				$(this).removeClass('past')
				$(this).addClass('present')
			} else {
				$(this).removeClass('past')
				$(this).removeClass('present')
				$(this).addClass('future')
			}
		})
	}
})
