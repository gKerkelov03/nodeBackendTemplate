const { Router } = require("express");

module.exports = (app, data) => {
    const productsController = require(""),
    productsRouter = new Router();

    productsRouter
        .get("/", )
        .get("/:id", (req, res) => {

        })
        .post("/", (req, res) => {

        });

    app.use("/products", productsRouter);
}