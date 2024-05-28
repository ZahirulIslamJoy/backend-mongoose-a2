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


export const ProductControllers={
    createProduct
}
