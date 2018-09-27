/**
 * @shushanth
 * main app module,
 * includes other app components, services , shared modules
 */


import "../pollyfills";
import { NgModule } from "@angular/core";
import { BrowserModule} from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";

// modules
import { SharedModule } from "./shared/shared.module";
// components
import { AppComponent } from "./app.component";
import {
  WebAnalyzerHeader,
  WebAnalyzerSearch,
  WebAnalyzerList
} from "./components";
// services
import { URLSearchService, AnalyzerListService } from "./services";

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
    WebAnalyzerHeader,
    WebAnalyzerSearch,
    WebAnalyzerList
  ],
  providers: [
    URLSearchService,
    AnalyzerListService
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {};
