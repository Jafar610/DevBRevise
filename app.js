// const fs = require('fs');
// const http = require('http');
// const mime = require('mime-types');
//  const path = require('path');


// const server = http.createServer((req, res) => {
//     const file = fs.readFile('./index.html', (err, data)=>{
//         if(err){
//             res.writeHead(404, {'Content-Type': mime.lookup(data)});
//             res.write('File not found');
//         } else {
//             res.writeHead(200, {'Content-Type': mime.lookup(data)});
//             res.write(data);
//         }
//     })
// });

// server.listen(3001, () =>{
//     console.log('Server is running on port 3001');
// })

const express = require('express');

const server = express();


server.get('/', (req, res)=>{
    res.send('Home Page');
})
server.get('/about', (req, res)=>{
    res.send('About Page');
});

server.listen(3001, (err)=>{
    if(err){
        console.log('Error starting server:', err);
    }
    console.log('Server is running on port 3001');
})

