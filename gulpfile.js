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
    gulp.src(['./src/opensearch.xml', './src/manifest.json', './src/robots.txt', './src/sitemap-biester-pro.xml', './src/sitemap-paul-biester-pro.xml', './src/sitemap.xml', './src/sw.js'])
        .pipe(gulp.dest('./build/'));
    gulp.src(['./src/assets/**'])
        .pipe(gulp.dest('./build/assets/'));
});
