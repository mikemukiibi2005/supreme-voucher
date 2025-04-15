import { Order } from "./order.ts";

export interface Customer {
    customer_id: number;
    name: string;
    phone: string;

    orders: Order[];
}

export class Customer implements Omit<Customer, "customer_id" | "orders"> {
    constructor(
        public name: string,
        public phone: string,
    ){}
}