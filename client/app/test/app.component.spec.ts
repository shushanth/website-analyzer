/**
 * @author: shushanth
 * @description: UT's for app component (main root component)
 */

import { NO_ERRORS_SCHEMA } from "@angular/core";
import { TestBed, ComponentFixture } from "@angular/core/testing";
// helpers
import { UnitTestHelpers } from "../shared/utils";
// component
import { AppComponent } from "../app.component";
// service
import { URLSearchService } from "../services/url-search.service";
import { AjaxService } from "../shared/services/ajax.service";


describe("Component: App root web analyzer component", () => {
  let fixture: ComponentFixture<AppComponent>;
  const utHelpers = new UnitTestHelpers();

  beforeEach(() => {
    utHelpers.configureTestingModule({
      declarations: [AppComponent],
      providers: [
        URLSearchService,
        AjaxService
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(AppComponent);
  });

  it("should initialize the root web analyzer app", () => {
    const fixtureInstance = fixture.componentInstance;
    TestBed.compileComponents().then(() => {
      expect(fixtureInstance instanceof AppComponent)
        .toBe(true, "should create AppComponent");
    });
  });
});
