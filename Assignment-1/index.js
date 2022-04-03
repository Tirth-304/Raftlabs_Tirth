const fs = require('fs');
const fastcsv = require('fast-csv');

console.log('Assignment - 1: Task - 1\n');
const parsing = (fileName) => {
    let data = fs.readFileSync(fileName , {encoding: 'utf-8'}).split('\r\n')
    let keys = data[0].split(';');
    // console.log(keys);
    return data.slice(1).map(line => {
        return line.split(';').reduce((acc, cur, i) => {
            const toAdd = {};
            toAdd[keys[i]] = cur;
            return { ...acc, ...toAdd };
        }, {});
    })
}

console.log('Assignment - 1: Task - 2\n');
author = parsing(__dirname + '/author.csv');
book = parsing(__dirname + '/books.csv');
magazine = parsing(__dirname + '/magazines.csv');
console.log('\n------------------------Printing Authors-------------------------------\n');
console.log(author);
console.log('\n------------------------Printing Book-------------------------------\n');
console.log(book);
console.log('\n------------------------Printing Magazines-------------------------------\n');
console.log(magazine);

// Function to find row with specific 
const findValue = (file , value , field , title) => {

    for(let i = 0;i < file.length;i++){
        // console.log(file[i][field]);
        if(file[i][field] === value){
            console.log(file[i][title]);
        }
    }
}

// Print Book By ISBN
console.log('Assignment - 1: Task - 3\n');
console.log("\n---------------------------Printing Book Title from ISBN number---------------------------------\n");
findValue(book , '1215-4545-5895' , 'isbn' , 'title');

// Finding Books from Author's Mail
console.log('Assignment - 1: Task - 4\n');
console.log("\n------------------------Finding Books from Author's Mail-----------------------------\n");
findValue(magazine , 'null-walter@echocat.org' , 'authors' , 'title');

// Sort magazines and Books from titles
console.log('Assignment - 1: Task - 5\n');
console.log("\n------------------------Sorting Books and Magazines by title-----------------------------------\n");

let temp = book.concat(magazine);
temp.sort(function (str1, str2) {
    return str1['title'].localeCompare(str2['title']);
    });
console.log(temp);

// Exporting sorted value of magazine and book titles into new File
console.log('Assignment - 1: Task - 6\n');

const ws = fs.createWriteStream("out.csv");
fastcsv
  .write(temp, { headers: true })
  .pipe(ws);

console.log("File has been written.");