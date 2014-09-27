'use strict';

var gulp        = require('gulp'),
    $           = require('gulp-load-plugins')(),
    del         = require('del'),
    runSequence = require('run-sequence'),
    browserSync = require('browser-sync'),
    pagespeed   = require('psi'),
    reload      = browserSync.reload;

var AUTOPREFIXER_BROWSERS = [
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];

/**
 * Lints Javascript
 */
gulp.task('jshint', function () {
  return gulp.src('app/scripts/**/*.js')
    .pipe(reload({stream: true, once: true}))
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.if(!browserSync.active, $.jshint.reporter('fail')));
});

/**
 * Optimizes Images
 */
gulp.task('images', function () {
  return gulp.src('app/images/**/*')
    .pipe($.cache($.imagemin({
      progressive: true,
      interlaced: true
    })))
    .pipe(gulp.dest('dist/images'))
    .pipe($.size({ title: 'images' }));
});

/**
 * Copies All Files At The Root Level (app)
 */
gulp.task('copy', function () {
  return gulp.src([
    'app/*',
    '!app/*.html',
  ], {
    dot: true
  }).pipe(gulp.dest('dist'))
    .pipe($.size({ title: 'copy' }));
});

/**
 * Copies Web Fonts To Dist
 */
gulp.task('fonts', function () {
  return gulp.src(['app/fonts/**'])
    .pipe(gulp.dest('dist/fonts'))
    .pipe($.size({ title: 'fonts' }));
});

/**
 * Compiles and Automatically Prefix Stylesheets
 */
gulp.task('styles', function () {
  return gulp.src([
      'app/styles/*.scss',
      'app/styles/components/components.scss'
    ])
    .pipe($.changed('styles', { extension: '.scss' }))
    .pipe($.rubySass({
        style: 'expanded',
        precision: 10
      })
      .on('error', console.error.bind(console))
    )
    .pipe($.autoprefixer(AUTOPREFIXER_BROWSERS))
    .pipe(gulp.dest('.tmp/styles'))
    .pipe($.if('*.css', $.csso()))
    .pipe(gulp.dest('dist/styles'))
    .pipe($.size({ title: 'styles' }));
});

// Scans Your HTML For Assets & Optimize Them
gulp.task('html', function () {
  var assets = $.useref.assets({searchPath: '{.tmp,app}'});

  return gulp.src('app/**/*.html')
    .pipe(assets)
    // Concatenate And Minify JavaScript
    .pipe($.if('*.js', $.uglify({ preserveComments: 'some' })))
    // Remove Any Unused CSS
    // Note: If not using the Style Guide, you can delete it from
    // the next line to only include styles your project uses.
    .pipe($.if('*.css', $.uncss({
      html: [
        'app/index.html',
        'app/styleguide.html'
      ],
      // CSS Selectors for UnCSS to ignore
      ignore: [
        /.navdrawer-container.open/,
        /.app-bar.open/
      ]
    })))
    // Concatenate And Minify Styles
    // In case you are still using useref build blocks
    .pipe($.if('*.css', $.csso()))
    .pipe(assets.restore())
    .pipe($.useref())
    // Update Production Style Guide Paths
    .pipe($.replace('components/components.css', 'components/main.min.css'))
    // Minify Any HTML
    .pipe($.if('*.html', $.minifyHtml()))
    // Output Files
    .pipe(gulp.dest('dist'))
    .pipe($.size({title: 'html'}));
});

/**
 * Cleans Output Directory
 */
gulp.task('clean', del.bind(null, ['.tmp', 'dist']));

/**
 * Watches Files For Changes & Reload
 */
gulp.task('serve', ['styles'], function () {
  browserSync({
    notify: false,
    https: false,
    server: ['.tmp', 'app']
  });

  gulp.watch(['app/**/*.html'], reload);
  gulp.watch(['app/styles/**/*.scss'], ['styles', reload]);
  gulp.watch(['app/scripts/**/*.js'], ['jshint']);
  gulp.watch(['app/images/**/*'], reload);
});

/**
 * Build and serve the output from the dist build
 */
gulp.task('serve:dist', ['default'], function () {
  browserSync({
    notify: false,
    https: false,
    server: 'dist'
  });
});

/**
 * Build Production Files, the Default Task
 */
gulp.task('default', ['clean'], function (cb) {
  runSequence('styles', ['jshint', 'html', 'images', 'fonts', 'copy'], cb);
});

/**
 * Run PageSpeed Insights
 * @todo add own url and api key
 */
gulp.task('pagespeed', pagespeed.bind(null, {
  url: 'https://example.com',
  strategy: 'mobile'
}));
