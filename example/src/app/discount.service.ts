import { Injectable, Inject } from "@angular/core";
import { LogService, LOG_SERVICE, LogLevel } from "./log.service"

@Injectable()
export class DiscountService {

    private discountValue: number = 10;
    private logger: LogService;

    constructor(@Inject(LOG_SERVICE)private loggers: LogService[]) {
        this.logger = loggers.find(l => l.minimumLevel==LogLevel.DEBUG);
    }

    public get discount(): number {
        return this.discountValue;
    }

    public set discount(newValue: number) {
        this.discountValue = newValue || 0;
    }

    public applyDiscount(price: number) {
        this.logger.logInfoMessage(`Discount ${this.discount}` + ` applied to price: ${price}`);
        return Math.max(price - this.discountValue, 5);
    }
}