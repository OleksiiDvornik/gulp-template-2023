// Plugins import

import changed from 'gulp-changed';

// Task

export const copyRoot = () => {
  return app.gulp.src(app.path.public.files)
    .pipe(changed(app.path.dest.files))
    .pipe(app.gulp.dest(app.path.dest.files))
}

export const copyFonts = () => {
  return app.gulp.src(app.path.public.fonts)
    .pipe(changed(app.path.dest.fonts))
    .pipe(app.gulp.dest(app.path.dest.fonts))
}
