import { Component, HostListener, Output, EventEmitter } from "@angular/core";
import { Model } from '../model/repository.model';
import { Product } from '../model/product.model';

@Component({
    selector: "first",
    template: "first.component.html"
})
export class FirstComponent {

    constructor(private repository: Model) {

    }

    category: string = "Soccer";
    highlighted: boolean = false;

    getProducts(): Product[] {
        return this.repository.getProducts().filter(p => p.category == this.category);
    }

    @HostListener("mouseenter", ["$event.type"])
    @HostListener("mouseleave", ["$event.type"])
    @Output("pa-highlight")
    change = new EventEmitter<boolean>();

    setHighlight(type: string) {
        this.highlighted = type == "mouseenter";
        this.change.emit(this.highlighted);
    }

}