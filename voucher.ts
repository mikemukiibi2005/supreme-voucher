import { Service } from "./service.js";

export interface Voucher {
    voucher_id:number,
    
    discount:number,
    service: Service
}