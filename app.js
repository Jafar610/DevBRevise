import fs from "fs";
import express from "express";
import http from "http";
import mime from "mime-types";
import path from "path";

// fs.readFile("sample.txt", "utf8", (err, data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// })

// fs.writeFile("example.txt", "This is an example text.", (err)=>{
//     if(err) throw err;
//     console.log("File has been saved!");
// });

// fs.appendFile("sample.txt", "\nThis is a new line text added to the file.", (err)=>{
//     if(err) throw err;
//     console.log("file updated!");
// });

// delete file
// fs.unlink("example.txt", (err)=>{
//     if(err) throw err;
//     console.log("File deleted!");
// })

// create folder
// fs.mkdir("newFolder", (err)=>{
//     if(err) throw err;
//     console.log("Folder created!");
// });

//file copy
// fs.copyFile("sample.txt", "newFolder/sample.txt", (err)=>{
//     if(err) throw err;
//     console.log("File copied!");
// })

// read folder
// fs.readdir("newFolder", (err, files)=>{
//     if(err) throw err;
//     console.log(files);
// });

// delete folder
// fs.rmdir("newFolder", (err)=>{
//     if(err) throw err;
//     console.log("Folder deleted!");
// })

//   const server = express();
//   server.use(express.json());

//   server.post("/save", (req, res)=>{
//     const user = req.body;
//     fs.writeFile("user.json", JSON.stringify(user), (err)=>{
//         if(err) throw err;
//         res.send("User data saved!");
//     })
//   })

//   server.get("/read", (req, res)=>{
//     fs.readFile("user.json", "utf8", (err, data)=>{
//         if(err) throw err;
//         res.json(data);
//     })
//   });

//   server.listen(3000, ()=>{
//     console.log("Server is running on port 3000");
//   })

// const server = http.createServer((req, res) => {
//   if (req.method === "GET") {
//     let reqUrl = req.url;

//     if (reqUrl === "/") {
//       reqUrl = "/index.html";
//     }

//     const filePath = "../barber_shop" + reqUrl;

//     fs.readFile(filePath, (err, data) => {
//       if (err) {
//         res.writeHead(404, { "content-type": "text/html" });
//         res.end("<h1>404 Not Found</h1>");
//         return;
//       }

//       res.writeHead(200, { "content-type": mime.lookup(filePath) });
//       res.end(data);
//     });
//   }
// });

// server.listen(1212, (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("Your server is running");
// });
import mysql from "mysql2";

const server = express();
server.use(express.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "sample_db",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("DB connected");
});

server.post("/product", (req, res) => {
  const { product_name, product_url } = req.body;

  let sql = "INSERT INTO product(product_name, product_url) VALUES (?, ?)";

  connection.query(sql, [product_name, product_url], (err, result) => {
    if (err) throw err;
    console.log(result);
  });
});

server.get("/view", (req, res) => {
  let sql = "SELECT * from product";
  connection.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

server.listen(1212, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("Your server is running");
});
