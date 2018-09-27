/**
 * @author: shushanth
 * @description: loads the required providers , components used in the application
 * and configures them in respective UT's
 * helpers of UT's as for every UT out here not required to load its respective providers ,
 * components, modules and loads them on the fly and these will be available to UT's
 * NOTE: This class internally using Jasmine framework & Angular testing utility methods.
 */
import {
  TestBed,
  getTestBed,
} from "@angular/core/testing";
import { Observable } from "rxjs/Observable";
import {
  BaseRequestOptions,
  HttpModule,
  Http,
  XHRBackend,
} from "@angular/http";
import {
  MockBackend,
  MockConnection,
} from "@angular/http/testing";
import {
  Response,
  ResponseOptions,
} from "@angular/http";

class TestingModuleClass {
  constructor(
    public imports: any[],
    public declarations: any[],
    public providers: any[],
    public schemas: any[],
  ) { }
};

/**
* This class holds some util methods for UT.
*/
export class UnitTestHelpers {
  private defaultModuleInterface: TestingModuleClass = new TestingModuleClass([HttpModule], [], [], []);
  private reqProviders: any = [
    MockBackend,
    BaseRequestOptions,
    {
      provide: Http, deps: [MockBackend, BaseRequestOptions],
      useFactory: (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
        return new Http(backend, defaultOptions);
      }
    }];

  /**
  * @param{mandatory}{Class}: ServiceName, which need to be configure for UT.
  */
  configureTestingModule(moduleProps: any) {
    let testingModuleProps: TestingModuleClass = this.defaultModuleInterface;

    // adding imports
    if (moduleProps.imports && moduleProps.imports instanceof Array) {
      testingModuleProps.imports = moduleProps.imports.concat(testingModuleProps.imports);
    }

    // adding providers
    if (moduleProps.providers && moduleProps.providers instanceof Array) {
      testingModuleProps.providers = moduleProps.providers.concat(this.getRequiredProviders());
    }

    // adding declarations
    if (moduleProps.declarations && moduleProps.declarations instanceof Array) {
      testingModuleProps.declarations = moduleProps.declarations.concat(testingModuleProps.declarations);
    }

    // adding schemas
    if (moduleProps.schemas && moduleProps.schemas instanceof Array) {
      testingModuleProps.schemas = moduleProps.schemas.concat(testingModuleProps.schemas);
    }

    return TestBed.configureTestingModule({
      imports: testingModuleProps.imports,
      declarations: testingModuleProps.declarations,
      providers: testingModuleProps.providers,
      schemas: testingModuleProps.schemas
    });
  }

  /**
  * @return{Array}: This method returns requires providers to configure testing module
  */
  private getRequiredProviders() {
    return this.reqProviders;
  }
}
