var gulp = require('gulp');
var sass = require('gulp-sass');

var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');

gulp.task('sass', (done) => {
  return gulp.src('src/scss/grid.scss')
    .pipe(sass())
    .pipe(gulp.dest('src/css/'))
  done();
});

gulp.task('watch', (done) => {
  gulp.watch('src/scss/**/*.scss', gulp.series('sass', 'autoprefixer'));
})

gulp.task('autoprefixer', function () {
  var autoPrefixerOptions = {
    grid: true,
    browsers: ['>1%']
  }
  return gulp.src('./src/css/*.css')
    .pipe(sourcemaps.init())
    .pipe(postcss([autoprefixer(autoPrefixerOptions)]))
    .pipe(sourcemaps.write('./sourcemaps'))
    .pipe(gulp.dest('./dest/css'));
});