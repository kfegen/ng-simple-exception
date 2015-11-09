/// <vs BeforeBuild='scripts' AfterBuild='less' SolutionOpened='watchsl' />
var gulp = require('gulp');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}
gulp.task('scripts', function () {
  return gulp.src(['interceptor/*.js'])
    .pipe(babel({
          presets: ['es2015']
      })).on('error', handleError)
    .pipe(concat('ng-simple-exception.min.js'))
    .pipe(uglify()).on('error', gutil.log)
    .pipe(gulp.dest('../build/'));
});

gulp.task('default', ['scripts']);
