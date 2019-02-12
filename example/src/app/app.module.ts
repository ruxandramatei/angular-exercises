import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductComponent } from "./component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PaAttrDirective } from "./attr.directive";
import { PaModel } from "./twoway.directive";
import { PaStructureDirective } from "./structure.directive";
import { PaIteratorDirective } from "./iterator.directive";
import { PaCellColor } from "./cellcolor.directive";
import { PaCellColorSwitcher } from "./cellColorSwitcher.directive";
import { ProductTableComponent } from "./productTable.component";
import { ProductFormComponent } from "./productForm.component";
import { PaToggleView } from "./toggleView.component";
import { PaAddTaxPipe } from "./addTax.pipe";
import { PaCategoryFilterPipe } from "./categoryFilter.pipe";
import { LOCALE_ID } from "@angular/core";
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import { PaDiscountDisplayComponent } from "./discountDisplay.component";
import { PaDiscountEditorComponent } from "./discountEditor.component";
import { DiscountService } from "./discount.service";
import { PaDiscountPipe } from "./discount.pipe";
import { PaDiscountAmountDirective } from "./discountAmount.directive";

registerLocaleData(localeFr);

@NgModule({
    declarations: [ProductComponent, PaAttrDirective, PaModel, PaStructureDirective, PaIteratorDirective, PaCellColor, PaCellColorSwitcher,
        ProductFormComponent, ProductTableComponent, PaToggleView, PaAddTaxPipe, PaCategoryFilterPipe, PaDiscountDisplayComponent,
        PaDiscountEditorComponent, PaDiscountPipe, PaDiscountAmountDirective],
    imports: [BrowserModule, FormsModule, ReactiveFormsModule],
    providers: [DiscountService],
    bootstrap: [ProductComponent]
})
export class AppModule {

}