import express from "express"
import { OrderControllers } from "./orders.controlles";
const router = express.Router();



router.post("/orders",OrderControllers.createOrders)
router.get("/orders",OrderControllers.getOrders)



export const OrderRoutes=router
