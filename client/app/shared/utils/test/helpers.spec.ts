/**
 * @author: shushanth
 * @description: UT's for helpers
 */

import { NO_ERRORS_SCHEMA } from "@angular/core";
import { TestBed, ComponentFixture } from "@angular/core/testing";
// helpers
import { isEmptyArray } from "../helpers";

describe("Method: isEmptyArray", () => {

  it("should return truthy value passed array is empty", () => {
   const isArrayEmpty = isEmptyArray([]);
   expect(isArrayEmpty).toBe(true);
  });

  it("should return falsy value passed array is not empty", () => {
    const isArrayEmpty = isEmptyArray(["1", "2"]);
    expect(isArrayEmpty).toBe(false);
  });

});
