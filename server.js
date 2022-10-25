const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
// const figlet = require('figlet')

const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/otherpage') {
    fs.readFile('otherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/otherotherpage') {
    fs.readFile('otherotherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/api') {
    let randomCoin = Math.floor(Math.random() * 2);
    let heads = 0;
    let tails = 0;
    if('WhatYouChoose' in params){
      if(params['WhatYouChoose'] == 'heads' && randomCoin === heads ){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          result: "Winner"
        }
        res.end(JSON.stringify(objToJson));
      }//student = leon
      else if(params['WhatYouChoose'] == 'heads' && randomCoin === tails){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          result: "nooooo"
        }
        res.end(JSON.stringify(objToJson));
      }//student != leon
      else if(params['WhatYouChoose'] == 'tails' && randomCoin === heads){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          result: "nooooo"
        }
        res.end(JSON.stringify(objToJson));
      }
    }//student if
    else if(params['WhatYouChoose'] == 'tails' && randomCoin === tails){
      res.writeHead(200, {'Content-Type': 'application/json'});
      const objToJson = {
        result: "winn"
      }
      res.end(JSON.stringify(objToJson));
    }
  }//else if
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }
  // else{
  //   figlet('404!!', function(err, data) {
  //     if (err) {
  //         console.log('Something went wrong...');
  //         console.dir(err);
  //         return;
  //     }
  //     res.write(data);
  //     res.end();
  //   });
  // }
});

server.listen(8000);