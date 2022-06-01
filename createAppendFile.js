var fs= require('fs');

fs.appendFile('newFile1.txt' , 'hello dear', function(err){
    if (err) throw err;
    console.log("done");
});