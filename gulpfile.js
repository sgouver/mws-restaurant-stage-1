var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    imageResize = require('gulp-image-resize');

gulp.task('default', function() {
  // place code for your default task here
});

//image compression
gulp.task('imageComp', function() {
    gulp.src('img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('img/comp'));
});

//image resize
gulp.task('imageRes', function () {
  gulp.src('img/comp/*')
    .pipe(imageResize({
      width : 50,
      height : 50,
      crop : false,
      upscale : false
    }))
    .pipe(gulp.dest('img/comp_mob'));
});

//image resize percentage
gulp.task('percentage', function() {
  gulp.src('img/comp/*')
    .pipe(imageResize({
      percentage: 50
    }))
    .pipe(gulp.dest('img/comp_mob'));
});
