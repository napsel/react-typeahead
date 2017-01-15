var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('build', function () {
    return gulp.src('./src/**')
        .pipe(babel({
            presets: ['react']
        }))
        .pipe(gulp.dest('./lib'));
});

gulp.task('default', ['build']);
