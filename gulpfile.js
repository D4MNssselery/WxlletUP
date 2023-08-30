let gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    del = require('del'),
    cssmin = require('gulp-cssmin');

  gulp.task('clean', async function () {
    del.sync('build')
  });

  gulp.task('sass', function () {
    return gulp.src('WxlletUP/scss/**/*/scss')
      .pipe(sass({ outputStyle: 'compressed'}))
      .pipe(rename ({suffix: '.min'}))
      .pipe(autoprefixer({
        overrideBrowserslist: ['last 8 versions']
      }))
      .pipe(gulp.dest('WxlletUP/css'))
      .pipe(browserSync.reload({ stream: true }))
  });

gulp.task('style', function() {
  return gulp.src([
    'node_modules/normalize.css/normalize.css', 'node_modules/slick-carousel/slick/slick.css','node_modules/magnific-popup/dist/magnific-popup.css','node_modules/jquery-form-styler/dist/jquery.formstyler.css','node_modules/jquery-form-styler/dist/jquery.formstyler.theme.css'
  ])
    .pipe(concat('libs.min.css'))
    .pipe(cssmin())
  .pipe(gulp.dest('WxlletUP/css'))
});

gulp.task('script', function (){
  return gulp.src(['node_modules/slick-carousel/slick/slick.js','node_modules/magnific-popup/dist/jquery.magnific-popup.js','node_modules/jquery-form-styler/dist/jquery.formstyler.js',
  ])
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('WxlletUP/js'))
});

gulp.task('html', function() {
  return gulp.src('WxlletUP/*.html')
    .pipe(browserSync.reload({ stream: true}))
});

gulp.task("js", function() {
  return gulp.src('WxlletUP/js/*.js')
    .pipe(browserSync.reload({ stream: true}))
});

gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: "WxlletUP/"
    }
  });
});

gulp.task('export', async function () {
  let buildHtml = gulp.src('WxlletUP/**/*.html')
    .pipe(gulp.dest('build'));

  let BuildCss = gulp.src("WxlletUP/css/**/*.css").pipe(gulp.dest('build/css'));

  let BuildJs = gulp.src("WxlletUP/js/**/*.js").pipe(gulp.dest('build/js'));

  let BuildFonts = gulp.src("WxlletUP/fonts/**/*.*").pipe(gulp.dest('build/fonts'));

  let BuildImg = gulp.src("WxlletUP/images/**/*.*").pipe(gulp.dest('build/images'));
});

gulp.task('watch', function() {
  gulp.watch('WxlletUP/scss/**/*.scss', gulp.parallel('sass'))
  gulp.watch('WxlletUP/*.html', gulp.parallel('html'))
  gulp.watch('WxlletUP/js/*.js', gulp.parallel('js'))
});

gulp.task('build', gulp.series('clean', 'export'));

gulp.task('default', gulp.parallel('style', 'script', 'sass', 'watch', 'browser-sync'))