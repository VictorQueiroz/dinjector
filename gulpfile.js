var gulp = require('gulp');
var umd = require('gulp-umd');
var concat = require('gulp-concat');

gulp.task('build', function () {
	gulp.src('src/**/*.js')
		.pipe(concat('dinjector.js'))
		.pipe(gulp.dest('dist'));
});