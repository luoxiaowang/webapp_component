var gulp = require('gulp');
var path = require('path');
var less = require('gulp-less');
var concat = require('gulp-concat');
var htmlmin = require('gulp-htmlmin');
var minifyCSS = require('gulp-minify-css');
var babel = require('gulp-babel');
var sourcemaps = require("gulp-sourcemaps");
var clean = require('gulp-clean');
var template = require('gulp-underscore-template');
var server = require('gulp-server-livereload');


/**
 * 初始化
 */
gulp.task('init', ['less', 'es6']);

/**
 * 启动本地服务器
 */
gulp.task('webserver', ['init'], function () {
    gulp.src('./')
        .pipe(server({
            port: 3000,
            livereload: {
                enable: true,
                filter: function (fileName, cb) {
                    var reg = /\.idea|\.git|DS_Store/ig;
                    cb(!(reg.test(fileName)));
                }
            },
            directoryListing: true
        }));
});

/**
 * 启动服务
 */
gulp.task('run', ['webserver'], function (e) {
    var watchless = gulp.watch(['./less/*/*.less'], ['less']);
    watchless.on('change', function (event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running less tasks...');
    });

    var watches6 = gulp.watch(['./es6/*/*.js'], ['es6']);
    watches6.on('change', function (event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running es6 tasks...');
    });
});

gulp.task('es6', function () {
    return gulp.src('es6/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('js'));
});

gulp.task('less', function () {
    gulp.src('./less/*/*.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(sourcemaps.write('./maps'))
        .on('error', function(e){console.log(e)})
        .pipe(gulp.dest('./css/'));
});

gulp.task('template', function () {
    return gulp.src('./templates/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true,
            conservativeCollapse: true
        }))
        .pipe(template())
        .pipe(concat('templates.js'))
        .pipe(gulp.dest('./js/util'));
});

/**
 * 清除编译的文件
 */
gulp.task('clean', function () {
    gulp.src(['./css','./build'], {read: false})
        .pipe(clean());
});

/**
 * 构建
 * 构建前一定要先clean
 */
gulp.task('build', ['init'], function (cb) {
    gulp.src('./css/*/*.css').pipe(minifyCSS()).pipe(gulp.dest('./build/css/'));
    gulp.src('./build/css/maps', {read: false}).pipe(clean());
    gulp.src('./html/*.html').pipe(gulp.dest('./build/html/'));
    gulp.src('./js/*/*.js').pipe(gulp.dest('./build/js/'));
    gulp.src('./images/*/*.*').pipe(gulp.dest('./build/images/'));
});