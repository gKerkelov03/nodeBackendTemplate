const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    categories: [String],
    reviews: [{}]
});

const model = mongoose.model("Product", schema);

module.exports = model; 