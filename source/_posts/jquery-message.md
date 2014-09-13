title: jQuery消息提示插件——jQuery-message
date: 2014/9/07 17:26:25
---

<escape>
<link rel="stylesheet" type="text/css" href="/css/widget/jquery-widget-min.css">
<link rel="stylesheet" type="text/css" href="/css/message/jquery-message-min.css">
<link rel="stylesheet" type="text/css" href="/css/message.css">

<script type="text/javascript" src="/js/align/jquery-align-min.js"></script>
<script type="text/javascript" src="/js/message/jquery-message-min.js"></script>
</escape>

#简介
一个基于jQuery的消息提示插件，提示出现在右下角

##依赖
* jquery-align

#下载
[Github地址](https://github.com/LingyuCoder/jquery-message)

#实例
```javascript
//普通消息
$.msg.log({
    content: '你的狗出去玩了',
    duration: 5000
});

//警告消息
$.msg.warn({
    content: '警告：你的狗和邻居的狗正在对视',
    duration: 5000
});

//错误消息
$.msg.error({
    content: '你的狗和邻居的狗打起来了！',
    duration: 5000
});

//成功消息
$.msg.success({
    content: '你的狗打赢了，凯旋而归！',
    duration: 5000
});
```

<escape>
<button id="log" class="btn btn-open">提示</button>
<button id="warn" class="btn btn-open">警告</button>
<button id="error" class="btn btn-open">错误</button>
<button id="success" class="btn btn-open">成功</button>
<script type="text/javascript">
    $('#success').click(function(){
        $.msg.success({
            content: '你的狗打赢了，凯旋而归！',
            duration: 5000,
            closeWhenClick: true
        });
    });
    $('#error').click(function(){
        $.msg.error({
            content: '你的狗和邻居的狗打起来了！',
            duration: 5000,
            closeWhenClick: true
        });
    });
    $('#warn').click(function(){
        $.msg.warn({
            content: '警告：你的狗和邻居的狗正在对视',
            duration: 5000,
            closeWhenClick: true
        });
    });
    $('#log').click(function(){
        $.msg.log({
            content: '你的狗出去玩了',
            duration: 5000,
            closeWhenClick: true
        });
    });
</script>
</escape>

#配置
##content
自定义展示的内容，为可以为HTML字符串

##duration
消息展示的时间，默认为5000，如果为`false`，则不会自动关闭

##closeWhenClick
展示的消息能否通过点击来关闭，默认为`true`

##css
消息的自定义样式，默认为`'wd-ui-msg wd-ui-log'`，样式来自`jquery-message.css`

```javascript
$.msg.error({
    content: '你的狗出去玩走丢了，点击这里前去寻找',
    duration: false,
    closeWhenClick: true,
    css: 'sample-ui-msg sample-ui-err'
});
```

<escape>
<button id="noAutoCloseBtn" class="btn btn-open">非自动关闭消息</button>
<script type="text/javascript">
    $('#noAutoCloseBtn').click(function(){
        $.msg.error({
            content: '你的狗出去玩走丢了，点击这里前去寻找',
            duration: false,
            closeWhenClick: true,
            css: 'sample-ui-msg sample-ui-err'
        });
    });
</script>
</escape>




