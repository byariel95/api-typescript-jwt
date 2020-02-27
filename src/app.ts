import 'reflect-metadata';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import {createConnection} from 'typeorm';
import authRoutes from './routes/auth.routes';
 

// initial
const app = express();
createConnection();

// settings
app.set('port', process.env.PORT || 3000);


//middlewares 
 
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// routes

app.use(authRoutes);

export default app;