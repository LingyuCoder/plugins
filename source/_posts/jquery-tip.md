title: jQuery提示插件——jQuery-tip
date: 2014/9/07 17:26:25
---

<escape>
<link rel="stylesheet" type="text/css" href="/css/widget/jquery-widget-min.css">
<link rel="stylesheet" type="text/css" href="/css/tip/jquery-tip-min.css">
<link rel="stylesheet" type="text/css" href="/css/tip.css">

<script type="text/javascript" src="/js/align/jquery-align-min.js"></script>
<script type="text/javascript" src="/js/tip/jquery-tip-min.js"></script>
</escape>

#简介
一个基于jQuery的消息提示插件

##依赖
* jquery-align

#下载
[Github地址](https://github.com/LingyuCoder/jquery-tip)

#实例
```javascript
$('#clicktip').tip({
    content: '这是一条点击提示',
    trigger: 'click'
});
$('#hovertip').tip({
    content: '这是一条悬停提示',
    trigger: 'hover'
});
$('#alwaystip').tip({
    content: '这条会一直显示',
    trigger: 'always'
});
```

<escape>
<button id="clicktip" class="btn btn-open">点击显示</button>
<button id="hovertip" class="btn btn-open" style="margin-left: 100px">悬停显示</button>
<button id="alwaystip" class="btn btn-open" style="margin-left: 100px">一直显示</button>
<script type="text/javascript">
$('#clicktip').tip({
    content: '这是一条点击提示',
    trigger: 'click'
});
$('#hovertip').tip({
    content: '这是一条悬停提示',
    trigger: 'hover'
});
$('#alwaystip').tip({
    content: '这条会一直显示',
    trigger: 'always'
});
</script>
</escape>
    
#配置
##content
定义需要展示的内容，可以为HTML字符串，默认为`''`

##trigger
触发提示的操作类型，可为`'hover'`或`'click'`或'`always`'，为always时将一直显示，默认为`'hover'`

##align
提示框的位置，使用jQuery-align定位，增加一个base类型`'self'`，以触发提示的元素为基准。默认为：
```javascript
align: {
    base: 'self',
    points: ['bc', 'tc'],
    fixed: false,
    offset: [0, 0]
}
```

<escape>
<button id="alignClick" class="btn btn-open">帮助</button>
<br>
<br>
<div id="alignSquare" style="width: 100px;height: 100px;background: cornflowerblue;line-height: 100px;color:#fff">点上面的帮助</div>
<script type="text/javascript">
    $('#alignClick').tip({
        content: '这是一个蓝色的方块',
        align: {
            base: '#alignSquare',
            points: ['cr', 'cl'],
            offset: [10, 0]
        },
        trigger: 'click',
        arrow: {
            type: 'left',
            size: 10,
            color: 'chocolate',
            offset: 0
        },
        css: {
            tip: 'sample-ui-tip',
            arrow: 'sample-ui-tip-arrow'
        }
    });
</script>
</escape>

##arrow
提示框箭头设置，为对象或者`false`，若为false，则不显示箭头。为对象时有如下几个配置：
* type: String，箭头的位置，可选为`'top'`、`'bottom'`、`'left'`、`'right'`
* size: Number，箭头的大小
* color: Color String, 箭头的颜色，规则同CSS
* offset: Number，箭头的位置偏移，有如下两种情况：
    1. type为`'top'`或`'bottom'`时，offset为正数将向右偏移，为负数则向左偏移
    2. type为`'left'`或`'right'`时，offset为正数将向下偏移，为负数则向上偏移

默认为`false`，不显示箭头

PS：配合align选项能够实现灵活的提示位置

```javascript
$('#arrowTop').tip({
    content: '我在下面',
    align: {
        base: 'self',
        points: ['bc', 'tc'],
        offset: [0, 10]
    },
    trigger: 'always',
    arrow: {
        type: 'top',
        size: 10,
        color: 'chocolate',
        offset: 0
    },
    css: {
        tip: 'sample-ui-tip',
        arrow: 'sample-ui-tip-arrow'
    }
});
```

<escape>
<br>
<br>
<button id="arrowTop" class="btn btn-open">带箭头提示</button>
<button id="arrowBottom" class="btn btn-open">带箭头提示</button>
<button id="arrowLeft" class="btn btn-open" style="margin-left: 100px">带箭头提示</button>
<button id="arrowRight" class="btn btn-open" style="margin-right: 100px">带箭头提示</button>
<br>
<br>
<br>
<script type="text/javascript">
    $('#arrowTop').tip({
        content: '我在下面',
        align: {
            base: 'self',
            points: ['bc', 'tc'],
            offset: [0, 10]
        },
        trigger: 'always',
        arrow: {
            type: 'top',
            size: 10,
            color: 'chocolate',
            offset: 0
        },
        css: {
            tip: 'sample-ui-tip',
            arrow: 'sample-ui-tip-arrow'
        }
    });
    $('#arrowBottom').tip({
        content: '我在上面',
        align: {
            base: 'self',
            points: ['tc', 'bc'],
            offset: [0, -10]
        },
        trigger: 'always',
        arrow: {
            type: 'bottom',
            size: 10,
            color: 'chocolate',
            offset: 0
        },
        css: {
            tip: 'sample-ui-tip',
            arrow: 'sample-ui-tip-arrow'
        }
    });
    $('#arrowLeft').tip({
        content: '我在左边',
        align: {
            base: 'self',
            points: ['cl', 'cr'],
            offset: [-10, 0]
        },
        trigger: 'always',
        arrow: {
            type: 'right',
            size: 10,
            color: 'chocolate',
            offset: 0
        },
        css: {
            tip: 'sample-ui-tip',
            arrow: 'sample-ui-tip-arrow'
        }
    });
    $('#arrowRight').tip({
        content: '我在右边',
        align: {
            base: 'self',
            points: ['cr', 'cl'],
            offset: [10, 0]
        },
        trigger: 'always',
        arrow: {
            type: 'left',
            size: 10,
            color: 'chocolate',
            offset: 0
        },
        css: {
            tip: 'sample-ui-tip',
            arrow: 'sample-ui-tip-arrow'
        }
    });

</script>
</escape>

##duration
仅当trigger为`'click'`的时候启用，点击后提示存在的时间，到时见会自动消失，为`false`表示不会自动消失，默认为`false`

```javascript
$('#duraClick').tip({
    content: '五秒后我自己会消失',
    align: {
        base: 'self',
        points: ['tc', 'bc'],
        offset: [0, -10]
    },
    trigger: 'click',
    duration: 5000,
    arrow: {
        type: 'bottom',
        size: 10,
        color: 'chocolate',
        offset: 0
    },
    css: {
        tip: 'sample-ui-tip',
        arrow: 'sample-ui-tip-arrow'
    }
});
```

<escape>
<button id="duraClick" class="btn btn-open">点我</button>
<script type="text/javascript">
    $('#duraClick').tip({
        content: '五秒后我自己会消失',
        align: {
            base: 'self',
            points: ['tc', 'bc'],
            offset: [0, -10]
        },
        trigger: 'click',
        duration: 5000,
        arrow: {
            type: 'bottom',
            size: 10,
            color: 'chocolate',
            offset: 0
        },
        css: {
            tip: 'sample-ui-tip',
            arrow: 'sample-ui-tip-arrow'
        }
    });
</script>
</escape>

#公用tip
可以通过jQuery选择器选择多个对象，他们将公用一个tip

<escape>
<button class="btn btn-open btn-common-click btn-1">点击公用tip</button>
<button class="btn btn-open btn-common-click btn-2">点击公用tip</button>
<button class="btn btn-open btn-common-click btn-3">点击公用tip</button>
<script type="text/javascript">
    $('.btn-common-click').tip({
        content: '我在右边',
        align: {
            base: 'self',
            points: ['cr', 'cl'],
            offset: [10, 0]
        },
        trigger: 'click',
        arrow: {
            type: 'left',
            size: 10,
            color: 'chocolate',
            offset: 0
        },
        css: {
            tip: 'sample-ui-tip',
            arrow: 'sample-ui-tip-arrow'
        }
    });
</script>
</escape>

##css
一个对象，用于提供自定义的css，默认为：
```javascript
css: {
    tip: 'wd-ui-tip',
    arrow: 'wd-ui-tip-arrow'
}
```




