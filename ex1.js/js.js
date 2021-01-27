function fullName(name,lastName,cb){
        cb(name,lastName)
}
fullName("amir","tavakoli",concat)
function concat(name,lastName){
    console.log(name+" "+lastName)
}
