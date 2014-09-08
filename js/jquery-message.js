(function($) {
	'use strict';
	var defaultConfig = {
		content: '',
		duration: 5000,
		css: 'wd-ui-msg wd-ui-log',
		closeWhenClick: true
	};
	var $body = $('body');

	var $msgTpl = $('<div class="wd-msg"></div>');

	var showing = 0;

	var pos = [0, 0];

	var winHeihgt = $(window).height();

	function close($msg, config) {
		if($.fn[config.anime + 'Out']) {
			$msg[config.anime + 'Out']();
		}
		$msg.fadeOut(function(){
			$msg.remove();
			showing--;
		});
	}

	function alignMsg($msg, config){
		var outerHeight = $msg.outerHeight(true);
		var outerWidth = $msg.outerWidth(true);
		if (showing === 0){
			pos = [0, 0];
		}
		showing++;
		$msg.align({
			base: 'screen',
			fixed: true,
			points: ['br', 'br'],
			offset: pos
		});
		pos[1] -= outerHeight;
		if(pos[1] - outerHeight < -winHeihgt){
			pos[1] = 0;
			pos[0] -= outerWidth;
		}
	}

	$.msg = {};

	$.msg.log = function(config){
		config = $.extend(true, {}, defaultConfig, config);
		var $msg = $msgTpl.clone();
		$msg.hide();
		$body.append($msg);
		$msg.addClass(config.css).html(config.content).fadeIn();
		alignMsg($msg, config);
		if (config.closeWhenClick) {
			$msg.on('click', function(event){
				close($(event.target), config);
			});
		}
		if(config.duration && typeof config.duration === 'number'){
			setTimeout(function(){
				close($msg, config);
			}, config.duration);
		}
	};

	$.msg.success = function(config) {
		$.msg.log($.extend(true, {}, defaultConfig, {
			css: 'wd-ui-msg wd-ui-suc'
		},config));
	};
	$.msg.warn = function(config) {
		$.msg.log($.extend(true, {}, defaultConfig, {
			css: 'wd-ui-msg wd-ui-warn'
		},config));
	};
	$.msg.error = function(config) {
		$.msg.log($.extend(true, {}, defaultConfig, {
			css: 'wd-ui-msg wd-ui-err'
		},config));
	};
})(jQuery);