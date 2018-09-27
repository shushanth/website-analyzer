/**
 * @author: shushanth
 * @description: generic input component
 */

import {
  Component,
  Input,
  Output,
  OnInit,
  ChangeDetectionStrategy,
  EventEmitter
} from "@angular/core";

type InputType = "text" | "number" | "search" | "tel" | "email" | "password";

@Component({
  selector: "wa-input",
  template: require("./input.component.html"),
  styles: [require("./input.component.scss")],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WAInputComponent {

  @Input() placeholder: string = "";
  @Input() type: string = "text";
  @Input() value: string = "";
  @Input() focusAuto: boolean;
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() errorText: string = "";
  @Input() tabindex: string;
  @Output() inputValueChange: EventEmitter<string> = new EventEmitter<string>();


  get classNames() {
    return {
      "disabled": !!this.disabled
    };
  };

  inputBlur(event: any) {
    const { target: {value }} = event;
    this.inputValueChange.emit(value);
  };
}
