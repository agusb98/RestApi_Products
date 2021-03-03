import User from '../models/user';

class Product{
    public checkAdd(name: string = '', sex: string = "unisex", quantity: number = 0, image: string = '', price: number = -1){
        var flag = User.validateName(name);
        if(!flag.status){
            return { 'status': false, 'info': flag.info };
        }

        var flag = User.validateSex(sex);
        if(!flag.status){
            return { 'status': false, 'info': flag.info };
        }

        var flag = this.validateQuantity(quantity);
        if(!flag.status){
            return { 'status': false, 'info': flag.info };
        }

        var flag = this.validatePrice(price);
        if(!flag.status){
            return { 'status': false, 'info': flag.info };
        }
        return { 'status': true };
    }

    public validateQuantity(num: number){
        if(num >= 0){
            return {"status": true};
        }
        return {"status": false, "info": "Cantidad Invalida"};
    }

    public validatePrice(num: number){
        if(num > 0){
            return {"status": true};
        }
        return {"status": false, "info": "Precio Invalido"};
    }

    public checkUpdate(name: string = '', sex: string = '', quantity: number = -1, image: string = '', price: number = -1){
        var flag = User.validateName(name);
        if(!flag.status && name !== ''){
            return { 'status': false, 'info': flag.info };
        }

        var flag = User.validateSex(sex);
        if(!flag.status && sex !== ''){
            return { 'status': false, 'info': flag.info };
        }

        var flag = this.validateQuantity(quantity);
        if(!flag.status && quantity !== -1){
            return { 'status': false, 'info': flag.info };
        }

        var flag = this.validatePrice(price);
        if(!flag.status && price != -1){
            return { 'status': false, 'info': flag.info };
        }
        
        return { 'status': true };
    }

    public setName(str: string){
        return User.setName(str);
    }

    public setSex(str: string){
        return User.setSex(str);
    }
}

const product = new Product();
export default product;