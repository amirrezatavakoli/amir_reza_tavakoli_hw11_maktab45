const fs = require('fs');
fs.readFile('names.txt', 'utf8', function (err, data){
    let listData=data.split("\r\n")

   let listOfNames=listData.join("-").split("-")
    fs.readFile('numbers.txt', 'utf8', function (err, data){
        let listData=data.split("\r\n")

        let listOfNumbers= listData.join("-").split("-")
        let test=false
        for (let i=0 ;i<listOfNames.length;i+=2){
            if(listOfNumbers[i]===listOfNumbers[i+2]){
                test=true
                continue
            }
            if(test){
                console.log(listOfNames[i-1]+"'s phone numbers are"+listOfNumbers[i+1]+","+listOfNumbers[i-1])
                test= false
            }
            if(!listOfNumbers.includes(listOfNames[i])){
                console.log(listOfNames[i+1]+" hasn't any phone number.")
            }
            else {
                console.log(listOfNames[i+1]+"'s phone number is "+ listOfNumbers[i+1])
            }
        }

    })
})