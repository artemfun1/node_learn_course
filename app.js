// const chalk = require("chalk")
// const text = require('./data')

// console.log(chalk.blue(text))

// (function(exports, require, module, __dirname, __filename){

// })

const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  //   if(req.url ==='/'){
  //     fs.readFile(path.join(__dirname,'publick','index.html'),(err,data)=>{
  //       if(err){
  //         throw err
  //       }

  //       res.writeHead(200,{
  //         'Content-Type': 'text/html'
  //       })
  //       res.end(data)

  //     })
  //   } else if(req.url === '/contact'){

  //     fs.readFile(path.join(__dirname,'publick','contact.html'),(err,data)=>{
  //       if(err){
  //         throw err
  //       }
  //       res.writeHead(200,{
  //         'Content-Type': 'text/html'
  //       })
  //       res.end(data)

  //     })
  //   }

  let filePath = path.join(
    __dirname,
    'publick',
    req.url === '/' ? 'index.html' : req.url
  );

  let contentType = 'text/html';
  const ext = path.extname(filePath);

  switch (ext) {
    case '.css':
      contentType = 'text/css';
      break;
    case '.js':
      contentType = 'text/javascript';
      break;
    default:
      contentType = 'text/html';
  }



  if (!ext) {
    filePath += '.html';
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      fs.readFile(
        path.join(__dirname, 'publick', 'error.html'),
        (err, data) => {
          if (err) {
            res.writeHead(500);
            res.end('Error');
          } else {
            res.writeHead(200, {
              'Content-Type': 'text/html',
            });
            res.end(data);
          }
        }
      );
    } else {
      res.writeHead(200, {
        'Content-Type': contentType
      });
      res.end(content);
    }
  });
});

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
  console.log(`server start ${PORT}`);
});
