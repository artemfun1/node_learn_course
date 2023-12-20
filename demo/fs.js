//File System
const fs = require('fs')
const path = require('path')

// fs.mkdir(path.join(__dirname,'test'),(err)=>{
//   if(err){
//     throw err
//   }
//   console.log('Папка создана')
// })

const filePath = path.join(__dirname,'test','text.txt')

fs.writeFile(filePath,'Hello',(err)=>{
  if(err){
    throw err
  }
  console.log('File created')
})


fs.appendFile(filePath,'\nHello again',(err)=>{
  if(err){
    throw err
  }
  console.log('File created')
})

// fs.readFile(filePath,(err,content)=>{
//   if(err){
//     throw err
//   }
//   const data = Buffer.from(content)
//   console.log(`Content is: ${data.toString()}`)
// })

fs.readFile(filePath,'utf-8',(err,content)=>{
  if(err){
    throw err
  }
  console.log(`Content is: ${content}`)
})
