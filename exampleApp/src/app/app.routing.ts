import { Routes, RouterModule } from "@angular/router";
import { TableComponent } from "./core/table.component";
import { FormComponent } from "./core/form.component";
import { NotFoundComponent } from "./core/notFound.component";

const routes: Routes = [
    { path: "form/:mode" , component : FormComponent },
    { path: "form/:mode/:id" , component : FormComponent },
    { path: "", component: TableComponent },
    { path: "**", component: NotFoundComponent }
];

export const routing = RouterModule.forRoot(routes);