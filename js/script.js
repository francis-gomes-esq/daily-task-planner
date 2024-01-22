$(document).ready(function () {
	// Display the current day at the top of the daily-task-planner
	$('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'))

	// Function to update timeblock colors based on past, present, and future
	function updateColors() {
		var currentHour = dayjs().hour()
		console.log('currentHour: ' + currentHour)
		$('.time-block').each(function () {
			var blockHour = parseInt(
				$(this).children('textarea').attr('data-hour')
			)
			var hour = $(this).find('textarea').attr('data-hour')
			var event = localStorage.getItem('event_' + hour)

			// Load event from local storage, if present
			if (event) {
				$(this).find('textarea').val(event)
			}

			if (blockHour < currentHour) {
				// Past time
				$(this).addClass('past')
			} else if (blockHour === currentHour) {
				// Present time
				$(this).removeClass('past')
				$(this).addClass('present')
			} else {
				// Future time
				$(this).removeClass('past')
				$(this).removeClass('present')
				$(this).addClass('future')
			}
		})
	}
	for (var hour = 9; hour <= 17; hour++) {
		var timeBlock = $('<div').addClass('row time-block')
		var hourColumn = $('<div')
			.addClass('col-md-1 hour')
			.text(dayjs().hour(hour).format('hA'))
		var textArea = $('<textarea>')
			.addClass('col-md-10 description')
			.attr('data-hour', hour)
		var saveButton = $('<button>').addClass('col-md-1 saveBtn').text('save')
		attr('data-hour', hour)

		timeBlock.append(hourColumn, textArea, saveButton)
		$('.container').append(timeBlock)
	}
})
