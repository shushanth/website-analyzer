/**
 * @author: shushanth
 * @description: shared module
 */


import { NgModule } from "@angular/core";
import { BrowserModule} from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";
// components
import {
  WAInputComponent,
  WAButtonComponent,
  WAGridComponent,
  WAGridCellHeader,
  WAGridCellBody,
  WALoadingIconComponent
} from "./components";

// directives
import { WAGridColumnDirective } from "./directives";
// service
import { AjaxService } from "./services";

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule
  ],
  exports: [
    WAInputComponent,
    WAButtonComponent,
    WAGridComponent,
    WAGridCellHeader,
    WAGridCellBody,
    WAGridColumnDirective,
    WALoadingIconComponent
  ],
  declarations: [
    WAInputComponent,
    WAButtonComponent,
    WAGridComponent,
    WAGridCellHeader,
    WAGridCellBody,
    WAGridColumnDirective,
    WALoadingIconComponent
  ],
  providers: [
    AjaxService
  ]
})
export class SharedModule {};

