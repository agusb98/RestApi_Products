import express, { Application } from 'express';
import indexRouters from './routes/indexRoutes';
import productRoutes from './routes/productRoutes';
import userRoutes from './routes/userRouters';

import morgan from 'morgan';
import cors from 'cors';

class Server{
    public app: Application;

    constructor(){
        this.app = express()
        this.config();
        this.routes();
    }

    //SETTINGS
    config(): void{
        this.app.set('port', process.env.PORT || 3000);  //change port in case of previos or diferent than 3000
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    //ROUTES
    routes(): void{
        this.app.use('/api/index', indexRouters);
        this.app.use('/api/users', userRoutes);
        this.app.use('/api/products', productRoutes);
    }

    start(): void{
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();