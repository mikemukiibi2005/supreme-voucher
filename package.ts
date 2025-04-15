import { Service } from "./service.ts";

export interface Package {
    package_id: number; 
    customer_id: number;

    services: Service[];
}

export class Package implements Omit<Package, "package_id"> {
    constructor(
        public customer_id: number,
        public services: Service[]
    ) {}
}