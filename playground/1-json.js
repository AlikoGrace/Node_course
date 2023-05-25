const fs = require('fs')

// const book = {
//     title:'The seven habits of highly effective people',
//     author: 'Steven R Covey'
// }
//
//
//  const bookJson= JSON.stringify(book)
// //this does nto give us back an object but a string. To get an object. Parse the bookJason
// fs.writeFileSync('1-json.json', bookJson);


const dataBuffer = fs.readFileSync('1-json.json');
// this reads the data file into a binary
console.log(dataBuffer)

const dataJson= dataBuffer.toString()
// this converts the binary into a string
console.log(dataJson)

const user = JSON.parse(dataJson);
// this converts the string into an object
console.log(user)
 user.name= 'Aliko'
user.age=22
console.log(user)

//converting the edited data back to Json and writing it back into the existing file
const userJson = JSON.stringify(user)
console.log(userJson)

fs.writeFileSync('1-json.json', userJson)