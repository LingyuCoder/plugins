title: jQuery弹窗插件——jQuery-widget
date: 2014/9/2 17:26:25
subtitle: 一个基于jQuery的弹窗插件，用于将一段内容包装成弹窗，支持模态和拖拽
categories:
- 插件
tags:
- JavaScript
- jQuery
---

<escape>
<link rel="stylesheet" type="text/css" href="/css/widget/jquery-widget-min.css">
<link rel="stylesheet" type="text/css" href="/css/message/jquery-message-min.css">
<link rel="stylesheet" type="text/css" href="/css/widget.css">
<script type="text/javascript" src="http://cdn.staticfile.org/jquery/2.1.1-rc2/jquery.js"></script>
<script type="text/javascript" src="/js/align/jquery-align-min.js"></script>
<script type="text/javascript" src="/js/widget/jquery-widget-min.js"></script>
<script type="text/javascript" src="/js/message/jquery-message-min.js"></script>
</escape>

#简介
一个基于jQuery的弹窗插件，用于将一段内容包装成弹窗，支持模态和拖拽

##依赖
* jquery-align

#下载
[Github地址](https://github.com/LingyuCoder/jquery-widget)

#实例
```javascript
var widget = $.widget({
    content: '<p>这里是内容</p><p>这里是内容</p>',
    title: '<h2>这里是标题</h2>',
    footer: '<strong>这里是底部</strong>',
    modal: false,
    dragable: true,
    closeable: true,
    autoOpen: false,
    closeText: '点我关闭',
    align: {
        base: 'screen',
        points: ['cc', 'cc'],
        fixed: false,
        offset: [0, 0]
    },
    width: 500,
    height: 'auto',
    close: function() {
        $.msg.error({
            content: '弹窗关闭',
            duration: 3000
        });
    },
    open: function() {
        $.msg.success({
            content: '弹窗打开',
            duration: 3000
        });
    }
});
$("#open").click(function() {
    widget.open();
});
$("#close").click(function() {
    widget.close();
});
```

<escape>
<button id="open" class="btn btn-open">打开</button>
<button id="close" class="btn btn-close">关闭</button>
<script type="text/javascript">
$(function() {
    var widget = $.widget({
        content: '<p>这里是内容</p><p>这里是内容</p>',
        title: '<h2>这里是标题</h2>',
        footer: '<strong>这里是底部</strong>',
        modal: false,
        dragable: true,
        closeable: true,
        autoOpen: false,
        closeText: '点我关闭',
        align: {
            base: 'screen',
            points: ['cc', 'cc'],
            fixed: false,
            offset: [0, 0]
        },
        width: 500,
        height: 'auto',
        close: function() {
            $.msg.error({
                content: '弹窗关闭',
                duration: 3000
            });
        },
        open: function() {
            $.msg.success({
                content: '弹窗打开',
                duration: 3000
            });
        }
    });
    $("#open").click(function() {
        widget.open();
    });
    $("#close").click(function() {
        widget.close();
    });
});
</script>
</escape>

#配置
##content
内容区的HTML，支持HTML Stirng、HTMLElement、jQuery对象或者false，默认为 ''空字符串，为 false将隐藏区域

##title
标题栏的HTML，支持HTML Stirng、HTMLElement、jQuery对象或者false，默认为 ''空字符串，为 false将隐藏区域

##footer
底部的HTML，支持HTML Stirng、HTMLElement、jQuery对象或者false，默认为 ''空字符串，为 false将隐藏区域

##modal
是否为模态弹窗，Boolean，默认为 false

<escape>
<button id="openModalWidget" class="btn btn-open">打开模态弹窗</button>
<script type="text/javascript">
$(function() {
    var widget = $.widget({
        content: '<p>一些内容</p>',
        title: '<h2>模态弹窗实例</h2>',
        modal: true,
        dragable: true,
        closeable: true,
        autoOpen: false,
        closeText: '关闭模态弹窗',
        align: {
            base: 'screen',
            points: ['cc', 'cc'],
            fixed: false,
            offset: [0, 0]
        },
        width: 500,
        height: 'auto',
        close: function() {
            $.msg.error({
                content: '模态弹窗关闭',
                duration: 3000
            });
        },
        open: function() {
            $.msg.success({
                content: '模态弹窗打开',
                duration: 3000
            });
        }
    });
    $("#openModalWidget").click(function() {
        widget.open();
    });
}); 
</script>
</escape>

##dragable
是否可通过点击标题栏进行拖拽，Boolean，仅在title不为false时候有效，默认为 true

##closeable
是否在底部生成关闭按钮，Boolean，默认为 true

##closeText
closeable为true时有效，为关闭按钮的文案

<escape>
<button id="noCloseWidgetOpen" class="btn btn-open">打开</button>
<button id="noCloseWidgetClose" class="btn btn-close">关闭</button>
<script type="text/javascript">
$(function() {
    var widget = $.widget({
        content: '<p>这个对话框没有关闭按钮，需要关闭请点击“关闭”</p>',
        title: '<h2>无关闭按钮</h2>',
        footer: '<p>这里是Footer</p>',
        modal: false,
        dragable: true,
        closeable: false,
        autoOpen: false,
        align: {
            base: 'screen',
            points: ['cc', 'cc'],
            fixed: false,
            offset: [0, 0]
        },
        close: function() {
            $.msg.error({
                content: '弹窗关闭',
                duration: 3000
            });
        },
        open: function() {
            $.msg.success({
                content: '弹窗打开',
                duration: 3000
            });
        }
    });
    $("#noCloseWidgetOpen").click(function() {
        widget.open();
    });
    $("#noCloseWidgetClose").click(function() {
        widget.close();
    });
});
</script>
</escape>

##align
弹窗的位置，和jquery-align规则相同，默认为：
```javascript
align: {
    base: 'screen',
    points: ['cc', 'cc'],
    fixed: false,
    offset: [0, 0]
}
```

<escape>
<button id="alignOpen" class="btn btn-open">显示在按钮旁边</button>
<button id="fixedOpen" class="btn btn-open">固定在屏幕上</button>
<script type="text/javascript">
$(function() {
    var widget = $.widget({
        content: '<p>这个对话框显示在按钮旁边</p>',
        title: '<h2>显示在按钮旁边</h2>',
        footer: '<p>这里是Footer</p>',
        modal: false,
        dragable: true,
        closeable: true,
        autoOpen: false,
        closeText: '关闭',
        align: {
            base: '#alignOpen',
            points: ['tc', 'bc'],
            fixed: false
        },
        close: function() {
            $.msg.error({
                content: '弹窗关闭',
                duration: 3000
            });
        },
        open: function() {
            $.msg.success({
                content: '弹窗打开',
                duration: 3000
            });
        }
    });
    $("#alignOpen").click(function() {
        widget.open();
    });

    var widget2 = $.widget({
        content: '<p>这个对话框固定在屏幕中间</p>',
        title: '<h2>固定在屏幕中间</h2>',
        footer: '<p>这里是Footer</p>',
        modal: true,
        dragable: true,
        closeable: true,
        autoOpen: false,
        closeText: '关闭',
        align: {
            base: 'screen',
            points: ['cc', 'cc'],
            fixed: true
        },
        close: function() {
            $.msg.error({
                content: '弹窗关闭',
                duration: 3000
            });
        },
        open: function() {
            $.msg.success({
                content: '弹窗打开',
                duration: 3000
            });
        }
    });
    $("#fixedOpen").click(function() {
        widget2.open();
    });
});
</script>
</escape>

##width
弹窗的宽度，Number或 'auto'，默认为 auto

##height
弹窗的高度，Number或 'auto'，默认为 auto

##open
弹窗打开时执行，Function

##close
弹窗关闭时执行，Function

##css
用于自定义弹窗样式的对象，默认值如下：

```javascript
css: {
    panel: 'wd-ui-pn',
    title: 'wd-ui-tt',
    content: 'wd-ui-ctn',
    footer: 'wd-ui-ft',
    close: 'wd-ui-close'
}
```

* panel: 弹窗窗体使用的样式
* title: 标题栏使用的样式
* content: 内容区域使用的样式
* footer: 底部使用的样式
* close: 关闭按钮使用的样式
默认样式来自 jquery-widget.css

#方法
##open
打开弹窗，并触发open事件

##close
关闭弹窗，并触发close事件

##destroy
销毁弹窗

##isOpened
检测弹窗是否被打开

