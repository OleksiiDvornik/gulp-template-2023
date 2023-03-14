// Plugins import

import gulp from 'gulp';
import browserSync from 'browser-sync';

// Paths import

import path, { buildFolder } from './gulp/config/path.js';

// Separate tasks import

import { html, htmlProd } from './gulp/tasks/html.js';
import { styles, stylesProd } from './gulp/tasks/styles.js';
 
// Configuration global variable

global.app = {
  path: path,
  gulp: gulp,
  watcher: browserSync,
};

// Browser sync configuration

browserSync.create();

const watch = () => {
  browserSync.init({
    server: {
      baseDir: buildFolder
    }
  });
  app.gulp.watch(app.path.dest.html).on('change', browserSync.reload);
  app.gulp.watch(app.path.watch.html, html);
  app.gulp.watch(app.path.watch.styles, styles);
};

// Gulp tasks

export default gulp.parallel(html, styles, watch);
