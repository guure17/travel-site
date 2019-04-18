var gulp =require("gulp"),
imagemin=require("gulp-imagemin"),
del= require('del'),
usemin=require('gulp-usemin'),
rev=require("gulp-rev"),
cssnano=require('gulp-cssnano'),
uglify=require('gulp-uglify'),
browserSync=require("browser-sync").create();

gulp.task('previewDocs',function(){
    browserSync.init({
        notify:false, // removes the annoying black box in right-top corner for each cssInject
        server:{
            baseDir:"docs" // this were our index.html page lives           
        },
        browser: "chrome"  // will make the default browser to chrome haha
    });
});

gulp.task("deleteDocsFolder",["runSpriteTasks"], function(){
    return del("./docs"); //delete this folder for updates, it will be recreated
})
gulp.task("copyGeneralFiles",["deleteDocsFolder"],function(){
    var pathsToCopy=[
        './app/**/*', //app and all subfolders and files except bellow files
        '!./app/index.html',  //take cared by usemin task
        "!./app/assets/images/**", //take cared by optimizeImages task
        "!./app/assets/styles/**",
        "!./app/assets/scripts/**",
        "!./app/icons/**"
    ]
     return gulp.src(pathsToCopy)
        .pipe(gulp.dest("./docs"));
});
gulp.task("optimizeImages",["deleteDocsFolder"],function(){
    return gulp.src(["./app/assets/images/**/*", "!./app/assets/images/icons", "!./app/assets/images/icons/**/*"])
            .pipe(imagemin({
                progressive:true,
                interlaced:true,
                multipass:true
            }))
            .pipe(gulp.dest("./docs/assets/images"));
});
gulp.task("useminTrigger",["deleteDocsFolder"],function(){
  gulp.start("usemin");
});
// this task buids both css and js from index.html
gulp.task("usemin",["styles","scripts"],function(){
    return gulp.src("./app/index.html")
        .pipe(usemin({
        css:[function(){return rev()},function(){return cssnano()}],
        js:[function(){return rev()},function(){return uglify()}]
        }))
        .pipe(gulp.dest("./docs"));
});
gulp.task("build",["deleteDocsFolder","copyGeneralFiles","optimizeImages","useminTrigger","previewDocs"],function(){

});