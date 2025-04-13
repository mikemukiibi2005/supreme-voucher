// Voucher for a service
export class Voucher {
    constructor(customer, service, discount) {
        // Service covered by voucher
        this.service = service;

        // Discount deducted by voucher
        this.discount = discount;
    }
}