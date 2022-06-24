const config = require("./config")
// const app = require("./config/application");
const data = require("./data")(config);
data.createProduct({name: "gosho"});
(data.getAllProducts().then(products => console.log(products.length)))


// app.listen(config.port, () => console.log("The magic happens at " + config.port))