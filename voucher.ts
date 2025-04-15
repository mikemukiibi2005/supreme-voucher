import { Service } from "./service.ts";

export interface Voucher {
    voucher_id:number,
    
    discount:number,
    service: Service
}

export class Voucher implements Omit<Voucher, "voucher_id"> {
    constructor(
        public discount: number,
        public service: Service
    ) {}
}