"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
class UserRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', userController_1.userController.get);
        this.router.get('/log', userController_1.userController.logIn);
        this.router.post('/sign', userController_1.userController.signIn);
        this.router.put('/', userController_1.userController.update);
        this.router.delete('/', userController_1.userController.delete);
    }
}
const userRoutes = new UserRoutes();
exports.default = userRoutes.router;
