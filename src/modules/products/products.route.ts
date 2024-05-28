import express from "express"
import { ProductControllers } from "./products.controllers";
const router = express.Router();



router.post("/products",ProductControllers.createProduct)
router.get("/products",ProductControllers.getAllProducts)
router.get("/products/:id",ProductControllers.getSingleProducts)
router.put("/products/:id",ProductControllers.updateProduct)
router.delete("/products/:id",ProductControllers.deleteProduct)



export const ProductRoutes=router
