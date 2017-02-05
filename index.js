// index.js

require('./app/index') 
//require('async')
const fs = require('fs')
const _ = require('lodash')


const name = _.assign({ 'firstname': 'rony' }, { 'lastname': 'setyawan' })
let content 
let data
//try {  
  content = fs.readFileSync('README.md', 'utf-8')
//} catch (ex) {
  //console.log(ex)
//}
console.log(`Hello Brother ${name.firstname} ${name.lastname} !!!`)
console.log(content)
console.log(`Hello Brother ${name.firstname} ${name.lastname} !!!`)
fs.readFile('README.md', 'utf-8', function (err, data) {  
  if (err) {
    return console.log(err)
  }

  console.log(data)
})
const numbers = [2,4,1,5,4]

function isBiggerThanTwo (num) {  
  return num > 2
}
Promise.all([  
  getContent('README.md'),
  stats('README.md'),
  stats('READMEMORE.md'),
  stats('README.md')
])
.then((data) => console.log(data))
.catch((err) => console.log(err)) 

console.log(numbers.filter(isBiggerThanTwo))
console.log(numbers)

function stats (file) {  
  return new Promise((resolve, reject) => {
    fs.stat(file, (err, data) => {
      if (err) {
        return reject (err)
      }
      resolve(data)
    })
  })
}

function getContent (file) {
    return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf-8', (err, data) => {
      if (err) {
        return reject (err)
      }
      resolve(data)
    })
  })
}  
