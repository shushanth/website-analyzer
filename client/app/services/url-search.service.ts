/**
 * @author: shushanth
 * @description: analyazer search service,
 */

import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

// constants
import { ANALYZER_API_URL } from "../shared/utils";
// services
import { AjaxService } from "../shared/services";
// models
import { URLAnalyzedInfo } from "../models";

@Injectable()
export class URLSearchService {
  constructor(
    private ajaxService: AjaxService
  ) {}

  search(websiteURL: string): Observable<URLAnalyzedInfo> {
    return this.ajaxService.post(ANALYZER_API_URL, { url: websiteURL })
      .map(response => response);
  }
}
