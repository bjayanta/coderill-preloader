(function($){

	$.fn.preloader = function(options) {

		// Establish our default settings
		var settings = $.extend({
			background		: '#F3F3F3',
			foreground		: '#3498DB',
			complete		: null
		}, options);

		return this.each(function() {
			var self = this,
				spinner = $(this).find('div.loader');

			spinner.css({
				borderColor		: settings.background,
				borderTopColor	: settings.foreground
			});

			$(window).on('load', function() {
				$.when($(self).remove()).then(function() {
					// callback method
					if($.isFunction(settings.complete)) {
						settings.complete.call(this);
					}
				});
			});
		});

	}

}(jQuery));
