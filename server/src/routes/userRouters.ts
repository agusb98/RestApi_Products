import { Router } from 'express';
import { userController } from '../controllers/userController';

class UserRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', userController.get); 
        this.router.get('/log', userController.logIn); 
        this.router.post('/sign', userController.signIn); 
        this.router.put('/', userController.update); 
        this.router.delete('/', userController.delete); 
    }
}
const userRoutes = new UserRoutes();
export default userRoutes.router;
