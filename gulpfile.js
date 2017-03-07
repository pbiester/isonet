var gulp = require('gulp');
var inlinesource = require('gulp-inline-source');
var htmlmin = require('gulp-htmlmin');
var del = require('del');

gulp.task('default', function() {
    del.sync('./build', {force:true});
    gulp.src('./src/*.html')
        .pipe(inlinesource({
            compress: true
        }))
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./build/'));
    gulp.src(['./src/manifest.json', './src/robots.txt', './src/sitemap.xml', './src/sw.js'])
        .pipe(gulp.dest('./build/'));
    gulp.src(['./assets/**'])
        .pipe(gulp.dest('./build/assets/'));
});
