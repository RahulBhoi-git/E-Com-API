import express from "express";
import ProductController from "./product.controller.js";
import { upload } from "../../middlewares/fileupload.middleware.js";
const productRouter = express.Router();
const productController = new ProductController();
//localhost:4200/api/products/filter?minPrice=10&maxPrice=20&category=Category1
productRouter.post('/rate',productController.rateProduct);
productRouter.get(
    '/filter',productController.filterProducts
);
productRouter.get("/", productController.getAllProducts);
productRouter.post("/", 
    upload.single('imageUrl'),
    productController.addProduct);
productRouter.get("/:id",productController.getOneProduct);
//localhost:4200/api/products/filter?minPrice=10&maxPrice=20&category=Category1
export default productRouter;
