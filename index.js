const http = require('http')
const yxy_npm = require('yxy_npm')
const axios = require('axios')
const fs = require('fs')
const path = require('path')
const hostname = '127.0.0.1'
const port = 3000
/* try{
    throw '抛出错误'
} catch (e) {
    console.log(e)
} */
// const h = 'hello'
// console.log(Buffer.from(h)[3])
// console.log(http.Agent())
// console.log(http.METHODS)
// axios.get('http://127.0.0.1:3000/index.js').then((data)=>{
//     console.log(data)
// })
/* const options = {
    hostname: '127.0.0.1',
    port: 3000,
    path: '/index.js',
    method: 'GET'
}
let httpReq = http.request(options,res => {
    res.on('data',d => {
        process.stdout.write(d)
    })
})
httpReq.end() */
const server = http.createServer((req,res)=>{
    res.statusCode = 200
    res.setHeader('Content-Type','text/plain;charset=utf-8')
    res.setHeader("Set-Cookie",'a=21');
    const readStream = fs.createReadStream(path.join(__dirname,'./index.html'))
    readStream.pipe(res)
})
server.listen(port,()=>{
    // console.log(yxy_npm.sum(3,4))
    // console.log(yxy_npm.mul(4,5))
    console.log(`服务器运行在http://${hostname}:${port}`)
})