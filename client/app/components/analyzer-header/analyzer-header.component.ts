/**
 * @author: shushanth
 * @description: Header component
 */

import { Component, Input } from "@angular/core";

@Component({
  selector: "web-analyzer-header",
  template: require("./analyzer-header.component.html"),
  styles: [require("./analyzer-header.component.scss")]
})
export class WebAnalyzerHeader {
  @Input() title: string;
}
