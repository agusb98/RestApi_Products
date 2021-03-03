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
exports.userController = void 0;
const database_1 = __importDefault(require("../database"));
const user_1 = __importDefault(require("../models/user"));
class UserController {
    get(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield database_1.default.query('SELECT * FROM users');
            return response.json(users);
        });
    }
    logIn(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            request.body.email = user_1.default.setEmail(request.body.email);
            request.body.password = user_1.default.setPasswordToJWT(request.body.password);
            const user = yield database_1.default.query('SELECT * FROM users WHERE email = ?', [request.body.email]);
            if (user.length > 0) {
                if (user[0].password === request.body.password) {
                    return response.json(user_1.default.getToken(JSON.stringify(user)));
                }
                else {
                    return response.json({ status: 'ERROR', text: 'Password incorrecto' });
                }
            }
            else {
                return response.json({ status: 'ERROR', text: 'Email incorrecto' });
            }
        });
    }
    signIn(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            var flag;
            request.body.sex = user_1.default.setSex(request.body.sex);
            request.body.name = user_1.default.setName(request.body.name);
            request.body.surname = user_1.default.setName(request.body.surname);
            request.body.email = user_1.default.setEmail(request.body.email);
            request.body.password = user_1.default.setPasswordToJWT(request.body.password);
            const user = yield database_1.default.query('SELECT * FROM users WHERE email = ?', [request.body.email]);
            if (user.length > 0) {
                flag = { "status": false, "info": "Email repetido" };
            }
            else {
                flag = user_1.default.checkAdd(request.body.name, request.body.surname, request.body.sex, request.body.email, request.body.password);
            }
            if (flag.status) {
                yield database_1.default.query('INSERT INTO users set ?', [request.body]);
                return response.json({ status: "OK", info: "Agregado con Exito" });
            }
            return response.json({ status: "ERROR", info: flag.info });
        });
    }
    update(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            response.json({ status: "En proceso.." });
        });
    }
    delete(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            response.json({ status: "En proceso.." });
        });
    }
}
exports.userController = new UserController();
