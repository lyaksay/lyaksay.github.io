
var gulp = require('gulp');
autoprefixer = require('gulp-autoprefixer');
sass = require('gulp-sass'); //Подключаем Sass пакет
browserSync = require('browser-sync');
reload = browserSync.reload;
gulp.task('default', ['watch']);




gulp.task('sass', function(){ // Создаем таск "sass"
    return gulp.src('sass/magazines.scss') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(gulp.dest('css')) // Выгружаем результата в папку app/css
        .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});

gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browser Sync
        server: { // Определяем параметры сервера
            baseDir: 'contacts_page' // Директория для сервера - app
        },
        files: ["css/*.css"] ,
        notify: false // Отключаем уведомления
    });
});




gulp.task('autoprefixer', () =>
    gulp.src('css/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('css'))
);

gulp.task('watch', ['browser-sync', 'sass' , 'autoprefixer'], function() {
    gulp.watch('sass/scss/**/*.scss', ['scss']); // Наблюдение за sass файлами
    gulp.watch('contacts_page/*.html', browserSync.reload);// Наблюдение за другими типами файлов
});