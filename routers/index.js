const { dirLoader } = require("../utils");

module.exports = (app, data) => {
    const routerModulesExports = dirLoader.loadModulesEndingWithFrom("-router", __dirname);
    routerModulesExports.forEach(attachRouter => attachRouter(app, data));
}