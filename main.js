import { Customer } from "./customer.js";
import { ServicePackage } from "./package.js";
import { Service } from "./service.js";

// Create customer
const CUSTOMER_NAME = "Michael Mukiibi";
const CUSTOMER_PHONE = "0789541974";
const CUSTOMER = new Customer(CUSTOMER_NAME, CUSTOMER_PHONE);

// Log customer
console.log(CUSTOMER);

// Create service
const SERVICE_PRICE = 100000;
const SERVICE_NAME = 'Supreme Hair Cut';
const SERVICE_BOOKING_FEE = 0.2;
const SERVICE = new Service(SERVICE_NAME, SERVICE_PRICE, SERVICE_BOOKING_FEE);

// Log service
console.log(SERVICE);

// Log cost of booking
console.log("Service Booking Fee:");
console.log(SERVICE.getBookingFee());

// Log revenue from service
console.log("Service Revenue:");
console.log(SERVICE.getServiceRevenue());

// Create service package

// Services
const SERVICE_1 = new Service(SERVICE_NAME, SERVICE_PRICE, SERVICE_BOOKING_FEE);
const SERVICE_2 = new Service(SERVICE_NAME, SERVICE_PRICE, SERVICE_BOOKING_FEE);
const SERVICE_3 = new Service(SERVICE_NAME, SERVICE_PRICE, SERVICE_BOOKING_FEE);
const SERVICE_4 = new Service(SERVICE_NAME, SERVICE_PRICE, SERVICE_BOOKING_FEE);
const SERVICE_5 = new Service(SERVICE_NAME, SERVICE_PRICE, SERVICE_BOOKING_FEE);

const SERVICE_PACKAGE = new ServicePackage([
    SERVICE_1,
    SERVICE_2,
    SERVICE_3,
    SERVICE_4,
    SERVICE_5,
]);

// Log service package
console.log(SERVICE_PACKAGE);

// Log package revenue
console.log("Package revenue:");
console.log(SERVICE_PACKAGE.getPkgRevenue());