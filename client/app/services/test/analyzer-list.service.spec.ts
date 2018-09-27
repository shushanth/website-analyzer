/**
 *
 */

import { NO_ERRORS_SCHEMA } from "@angular/core";
import { TestBed, ComponentFixture } from "@angular/core/testing";
// service
import { AnalyzerListService } from "../../services";
// helpers
import { UnitTestHelpers } from "../../shared/utils";

const LIST_COLUMN = [
  { name: "Page title", rowField: "pageTitle"},
  { name: "Document Type", rowField: "doctypeVersion"},
  { name: "Headings", rowField: "headingLevels"},
  { name: "Links", rowField: "linkLevels"},
  { name: "Login form", rowField: "loginFormExists"}
];
describe("Component: App root web analyzer component", () => {
  const utHelpers = new UnitTestHelpers();
  let analyzerListService: AnalyzerListService;

  beforeEach(() => {
    utHelpers.configureTestingModule({
      declarations: [],
      providers: [
        AnalyzerListService
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });
    analyzerListService = TestBed.get(AnalyzerListService);
  });

  it("Method: getListColumnConfig should not return the emppty column config", () => {
    let columnConfig = analyzerListService.getListColumnConfig();
    expect(columnConfig.length).not.toBe(0);
  });

  it("Method: getListColumnConfig should  return the proper column config", () => {
    let columnConfig = analyzerListService.getListColumnConfig();
    expect(columnConfig).toEqual(LIST_COLUMN);
  });

  it("Method: getFormatedHeadingLevels should return proper heading formated string", () => {
    const headingLevelConfig = {"H1": 5, "H2": 3, "H3": 4, "H4": 6, "H5": 0, "H6": 7 };
    let columnConfig = analyzerListService.getFormatedHeadingLevels(headingLevelConfig);
    expect(typeof(columnConfig) === "string").toBe(true);
  });

});
