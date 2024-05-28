import { Products } from "./products.interface";
import { ProductModel } from "./products.model"

const addProductToDB=async(product: Products)=>{
    const result= await ProductModel.create(product);
    return result
}


const getAllProductsFromDB=async()=>{
    const result= await ProductModel.find();
    return result
}

const getSpecificProductFromDB=async(id : string)=>{
    const result= await ProductModel.find({_id:id});
    return result
}

const updateSingleProductInDB=async(id : string)=>{
    const result= await ProductModel.updateOne({_id:id});
    return result
}

export const ProductServices={
    addProductToDB, getAllProductsFromDB,getSpecificProductFromDB,updateSingleProductInDB
}