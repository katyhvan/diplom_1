import babel from "gulp-babel";
import webpack from "webpack-stream"; 

export const scripts = () => {
  return gulp.src('src/js/main.js')
        .pipe(babel({
          presets: ['@babel/env']
        }))
        .pipe(webpack({
          mode: 'development'
        }))
        .pipe(gulp.dest('build/js'))
        .pipe(browserSync.stream())
};



