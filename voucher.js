// Voucher for a service
export class Voucher {
    constructor(customer, service, discount) {
        // Customer redeeming the voucher
        this.customer = customer;

        // Service covered by voucher
        this.service = service;

        // Discount deducted by voucher
        this.discount = discount;
    }
}