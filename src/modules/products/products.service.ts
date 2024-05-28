import { Products } from './products.interface';
import { ProductModel } from './products.model';

const addProductToDB = async (product: Products) => {
  const result = await ProductModel.create(product);
  return result;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getAllProductsFromDB = async (searchTerm:any) => {
  if (searchTerm) {
    const searchRegex = new RegExp(searchTerm, 'i'); 
    const result = await ProductModel.find({
      $or: [
        { name: { $regex: searchRegex } }, 
        { description: { $regex: searchRegex } }, 
        { category: { $regex: searchRegex } },
        { tags: { $regex: searchRegex } } 
      ]
    });
    return result;
  } else {
    const result = await ProductModel.find();
    return result;
  }
};

const getSpecificProductFromDB = async (id: string) => {
  const result = await ProductModel.find({ _id: id });
  return result;
};

const updateSingleProductInDB = async (id: string, updatedData: Products) => {
  const result = await ProductModel.updateOne({ _id: id }, updatedData);
  const data = await ProductModel.find({ _id: id });
  return { result, data };
};

const deleteSingleProductInDB = async (id: string) => {
  const result = await ProductModel.deleteOne({ _id: id });
  return result;
};

export const ProductServices = {
  addProductToDB,
  getAllProductsFromDB,
  getSpecificProductFromDB,
  updateSingleProductInDB,
  deleteSingleProductInDB,
};
