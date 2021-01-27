fs.writeFileSync('tools/append.txt' , "hello");
fs.writeFileSync('tools/from.txt' , "salam");
fs.writeFileSync('tools/to.txt' , "");
let valueOfFrom= fs.readFileSync("tools/from.txt", 'utf8');
let valueOfAppend= fs.readFileSync("tools/append.txt", 'utf8');
fs.appendFileSync('tools/to.txt' , valueOfFrom+valueOfAppend);

