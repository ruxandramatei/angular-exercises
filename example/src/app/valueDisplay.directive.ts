import { Directive, InjectionToken, Inject, HostBinding } from "@angular/core";
export const VALUE_SERVICE = new InjectionToken("value_service");
@Directive({
    selector: "[paDisplayValue]"
})
export class PaDisplayValueDirective {
    @HostBinding("textContent")
    elementContent: string;
    constructor(@Inject(VALUE_SERVICE) serviceValue: string) {
        this.elementContent = serviceValue;
    } 
}