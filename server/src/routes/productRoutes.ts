import { Router } from 'express';
import { productController } from '../controllers/productController';

class ProductRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{ 
        this.router.get('/', productController.get); 
        this.router.get('/:id', productController.getOne); 
        this.router.post('/', productController.add); 
        this.router.put('/:id', productController.update); 
        this.router.delete('/:id', productController.delete); 
    }
}
const productRoutes = new ProductRoutes();
export default productRoutes.router;
