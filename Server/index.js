const express = require('express');
const config = require('config');
const cors = require('cors');
const cusomterRelatedApp = require("./routes/customer");
const loginRelatedApp = require("./routes/login");
const adminRelatedApp = require("./routes/admin");

const app = express();

app.use(cors({ "origin": "*" }));

app.use(express.json());

app.use("/customer", cusomterRelatedApp);
app.use("/admin", adminRelatedApp)
app.use("/login", loginRelatedApp);


app.listen(config.get('PORT'), () => {
    console.log("Server Started on port: " + config.get('PORT'));
});