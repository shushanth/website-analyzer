/**
 * @author: shushanth
 * @description: cell header components used in grid components
 * used in grid component, which oozes out the value of the particular cell to consumer
 * as a column value (columnValue)
 */

import { Component, Input } from "@angular/core";

@Component({
  selector: "wa-grid-cell-header",
  template: require("./grid-cell-header.component.html"),
  styles: [require("./grid-cell-header.component.scss")]
})
export class WAGridCellHeader {
  private headerColumns: any[];

  @Input() set columns(cols: any[]) {
    this.headerColumns = cols;
  }

  get columns(): any[] {
    return this.headerColumns;
  };
}
