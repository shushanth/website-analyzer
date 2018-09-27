/**
 * @author: shushanth
 * @description: generic loading icon component
 */

import {
  Component,
  Input
} from "@angular/core";

type align = "default" | "center";

@Component({
  selector: "wa-loading-icon",
  template: require("./loading-icon.component.html"),
  styles: [require("./loading-icon.component.scss")]
})
export class WALoadingIconComponent {
  @Input() align: string = "default";

  get classNames() {
    return {
      ["wa-align-center"]: !!(this.align === "center")
    };
  };
}
