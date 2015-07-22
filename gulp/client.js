import gulp from 'gulp';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import sourcemaps from 'gulp-sourcemaps';
import babelify from 'babelify';
import reactify from 'reactify';
import watchify from 'watchify';
import { assign } from 'lodash';
import gutil from 'gulp-util';
import buffer from 'vinyl-buffer';

const customOpts = {
  entries: ['./app/js/main.js'],
  debug: true
};
const opts = assign({}, watchify.args, customOpts);
const b = watchify(browserify(opts));

gulp.task('js', bundle); // so you can run `gulp js` to build the file
b.on('update', bundle); // on any dep update, runs the bundler
b.on('log', gutil.log); // output build logs to terminal

function bundle() {
  return b
    .transform(babelify)
    .transform(reactify)
    .bundle()
    // log errors if they happen
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('bundle.js'))
    // optional, remove if you don't need to buffer file contents
    .pipe(buffer())
    // optional, remove if you dont want sourcemaps
    .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
       // Add transformation tasks to the pipeline here.
    .pipe(sourcemaps.write('./')) // writes .map file
    .pipe(gulp.dest('./app/dist'));
}
