/**
 * @author: shushanth
 * @description: app component, root component of the application
 */


import {
  Component,
  OnInit,
  ViewEncapsulation
} from "@angular/core";

// models
import { URLAnalyzedInfo } from "./models";
// sevices
import { URLSearchService } from "./services";

@Component({
  selector: "web-analyzer",
  template: require("./app.component.html"),
  styles: [require("./app.component.scss")],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {

  private webAnalyzedData: Array<URLAnalyzedInfo>;
  private loadingResults: boolean;

  constructor(
    private urlSearchService: URLSearchService
  ) {}
  ngOnInit() {
    this.webAnalyzedData = [];
    this.loadingResults = false;
  }

  makeURLAnalyze(URL: string) {
    this.loadingResults = true;
    this.urlSearchService.search(URL)
    .finally(() => {
      this.loadingResults = false;
    })
    .subscribe((results: URLAnalyzedInfo) => {
      this.webAnalyzedData = [results, ...this.webAnalyzedData];
    });

  }
}
