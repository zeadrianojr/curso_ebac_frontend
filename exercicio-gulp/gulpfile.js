// importar plugins
const gulp = require('gulp');
const gulpSass = require('gulp-sass')(require('sass'));
const sourceMaps = require('gulp-sourcemaps');
const uglify =  require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin =  require('gulp-imagemin');
const miniHtml = require('gulp-htmlmin');

// FUNÇÕES / TAREFAS


// função para SASS 
function transformToCss(){
    return gulp.src('./source/styles/*.scss')
    .pipe(sourceMaps.init())
    .pipe(gulpSass({outputStyle: 'compressed'}))
    .pipe(sourceMaps.write('./maps'))
    .pipe(gulp.dest('./build/styles'))
    
}

// função para JS
function obfuscateJsMin(){
    return gulp.src('./source/scripts/*')
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest('./build/scripts'))
    
}
// função para compressão de imagem 
function imageCompress(){
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'))
}

// função para html min
function htmlMinify(){
    return gulp.src('./source/*.html')
        .pipe(miniHtml({ collapseWhitespace: true }))
        .pipe(gulp.dest('./build'))
}

// Export Default com execução serial e watch
exports.default = function(){
    gulp.watch('./source/styles/*.scss', {ignoreInitial: false}, gulp.series(transformToCss))
    gulp.watch('./source/scripts/*.js', {ignoreInitial: false}, gulp.series(obfuscateJsMin))
    gulp.watch('./source/images', {ignoreInitial: false}, gulp.series(imageCompress))
    gulp.watch('./source/*.html', {ignoreInitial: false}, gulp.series(htmlMinify))
}



