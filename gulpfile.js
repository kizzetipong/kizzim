const gulp = require('gulp');
const sass = require('gulp-sass');
const sonarqubeScanner = require('sonarqube-scanner');

var appPath = 'src';
gulp.task('default', (callback) => {
  sonarqubeScanner({
    serverUrl: 'http://192.168.99.100:32768',
    token: '',
    options: {
    },
  }, callback);
});

gulp.task('styles', () => {
  gulp.src(['<%= appPath %>/sass/**/*.scss', '<%= appPath %>/components/**/*.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('<%= appPath %>./css/'));
});

gulp.task('default', () => {
  gulp.watch(['<%= appPath %>/sass/**/*.scss', '<%= appPath %>/components/**/*.scss'], ['styles']);
});
