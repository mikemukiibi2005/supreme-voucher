export interface Service {
    service_id: number;
    name: string;
    price: number;
    fee: number;
}

export class Service implements Omit<Service, "service_id"> {
    constructor(
        public name: string,
        public price: number,
        public fee: number, // Booking free - Between 0 and 1, inclusive.
    ) {}
}