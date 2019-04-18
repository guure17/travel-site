var gulp= require('gulp'),
svgSprite=require("gulp-svg-sprite"),
rename=require("gulp-rename"),
del=  require('del');
svgToBng=require("gulp-svg2png");
var config={
    shape:{   
        spacing:{
            padding:1  /*will give spaces between shapes*/
        }
    },
    mode:{
        css:{ 
            sprite:'sprite.svg', /* removes the .css extention from the file*/
             render:{
                    css:{
                        template:"./gulp/templates/sprite.css"
                    }
                }
        }
    }
}
//delete sprite files in icons, module and sprite folder in images and create new ones, when icons are 
//updated and gulp 'runSpriteTasks' is run, you need installation of new del package

gulp.task('beginClean',function(){
return del(['./app/icons/sprite','./app/assets/styles/src/modules/sprite','./app/assets/images/sprite']);
}); 
//creates the sprite folder and files
gulp.task("createSprite",['beginClean'], function(){
return gulp.src("./app/assets/images/icons/**/*.svg")
    .pipe(svgSprite(config))
    .pipe(gulp.dest('./app/icons/sprite'));
});

gulp.task('convertSVGToPNG',['createSprite'],function(){
    return gulp.src('./app/icons/sprite/css/*.svg')
        .pipe(svgToBng())
        .pipe(gulp.dest('./app/icons/sprite/css'));
});

gulp.task("copySpriteGraphics",["convertSVGToPNG"],function(){
    return gulp.src('./app/icons/sprite/css/**/*.{svg,png}')
        .pipe(gulp.dest("./app/assets/images/sprite"));
});
gulp.task('copySpriteCSS',["createSprite"], function(){
    return gulp.src('./app/icons/sprite/css/**/*.css')
        .pipe(rename("_sprite.css")) 
        .pipe(gulp.dest('./app/assets/styles/src/modules'));});
gulp.task('runSpriteTasks',['beginClean','createSprite','convertSVGToPNG','copySpriteCSS','copySpriteGraphics']); 