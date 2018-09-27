/**
 * @author: shushanth
 * @description: cell body components used in grid components
 * used in grid component, which oozes out the value of the particular cell to consumer
 * as a row value (rowValue)
 */

import { Component, Input } from "@angular/core";

@Component({
  selector: "wa-grid-cell-body",
  template: require("./grid-cell-body.component.html"),
  styles: [require("./grid-cell-body.component.scss")]
})
export class WAGridCellBody {
  private headerColumns: any[];
  private headerRows: any[];

  @Input() set columns(cols: any[]) {
    this.headerColumns = cols;
  }

  get columns(): any[] {
    return this.headerColumns;
  };

  @Input() set rows(rows: any[]) {
    this.headerRows = rows;
  }
}
