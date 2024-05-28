import express from 'express';
import cors from 'cors';
import { ProductRoutes } from './modules/products/products.route';
import { OrderRoutes } from './modules/orders/orders.route';

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api",ProductRoutes)
app.use("/api",OrderRoutes)

//application routes
//app.use("/api/v1/students",StudentRoutes)

export default app;
