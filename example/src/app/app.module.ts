import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ModelModule } from "./model/model.module";
import { CommonModule } from "./common/common.module";
import { ComponentsModule } from "./components/components.module";
import { ProductFormComponent } from "./components/productForm.component";
import { ProductTableComponent } from "./components/productTable.component";
import { ProductComponent } from "./component"

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule,
        ModelModule, CommonModule, ComponentsModule],
    bootstrap: [ProductFormComponent, ProductTableComponent]
})
export class AppModule { }