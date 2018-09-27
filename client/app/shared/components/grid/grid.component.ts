/**
 * @author: shushanth
 * @description: generic grid component
 */

import {
  Component,
  Input,
  AfterContentInit,
  ContentChildren,
  QueryList
} from "@angular/core";

// directives
import { WAGridColumnDirective } from "../../directives";
// helpers
import { isEmptyArray } from "../../utils";

/**
 *
 * @param templates
 * @param columnsMap
 * fetches the consumner templates and invoke the grid component to create its own templates
 * based on the consumner templates.
 * basically maps the templates to config object and the grid will take care of creating its own templates
 * and attaching thsese template to ngTemplateOutlet and ngOutletContext to provides the consumner the data
 * available for particular column cell both in header and body
 * TODO: move to service/utils file
 */
const templateColumnMapping = (templates: WAGridColumnDirective[], columnsMap: {}) => {
  let results: any[] = [];
  for (const template of templates) {
    let col: any = {};
    const fields = Object.getOwnPropertyNames(template);
    for (const field of fields) {
      col[field] = template[field];
    }
    if (template.headerTemplate) {
      columnsMap[col.value].headerTemplate = template.headerTemplate;
    }
    if (template.cellTemplate) {
      columnsMap[col.value].cellTemplate = template.cellTemplate;
    }
  };
  Object.keys(columnsMap).map(eachColKey => {
    const { cellTemplate, headerTemplate } = columnsMap[eachColKey];
    if ( cellTemplate || headerTemplate ) {
      results.push(columnsMap[eachColKey]);
    }
  });
  return results;
};

@Component({
  selector: "wa-grid",
  template: require("./grid.component.html"),
  styles: [require("./grid.component.scss")]
})
export class WAGridComponent implements AfterContentInit {
  private waRows: any[];
  private waColumns: any[];
  private columnsMap: object = {};

  // columns consumner templates and its structure
  @ContentChildren(WAGridColumnDirective)
  public columnTemplates: QueryList<WAGridColumnDirective>;

  @Input() loading: boolean = false;
  @Input() emptyResultsMessage: string = "No results";

  @Input() set rows(value: any[]) {
    this.waRows = value;
  };

  get rows(): any[] {
    return this.waRows;
  };

  @Input() set columnsDef(cols: any[]) {
    this.waColumns = cols;
    cols.forEach((col) => {
      const { name, rowField } = col;
      col.rowField = col.rowField || rowField;
      this.columnsMap[col.rowField] = col;
    });
  };

  get columnsDef(): any[] {
    return this.waColumns;
  };

  getColumnTemplates(): QueryList<WAGridColumnDirective> {
    return this.columnTemplates;
  }

  isEmptyResults(): boolean {
    return isEmptyArray(this.waRows);
  }
  /**
   * should be used in AfterContentInit life cycle , as the templates will be available
   * to create respective column cells
   */
  ngAfterContentInit() {
    this.waColumns = templateColumnMapping(this.columnTemplates.toArray(), this.columnsMap);
  }
}
