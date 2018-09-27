/**
 * @author: shushanth
 * @description: UT's for generic loading icon component
 */


import { NO_ERRORS_SCHEMA } from "@angular/core";
import { TestBed, ComponentFixture, fakeAsync, tick } from "@angular/core/testing";

// component
import { WALoadingIconComponent } from "../../components";
// helpers
import { UnitTestHelpers } from "../../utils";

describe("Component: WAButtonComponent", () => {
  let fixture: ComponentFixture<WALoadingIconComponent>;
  let waLoadingIconComponent: WALoadingIconComponent;
  const utHelpers = new UnitTestHelpers();

  beforeEach(() => {
    utHelpers.configureTestingModule({
      declarations: [WALoadingIconComponent],
      providers: [],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(WALoadingIconComponent);
    waLoadingIconComponent = fixture.componentInstance;
  });

  it("should create button component", () => {
    const fixtureInstance = fixture.componentInstance;
    TestBed.compileComponents().then(() => {
      expect(fixtureInstance instanceof WALoadingIconComponent)
        .toBe(true, "should create loading icon component");
    });
  });

  it("should have align center class when align prop is center value", () => {
    waLoadingIconComponent.align = "center";
    fixture.detectChanges();
    let loadingIconElementClass = fixture.debugElement.nativeElement.firstElementChild.className;
    expect(loadingIconElementClass.includes("wa-align-center")).toEqual(true);
  });

  it("should not have align center class when align proper is default value", () => {
    waLoadingIconComponent.align = "default";
    fixture.detectChanges();
    let loadingIconElementClass = fixture.debugElement.nativeElement.firstElementChild.className;
    expect(loadingIconElementClass.includes("wa-align-center")).toEqual(false);
  });
});
