var fs= require('fs');

fs.open('newFile2.txt', 'w', function(err){
    if(err) throw err;
    console.log('done');
});


    