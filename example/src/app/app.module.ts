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
import { SimpleDataSource } from "./datasource.model";
import { Model } from "./repository.model"; 
import { LogService, LOG_SERVICE, SpecialLogService, LogLevel, LOG_LEVEL} from "./log.service";
import { VALUE_SERVICE, PaDisplayValueDirective} from "./valueDisplay.directive";

registerLocaleData(localeFr);
let logger = new LogService();
logger.minimumLevel = LogLevel.DEBUG;

@NgModule({
    declarations: [ProductComponent, PaAttrDirective, PaModel, PaStructureDirective, PaIteratorDirective, PaCellColor, PaCellColorSwitcher,
        ProductFormComponent, ProductTableComponent, PaToggleView, PaAddTaxPipe, PaCategoryFilterPipe, PaDiscountDisplayComponent,
        PaDiscountEditorComponent, PaDiscountPipe, PaDiscountAmountDirective, PaDisplayValueDirective],
    imports: [BrowserModule, FormsModule, ReactiveFormsModule],
    providers: [DiscountService, SimpleDataSource, Model, [{provide: LOG_LEVEL, useValue:LogLevel.ERROR }, {provide: "debugLevel", useExisiting: LOG_LEVEL},{provide: LogService, deps:[LOG_LEVEL], 
        useFactory: (level) => {
        let logger = new LogService();
        logger.minimumLevel = level;
        return logger;
    }}]],
    bootstrap: [ProductComponent]
})
export class AppModule {

}