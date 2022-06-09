
export const img = () => {
  return gulp.src('src/img/**/*.png')
        .pipe(gulp.dest('build/img'))
        .pipe(browserSync.stream())
}