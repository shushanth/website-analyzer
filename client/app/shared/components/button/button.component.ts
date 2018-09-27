/**
 * @author: shushanth
 * @description: generic button component
 */

import {
  Component,
  Input,
  Output,
  ChangeDetectionStrategy,
  EventEmitter
} from "@angular/core";

type ButtonLevel = "default" | "primary";
type ButtonSize = "default" | "small";
type ButtonType = "button" | "submit";

@Component({
  selector: "wa-button",
  template: require("./button.component.html"),
  styles: [require("./button.component.scss")],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WAButtonComponent {
  @Input() size: string = "default";
  @Input() level: string = "default";
  @Input() disabled: boolean = false;
  @Input() type: string = "button";
  @Input() tabindex: string;
  @Output() buttonClick: EventEmitter<any> = new EventEmitter<any>();


  get classNames() {
    return {
      "wa-button-element": true,
      [`wa-button-disabled`]: this.disabled,
      [`level-${this.level}`]: this.level,
      [`size-${this.size}`]: this.size,
    };
  };

  buttonSubmit($event: any) {
    this.buttonClick.emit($event);
  }
}
