import { Customer } from "./customer.js";

// Create customer
const CUSTOMER_NAME = "Michael Mukiibi";
const CUSTOMER_PHONE = "0789541974";
const CUSTOMER = new Customer(CUSTOMER_NAME, CUSTOMER_PHONE);

// Log customer
console.log(CUSTOMER);