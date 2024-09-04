const { src, dest, series, watch } = require('gulp')
const concat = require('gulp-concat')
const htmlMin = require('gulp-htmlmin')
const autoprefixer = require('gulp-autoprefixer')
const cleanCss = require('gulp-clean-css')
const browserSync = require('browser-sync').create()
const svgSprite = require('gulp-svg-sprite')
const image = require('gulp-image')
const babel = require('gulp-babel')
const notify = require('gulp-notify')
const uglify = require('gulp-uglify-es').default
const sourcemaps = require('gulp-sourcemaps')
const del = require('del')

const resources = () => {
	return src('src/resources/**')
	.pipe(dest('dist'))
}

const clean = () => {
	return del(['dist'])
}

const styles = () => {
	return src('src/styles/**/*.css')
	.pipe(sourcemaps.init())
    .pipe(concat('main.css'))
	.pipe(autoprefixer({
		cascade: false
	}))
	.pipe(cleanCss({
		level: 2
	}))
	.pipe(sourcemaps.write())
    .pipe(dest('dist/styles'))
	.pipe(browserSync.stream())
}


const fonts = () => {
	return src('src/fonts/**/*')
		.pipe(dest('dist/fonts'))
}

const htmlMinify = () => {
	return src('src/**/*.html')
		.pipe(htmlMin({
			collapseWhitespace: true,
		}))
	.pipe(dest('dist'))
	.pipe(browserSync.stream())
}

const svgSprites = () => {
	return src('src/images/svg/**/*.svg')
	.pipe(svgSprite({
		mode: {
			stack: {
				sprite: '../sprite.svg'
			}
		}
	}))
	.pipe(dest('dist/images'))
}

const scripts = () => {
	return src([
		'src/js/components/**/*.js',
		'src/js/*.js'
	])
	.pipe(sourcemaps.init())
	.pipe(babel({
		presets: ['@babel/env']
	}))
	.pipe(concat('app.js'))
	.pipe(uglify().on('error', notify.onError()))
	.pipe(sourcemaps.write())
	.pipe(dest('dist/js'))
	.pipe(browserSync.stream())
}

const images = () => {
return src([
	'src/images/**/*.jpg',
	'src/images/**/*.png',
	'src/images/*.svg',
	'src/images/**/*.jpeg'
])
.pipe(image({}))
.pipe(dest('dist/images'))
}


const watchFiles = () => {
	browserSync.init({
		server: {
			baseDir: 'dist'
		}
	})
}

watch('src/**/*.html', htmlMinify)
watch('src/styles/**/*.css', styles)
watch('src/images/svg/**/*.svg', svgSprites)
watch('src/js/**/*.js', scripts)
watch('src/resources/**', resources)

exports.clean = clean
exports.styles = styles
exports.scripts = scripts
exports.htmlMinify = htmlMinify
exports.default = series(clean, fonts, resources, htmlMinify, scripts, styles, images, svgSprites, watchFiles)