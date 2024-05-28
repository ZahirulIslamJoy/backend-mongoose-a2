import { ProductModel } from "../products/products.model";
import { Orders } from "./orders.interface";
import { OrderModel } from "./orders.model";

const addOrderToDB= async (order:Orders)=>{
    const id = order.productId;
    const currentProduct= await ProductModel.findOne({_id:id});
    if(currentProduct){
        const {quantity : avaliableQuantity}=currentProduct.inventory;
        const orderQuantity= order.quantity;
        if(avaliableQuantity >= orderQuantity ){
           const newQuantity = avaliableQuantity- orderQuantity;
           await ProductModel.updateOne(
            { _id: id }, 
            { $set: { 'inventory.quantity': newQuantity } }
          );
          if(newQuantity == 0){
             await ProductModel.updateOne(
                { _id: id }, 
                { $set: { 'inventory.inStock': false } }
              );
          }
          const result = await OrderModel.create(order);
            const res= {ordered:true,result};
            return res;
        }
        else{
            const res= {ordered:false,result:"Stockout"};
            return res;
        }
    } 
   
    
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