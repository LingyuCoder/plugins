(function($) {
	'use strict';
	var zIndex = 1000000;
	var defaultConfig = {
		content: '',
		title: '',
		footer: '',
		modal: false,
		css: {
			panel: 'wd-ui-pn',
			title: 'wd-ui-tt',
			content: 'wd-ui-ctn',
			footer: 'wd-ui-ft',
			close: 'wd-ui-close'
		},
		dragable: true,
		closeable: true,
		autoOpen: true,
		closeText: 'close',
		align: {
			base: 'screen',
			points: ['cc', 'cc'],
			fixed: false,
			offset: [0, 0]
		},
		width: 'auto',
		height: 'auto',
		close: function() {},
		open: function() {},
	};

	var $body = $('body');
	var $win = $(window);
	var $doc = $(document);
	var $tpl = $('<div class="wd-pn"><div class="wd-tt"></div><div class="wd-ctn"></div><div class="wd-ft"></div></div>');

	var isDOM = (typeof HTMLElement === 'object') ?
		function(obj) {
			return obj instanceof HTMLElement;
		} :
		function(obj) {
			return obj && typeof obj === 'object' && obj.nodeType === 1 && typeof obj.nodeName === 'string';
		};

	function draw($ctn, content) {
		if (content) {
			if (typeof content === 'string') {
				$ctn.html(content);
			} else if ((content instanceof $) || isDOM(content)) {
				$ctn.append(content);
			}
		} else if (content === false) {
			$ctn.remove();
		}
	}

	function initWidget($widget, config) {
		var css = config.css;
		var $ctn = $widget.find('.wd-ctn');
		var $tt = $widget.find('.wd-tt');
		var $ft = $widget.find('.wd-ft');
		var title = config.title;
		var content = config.content;
		var footer = config.footer;
		var isOpen = false;

		$widget.addClass(css.panel);
		$widget.css({
			'z-index': ++zIndex
		});

		draw($tt, title);
		draw($ctn, content);
		draw($ft, footer);

		$tt.addClass(css.title);
		$ctn.addClass(css.content);
		$ft.addClass(css.footer);

		$ctn.css({
			'width': config.width,
			'height': config.height,
			'min-width': config.width,
			'min-height': config.height
		});

		if (config.closeable) {
			var $close = $('<button class="wd-close">' + config.closeText + '</button>');
			$close.on('click', function(event) {
				$widget.close();
			}).addClass(css.close);
			$ft.append($close);
		}
		if (config.dragable && !config.align.fixed) {
			bindDrag($widget);
		}

		var modal;
		if (config.modal) {
			modal = $('<div class="wd-ui-modal"></div>');
			modal.width($win.width());
			modal.height($win.height());
			modal.click(function(event) {
				event.stopPropagation();
			});
			modal.hide();
			$body.append(modal);
		}

		var oldHide = $widget.hide;
		$widget.hide = function() {
			oldHide.call($widget);
			if (config.modal) {
				modal.hide();
			}
		};

		var oldShow = $widget.show;
		$widget.show = function() {
			oldShow.call($widget);
			
			$widget.align(config.align);
			$widget.css('min-width', $widget.width());
			if (config.modal) {
				modal.show().align({
					base: 'screen',
					fixed: true
				});
			}
		};

		$widget.open = function() {
			if(isOpen){
				return;
			}
			isOpen = !isOpen;
			$widget.show();
			config.open.call($widget);
		};
		$widget.close = function() {
			if(!isOpen){
				return;
			}
			isOpen = !isOpen;
			$widget.hide();
			config.close.call($widget);
		};
		$widget.isOpened = function(){
			return isOpen;
		};

		$widget.destroy = function() {
			$widget.remove();
		};
		$widget.on('click', function() {
			$widget.css('z-index', ++zIndex);
		});

		$body.append($widget);

		if (config.autoOpen) {
			$widget.open();
		} else {
			$widget.hide();
			if (config.modal) {
				modal.hide();
			}
		}
	}

	function bindDrag($widget) {
		var $tt = $widget.find('.wd-tt');
		var originMouse = {};
		var originPos = {};

		function preventSelect(event) {
			event.preventDefault();
			event.stopPropagation();
		}

		function mousedown(event) {
			var offset = $(event.target).offset();
			originMouse.x = event.pageX;
			originMouse.y = event.pageY;
			originPos.x = offset.left;
			originPos.y = offset.top;
			$doc.on({
				'mousemove': mousemove,
				'mouseup': mouseup,
				'selectstart': preventSelect
			});
			$tt.addClass('wd-ui-move');
		}

		function mousemove(event) {
			var offset = {
				x: event.pageX - originMouse.x,
				y: event.pageY - originMouse.y
			};
			var curPos = {
				x: originPos.x + offset.x,
				y: originPos.y + offset.y
			};
			$widget.align({
				base: [curPos.x, curPos.y],
				points: ['cc', 'tl']
			});
		}

		function mouseup() {
			$doc.off({
				'mousemove': mousemove,
				'mouseup': mouseup,
				'selectstart': preventSelect
			});
			$tt.removeClass('wd-ui-move');
		}

		$tt.on('mousedown', mousedown);
	}

	$.widget = function(config) {
		config = $.extend({}, defaultConfig, config);
		var $widget = $tpl.clone();
		initWidget($widget, config);
		return $widget;
	};
})(jQuery);