title: jQuery提示框插件——jQuery-alert
subtitle: 基于jQuery的提示框插件，提供常用的三种提示框
categories:
- 插件
tags:
- JavaScript
- jQuery
date: 2014/9/12 17:26:25
---

<escape>
<link rel="stylesheet" type="text/css" href="/css/widget/jquery-widget-min.css">
<link rel="stylesheet" type="text/css" href="/css/alert/jquery-alert-min.css">
<link rel="stylesheet" type="text/css" href="/css/message/jquery-message-min.css">
<link rel="stylesheet" type="text/css" href="/css/alert.css">
<script type="text/javascript" src="http://cdn.staticfile.org/jquery/2.1.1-rc2/jquery.js"></script>
<script type="text/javascript" src="/js/align/jquery-align-min.js"></script>
<script type="text/javascript" src="/js/widget/jquery-widget-min.js"></script>
<script type="text/javascript" src="/js/message/jquery-message-min.js"></script>
<script type="text/javascript" src="/js/alert/jquery-alert-min.js"></script>
</escape>

#简介
基于jQuery的提示框插件，提供常用的三种提示框：
* alert
* confirm
* prompt

#依赖
* jquery-widget

#实例

```javascript
$("#alert").click(function(){
    $.alert({
        content: '发生错误了～',
        modal: true,
        closeText: '关闭',
        fixed: false,
        width: 300,
        close: function(){
            $.msg.error({
                content: 'alert框关闭'
            });
        },
        open: function() {
            $.msg.log({
                content: 'alert框打开'
            });
        }
    });
});
$("#confirm").click(function(){
    $.confirm({
        content: '请问您确定要取消关注吗？',
        modal: true,
        closeText: '取消',
        okText: '确定',
        fixed: true,
        width: 300,
        close: function(){
            $.msg.error({
                content: 'confirm框关闭'
            });
        },
        ok: function(){
            $.msg.success({
                content: 'confirm框确认'
            });
        },
        open: function() {
            $.msg.log({
                content: 'confirm框打开'
            });
        }
    });
});
$("#prompt").click(function(){
    $.prompt({
        content: '请问您想叫啥？',
        modal: true,
        closeText: '取消',
        okText: '确定',
        fixed: true,
        defaultValue: 'default',
        remind: 'remind',
        width: 300,
        close: function(){
            $.msg.error({
                content: 'prompt框关闭'
            });
        },
        ok: function(val){
            $.msg.error({
                content: 'prompt框确认，输入值为：' + val
            });
        },
        open: function() {
            $.msg.log({
                content: 'prompt框打开'
            });
        }
    });
});
```

<escape>
<button id="alert" class="btn btn-open">alert</button>
<button id="confirm" class="btn btn-open">confirm</button>
<button id="prompt" class="btn btn-open">prompt</button>
<script type="text/javascript">
    $("#alert").click(function(){
        $.alert({
            content: '发生错误了～',
            modal: true,
            closeText: '关闭',
            fixed: false,
            width: 300,
            close: function(){
                $.msg.error({
                    content: 'alert框关闭'
                });
            },
            open: function() {
                $.msg.log({
                    content: 'alert框打开'
                });
            }
        });
    });
    $("#confirm").click(function(){
        $.confirm({
            content: '请问您确定要取消关注吗？',
            modal: true,
            closeText: '取消',
            okText: '确定',
            fixed: true,
            width: 300,
            close: function(){
                $.msg.error({
                    content: 'confirm框关闭'
                });
            },
            ok: function(){
                $.msg.success({
                    content: 'confirm框确认'
                });
            },
            open: function() {
                $.msg.log({
                    content: 'confirm框打开'
                });
            }
        });
    });
    $("#prompt").click(function(){
        $.prompt({
            content: '请问您想叫啥？',
            modal: true,
            closeText: '取消',
            okText: '确定',
            fixed: true,
            defaultValue: 'default',
            remind: 'remind',
            width: 300,
            close: function(){
                $.msg.error({
                    content: 'prompt框关闭'
                });
            },
            ok: function(val){
                $.msg.error({
                    content: 'prompt框确认，输入值为：' + val
                });
            },
            open: function() {
                $.msg.log({
                    content: 'prompt框打开'
                });
            }
        });
    });
</script>
</escape>

#配置
##说明
alert支持的配置有：
* content
* modal
* fixed
* css
* closeText
* width
* height
* open
* close

confirm在alert基础上增加：
* okText
* ok

prompt在confirm基础上增加：
* defaultValue
* remind

##content
提示框的内容，HTML String，默认为`''`

##modal
是否为模态提示框，Boolean，默认为`false`

<escape>
    <button class="btn btn-open" id="isModal">模态提示框</button>
    <button class="btn btn-open" id="isNotModal">非模态提示框</button>
    <script type="text/javascript">
        $("#isModal").click(function(){
            $.alert({
                content: '这是个模态alert',
                modal: true,
                closeText: '关闭',
                width: 300
            });
        });
        $("#isNotModal").click(function(){
            $.alert({
                content: '这是个非模态alert',
                modal: false,
                closeText: '关闭',
                width: 300
            });
        });
    </script>
</escape>

##fixed
是否固定在屏幕中间，Boolean，默认为`false`

<escape>
    <button class="btn btn-open" id="isFiexed">fixed提示框</button>
    <button class="btn btn-open" id="isNotFixed">非fixed提示框</button>
    <script type="text/javascript">
        $("#isFiexed").click(function(){
            $.alert({
                content: '这是个fixed alert',
                fixed: true,
                closeText: '关闭',
                width: 300,
                modal: true
            });
        });
        $("#isNotFixed").click(function(){
            $.alert({
                content: '这是个非fixed alert',
                fixed: false,
                closeText: '关闭',
                width: 300,
                modal: true
            });
        });
    </script>
</escape>

##closeText
关闭按钮的文案，String，默认为`'close'`

##okText
确认按钮的文案，String，默认为`'ok'`

仅confirm和prompt有效

##width
提示框的宽度，Number或`'auto'`，默认为`'auto'`

##height
提示框的高度，Number或`'auto'`，默认为`'auto'`

##open
提示框弹出时的回调函数，Function

##close
按下关闭按钮时的回调函数，Function

##ok
按下确定按钮时的回调函数，Function

仅confirm和prompt有效，prompt将会把输入的内容以参数的形式传入

##defaultValue
prompt输入框中的默认值，String

仅prompt有效

##remind
prompt输入框的提示信息，String

仅prompt有效

##css
自定义样式对象，默认如下：
```javascript
css: {
    panel: 'wd-ui-pn',
    content: 'wd-ui-ctn',
    footer: 'wd-ui-ft',
    close: 'wd-ui-close',
    ok: 'wd-ui-ok',
    input: 'wd-ui-ipt'
}
```

其中ok仅prompt和confirm有效，input仅prompt有效





