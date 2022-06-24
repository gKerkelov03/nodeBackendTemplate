const dirLoader = require("../utils/dirLoader"),
    modelsMap = {};

dirLoader
    .loadModulesEndingWith("-model", __dirname)
    .forEach(model => modelsMap[model.modelName] = model);

module.exports = modelsMap;