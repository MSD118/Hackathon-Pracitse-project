const express = require('express');
const mysql = require('mysql2');
const config = require('config');
const adminApp = express.Router();

const connection = mysql.createConnection({
    host: config.get('host'),
    user: config.get('user'),
    password: config.get('password'),
    database: config.get('database')
});

adminApp.get("/topics", (request, response) => {
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

adminApp.post("/tutorials/:topic_id", (request, response) => {
    var query = `select tutorial_id, title from tutorials_table where topic_id = ${request.params.topic_id}`;

    connection.query(query, (error, result) => {
        console.log(result);
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

adminApp.post("/addtutorial", (request, response) => {

    var query = `insert into tutorials_table values(${request.body.tutorial_id}, '${request.body.title}', 0, '${request.body.publish_date}', '${request.body.contents}', ${request.body.author_id}, ${request.body.topic_id})`;

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

adminApp.post("/addtopic", (request, response) => {

    var query = `insert into topics_table values(${request.body.topic_id}, '${request.body.topic_name}', '${request.body.description}')`;

    connection.query(query, (error, result) => {
        console.log(result);

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

adminApp.delete("/deletetutorial/:tutorial_id", (request, response) => {

    var query = `delete from tutorials_table where tutorial_id = ${request.params.tutorial_id}`;

    connection.query(query, (error, result) => {
        if (error == null) {
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


adminApp.put("/updatetutorial/:tutorial_id", (request, response) => {
    var query = `update tutorials_table set title = '${request.body.title}', publish_date = '${request.body.publish_date}', contents = '${request.body.contents}' where tutorial_id = ${request.params.tutorial_id}`;

    connection.query(query, (error, result) => {
        if (error == null) {
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

module.exports = adminApp;