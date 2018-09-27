/**
 * @author: shushanth
 * @description: UT's for generic input component
 */

import { NO_ERRORS_SCHEMA } from "@angular/core";
import { TestBed, ComponentFixture, async } from "@angular/core/testing";

// component
import { WAInputComponent } from "../../components";
// helpers
import { UnitTestHelpers } from "../../utils";

describe("Component: WAInputComponent", () => {
  let fixture: ComponentFixture<WAInputComponent>;
  let waInputComponent: WAInputComponent;
  const utHelpers = new UnitTestHelpers();
  /**
   * @param value
   * @param prop
   * @description: check for the input value exists based on proper and value
   * @returns boolean value if prop matches the input element value of the prop.
   */
  const getInputPropValue = (value: string | boolean, prop: string): boolean => {
    const inputElement = fixture.debugElement.nativeElement.querySelector("input");
    waInputComponent[prop] = value;
    fixture.detectChanges();
    return (inputElement[prop] === value);
  };

  beforeEach(() => {
    utHelpers.configureTestingModule({
      declarations: [WAInputComponent],
      providers: [],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(WAInputComponent);
    waInputComponent = fixture.componentInstance;
  });

  it("should create button component", () => {
    const fixtureInstance = fixture.componentInstance;
    TestBed.compileComponents().then(() => {
      expect(fixtureInstance instanceof WAInputComponent)
        .toBe(true, "should create Input component");
    });
  });

  it("should have input value prop binded to component", () => {
    const inputValueMatch = getInputPropValue("http://seerene.com", "value");
    expect(inputValueMatch).toBe(true);
  });

  it("should have placeholder value binded to component", () => {
    const inputPlaceholderMatch = getInputPropValue("test", "placeholder");
    expect(inputPlaceholderMatch).toBe(true);
  });

  it("should have loading value binded to component", () => {
    const inputLoadingMatch = getInputPropValue(false, "disabled");
    expect(inputLoadingMatch).toBe(true);
  });

  it("should have disabled value binded to component", () => {
    const inputDisabledMatch = getInputPropValue(false, "disabled");
    expect(inputDisabledMatch).toBe(true);
  });

  it("should show error text element based on the errorText value", () => {
    waInputComponent.errorText = "invalid URL";
    fixture.detectChanges();
    let errorElement = fixture.debugElement.nativeElement.querySelectorAll(".wa-input-error");
    expect(errorElement.length).toBe(1);
  });

  it("should not show error text element based if the error text value is falsy value", () => {
    waInputComponent.errorText = "";
    fixture.detectChanges();
    let errorElement = fixture.debugElement.nativeElement.querySelectorAll(".wa-input-error");
    expect(errorElement.length).toBe(0);
  });

  it("should show loading icon component element based on the loading value", () => {
    waInputComponent.loading = true;
    fixture.detectChanges();
    let loadingElement = fixture.debugElement.nativeElement.querySelectorAll(".wa-input-loading");
    expect(loadingElement.length).toBe(1);
  });

  it("should not show loading icon component element based on the loading value", () => {
    waInputComponent.loading = false;
    fixture.detectChanges();
    let loadingElement = fixture.debugElement.nativeElement.querySelectorAll(".wa-input-loading");
    expect(loadingElement.length).toBe(0);
  });

});
