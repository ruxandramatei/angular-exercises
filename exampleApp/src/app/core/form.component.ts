import { Component, Inject } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Product } from "../model/product.model";
import { Model } from "../model/repository.model";
import { MODES, SharedState, SHARED_STATE } from "./sharedState.model";
import { Observable } from "rxjs";
//import { filter, map, distinctUntilChanged, skipWhile } from "rxjs/operators";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: "paForm",
    templateUrl: "form.component.html",
    styleUrls: ["form.component.css"]
})
export class FormComponent {
    product: Product = new Product();
    editing: boolean = false;
    //lastID: number;

    constructor(private model: Model, activeRoute: ActivatedRoute, private router: Router){
        this.editing = activeRoute.snapshot.params["mode"] == "edit";
        let id = activeRoute.snapshot.params["id"];
        if(id != null){
            let name = activeRoute.snapshot.params["name"];
            let category = activeRoute.snapshot.params["category"];
            let price = activeRoute.snapshot.params["price"];

            if(name != null && category != null && price != null){
                this.product.id = id;
                this.product.name = name;
                this.product.category = category;
                this.product.price = Number.parseFloat(price);
            }
        }else{
            Object.assign(this.product, model.getProduct(id) || new Product());
        }
    }

    submitForm(form: NgForm) {
        if (form.valid) {
            this.model.saveProduct(this.product);
            // this.product = new Product();
            // form.reset();
            this.router.navigateByUrl("/");
        }
    }
    resetForm() {
        this.product = new Product();
    }

    // ngDoCheck(){
    //     if(this.lastID != this.state.id){
    //         this.product = new Product();
    //         if(this.state.mode == MODES.EDIT){
    //             Object.assign(this.product, this.model.getProduct(this.state.id));
    //         }
    //         this.lastID = this.state.id;
    //     }
    // }
}