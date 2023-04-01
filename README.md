# Gulp Template 2023

Basic template for web-developing with Gulp та Webpack.

![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![Gulp](https://img.shields.io/badge/GULP-%23CF4647.svg?style=for-the-badge&logo=gulp&logoColor=white)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black)

## Setup Possibilities

- Minification of HTML/CSS/JS files;
- SASS/SCSS compiling, autoprefixer, media queries grouping;
- Possibility to use modules in HTML and JS files;; 
- Compilation of JS files using Babel;
- Optimizing images and creating SVG sprites; 
- Converting raster images to webp;
- Fonts converting (otf 2 ttf, ttf 2 woff/woff2); 
- Live server, automatic page refresh;

## File Structure
```
dist/?
gulp/  
  config/  
  tasks/  
public/
  fonts/
  img/
  libs/
src/  
  fonts/
  html/
  img/
    icons/
  scripts/
  scss/
```

**public** — folder for static files. These files will be transferred to the build folder without any changes. 

**src** — folder with source files that will be processed, optimized and minified before getting into the build folder.
## Require plugins and libraries

| Name | Description |
| ----------- | ----------- |
| [autoprefixer](https://www.npmjs.com/package/autoprefixer) | Parse CSS and add vendor prefixes to CSS rules |
| [babel-loader](https://www.npmjs.com/package/babel-loader) | Babel module loader for webpack |
| [browser-sync](https://www.npmjs.com/package/browser-sync) | Live CSS Reload & Browser Syncing |
| [del](https://www.npmjs.com/package/del) | Delete files and directories |
| [gulp](https://www.npmjs.com/package/gulp) | The streaming build system |
| [gulp-changed](https://www.npmjs.com/package/gulp-changed) | Only pass through changed files |
| [gulp-clean-css](https://www.npmjs.com/package/gulp-clean-css) | Minify css with clean-css |
| [gulp-file-include](https://www.npmjs.com/package/gulp-file-include) | A gulp plugin for file include |
| [gulp-fonter-2]() | Font converting plugin for gulp (fork of the gulp-fonter package) | 
| [gulp-group-css-media-queries](https://www.npmjs.com/package/gulp-group-css-media-queries) | Group media queries. Useful for postprocessing preprocessed CSS files |
| [gulp-htmlmin](https://www.npmjs.com/package/gulp-htmlmin) | Gulp plugin to minify HTML |
| [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin) | Minify PNG, JPEG, GIF and SVG images |
| [gulp-postcss](https://www.npmjs.com/package/gulp-postcss) | PostCSS gulp plugin |
| [gulp-rename](https://www.npmjs.com/package/gulp-rename) | Rename files |
| [gulp-replace](https://www.npmjs.com/package/gulp-replace) | A string replace plugin for gulp |
| [gulp-sass](https://www.npmjs.com/package/gulp-sass) | Gulp plugin for sass |
| [gulp-size](https://www.npmjs.com/package/gulp-size) | Logs out the total size of files in the stream |
| [gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps) | Sourcemap support for gulp |
| [gulp-svg-sprite](https://www.npmjs.com/package/gulp-svg-sprite) | Gulp plugin that reads SVG files, optimizes them and creates SVG sprites |
| [gulp-ttf2woff](https://www.npmjs.com/package/gulp-ttf2woff) | Convert fonts from TTF to WOFF |
| [gulp-ttf2woff2](https://www.npmjs.com/package/gulp-ttf2woff2) |Convert fonts from TTF to WOFF2 |
| [gulp-webp](https://www.npmjs.com/package/gulp-webp) | Convert images to WebP |
| [imagemin-mozjpeg](https://www.npmjs.com/package/imagemin-mozjpeg) | Imagemin plugin for mozjpeg |
| [imagemin-pngquant](https://www.npmjs.com/package/imagemin-pngquant) | Imagemin plugin for pngquant |
| [imagemin-svgo](https://www.npmjs.com/package/imagemin-svgo) | SVGO imagemin plugin |
| [sass](https://www.npmjs.com/package/sass) | A pure JavaScript implementation of Sass |
| [webpack](https://www.npmjs.com/package/webpack) | Packs CommonJs/AMD modules for the browser |
| [webpack-stream](https://www.npmjs.com/package/webpack-stream) | Run webpack as a stream to conveniently integrate with gulp |

## Commands

`gulp` — Runs gulp in development mode: tasks are performed in parallel, with minimum file processing.

`gulp build` — Runs gulp in production mode: tasks are executed sequentially, with full file processing. 

`gulp otf` — Runs convert2ttf task that create ttf fonts from otf.

`gulp woff` — Runs convert2woff task that create woff and woff2 fonts from ttf.
