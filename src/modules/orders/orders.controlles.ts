import { Request, Response } from 'express';
import { OrderServices } from './orders.service';

const createOrders = async (req: Request, res: Response) => {
  const order = req.body;
  try {
    const result1 = await OrderServices.addOrderToDB(order);
    if (result1 && result1.ordered) {
      res.status(200).json({
        success: true,
        message: 'Order created successfully!',
        data: result1.result,
      });
    } else if (result1 && result1.ordered == false) {
      res.status(500).json({
        success: false,
        message: 'Insufficient quantity available in inventory',
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Order not found',
    });
  }
};

const getOrders = async (req: Request, res: Response) => {
  const { email } = req.query;
  try {
    const result = await OrderServices.getOrderFromDB(email);
    res.status(200).json({
      success: true,
      message: 'Orders fetched successfully!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong while retriving orders',
      error: error,
    });
  }
};

export const OrderControllers = {
  createOrders,
  getOrders,
};
