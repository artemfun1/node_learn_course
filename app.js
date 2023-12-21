// const dotenv = require('dotenv')
// dotenv.config()
// console.log(process.env.PORT)
// console.log(process.env.NODE_ENV)
// console.log(process.argv)
// console.log(path.join(__dirname,'..'))

// console.log(path.resolve('first','second','third'))

// const fullPath = path.resolve('first','second','third.js')

// console.log(path.parse(fullPath))

// const path = require('path')

// const siteURL = 'http://localhost:8000/users?id=5123'

// const url = new URL(siteURL)

// console.log(url)

// fs.mkdir(path.join(__dirname,'dir'),(err)=>{

//   if(err){
//     console.log(err)
//     return
//   }
//   console.log('create')

// })

// fs.rmdir(path.join(__dirname,'dir'),(err)=>{
//   if(err){
//     console.log(err)
//     return
//   }
//   console.log('delete')
// })

// fs.writeFile(path.join(__dirname,'text.txt'), 'test',(err)=>{
//     if(err){
//       console.log(err)
//       return
//     }
//     console.log('create')
//   })

const path = require('path');
const fs = require('fs');
const os = require('os')

