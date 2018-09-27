/**
 * @author: shushanth
 * @description: gridColumnDirective, which resemebles grid cells headers and body cells headers templates
 * as the consumer of the grid component uses this directive selector to handles consumer template
 */

import {
  Directive,
  Input,
  ContentChild,
  TemplateRef,
  QueryList,
} from "@angular/core";

@Directive({
selector: "wa-grid-column"
})
export class WAGridColumnDirective {
  @Input() value: any;

  @ContentChild("headerTemplate")
  public headerTemplate: QueryList<TemplateRef<any>>;

  @ContentChild("cellTemplate")
  public cellTemplate: QueryList<TemplateRef<any>>;

}
