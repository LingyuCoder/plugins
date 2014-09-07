title: jQuery元素定位插件——jQuery-align
date: 2014/8/30 17:26:25
---

<link rel="stylesheet" type="text/css" href="/css/align.css">
<script type="text/javascript" src="http://cdn.staticfile.org/jquery/2.1.1-rc2/jquery.js"></script>
<script type="text/javascript" src="/js/jquery-align.js"></script>

#简介
一个使用jQuery元素定位插件，用于将元素快速进行定位，目前可以将如下内容作为基准定位：
* 目标元素
* 当前屏幕
* 整个页面
* 鼠标事件
* 坐标

##依赖
* jQuery

#使用
```javascript
$(".someNodes").align({
	base: '#base',
	points: ['tr', 'tl'],
	offset: [0, 0]
});
```

#配置
##base
元素位置的基准元素，提供如下类型，默认为`'screen'`
###jQuery选择器或节点
```javascript
$('.demo-node-jq').align({
	base: '.demo-base-jq'
});
```
<div class="demo-node demo-node-jq">我会根据蓝方块来定位，我俩中心会重合</div>
<div class="demo-base demo-base-jq"></div>
<button id="btn-show-jq" class="btn-show">显示</button>
<button id="btn-hide-jq" class="btn-hide">隐藏</button>
<script type="text/javascript">
	$(function(){
		var node = $('.demo-node-jq').hide();
		$('#btn-show-jq').click(function(){
			node.align({
				base: '.demo-base-jq'
			});
			node.show();
		});
		$('#btn-hide-jq').click(function(){
			node.hide();
		});
	})
</script>

###当前屏幕
```javascript
$('.demo-node-screen').align({
	base: 'screen'
});
```

<div class="demo-node demo-node-screen">显示在屏幕正中间，但不随着页面滚动而移动</div>
<button id="btn-show-screen" class="btn-show">显示</button>
<button id="btn-hide-screen" class="btn-hide">隐藏</button>
<script type="text/javascript">
	$(function(){
		var node = $('.demo-node-screen').hide();
		$('#btn-show-screen').click(function(){
			node.show().align({
				base: 'screen'
			});
		});
		$('#btn-hide-screen').click(function(){
			node.hide();
		});
	})
</script>

###整个页面
```javascript
$('.demo-node-page').align({
	base: 'page',
	points: ['tl', 'tl']
});
```

<div class="demo-node demo-node-page">显示在页头右上角</div>
<button id="btn-show-page" class="btn-show">显示</button>
<button id="btn-hide-page" class="btn-hide">隐藏</button>
<p>将显示在页面右上角</p>
<script type="text/javascript">
	$(function(){
		var node = $('.demo-node-page').hide();
		$('#btn-show-page').click(function(){
			node.show().align({
				base: 'page',
				points: ['tr', 'tr']
			});
			$(window).scrollTop(0);
		});
		$('#btn-hide-page').click(function(){
			node.hide();
		});
	})
</script>

###鼠标事件
```javascript
var fn = function(event){
	node.align({
		base: event
	});
};
$('.demo-node-mouse').click(function(){
	node.show();
	$(document).on('click', fn);
});
$('.demo-node-mouse').click(function(){
	node.hide();
	$(document).off('click', fn);
});
```
<div class="demo-node demo-node-mouse">点击空白处，我将飞过去</div>
<button id="btn-show-mouse" class="btn-show">显示</button>
<button id="btn-hide-mouse" class="btn-hide">隐藏</button>
<script type="text/javascript">
	$(function(){
		var node = $('.demo-node-mouse').hide();
		var fn = function(event){
			node.align({
				base: event
			});
		};
		
		$('#btn-show-mouse').click(function(){
			node.show();
			$(document).on('click', fn);
		});
		$('#btn-hide-mouse').click(function(){
			node.hide();
			$(document).off('click', fn);
		});
	})
</script>

###页面相对坐标
```javascript
$('.demo-node-point').align({
	base: [400, 3300]
});
```
<div class="demo-node demo-node-point">显示坐标为x:400  y:3300</div>
<button id="btn-show-point" class="btn-show">显示</button>
<button id="btn-hide-point" class="btn-hide">隐藏</button>
<script type="text/javascript">
	$(function(){
		var node = $('.demo-node-point').hide();
		$('#btn-show-point').click(function(){
			node.show();
			node.align({
				base: [400, 3300]
			});
		});
		$('#btn-hide-point').click(function(){
			node.hide();
		});
	})
</script>

##基准点名称
含有两个字符串的数组，前者为参照元素的基准点名称，后者为被定位元素的基准点名称，这两个基准点将重合。默认为:`['cc', 'cc']`

基准点名称如下图所示：

![基准点名称](http://skyinlayerblog.qiniudn.com/github%2Falign-points.png)

```javascript
$('.demo-node-points').align({
	base: '.demo-base-points',
	points: ['cc', 'tl']
});
```
<div class="demo-node demo-node-points">我的左上角将和蓝方块的中心重合</div>
<div class="demo-base demo-base-points"></div>
<button id="btn-show-points" class="btn-show">显示</button>
<button id="btn-hide-points" class="btn-hide">隐藏</button>
<script type="text/javascript">
	$(function(){
		var node = $('.demo-node-points').hide();
		$('#btn-show-points').click(function(){
			node.show().align({
				base: '.demo-base-points',
				points: ['cc', 'tl']
			});
		});
		$('#btn-hide-points').click(function(){
			node.hide();
		});
	})
</script>


##offset
含有两个数字的数组，前者为x轴偏移，后者为y轴偏移，默认为: `[0, 0]`
```javascript
$('.demo-node-offset').align({
	base: '.demo-base-offset',
	points: ['tl', 'tl']
	offset: [10, 10]
});
```

<div class="demo-node demo-node-offset">我的左上角，将在蓝方块的左上角右下10px的位置</div>
<div class="demo-base demo-base-offset"></div>
<button id="btn-show-offset" class="btn-show">显示</button>
<button id="btn-hide-offset" class="btn-hide">隐藏</button>
<script type="text/javascript">
	$(function(){
		var node = $('.demo-node-offset').hide();
		$('#btn-show-offset').click(function(){
			node.show().align({
				base: '.demo-base-offset',
				points: ['tl', 'tl'],
				offset: [10, 10]
			});
		});
		$('#btn-hide-offset').click(function(){
			node.hide();
		});
	})
</script>

##fixed
仅当base为`screen`时有效，表示是否固定与屏幕，默认为`false`
```javascript
$('.demo-node-fixed').align({
	base: 'screen',
	fixed: true
});
```

<div class="demo-node demo-node-fixed">我会一直显示在屏幕中间，记得点关闭</div>
<button id="btn-show-fixed" class="btn-show">显示</button>
<button id="btn-hide-fixed" class="btn-hide">隐藏</button>
<script type="text/javascript">
	$(function(){
		var node = $('.demo-node-fixed').hide();
		$('#btn-show-fixed').click(function(){
			node.show().align({
				base: 'screen',
				fixed: true
			});
		});
		$('#btn-hide-fixed').click(function(){
			node.hide();
		});
	})
</script>
