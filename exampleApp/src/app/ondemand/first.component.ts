import { Component, HostListener, Output, EventEmitter, Input } from "@angular/core";
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
    @Input("pa-model")
    model: Model;

    getProducts(): Product[] {
        return this.model == null ? [] : this.repository.getProducts().filter(p => p.category == this.category);
    }

}