const express = require('express');
const mysql = require('mysql2');
const config = require('config');
const customerApp = express.Router();

const connection = mysql.createConnection({
    host: config.get('host'),
    user: config.get('user'),
    password: config.get('password'),
    database: config.get('database')
});

customerApp.post("/countInc/:tutorial_id", (request, response) => {

    var query = `call countinc(${request.params.tutorial_id})`;

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

customerApp.get("/gettopics", (request, response) => {
    var query = `select * from topics_table`;

    connection.query(query, (error, result) => {

        if (result.length != 0) {

            // console.log(result);

            var data = JSON.stringify(result);
            response.setHeader('Content-Type', 'application/json');
            response.send(data);
        } else {
            console.log(error);
            response.setHeader('Content-Type', 'application/json');
            response.send(error);
        }
    });
});


customerApp.post("/gettutorials/:topic_id", (request, response) => {
    var query = `select tutorial_id, title from tutorials_table where topic_id = ${request.params.topic_id}`;

    connection.query(query, (error, result) => {
        console.log(result);
        if (result.length != 0) {
            var data = JSON.stringify(result);
            response.setHeader('Content-Type', 'application/json');
            response.send(data);
        } else {
            console.log(error);
            setHeader('Content-Type', 'application/json');
            response.send(error);
        }
    });
});

customerApp.post("/loadtutorial/:tutorial_id", (request, response) => {

    var query = `select * from author_name_tutorial_view where tutorial_id=${request.params.tutorial_id}`;

    connection.query(query, (error, result) => {
        if (result.length != 0) {
            var data = JSON.stringify(result);
            response.setHeader('Content-Type', 'application/json');
            response.send(data);
        } else {
            console.log(error);
            der('Content-Type', 'application/json');
            response.send(error);
        }
    });
});

module.exports = customerApp;