const app = require("./config/app"),
    config = require("./config");

app.listen(config.port, () => console.log("The magic happens at " + config.port));