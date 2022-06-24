const express = require("express"),
    cookieParser = require("cookie-parser"),
    session = require("express-session"),
    bodyParser = require("body-parser"),
    config = require("./config"),
    data = require("./data")(config);
   
const app = express();

app.use(cookieParser());
app.use(bodyParser.urlEncoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({ secret: config.sessionSecretKey }))

require("./passport")(app);
require("../routers")(app, data);

module.exports = app;