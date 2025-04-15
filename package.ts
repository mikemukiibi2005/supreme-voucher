import { Service } from "./service.js";

interface Package {
    package_id: number; 
    customer_id: number;

    services: Service[];
}