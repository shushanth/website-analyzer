/**
 * @author: shushanth
 * @description: anaylzer list component , extends wa grid components for rendering
 */

import {
  Component,
  Input,
  OnInit,
  ChangeDetectionStrategy,
} from "@angular/core";

// service
import { AnalyzerListService } from "../../services";
// models
import { URLAnalyzedInfo, AnalyzerHeadingInfo } from "../../models";
import { WAGridHeaderConfig } from "../../shared/models";

@Component({
  selector: "web-analyzer-list",
  template: require("./analyzer-list.component.html"),
  styles: [require("./analyzer-list.component.scss")],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WebAnalyzerList implements OnInit  {
  @Input() anaylzedData: Array<URLAnalyzedInfo>;
  @Input() loading: boolean;

  constructor(private analyzerListService: AnalyzerListService) {};

  private analyzerGridHeadersConfig: Array<WAGridHeaderConfig>;

  ngOnInit() {
    this.analyzerGridHeadersConfig = this.analyzerListService.getListColumnConfig();
  };

  formatHeadings(heading: AnalyzerHeadingInfo): string {
    return this.analyzerListService.getFormatedHeadingLevels(heading);
  };
}
