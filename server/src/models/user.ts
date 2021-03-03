import jwt from 'jsonwebtoken';
const PASS = '12345678';

class User{
    public checkAdd(name: string = '', surname: string = '', sex: string = "unisex", email: string = '', password: string = ''){
        var flag = this.validateName(name);
        if(!flag.status){
            return { 'status': false, 'info': flag.info };
        }

        var flag = this.validateSurname(surname);
        if(!flag.status){
            return { 'status': false, 'info': flag.info };
        }

        var flag = this.validateSex(sex);
        if(!flag.status){
            return { 'status': false, 'info': flag.info };
        }

        var flag = this.validateEmail(email);
        if(!flag.status){
            return { 'status': false, 'info': flag.info };
        }

        var flag = this.validatePassword(password);
        if(!flag.status){
            return { 'status': false, 'info': flag.info };
        }
        return { 'status': true};
    }

    public checkUpdate(name: string = '', surname: string = '', sex: string = '', email: string = '', password: string = ''){
        var flag = this.validateName(name);
        if(!flag.status && name !== ''){
            return { 'status': false, 'info': flag.info };
        }

        var flag = this.validateSurname(name);
        if(!flag.status && name !== ''){
            return { 'status': false, 'info': flag.info };
        }

        var flag = this.validateSex(sex);
        if(!flag.status && sex !== ''){
            return { 'status': false, 'info': flag.info };
        }

        var flag = this.validateEmail(email);
        if(!flag.status && email !== ''){
            return { 'status': false, 'info': flag.info };
        }

        var flag = this.validatePassword(password);
        if(!flag.status && password != ''){
            return { 'status': false, 'info': flag.info };
        }
        return { 'status': true};
    }

    public validateName(str: string){
        if(str.length > 1){
            return {"status": true};
        }
        return {"status": false, "info": "Nombre Invalido"};
    }

    public validateSurname(str: string){
        if(str.length > 1){
            return {"status": true};
        }
        return {"status": false, "info": "Apellido Invalido"};
    }

    public validateSex(str: string){
        if(str === 'femenino' || str === 'masculino' || str === 'unisex'){
            return {"status": true};
        }
        return {"status": false, "info": "Genero Invalido"};
    }

    public validateEmail(str: string){
        console.log(str)
        if(str.length >= 8){
            return {"status": true};
        }
        return {"status": false, "info": "Email Invalido"};
    }

    public validatePassword(str: string){
        if(str.length >= 8){
            return {"status": true};
        }
        return {"status": false, "info": "Password Debil"};
    }

    public setName(str: string){
        str = str.toLowerCase();
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    public setSex(str: string){
        return str.toLowerCase();
    }

    public setEmail(str: string){
        return this.setSex(str);
    }

    public setPasswordToJWT(str: string, key:string = PASS){
        return jwt.sign(str, key);
    }

    public getToken(user: string, key:string = PASS){
        return jwt.sign(user, key);
    }

    public getByToken(token: string){
        return jwt.decode(token);
    }
}

const user = new User();
export default user;