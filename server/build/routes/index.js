"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexController_1 = require("../controllers/indexController");
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/index', indexController_1.indexController.get);
    }
}
const userRoutes = new IndexRoutes();
exports.default = userRoutes.router;
