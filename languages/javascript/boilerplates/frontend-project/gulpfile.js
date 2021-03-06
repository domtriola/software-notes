const gulp = require('gulp');
const gutil = require('gulp-util');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const sass = require('gulp-sass');

// Build JavaScript
const devConfig = Object.create(webpackConfig);
devConfig.devtool = 'sourcemap';
const devCompiler = webpack(devConfig);

gulp.task('webpack:build-dev', gulp.series((callback) => {
  devCompiler.run((err, stats) => {
    if (err) throw new gutil.PluginError('webpack:build-dev', err);
    gutil.log('[webpack:build-dev]', stats.toString({
      colors: true,
    }));
    callback();
  });
}));

// Build Sass
gulp.task('sass:build-dev', gulp.series(() => (
  gulp.src('app/client/style/scss/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('dist/style'))
)));

/**
 * Development
 */
gulp.task('build-dev', gulp.series('webpack:build-dev', 'sass:build-dev', () => {
  gulp.watch('app/**/*.js', gulp.series('webpack:build-dev'));
  gulp.watch('app/client/style/scss/**/*.scss', gulp.series('sass:build-dev'));
}));

/**
 * Production
 ********************************* */
// gulp.task('build-prod', ['webpack:build-prod', 'sass:build-prod']);

// // Build JavaScript
// gulp.task('webpack:build-prod', (callback) => {
//   const prodConfig = Object.create(webpackConfig);
//   prodConfig.plugins = prodConfig.plugins.concat(
//     new webpack.DefinePlugin({
//       'process.env': {
//         NODE_ENV: JSON.stringify('production'),
//       },
//     }),
//     new webpack.optimize.DedupePlugin(),
//     new webpack.optimize.UglifyJsPlugin(),
//   );

//   webpack(prodConfig, (err, stats) => {
//     if (err) throw new gutil.PluginError('webpack:build-prod', err);
//     gutil.log('[webpack:build-prod]', stats.toString({
//       colors: true,
//     }));
//     callback();
//   });
// });

// // Build Sass
// gulp.task('sass:build-prod', () => (
//   gulp.src('app/client/style/scss/**/*.scss')
//     .pipe(sass.sync().on('error', sass.logError))
//     .pipe(gulp.dest('dist/style'))
// ));

// Default
gulp.task('default', gulp.series('build-dev'));
