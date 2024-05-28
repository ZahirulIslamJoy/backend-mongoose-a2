import { Orders } from "./orders.interface";
import { OrderModel } from "./orders.model";

const addOrderToDB= async (order:Orders)=>{
    const result = await OrderModel.create(order);
    return result;
}

const getOrderFromDB= async ()=>{
    const result = await OrderModel.find();
    return result;
}





export const OrderServices={
    addOrderToDB,getOrderFromDB
}