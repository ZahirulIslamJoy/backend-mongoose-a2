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
    res.status(200).json({
        success: false,
        message: 'Something went wrong',
        erroe: err,
      });
  }
};


const getAllProducts = async (req: Request, res: Response) => {
    try {
      const result = await ProductServices.getAllProductsFromDB();
      res.status(200).json({
        "success": true,
        "message": "Products fetched successfully!",
        data: result,
      });
    } catch (err) {
      res.status(200).json({
          success: false,
          message: 'Something went wrong while getting the products ',
          erroe: err,
        });
    }
  };


  const getSingleProducts = async (req: Request, res: Response) => {
    const {id}=req.params; 
    try {
      const result = await ProductServices.getSpecificProductFromDB(id);
      res.status(200).json({
        "success": true,
        "message": "Products fetched successfully!",
        data: result,
      });
    } catch (err) {
      res.status(200).json({
          success: false,
          message: 'Something went wrong while getting the products ',
          erroe: err,
        });
    }
  };


export const ProductControllers={
    createProduct, getAllProducts,getSingleProducts
}

