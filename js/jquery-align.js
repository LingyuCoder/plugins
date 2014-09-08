(function($) {
	'use strict';
	var defaultConfig = {
		base: 'screen',
		points: ['cc', 'cc'],
		fixed: false,
		offset: [0, 0]
	};
	var $doc = $(document);
	var $win = $(window);

	function calBase(base, points, fixed) {
		var pos = {
			x: 0,
			y: 0
		};
		var offset;
		var basePoint = points[0];
		var width;
		var height = 0;
		var node;
		if ($.isFunction(base.preventDefault)) {
			if (!base.pageX) {
				base = new $.Event(base);
			}
			pos.x = base.pageX;
			pos.y = base.pageY;
			width = 0;
			height = 0;
		} else if (typeof base === 'string') {
			if (base === 'screen') {
				pos.x = 0;
				pos.y = fixed ? 0 : $doc.scrollTop();
				width = $win.width();
				height = $win.height();
			} else if (base === 'page') {
				pos.x = 0;
				pos.y = 0;
				width = $doc.width();
				height = $doc.height();
			} else {
				node = $(base);
			}
		} else if ($.isArray(base)) {
			pos.x = base[0];
			pos.y = base[1];
			width = 0;
			height = 0;
		} else if (base instanceof $) {
			node = base;
		}

		if (node) {
			offset = node.offset();
			pos.x = offset.left;
			pos.y = offset.top;
			width = node.outerWidth();
			height = node.outerHeight();
		}

		switch (basePoint.charAt(0)) {
			case 'c':
				pos.y += height / 2;
				break;
			case 'b':
				pos.y += height;
				break;
			default:
				break;
		}

		switch (basePoint.charAt(1)) {
			case 'c':
				pos.x += width / 2;
				break;
			case 'r':
				pos.x += width;
				break;
			default:
				break;
		}

		return pos;
	}

	function calOffset($ele, offset, points) {
		var pos = {
			x: offset[0],
			y: offset[1]
		};
		var width = $ele.outerWidth(true);
		var height = $ele.outerHeight(true);
		var basePoint = points[1];
		switch (basePoint.charAt(0)) {
			case 'c':
				pos.y -= height / 2;
				break;
			case 'b':
				pos.y -= height;
				break;
			default:
				break;
		}

		switch (basePoint.charAt(1)) {
			case 'c':
				pos.x -= width / 2;
				break;
			case 'r':
				pos.x -= width;
				break;
			default:
				break;
		}
		return pos;
	}

	function calParentPos(ele) {
		var cur = ele.parent();
		var offset;
		var position;
		position = cur.css('position');
		while (!cur.is('html') && position !== 'absolute' && position !== 'fixed') {
			cur = cur.parent();
			position = cur.css('position');
		}
		offset = cur.offset();
		return {
			x: offset.left,
			y: offset.top
		};
	}

	$.fn.align = function(config) {
		config = $.extend({}, defaultConfig, config);
		config.fixed = config.base === 'screen' && config.fixed;
		var self = this;
		var base = calBase(config.base, config.points, config.fixed);
		$.each(self, function(index, ele) {
			ele = $(ele);
			var offset = calOffset(ele, config.offset, config.points);
			var parent = calParentPos(ele);
			ele.css({
				position: config.fixed ? 'fixed' : 'absolute',
				left: base.x + offset.x - parent.x,
				top: base.y + offset.y - parent.y
			});
		});
	};
})(jQuery);