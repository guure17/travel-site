var gulp= require('gulp'),
cssImport= require("postcss-import"),
postcss=require("gulp-postcss"),
cssvar= require("postcss-simple-vars"),
nested= require("postcss-nested"),
autoprefixer=require("autoprefixer"),
mixins=require("postcss-mixins"),
hexrgba=require("postcss-hexrgba");


gulp.task("styles",function(){
    return gulp.src("./app/assets/styles/src/myStyles.css")
       .pipe(postcss([cssImport,mixins,cssvar, nested, hexrgba, autoprefixer]))
       .on("error",function(errorInfo)
            {
                console.log(errorInfo.toString());
                this.emit("end");
            })                      //solved watch exiting on erro
       .pipe(gulp.dest("./app/assets/styles/dest"));  
   });

   