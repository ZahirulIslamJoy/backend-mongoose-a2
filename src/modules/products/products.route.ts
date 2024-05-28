import express from "express"
import { ProductControllers } from "./products.controllers";
const router = express.Router();



router.post("/products",ProductControllers.createProduct)



export const ProductRoutes=router
