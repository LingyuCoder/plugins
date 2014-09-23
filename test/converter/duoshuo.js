var fs = require('fs');

var jsonData = fs.readFileSync('export-1.json', 'utf-8');
var d = JSON.parse(jsonData);
d.threads.forEach(function(obj){
    obj.thread_key += '\/';
});

fs.writeFileSync('export-2.json', JSON.stringify(d), 'utf-8');