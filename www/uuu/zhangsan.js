// const fs = require('fs')
// const path = require('path')
// const data = 'woshi data'
// fs.writeFile(path.join(__dirname,'./input.txt'), data, { flag: 'a+'}, err => {
//     console.log('xie ru chenggong44444')
// })
/* const path = require('path')
const p = path.join(__dirname,'../../js/index.js')
console.log(path.dirname(p))
console.log(path.basename(p))
console.log(path.extname(p)) */
const os = require('os')
console.log(os.freemem())
console.log(os.homedir())
console.log(os.hostname())
// console.log(os.cpus())