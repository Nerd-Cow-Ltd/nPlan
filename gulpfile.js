// Gulp
var gulp = require('gulp');

// Sass/CSS stuff

var sass = require('gulp-sass');

var prefix = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');

// JavaScript
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

// compile all your Sass
gulp.task('sass', function (){
	return gulp.src(['./src/scss/*.scss'])
		.pipe(sass({
			includePaths: ['./src/scss'],
			outputStyle: 'expanded'
		}))
		.pipe(prefix(
			"last 1 version", "> 1%"
		))
		.pipe(gulp.dest('./src/scss'))
		.pipe(minifycss())
		.pipe(gulp.dest('./dist/css'));
});

// Uglify JS
gulp.task('uglify', function(){
	return gulp.src('./src/js/*.js')
		.pipe(concat('main.js'))
		.pipe(babel({presets: ['@babel/preset-env']}))
		.pipe(uglify())
		.pipe(gulp.dest('./dist/js'));
});

gulp.task('default', function(){
	// watch me getting Sassy
	gulp.watch( "./src/scss/**/*.scss", { usePolling: true }, gulp.series('sass') );
	// make my JavaScript ugly
	gulp.watch( "./src/js/**/*.js", { usePolling: true }, gulp.series('uglify') );
});