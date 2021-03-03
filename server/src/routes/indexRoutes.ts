import { Router } from 'express';
import { productController } from '../controllers/productController';

class IndexRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{ 
        this.router.get('/', productController.get); 
    }
} 

const indexRouters = new IndexRoutes();
export default indexRouters.router;
