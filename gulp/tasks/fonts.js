export const fontAwesome = () => {
  return gulp.src('./node_modules/@fortawesome/fontawesome-free/webfonts/*.*')
        .pipe(gulp.dest('build/webfonts'))
}