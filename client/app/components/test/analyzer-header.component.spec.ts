/**
 * @author:shushanth
 * @description: analyzer search spec component
 */

import {By} from "@angular/platform-browser";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { TestBed, ComponentFixture, fakeAsync } from "@angular/core/testing";

// component
import { WebAnalyzerHeader } from "../../components";
// helpers
import { UnitTestHelpers } from "../../shared/utils";

describe("Component: WebAnalyzerHeader", () => {
  let fixture: ComponentFixture<WebAnalyzerHeader>;
  let webAnalyzerHeader: WebAnalyzerHeader;
  const utHelpers = new UnitTestHelpers();

  beforeEach(() => {
    utHelpers.configureTestingModule({
      declarations: [WebAnalyzerHeader],
      providers: [],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(WebAnalyzerHeader);
    webAnalyzerHeader = fixture.componentInstance;
  });

  it("should create web analzyer component", () => {
    const fixtureInstance = fixture.componentInstance;
    TestBed.compileComponents().then(() => {
      expect(fixtureInstance instanceof WebAnalyzerHeader)
        .toBe(true, "should create AppComponent");
    });
  });

  it("should match title with passed input to the component", fakeAsync(() => {
    const titleElement = fixture.debugElement.query(By.css(".analyzer-title"));
    webAnalyzerHeader.title = "web analyzer";
    fixture.detectChanges();
    expect(titleElement.nativeElement.innerHTML).toEqual("web analyzer");
    webAnalyzerHeader.title = "web analyzer tool";
    fixture.detectChanges();
    expect(titleElement.nativeElement.innerHTML).toEqual("web analyzer tool");
  }));

});
