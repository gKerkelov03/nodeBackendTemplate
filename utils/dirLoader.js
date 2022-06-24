const fs = require("fs"),
    path = require("path");

module.exports = {
    loadModulesEndingWith(conventionString, dir) {
        const results = [];

        fs.readdirSync(dir)
            .filter(name => name.includes(conventionString))
            .forEach(module => {
                const moduleExport = require(path.join(dir, module));
                results.push(moduleExport);
            });

        return results;
    }
}