import { Request, Response } from 'express';
import { OrderServices } from './orders.service';

const createOrders = async(req: Request, res: Response) => {
  const order = req.body;
  try {
    const result = await OrderServices.addOrderToDB(order);
    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data:result,
    });
  } catch (error) {
    res.status(500).json({
        success: false,
        message: 'Something went wrong while creating the order',
        error:error
      });
  }
};


const getOrders = async(req: Request, res: Response) => {
    try {
      const result = await OrderServices.getOrderFromDB();
      res.status(200).json({
        success: true,
        message: 'Orders fetched successfully!',
        data:result,
      });
    } catch (error) {
      res.status(500).json({
          success: false,
          message: 'Something went wrong while retriving orders',
          error:error
        });
    }
  };

export const OrderControllers = {
  createOrders,getOrders
};
