// Book a service
export class Order {
    constructor(service, time, vouchers) {
        // Service to book
        this.service = service;

        // Time booked for
        this.time = time;

        // Status of order
        this.status = 'PENDING';

        // Attached vouchers
        this.vouchers = vouchers;
    }

    confirmOrder() {
        this.status = 'CONFIRMED';
    }

    cancelOrder() {
        this.status = 'CANCELLED';
    }

    preVoucherRevenue() {
        return this.service.price;
    }

    postVoucherRevenue() {
        let totalDiscount = 0;
        for (let i = 0; i < this.vouchers.length; i++) {
            const voucher = this.vouchers[i];
            
            totalDiscount += voucher.discount;
        }

        if (totalDiscount >= 0) {
            return (1-totalDiscount)*this.service.price;
        }    
    }
}