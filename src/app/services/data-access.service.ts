import {Inject, Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {APP_CONFIG} from "../app.config";

@Injectable()
export class DataAccessService {

  baseServerUrl: string = this.config.apiEndpoint;

  constructor(private http: Http, @Inject(APP_CONFIG) private config) { }

  queryServer(url: string) {
    //return this.http.post('url', data);
    return this.http.get(this.baseServerUrl + url);
  }

  loadLookUps(url: string) {
    return this.http.get(this.baseServerUrl + url)
  }

  loadItemById(url: string) {
    return this.http.get(this.baseServerUrl + url);
  }

  postItemtoServer(url: string, data: any) {
    return this.http.post(this.baseServerUrl + url, data);
  }

  patchItemOnServer(url: string, data: any) {
    return this.http.patch(this.baseServerUrl + url, data);
  }

  deleteItemOnServer(url: string) {
    return this.http.delete(this.baseServerUrl + url);
  }
}
