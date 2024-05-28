import express, { Request,Response } from 'express';
import cors from 'cors';
import { ProductRoutes } from './modules/products/products.route';
import { OrderRoutes } from './modules/orders/orders.route';

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api",ProductRoutes)
app.use("/api",OrderRoutes)

app.all("*", (req: Request, res: Response) => {
    res.status(400).json({
      status: false,
      message: "Route not found"
    });
  });

export default app;
