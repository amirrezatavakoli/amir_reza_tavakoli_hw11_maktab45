const fs = require('fs');

fs.writeFile('tools/append.txt', 'Hello', function (err) {
    if (err) throw err;
});
fs.writeFile('tools/from.txt', 'salam', function (err) {
    if (err) throw err;

});
fs.writeFile('tools/to.txt', "", function (err) {
    if (err) throw err;
    fs.readFile('tools/from.txt', 'utf8', function (err, data) {
        if (err) throw err;
        fs.appendFile('tools/to.txt', data, function (err) {
            if (err) throw  err;
        })
    });
})
