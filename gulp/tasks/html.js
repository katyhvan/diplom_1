
export const html = () => {
  return gulp.src('src/html/**/*.html')
        .pipe(gulp.dest('build'))
        .pipe(browserSync.stream())
}