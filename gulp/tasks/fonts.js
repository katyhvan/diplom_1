export const fontAwesome = () => {
  return gulp.src('./node_modules/fontawesome-free/webfonts/*.*')
        .pipe(gulp.dest('build/webfonts'))
}