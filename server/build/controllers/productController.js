"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productController = void 0;
const database_1 = __importDefault(require("../database"));
const product_1 = __importDefault(require("../models/product"));
class ProductController {
    get(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const products = yield database_1.default.query('SELECT * FROM products');
            return response.json(products);
        });
    }
    getOne(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const product = yield database_1.default.query('SELECT * FROM products WHERE id = ?', [id]);
            if (product.length > 0) {
                return response.json(product);
            }
            else {
                return response.status(404).json({ status: 'ERROR', text: 'Producto no existente' });
            }
        });
    }
    add(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            var flag;
            request.body.name = product_1.default.setName(request.body.name);
            request.body.sex = product_1.default.setSex(request.body.sex);
            const product = yield database_1.default.query('SELECT * FROM products WHERE name = ?', [request.body.name]);
            if (product.length > 0) {
                flag = { "status": false, "info": "Nombre repetido" };
            }
            else {
                flag = product_1.default.checkAdd(request.body.name, request.body.sex, request.body.quantity, request.body.image, request.body.price);
            }
            if (flag.status) {
                yield database_1.default.query('INSERT INTO products SET ?', [request.body]);
                return response.json({ status: "OK", info: "Agregado con Exito" });
            }
            return response.json({ status: "ERROR", info: flag.info });
        });
    }
    update(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            var flag;
            const { id } = request.params;
            request.body.name = product_1.default.setName(request.body.name);
            request.body.sex = product_1.default.setSex(request.body.sex);
            var product = yield database_1.default.query('SELECT * FROM products WHERE name = ?', [request.body.name]);
            if (product.length > 0) {
                flag = { "status": false, "info": "Nombre repetido" };
            }
            else {
                flag = product_1.default.checkUpdate(request.body.name, request.body.sex, request.body.quantity, request.body.image, request.body.price);
            }
            if (!flag.status) {
                return response.json({ status: 'ERROR', info: flag.info });
            }
            product = yield database_1.default.query('SELECT * FROM products WHERE id = ?', [id]);
            if (product.length > 0) {
                yield database_1.default.query('UPDATE products SET ? WHERE id = ?', [request.body, id]);
                return response.json({ status: 'OK', info: 'Actualizado con Exito' });
            }
            else {
                return response.status(404).json({ status: 'ERROR', info: 'Producto no existente' });
            }
        });
    }
    delete(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const product = yield database_1.default.query('SELECT * FROM products WHERE id = ?', [id]);
            if (product.length > 0) {
                yield database_1.default.query('DELETE FROM products WHERE id = ?', [id]);
                return response.json({ status: 'OK', info: 'Eliminado con Exito' });
            }
            else {
                return response.status(404).json({ status: 'ERROR', info: 'Producto no existente' });
            }
        });
    }
}
exports.productController = new ProductController();
