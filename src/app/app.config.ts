import {InjectionToken, OpaqueToken} from "@angular/core";

//Angular2 Implementation
//export let APP_CONFIG = new OpaqueToken("app.config");

//Angular4 Implementation
export let APP_CONFIG = new InjectionToken<IAppConfig>("app.config");

export interface IAppConfig {
  apiEndpoint: string,
  isAscending: string,
  orderbyField: string,
  skip:string,
  take:string,
  name:string,
  value:string,
  operator: string,
  name1: string,
  value1: string,
  operator1: string,
  name2: string,
  value2: string,
  operator2: string
};

export const AppConfig: IAppConfig = {
  apiEndpoint: "http://localhost:8080",
  isAscending: 'a',
  orderbyField: 'of',
  skip: 's',
  take: 't',
  name: 'n',
  value: 'v',
  operator: 'o',
  name1: 'n1',
  value1: 'v1',
  operator1: 'o1',
  name2: 'n2',
  value2: 'v2',
  operator2: 'o2'
};

