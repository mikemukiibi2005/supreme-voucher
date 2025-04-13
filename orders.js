// List of orders
export class OrderList {
    constructor() {
        this.orders = [];
    }

    // Add new order
    addOrder(order) {
        this.orders.push(order);
    }

    // List orders
    getOrders() {
        return this.orders
    }

    // List approved orders
    getApprovedOrders() {
        const approvedOrders = this.orders.filter(order => order.status == 'APPROVED');
        return approvedOrders;
    }

    // List pending orders
    getPendingOrders() {
        const pendingOrders = this.orders.filter(order => order.status == 'PENDING' );
        return pendingOrders;
    }

    // Order revenue - prevoucher
    getGrossOrderRevenue() {
        let orderRevenue = 0;
        for (let i = 0; i < this.orders.length; i++) {
            const order = this.orders[i];

            orderRevenue += order.service.getServiceRevenue();
        }

        return orderRevenue;
    }

    // Order revenue - post voucher
    getNetOrderRevenue() {
        let orderRevenue = 0;
        for (let i = 0; i < this.orders.length; i++) {
            const order = this.orders[i];

            orderRevenue = order.service.getServiceRevenue();
        }

        return orderRevenue;
    }
}