import { Orders } from "./orders.interface";
import { OrderModel } from "./orders.model";

const addOrderToDB= async (order:Orders)=>{
    const result = await OrderModel.create(order);
    return result;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getOrderFromDB= async (email:any)=>{
    if(email){
        const result = await OrderModel.find({email:email});
        return result;
    }
    else{
        const result = await OrderModel.find();
        return result;
    }
    
}


export const OrderServices={
    addOrderToDB,getOrderFromDB
}