// const { createPool } = require('mysql');
// const pool = createPool({
//     host:"localhost",
//     user:"root",
//     password:"Thiru@123",
//     database:"test",
//     connectionLimit:10
// })
//  pool.query('')

// const express = require('express')
// const router = express.Router();
const mysql = require('mysql');

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database:"thiru",
    port:3300
    // connectionLimit:10
})

connection.connect(function(error){
    if(error){
        console.log("error--->",error)
    }
    else{
        console.log("db connected successfully--->",error)

    }
})

module.exports = connection;