const fs = require('fs');
fs.access("newFile.txt",function (err){
        if(err){
                console.log("false")
        }
        else {
                console.log("true")
        }
})
