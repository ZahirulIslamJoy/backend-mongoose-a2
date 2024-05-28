import { Request, Response } from 'express';
import { ProductServices } from './products.service';

const createProduct = async (req: Request, res: Response) => {
  const product = req.body;
  try {
    const result = await ProductServices.addProductToDB(product);
    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      erroe: err,
    });
  }
};

const getAllProducts = async (req: Request, res: Response) => {
    const {searchTerm}=req.query;
  try {
    const result = await ProductServices.getAllProductsFromDB(searchTerm);
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong while getting the products ',
      erroe: err,
    });
  }
};

const getSingleProducts = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await ProductServices.getSpecificProductFromDB(id);
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong while getting the products ',
      erroe: err,
    });
  }
};

const updateProduct = async (req: Request, res: Response) => {
  const updatedData = req.body;
  const { id } = req.params;
  try {
    const { result, data } = await ProductServices.updateSingleProductInDB(
      id,
      updatedData,
    );
    if (result.modifiedCount != 0) {
      res.status(200).json({
        success: true,
        message: 'Product updated successfully!',
        data: data,
      });
    } else {
      return res
        .status(404)
        .send({ error: 'Product not found or no changes made' });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong while updating the products ',
      erroe: err,
    });
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await ProductServices.deleteSingleProductInDB(id);
    if (result.deletedCount != 0) {
      res.status(200).json({
        success: true,
        message: 'Product deleted successfully!',
        data: null,
      });
    } else {
      return res
        .status(404)
        .send({ error: 'Product not found' });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong while deleting the products ',
      erroe: err,
    });
  }
};

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getSingleProducts,
  updateProduct,
  deleteProduct,
};
