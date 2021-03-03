import { json, Request, Response } from 'express';
import db from '../database';
import User from '../models/user';

class UserController{
    public async get(request: Request, response: Response): Promise<any>{
        const users = await db.query('SELECT * FROM users');
        return response.json(users);
    }

    public async logIn(request: Request, response: Response): Promise<any> {
        request.body.email = User.setEmail(request.body.email);
        request.body.password = User.setPasswordToJWT(request.body.password);

        const user = await db.query('SELECT * FROM users WHERE email = ?', [request.body.email]);
        if(user.length > 0){
            if(user[0].password === request.body.password){ 
                return response.json(User.getToken(JSON.stringify(user))); 
            }
            else{ return response.json({status: 'ERROR', text: 'Password incorrecto'}); }
        }
        else{ return response.json({status: 'ERROR', text: 'Email incorrecto'}); }
    }

    public async signIn(request: Request, response: Response): Promise<any> {
        var flag;
        request.body.sex = User.setSex(request.body.sex);
        request.body.name = User.setName(request.body.name);
        request.body.surname = User.setName(request.body.surname);
        request.body.email = User.setEmail(request.body.email);
        request.body.password = User.setPasswordToJWT(request.body.password);

        const user = await db.query('SELECT * FROM users WHERE email = ?', [request.body.email]);
        if(user.length > 0){ 
            flag = { "status": false, "info": "Email repetido" }; 
        }
        else{ 
            flag = User.checkAdd(request.body.name, request.body.surname, request.body.sex, request.body.email, request.body.password);
        }

        if(flag.status){
            await db.query('INSERT INTO users set ?', [request.body]);
            return response.json({status: "OK", info: "Agregado con Exito"});
        } 
        return response.json({status: "ERROR", info: flag.info});
    }

    public async update(request: Request, response: Response): Promise<any> {
        response.json({ status: "En proceso.." });
    }

    public async delete(request: Request, response: Response): Promise<any>{
        response.json({ status: "En proceso.." });
    }
}

export const userController = new UserController();