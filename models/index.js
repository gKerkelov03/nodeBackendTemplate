const { dirLoader } = require("../utils"),
    modelsMap = {};

dirLoader
    .loadModulesEndingWithFrom("-model", __dirname)
    .forEach(model => modelsMap[model.modelName] = model);

module.exports = modelsMap;