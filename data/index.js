const mongoose = require("mongoose"),
    dirLoader = require("../utils/dirLoader");

module.exports = function(config) {
    mongoose.connect(config.connectionString);

    const models = require("../models"),
        dataModulesExports = dirLoader.loadModulesEndingWith("-data", __dirname),
        data = {};

        dataModulesExports
            .map(moduleExport => moduleExport(models))
            .forEach(dataOperationsObject => 
                Object
                    .keys(dataOperationsObject)
                    .forEach(key => data[key] = dataOperationsObject[key])
            );

    return data;
}   