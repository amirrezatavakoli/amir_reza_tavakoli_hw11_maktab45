fs.writeFileSync('tools/append.txt' , "hello");
fs.writeFileSync('tools/from.txt' , "salam");
fs.writeFileSync('tools/to.txt' , "");
let value= fs.readFileSync("tools/from.txt", 'utf8');
fs.writeFileSync('tools/to.txt' , value);
