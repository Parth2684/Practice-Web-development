const fs = require('fs');

function readFromAFile(){
    return new Promise(function(resolve){
        fs.readFile("./a.txt", "utf-8", function(err, data){
            resolve(data);
        });
    })
}

function onDone(data){
    console.log(data);
}

readFromAFile().then(onDone);