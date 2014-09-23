var fs = require('fs');
var path = require('path');

var archives = fs.readdirSync(path.join(__dirname, 'achieve'));

archives.forEach(function(src){
    if(src.indexOf('.md') === -1){
        return;
    }
    var date = src.split('-');
    var content = fs.readFileSync(path.join(__dirname, 'achieve/' + src), 'utf-8');

    content = content.replace(/\{%\s*(\w+)\s*%\}/g, '');

    var contents = content.split('---');
    var result = '';
    var menu = false;
    contents.forEach(function(ctx){
        if(!ctx.trim()) {
            return;
        }
        if(!menu) {
            menu = !menu;
            var rawParam = ctx.split('\n');
            var params = {};
            rawParam.forEach(function(rawKv){
                var kv = rawKv.split(':');
                if(kv[0].trim()){
                    kv[1] = kv[1].trim();
                    params[kv[0]] = kv[1];
                    var rgRst;
                    if((rgRst = kv[1].match(/\[(.*)\]/))) {
                        var values = rgRst[1].split(',');
                        values = values.map(function(value){
                            return value.trim();
                        });
                        params[kv[0]] = values;
                    }
                }
            });
            for(var key in params) {
                var keyMap = {
                    subTitle: 'subtitle',
                    desc: 'description'
                };
                result += (keyMap[key] || key) + ': ';
                if(Array.isArray(params[key])) {
                    result += '\n';
                    params[key].forEach(function(value){
                        result += '- ' + value + '\n';
                    });
                } else {
                    result += params[key] + '\n';
                }
            }
            result += 'date: ' + date.slice(0, 3).join('/') + '\n';

        } else {
            result += '---';
            result += ctx;
        }
    });
    fs.writeFileSync(path.join(__dirname, 'build/' + date.slice(3).join('-')), result, 'utf-8');
});


//console.log(content);