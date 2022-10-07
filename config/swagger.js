const options = {
    swaggerDefinition: {
        info: {
            version: "1.0.0",
            title: "BeduShop API"
        },
        // componens:{
        //     securitySchemes: {
        //         bearerAuth: {
        //             type:,
        //             "JWT"
        //         }
        //     }
        // }
    },
    apis: ["./routes/gods.js"]
}

module.exports = options;