const gulp = require('gulp');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');//minify js files
const minify = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');

// Compile Sass
gulp.task('sass', function (done) {
    gulp.src('src/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(minify())
        .pipe(gulp.dest('src/assets/css'));
    done();
});

// Images
gulp.task('images', () =>
    gulp.src('src/assets/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('public/images'))
);

// Watch for changes
gulp.task('watch', function () {
    gulp.watch('src/scss/**/*.scss', gulp.series('sass'));
    gulp.watch('src/assets/images/*', gulp.series('images'));
});