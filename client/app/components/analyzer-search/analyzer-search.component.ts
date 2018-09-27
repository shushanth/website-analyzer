/**
 * @author: shushanth
 * @description: analyazer search component,
 */
import {
  Component,
  Input,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter
} from "@angular/core";

import { URL_MATCH_REGEX, ERROR_CONFIG } from "../../shared/utils";

const { INVALID_URL, EMPTY_URL } = ERROR_CONFIG;

@Component({
  selector: "web-analyzer-search",
  template: require("./analyzer-search.component.html"),
  styles: [require("./analyzer-search.component.scss")],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WebAnalyzerSearch implements OnInit {

  private isFormDisabled: boolean;
  private invalidURLError: string;
  private URL2Search: string;
  private URLSearchValue: string;

  @Input() loading: boolean;
  @Output() analyzeURL: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit() {
    this.isFormDisabled = true;
    this.loading = false;
    this.invalidURLError = "";
    this.URLSearchValue = "";
  };

  valueChangeTrigger(value: string) {
    this.URLSearchValue = value;
    this.isFormDisabled = ! (value.search(URL_MATCH_REGEX) === 0);
    this.invalidURLError = !value ? EMPTY_URL : (!this.isFormDisabled) ? "" : INVALID_URL;
    this.URL2Search = value;
  };

  urlSearch(event: any) {
    event.preventDefault();
    this.isFormDisabled = true;
    this.URLSearchValue = "";
    this.URL2Search && this.analyzeURL.emit(this.URL2Search);
  };
}
