import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormModule} from "../../../block/form/form.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

// import { CreateFormComponent } from './location-create/location-create.component';
// import { UpdateFormComponent } from './location-update/location-update.component';
// import { DeleteFormComponent } from './location-delete/location-delete.component';
// import { ListTableComponent } from './location-list/location-list.component';
// import { ViewFormComponent } from './location-view/location-view.component';

import {LocationListComponent} from "./location-list/location-list.component";
import {LocationCreateComponent} from "./location-create/location-create.component";
import {LocationDeleteComponent} from "./location-delete/location-delete.component";
import {LocationViewComponent} from "./location-view/location-view.component";
import {LocationUpdateComponent} from "./location-update/location-update.component";
import {TableformModule} from "../../tableform/tableform.module";
import {TableModule} from "../../../block/table/table.module";
import {PageModule} from "../../../block/page/page.module";



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    FormModule,
    PageModule
  ],
  exports: [
    CommonModule, LocationListComponent, LocationCreateComponent, LocationDeleteComponent, LocationViewComponent, LocationUpdateComponent
  ],
  declarations: [LocationListComponent, LocationCreateComponent, LocationDeleteComponent, LocationViewComponent, LocationUpdateComponent]
})
export class LocationModule { }
