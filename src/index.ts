import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import {createConnection} from 'typeorm';
 
const app = express();
createConnection();

//middlewares 
app.use(cors()); 
app.use(morgan('dev'));
app.use(express.json());


async function runserver (){
     await app.listen(3000);
    console.log('server on port: ',3000);
};

runserver();

 