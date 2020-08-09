var gulp = require('gulp');
var inlinesource = require('gulp-inline-source');
var htmlmin = require('gulp-htmlmin');
var del = require('del');

function clean(done) {
    del.sync('./build', {force:true});
    done();
}

gulp.task('default', function(done) {
    gulp.series(clean);
    gulp.src('./src/*.html')
        .pipe(inlinesource({
            compress: true
        }))
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./build/'));
    gulp.src(['./src/opensearch.xml', './src/manifest.json', './src/robots.txt', './src/sw.js'])
        .pipe(gulp.dest('./build/'));
    gulp.src(['./src/assets/**'])
        .pipe(gulp.dest('./build/assets/'));
    done();
});
