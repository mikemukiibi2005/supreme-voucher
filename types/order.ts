import { Voucher } from "./voucher.ts";

interface Order {
    order_id: number;
    time: Date;
    status: 'PENDING' | 'CONFIRMED' | 'CANCELLED';

    vouchers: Voucher[];
}