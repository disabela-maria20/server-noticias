import cors from 'cors';
import express, { Express } from 'express';

const server: Express = express();

server.set('view engine', 'ejs');
server.set('views', './app/views');

server.use(cors());

export default server;
