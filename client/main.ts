/**
 * @author:shushanth
 * @description: bootstraps the main component to the browser
 * main file which gets loaded on index html file
 */

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import {enableProdMode} from "@angular/core";

import { AppModule } from "./app/app.module";

// hot module reloading
declare var module: any;

if (module.hot) {
  module.hot.accept();
}

if (process.env.ENV === "production") {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
