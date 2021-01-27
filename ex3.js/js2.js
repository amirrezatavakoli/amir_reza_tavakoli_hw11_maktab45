const fs = require('fs');
if(fs.existsSync("newFile.txt")){

        console.log(fs.existsSync("newFile.txt"))
}
else {
        console.log("false")
}

