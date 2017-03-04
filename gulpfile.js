var gulp = require('gulp');
var inlinesource = require('gulp-inline-source');
var htmlmin = require('gulp-htmlmin');

gulp.task('minify', function() {
    gulp.src('src/*.html')
        .pipe(inlinesource({
            compress: true
        }))
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('.'))
});

gulp.task('default', [ 'minify' ]);