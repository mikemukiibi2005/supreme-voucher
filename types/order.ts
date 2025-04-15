import { Voucher } from "./voucher.ts";

export interface Order {
    order_id: number;
    time: Date;
    status: 'PENDING' | 'CONFIRMED' | 'CANCELLED';

    vouchers: Voucher[];
}

export class Order implements Omit<Order, "order_id" | "vouchers"> {
    constructor(
        public time:Date,
        public status:'PENDING'|'CONFIRMED'|'CANCELLED',
    ){}
}