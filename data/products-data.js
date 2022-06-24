
module.exports = ({ Product }) => {
    return {
        getAllProducts() {
            return new Promise((resolve, reject) => {
                Product.find((err, products) => {
                    if(err) {
                        reject(err);
                    }

                    resolve(products);
                })
            });
        },
        getProductById(id) {
            return new Promise((resolve, reject) => {
                Product.findById(id, (err, product) => {
                    if(err) {
                        reject(err);
                    }

                    resolve(product);
                })
            })
        },
        createProduct({ name, categories, reviews }) {
            return new Promise((resolve, reject) => {
                Product.create({ name, categories, reviews }, (err, creation) => {
                    if(err) {
                        reject(err);
                    }

                    resolve(creation);
                });
            });
        },
    }
}