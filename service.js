// Service offered at the salon
export class Service {
    constructor(name, price, bookingFee) {
        // Name of the service
        this.name = name;

        // Price of the service in UGX
        this.price = price;

        // Booking fee: Percentage of price
        this.bookingFee = bookingFee;
    }

    // Return cost of booking
    getBookingFee() {
        return this.bookingFee*this.price;
    }

    // Return monetary value of service
    getServiceRevenue() {
        return this.price;
    }
}