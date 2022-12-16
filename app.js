const { constants } = require("buffer");
const express = require("express");
const fs = require("fs/promises");
const path = require('path');
const { send } = require("process");
const mySql = require('mysql2')
const app = express();


const pool=mySql.createConnection({
  host:"localhost",
  user:"root",
  database:"mgl-site",
  password:"88560820"
})


// app.get('/students', (req,res)=>{
//     pool.query('SELECT * FROM mongol',(err,data)=>{
//         if(err){
//             throw err
//         }else{
//             res.send(data)
//         }
//     })

// })



app.use(express.json())
let students;

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})
// app.get('/students',(req,res)=>{
  
// })

app.listen(3000, async ()=>{
  console.log("server listen 3000port")
 })













 
// const pool=mySql.createConnection({
//   host:'localhost',
//   user:'root',
//   database:'mgl-site',
//   password:'88560820'
// })

//GET POST PUT DELETE //crud






// app.get('/students', (req,res)=>{
//     pool.query('SELECT * FROM mongol',(err,data)=>{
//         if(err){
//             throw err
//         }else{
//             res.send(data)
//         }
//     })

// })




// app.post("/students", (req, res) => {
//   pool.query(
//     `insert into mongol(firstname) value('${req.body.name}')`,
//     (err, data) => {
//       if (err) {
//         throw err;
//       } else {
//         console.log(data)
//       }
//     }
//   );
// });




// app.delete('/students/:id',(req,res)=>{
//   pool.query(`delete from mongol where id=${req.params.id}`), (err, data)=>{
//     if(err){
//       throw err
//     }
//     else{
//       console.log(req.params.id)
//     }
//   }
// })





// app.put('/students/:id',(req,res)=>{
//   pool.query(`insert into mongol(firstname) value('${req.body.name}') where id=${req.params.id}`), (err, data)=>{
//     if(err){
//       throw err
//     }
//     else{
//       console.log(req.params.id)
//     }
//   }

//   UPDATE table_name
// SET column1 = value1, column2 = value2, ...
// WHERE condition;
// })


// https://github.com/bazraatamir/sw-921
//bazraa1111
// hairtaishuu







