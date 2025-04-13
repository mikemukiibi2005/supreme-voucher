// Services to include in package
export class ServicePackage {
    constructor(services) {
        this.services = services;
    }

    // Total cost of service package
    getPkgRevenue() {
        let pkgValue = 0;

        // Cumulative value for each service in package
        for (let i = 0; i < this.services.length; i++) {
            const service = this.services[i];
            
            const serviceValue = service.getServiceRevenue();
            pkgValue += serviceValue;
        }

        return pkgValue;
    }
}