import { Request, Response } from 'express';
import db from '../database';
import Product from '../models/product';

class ProductController{
    public async get(request: Request, response: Response): Promise<any>{
        const products = await db.query('SELECT * FROM products');
        return response.json(products);
    }

    public async getOne(request: Request, response: Response): Promise<any> {
        const { id } = request.params;
        const product = await db.query('SELECT * FROM products WHERE id = ?', [id]);

        if(product.length > 0){ return response.json(product); }
        else{ return response.status(404).json({status: 'ERROR', text: 'Producto no existente'}); }
    }

    public async add(request: Request, response: Response): Promise<any> {
        var flag;
        request.body.name = Product.setName(request.body.name);
        request.body.sex = Product.setSex(request.body.sex);   

        const product = await db.query('SELECT * FROM products WHERE name = ?', [request.body.name]);
        if(product.length > 0){ 
            flag = { "status": false, "info": "Nombre repetido" }; 
        }
        else{ 
            flag = Product.checkAdd(request.body.name, request.body.sex, request.body.quantity, request.body.image, request.body.price); 
        }
        if(flag.status){
            await db.query('INSERT INTO products SET ?', [request.body]);
            return response.json({status: "OK", info: "Agregado con Exito"});
        } 
        return response.json({status: "ERROR", info: flag.info});
    }

    public async update(request: Request, response: Response): Promise<any> {
        var flag;
        const { id } = request.params;
        request.body.name = Product.setName(request.body.name);
        request.body.sex = Product.setSex(request.body.sex);   

        var product = await db.query('SELECT * FROM products WHERE name = ?', [request.body.name]);
        if(product.length > 0){ flag = { "status": false, "info":  "Nombre repetido" }; }
        else{ flag = Product.checkUpdate(request.body.name, request.body.sex, request.body.quantity, request.body.image, request.body.price); }
        
        if(!flag.status){ return response.json({status: 'ERROR', info: flag.info}); }

        product = await db.query('SELECT * FROM products WHERE id = ?', [id]);
        if(product.length > 0){ 
            await db.query('UPDATE products SET ? WHERE id = ?', [request.body, id]);
            return response.json({status: 'OK', info: 'Actualizado con Exito'}); 
        }
        else{ return response.status(404).json({status: 'ERROR', info: 'Producto no existente'}); }
    }

    public async delete(request: Request, response: Response): Promise<any>{
        const { id } = request.params;
        const product = await db.query('SELECT * FROM products WHERE id = ?', [id]);

        if(product.length > 0){ 
            await db.query('DELETE FROM products WHERE id = ?', [id]);
            return response.json({status: 'OK', info: 'Eliminado con Exito'}); 
        }
        else{ return response.status(404).json({status: 'ERROR', info: 'Producto no existente'}); }
    }
}

export const productController = new ProductController();