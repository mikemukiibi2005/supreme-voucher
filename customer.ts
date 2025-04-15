import { Order } from "./order.js";

export interface Customer {
    customer_id: number;
    name: string;
    phone: string;

    orders: Order[];
}