const options = {
    swaggerDefinition: {
        openapi:"3.0.0",
        info: {
            version: "1.0.1",
            title: "BeduShop API",
            description: "This is a REST API made with Express."
        },
    },
    apis: ['./routes/products.js'],
}

module.exports = options;