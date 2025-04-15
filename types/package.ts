import { Service } from "./service.ts";

interface Package {
    package_id: number; 
    customer_id: number;

    services: Service[];
}