var gulp = require('gulp');
var inlinesource = require('gulp-inline-source');
var htmlmin = require('gulp-htmlmin');
var del = require('del');

gulp.task('minify', function() {
    gulp.src('./src/*.html')
        .pipe(inlinesource({
            compress: true
        }))
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./build/'));
});

gulp.task('copy', function() {
    gulp.src(['./src/manifest.json', './src/robots.txt', './src/sitemap.xml', './src/sw.js'])
        .pipe(gulp.dest('./build/'));
});

gulp.task('clean', function() {
    del('./build/', {force:true});
});

gulp.task('default', ['clean', 'minify', 'copy']);