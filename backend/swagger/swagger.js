const swaggerAutogen = require('swagger-autogen')({openapi: "3.0.0", autoHeaders: false});

const doc = {
  info: {
    title: 'Circle API Docs',
    description: 'Welcome to Circle API'
  },
  host: 'localhost:5000',
  components: {
    "@schemas": {
        RegisterDTO: {
            type: "object",
            properties : {
                fullName : { type: "string" },
                username : { type: "string" },
                email : { type: "string" },
                password : { type: "string" },
                        },
            required : ["fullName", "username", "email", "password"]
        },
        LoginDTO: {
            type: "object",
            properties : {
                email : { type: "string" },
                password : { type: "string" },
                        },
            required : ["email", "password"]
        },
        CreateThreadDTO: {
            type: "object",
            properties : {
                content : { type: "string" },
                image : { type: "file" },
                        },
            required : ["content", "image"]
        },
    } ,
    securitySchemes:{
        bearerAuth: {
            type: 'http',
            scheme: 'bearer'
        }
    }
}
};

const outputFile = './swagger-output.json';
const routes = ['./src/index.ts'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);