var path = require("path");
module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  // 构建任务配置
  grunt.initConfig({
    //读取package.json的内容，形成个json数据
    pkg: grunt.file.readJSON('package.json'),

    gta: {
      option: {
        cwd: './src/align/',
        stderr: true,
        stdout: true
      },
      add: {
        command: 'add --all',
      },
      commit: {
        command: 'commit -m "auto commit"'
      },
      push: {
        command: 'push origin master'
      }
    }
  });

  grunt.registerTask('align', ['gta:add', 'gta:commit', 'gta:push']);

  grunt.registerTask('default', ['gta:add_align', 'gta:commit_align', 'gta:push_align']);

  grunt.registerTask('publish', ['default']);
};