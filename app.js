require('dotenv').config();
const express = require('express');
const sequelize = require('./config/db');
const routes = require('./routes/index');
const auth = require('./config/auth');

const swaggerJsDoc = require ('swagger-jsdoc');
const swaggerOptions = require ('./config/swagger');
const swaggerUI = require('swagger-ui-express');
const swaggerSpec = swaggerJsDoc(swaggerOptions);

const app = express();
app.use(express.json());
app.use(auth.opcional);
app.use('/', routes);
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

try {
    sequelize.authenticate();
    sequelize.sync();
    console.log("Connected to DB");
} catch (error){
    console.log("unable to connect to DB: ", error);
}


app.listen(process.env['PORT'] || 3000, ()=>{
    console.log('Server listening on '+ process.env['PORT'] );
});