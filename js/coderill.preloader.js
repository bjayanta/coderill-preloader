(function($){

	$.fn.preloader = function(options) {

		// Establish our default settings
		var settings = $.extend({
			radius					: 50,
			spinnerBackground		: '#F3F3F3',
			spinnerForeground		: '#3498DB',
			spinnerBorderWidth		: 5,
			mainBackground			: 'rgba(40, 40, 40, 0.65)',
			complete				: null
		}, options);

		return this.each(function() {
			var self = this,
				spinner = $(this).find('div.loader');

			// set main container style
			$(self).css('background', settings.mainBackground);

			// set spinner style
			spinner.css({
				width			: (settings.radius * 2) + 'px',
				height			: (settings.radius * 2) + 'px',
				borderWidth		: settings.spinnerBorderWidth + 'px',
				borderColor		: settings.spinnerBackground,
				borderTopColor	: settings.spinnerForeground
			});

			/*
			$(window).on('load', function() {
				$.when($(self).remove()).then(function() {
					// callback method
					if($.isFunction(settings.complete)) {
						settings.complete.call(this);
					}
				});
			});
			*/
		});

	}

}(jQuery));
