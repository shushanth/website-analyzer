/**
 * @author: shushanth
 * @description: analyazer list service,
 */

import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
// models
import { WAGridHeaderConfig } from "../shared/models";
import { AnalyzerHeadingInfo } from "../models";


@Injectable()
export class AnalyzerListService {
  getListColumnConfig(): WAGridHeaderConfig[] {
    return [
      { name: "Page title", rowField: "pageTitle"},
      { name: "Document Type", rowField: "doctypeVersion"},
      { name: "Headings", rowField: "headingLevels"},
      { name: "Links", rowField: "linkLevels"},
      { name: "Login form", rowField: "loginFormExists"}
    ];
  };

  getFormatedHeadingLevels(heading: AnalyzerHeadingInfo): string {
    const headingLevels = Object.keys(heading)[0];
    return `${headingLevels} ${heading[headingLevels]}`;
  };
}
