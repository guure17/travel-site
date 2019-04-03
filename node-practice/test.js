var fs = require('fs');
var https= require('https');
//__dirname is the current directory, index.html is the name of the new file that will be created
//the annonmious function is the function that will be executed when we run the node command
//to create the file
fs.writeFile(__dirname+ "/index.html", "<h1>HTML is Greate</h1>", function(error){
    if(error){
        return console.log(error);
    }else{
        return console.log("file written successfully");
    }
});
var myPhotoLocation ='https://amp.thisisinsider.com/images/5b50bd5351dfbe1f008b45c5-960-720.jpg'
https.get(myPhotoLocation,function(response){
response.pipe(fs.createWriteStream(__dirname + "/theDog.jpg"));
});