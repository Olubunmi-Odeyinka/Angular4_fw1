import { Injectable } from '@angular/core';
import {ActivatedRoute} from "@angular/router/router";
import {DataListStateService} from "./data-list-state.service";

@Injectable()
export class UtilityService {

  constructor() { }

  SetFilterParameterFromQueryParam(route: ActivatedRoute, state: DataListStateService, config: any) {
    if (route.snapshot.params[config.take]) {
        state.setPageSize(route.snapshot.params[config.take], false);
    }
    if (route.snapshot.params[config.skip]) {
          state.setPresentPageFromSkip(+route.snapshot.params[config.skip], false);
    }
    if(route.snapshot.params[config.orderbyField]){
      state.setOrderbyField(route.snapshot.params[config.orderbyField], false);
    }
    if(route.snapshot.params[config.isAscending]){
      state.setIsAcending(route.snapshot.params[config.isAscending], false);
    }
    if(route.snapshot.params[config.name]){
      state.setFilterFieldName(route.snapshot.params[config.name], 0, false);
    }
    if(route.snapshot.params[config.value]){
      state.setFilterValue(route.snapshot.params[config.value], 0, false);
    }
    if(route.snapshot.params[config.operator]){
      state.setFilterOperator(route.snapshot.params[config.operator], 0, false);
    }
    if(route.snapshot.params[config.name1]){
      state.setFilterFieldName(route.snapshot.params[config.name1], 1, false);
    }
    if(route.snapshot.params[config.value1]){
      state.setFilterValue(route.snapshot.params[config.value1], 1, false);
    }
    if(route.snapshot.params[config.operator1]){
      state.setFilterOperator(route.snapshot.params[config.operator1], 1, false);
    }
    if(route.snapshot.params[config.name2]){
      state.setFilterFieldName(route.snapshot.params[config.name2], 2, false);
    }
    if(route.snapshot.params[config.value2]){
      state.setFilterValue(route.snapshot.params[config.value2], 2, false);
    }
    if(route.snapshot.params[config.operator2]){
      state.setFilterOperator(route.snapshot.params[config.operator2], 2, false);
    }

    if(route.snapshot.fragment){
      state.setFragment(route.snapshot.fragment, false);
    }
  }
}
