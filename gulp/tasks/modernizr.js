var gulp=require ('gulp'),
mordernizr= require('gulp-modernizr');

gulp.task ("modernizr", function(){
    return gulp.src(['./app/assets/styles/**/*.css',"./app/assets/scripts/**/*.js"])
        .pipe(mordernizr([{
            "options":[
                "setClasses"
            ]
        }]))
        .pipe(gulp.dest("./app/assets/scripts"));


});
