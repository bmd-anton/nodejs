// index.js

require('./app/index') 

const _ = require('lodash')

const name = _.assign({ 'firstname': 'rony' }, { 'lastname': 'setyawan' })
console.log(`Hello Brother ${name.firstname} ${name.lastname} !!!`)
