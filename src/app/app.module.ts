import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DataAccessService } from './services/data-access.service';
import { DataItemStateService } from './services/data-item-state.service';

import { AppComponent } from './app.component';
import {DisplayModule} from "./block/display/display.module";
import {FakeFormModule} from "./views/fake-form/fake-form.module";
import { HomeComponent } from './views/home/home.component';
import {AppRoutingModule} from "./app-routing.module";
import {AuthGuardService} from "./services/auth-guard.service";
import {AuthService} from "./services/auth.service";
import {UnsavedGuardService} from "./services/unsaved-guard.service";
import { ErrorComponent } from './views/error/error.component';
import {DataListStateService} from "./services/data-list-state.service";
import {APP_CONFIG, AppConfig} from "./app.config";
import {WorkModule} from "./views/work/work.module";
import {UtilityService} from "./services/utility.service";



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    FakeFormModule,
    DisplayModule,
    WorkModule,
    AppRoutingModule
  ],
  providers: [DataAccessService, DataItemStateService, DataListStateService, AuthGuardService, AuthService, UnsavedGuardService, UtilityService, { provide: APP_CONFIG, useValue: AppConfig }],
  bootstrap: [AppComponent]
})
export class AppModule { }
