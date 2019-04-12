var webpack=require('webpack');
var mypath=require('path'); /*no need to install path, it is already in node*/
module.exports={
    /*point the source file where other files will be imported first*/
    entry:"./app/assets/scripts/modules/srcApp.js",

    output:{
        path: mypath.resolve(__dirname, "./app/assets/scripts/modules"),  /* create this folders where the bundled file will be placed*/
        filename: "App.js"   /* the destination file name that will be created*/
    },
    /*Babel integration starts here*/
    module:{
        rules:[
            {
                loader:'babel-loader',
                query:{
                    presets:['es2015']
                },
                test:/\.js$/, /* convert only javascript files */
                exclude:/node_modules/ /*Exclude the files in this folder*/
            }
        ]
    }
}