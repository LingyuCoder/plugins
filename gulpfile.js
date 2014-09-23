var gulp = require('gulp');
var path = require('path');
var less = require('gulp-less');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var minifyCSS = require('gulp-minify-css');
var git = require('gulp-git');

function err(error) {
    console.error(gutil.colors.red('[ERROR]: ' + error.message));
    this.emit('end');
}
gulp.task('css', function() {
    return gulp.src(['./src/**/*.less'])
        .pipe(plumber(err))
        .pipe(less({
            paths: [path.join(__dirname)],
            relativeUrls: true
        }))
        .pipe(minifyCSS({keepBreaks:true}))
        .pipe(rename(function(path) {
            path.basename += '-min';
        }))
        .pipe(gulp.dest('src'));
});

gulp.task('js', function() {
    return gulp.src(['./src/**/*.js', '!./src/**/*-min.js'])
        .pipe(plumber(err))
        .pipe(uglify())
        .pipe(rename(function(path) {
            path.basename += '-min';
        }))
        .pipe(gulp.dest('src'));
});

gulp.task('copyjs', function(){
    return gulp.src('./src/**/*-min.js')
        .pipe(gulp.dest('blog/source/js'));
});

gulp.task('copycss', function(){
    return gulp.src('./src/**/*-min.css')
        .pipe(gulp.dest('blog/source/css'));
});

gulp.task('copy', ['copycss', 'copyjs']);

gulp.task('default', ['css', 'js', 'copy']);

gulp.task('watch', function() {
    gulp.watch([
        './src/**/*.less'
    ], ['css', 'copycss']);

    gulp.watch([
        './src/**/*.js'
    ], ['js', 'copyjs']);
});