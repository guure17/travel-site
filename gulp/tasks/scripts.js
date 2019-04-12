var gulp=require('gulp'),
    webpack=require('webpack');

    gulp.task('scripts',function(callback){
      /*  '../../webpack.config' is the postion of webpack.config file relative
      to you location, we move upwards to folders to get where this file lives in */  
        webpack(require('../../webpack.config.js'), function(err, stats){
            /* funciton that will run when webpack script task is completed
             technicall we don't need this callback function to do anything*/
            if(err){
                 console.log(err.toString());
             }
            console.log(stats.toString());  
            callback();
        });
    })
