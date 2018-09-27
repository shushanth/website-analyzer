/**
 * @author: shushanth
 * @description: ajax service file , which processes the ajax methods
 */

import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { Observable } from "rxjs/Rx";

@Injectable()
export class AjaxService {
  constructor(
    private http: Http
  ) {}
  private headers = {
    "Accept": "application/json",
    "Content-Type": "application/json"
  };

  post(url: string, request: any, inputHeaders: object = {}): Observable<any> {
    let headerInput: Object = Object.assign({}, this.headers, inputHeaders);
    let headers = new Headers(headerInput);
    let options = new RequestOptions({headers: headers});
    return this.http.post(url, request, options)
      .map((res: Response) => res.json())
      .catch(error => Observable.throw(error));
  }
}
