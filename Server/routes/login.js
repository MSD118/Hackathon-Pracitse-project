const express = require('express');
const mysql = require('mysql2');
const config = require('config');
const loginApp = express.Router();

const connection = mysql.createConnection({
    host: config.get('host'),
    user: config.get('user'),
    password: config.get('password'),
    database: config.get('database')
});


loginApp.post("/", (request, response) => {

    var query = `select * from user_auth_view where email = '${request.body.email}' and password = '${request.body.password}' and role_name = '${request.body.role_name}'`;

    connection.query(query, (error, result) => {
        console.log(result);
        if (result.length != 0) {
            var reply = 
            { 
                isValid: true,
                user_id: result[0].user_id,
                first_name: result[0].first_name,
                last_name: result[0].last_name
            };
            response.setHeader('Content-Type', 'application/json');
            response.send(reply);
        } else {
            var reply = { isValid: false };
            response.setHeader('Content-Type', 'application/json');
            response.send(reply);
        }
    });
});


loginApp.post("/signup", (request, response) => {

    var query = `call signup(${request.body.user_id}, '${request.body.first_name}', '${request.body.last_name}', '${request.body.email}', '${request.body.password}', '${request.body.role_name}');`
    
    connection.query(query, (error, result) => {
        if (error == null) {
            var responseText = JSON.stringify(result);
            response.setHeader('Content-Type', 'application/json');
            response.send(responseText);
        } else {
            console.log(error);
            response.setHeader('Content-Type', 'application/json');
            response.send(error);
        }
    });
});

module.exports = loginApp;
