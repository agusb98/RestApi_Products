"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = require("../controllers/productController");
class ProductRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', productController_1.productController.get);
        this.router.get('/:id', productController_1.productController.getOne);
        this.router.post('/add', productController_1.productController.add);
        this.router.put('/:id', productController_1.productController.update);
        this.router.delete('/:id', productController_1.productController.delete);
    }
}
const productRoutes = new ProductRoutes();
exports.default = productRoutes.router;
