"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const PASS = '12345678';
class User {
    checkAdd(name = '', surname = '', sex = "unisex", email = '', password = '') {
        var flag = this.validateName(name);
        if (!flag.status) {
            return { 'status': false, 'info': flag.info };
        }
        var flag = this.validateSurname(surname);
        if (!flag.status) {
            return { 'status': false, 'info': flag.info };
        }
        var flag = this.validateSex(sex);
        if (!flag.status) {
            return { 'status': false, 'info': flag.info };
        }
        var flag = this.validateEmail(email);
        if (!flag.status) {
            return { 'status': false, 'info': flag.info };
        }
        var flag = this.validatePassword(password);
        if (!flag.status) {
            return { 'status': false, 'info': flag.info };
        }
        return { 'status': true };
    }
    checkUpdate(name = '', surname = '', sex = '', email = '', password = '') {
        var flag = this.validateName(name);
        if (!flag.status && name !== '') {
            return { 'status': false, 'info': flag.info };
        }
        var flag = this.validateSurname(name);
        if (!flag.status && name !== '') {
            return { 'status': false, 'info': flag.info };
        }
        var flag = this.validateSex(sex);
        if (!flag.status && sex !== '') {
            return { 'status': false, 'info': flag.info };
        }
        var flag = this.validateEmail(email);
        if (!flag.status && email !== '') {
            return { 'status': false, 'info': flag.info };
        }
        var flag = this.validatePassword(password);
        if (!flag.status && password != '') {
            return { 'status': false, 'info': flag.info };
        }
        return { 'status': true };
    }
    validateName(str) {
        if (str.length > 1) {
            return { "status": true };
        }
        return { "status": false, "info": "Nombre Invalido" };
    }
    validateSurname(str) {
        if (str.length > 1) {
            return { "status": true };
        }
        return { "status": false, "info": "Apellido Invalido" };
    }
    validateSex(str) {
        if (str === 'femenino' || str === 'masculino' || str === 'unisex') {
            return { "status": true };
        }
        return { "status": false, "info": "Genero Invalido" };
    }
    validateEmail(str) {
        console.log(str);
        if (str.length >= 8) {
            return { "status": true };
        }
        return { "status": false, "info": "Email Invalido" };
    }
    validatePassword(str) {
        if (str.length >= 8) {
            return { "status": true };
        }
        return { "status": false, "info": "Password Debil" };
    }
    setName(str) {
        str = str.toLowerCase();
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    setSex(str) {
        return str.toLowerCase();
    }
    setEmail(str) {
        return this.setSex(str);
    }
    setPasswordToJWT(str, key = PASS) {
        return jsonwebtoken_1.default.sign(str, key);
    }
    getToken(user, key = PASS) {
        return jsonwebtoken_1.default.sign(user, key);
    }
    getByToken(token) {
        return jsonwebtoken_1.default.decode(token);
    }
}
const user = new User();
exports.default = user;
