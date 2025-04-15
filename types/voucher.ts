import { Service } from "./service.ts";

export interface Voucher {
    voucher_id:number,
    
    discount:number,
    service: Service
}