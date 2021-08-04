const gulp = require('gulp');
const less = require('gulp-less');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const watchLess = require('gulp-watch-less');

gulp.task('less', function () {
    return gulp.src('./src/styles/main.less')
        .pipe(less())
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dest/css'));
});

gulp.task('watch', function () {
    return gulp.src('./src/styles/*.less')
        .pipe(watchLess('./src/styles/main.less', gulp.series('less')))
});
