import gulp from 'gulp';
import br from 'browser-sync';
const browserSync = br.create();

global.gulp = gulp;
global.browserSync = browserSync;


import {styles} from './gulp/tasks/styles.js';
import {scripts} from './gulp/tasks/js.js';
import {html} from './gulp/tasks/html.js';
import {clean} from './gulp/tasks/clean.js';
import {img} from './gulp/tasks/img.js';
import {server} from './gulp/tasks/server.js';
import {fontAwesome} from './gulp/tasks/fonts.js';

const watcher = (cb) => {
  gulp.watch('src/sass/**/*.{sass,scss}', styles);
  gulp.watch('src/js/**/*.js', scripts);
  gulp.watch('src/html/**/*.html', html);
  gulp.watch('src/img/**/*.png', img);
  cb();
}


const dev = gulp.series(
  clean,
  gulp.parallel(styles, scripts, html, img, fontAwesome),
  gulp.parallel(watcher, server)
);

gulp.task('default', dev);