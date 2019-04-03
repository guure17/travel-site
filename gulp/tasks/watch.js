
 var gulp= require('gulp'),
 watch=require("gulp-watch"),    
 browserSync=require("browser-sync").create();
 
 gulp.task("watch", function(){

    // the following code is to autorefresh our page
    browserSync.init({
        notify:false, // removes the annoying black box in right-top corner for each cssInject
        server:{
            baseDir:"app" // this were our index.html page lives
           
        },
        browser: "chrome"  // will make the default browser to chrome haha

    });

    watch("./app/index.html", function(){
        //gulp.start("html"); // this task will be run when the above file is changed  
        browserSync.reload()// reloards the page after edit for refresh   
          
    });
   
    watch("./app/assets/styles/src/**/*.css", function(){        
      gulp.start("cssInject"); // this task will be run when the above file is changed        
    });
 });

 gulp.task("cssInject",["styles"],function(){
    return gulp.src("./app/assets/styles/dest/myStyles.css")
                   .pipe(browserSync.stream());
});