import { Products } from "./products.interface";
import { ProductModel } from "./products.model"

const addProductToDB=async(product: Products)=>{
    const result= await ProductModel.create(product);
    return result
}

export const ProductServices={
    addProductToDB
}