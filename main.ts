import { Customer } from "./customer.ts";
import { Order } from "./order.ts";
import { Package } from "./package.ts";
import { Service } from "./service.ts";
import { Voucher } from "./voucher.ts";

const CUSTOMER_NAME = "Michael Mukiibi";
const CUSTOMER_PHONE = "0789541974";
const CUSTOMER = new Customer(CUSTOMER_NAME, CUSTOMER_PHONE);
console.log(CUSTOMER);

const SERVICE_NAME = "Supreme Hair Cut";
const SERVICE_PRICE = 50000;
const SERVICE_FEE = 0.2;
const SERVICE = new Service(SERVICE_NAME, SERVICE_PRICE, SERVICE_FEE);
console.log(SERVICE);

const DISCOUNT = 0.33;
const VOUCHER = new Voucher(DISCOUNT, SERVICE);
console.log(VOUCHER);

const NOW = new Date();
const ORDER = new Order(NOW, "PENDING");
console.log(ORDER);
ORDER.status = 'CANCELLED';
console.log(ORDER);

const SERVICE_1 = new Service(SERVICE_NAME, SERVICE_PRICE, SERVICE_FEE);
const SERVICE_2 = new Service(SERVICE_NAME, SERVICE_PRICE, SERVICE_FEE);

CUSTOMER.customer_id = 1;
const PACKAGE = new Package(CUSTOMER.customer_id, [SERVICE_1, SERVICE_2]);
console.log(PACKAGE);
