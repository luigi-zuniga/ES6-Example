import gulp from 'gulp';
import babel from 'gulp-babel';

//Define una tarea
//gulp.task();

//Indica el directorio en el cual se buscaran los archivos con los que trabajara gulp
//gulp.src();

//Indica el directorio donde se dejaran los archivos procesados de src
//gulp.dest();

//Mira los cambio en un directorio o archivo especifico, si hay algun cambio nosotros le indicamos los cambios a realizar
//gulp.watch();

//Task recibe dos parametros: 1 - el nombre de la tarea.  2 - una funcion donde estara el cuerpo de la tarea
gulp.task('es6', () => { 
 gulp.src('./es6/*.js')
    //Metodo pipe , pasa los pluglin (o datos ) de uno a otro
    .pipe(babel())
    .pipe(gulp.dest('./es5'));
});

gulp.task('default', () => {
    gulp.watch('./es6/*.js',gulp.series('es6'));
});