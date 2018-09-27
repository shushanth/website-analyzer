/**
 * @author: shushanth
 * @description: UT's for button component
 */

import { NO_ERRORS_SCHEMA } from "@angular/core";
import { TestBed, ComponentFixture, fakeAsync, tick } from "@angular/core/testing";

// component
import { WAButtonComponent } from "../../components";
// helpers
import { UnitTestHelpers } from "../../utils";

describe("Component: WAButtonComponent", () => {
  let fixture: ComponentFixture<WAButtonComponent>;
  let waButtonComponent: WAButtonComponent;
  const utHelpers = new UnitTestHelpers();

  beforeEach(() => {
    utHelpers.configureTestingModule({
      declarations: [WAButtonComponent],
      providers: [],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(WAButtonComponent);
    waButtonComponent = fixture.componentInstance;
  });

  it("should create button component", () => {
    const fixtureInstance = fixture.componentInstance;
    TestBed.compileComponents().then(() => {
      expect(fixtureInstance instanceof WAButtonComponent)
        .toBe(true, "should create Button component");
    });
  });

  it("should have proper level class names based on the input passed", fakeAsync(() => {
    let buttonElement = fixture.debugElement.nativeElement.querySelector("button");
    waButtonComponent.level = "primary";
    fixture.detectChanges();
    expect(buttonElement.className.includes("level-primary")).toBe(true);
    expect(buttonElement.className.includes("level-default")).toBe(false);
  }));

  it("should have proper size class names based on the input passed", fakeAsync(() => {
    let buttonElement = fixture.debugElement.nativeElement.querySelector("button");
    waButtonComponent.size = "default";
    fixture.detectChanges();
    expect(buttonElement.className.includes("size-default")).toBe(true);
    expect(buttonElement.className.includes("size-small")).toBe(false);
  }));

  it("should emit an event on click of the button", fakeAsync(() => {
    spyOn(waButtonComponent, "buttonSubmit");
    let buttonElement = fixture.debugElement.nativeElement.querySelector("button");
    buttonElement.click();
    fixture.whenStable().then(() => {
      expect(waButtonComponent.buttonSubmit).toHaveBeenCalled();
    });
  }));

  it("should have passed tabindex set on the button element", fakeAsync(() => {
    let buttonElement = fixture.debugElement.nativeElement.querySelector("button");
    waButtonComponent.tabindex = "2";
    fixture.detectChanges();
    expect((buttonElement.tabIndex).toString() === "2").toBe(true);
  }));

});
