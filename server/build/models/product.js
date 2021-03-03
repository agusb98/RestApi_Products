"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../models/user"));
class Product {
    checkAdd(name = '', sex = "unisex", quantity = 0, image = '', price = -1) {
        var flag = user_1.default.validateName(name);
        if (!flag.status) {
            return { 'status': false, 'info': flag.info };
        }
        var flag = user_1.default.validateSex(sex);
        if (!flag.status) {
            return { 'status': false, 'info': flag.info };
        }
        var flag = this.validateQuantity(quantity);
        if (!flag.status) {
            return { 'status': false, 'info': flag.info };
        }
        var flag = this.validatePrice(price);
        if (!flag.status) {
            return { 'status': false, 'info': flag.info };
        }
        return { 'status': true };
    }
    validateQuantity(num) {
        if (num >= 0) {
            return { "status": true };
        }
        return { "status": false, "info": "Cantidad Invalida" };
    }
    validatePrice(num) {
        if (num > 0) {
            return { "status": true };
        }
        return { "status": false, "info": "Precio Invalido" };
    }
    checkUpdate(name = '', sex = '', quantity = -1, image = '', price = -1) {
        var flag = user_1.default.validateName(name);
        if (!flag.status && name !== '') {
            return { 'status': false, 'info': flag.info };
        }
        var flag = user_1.default.validateSex(sex);
        if (!flag.status && sex !== '') {
            return { 'status': false, 'info': flag.info };
        }
        var flag = this.validateQuantity(quantity);
        if (!flag.status && quantity !== -1) {
            return { 'status': false, 'info': flag.info };
        }
        var flag = this.validatePrice(price);
        if (!flag.status && price != -1) {
            return { 'status': false, 'info': flag.info };
        }
        return { 'status': true };
    }
    setName(str) {
        return user_1.default.setName(str);
    }
    setSex(str) {
        return user_1.default.setSex(str);
    }
}
const product = new Product();
exports.default = product;
