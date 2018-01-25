import {Component, Inject, OnInit, Query} from '@angular/core';
import {Router, ActivatedRoute, Params} from "@angular/router";
import {DataItemStateService} from "../../../services/data-item-state.service";
import { APP_CONFIG} from '../../../app.config';
import {DataListStateService} from "../../../services/data-list-state.service";

@Component({
  selector: 'fw-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.scss']
})
export class SimpleTableComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute
    , private state: DataListStateService, @Inject(APP_CONFIG) private config ) { }

  id : any;
  dataLoaded : boolean = false;
  ngOnInit() {
    this.state.resetState();
    //modelUrl: string, modelName: string, componentRoute: string
    this.state.setPresentModel('/model','Fake Frorm Table View', 'simpleTable');

    //Todo: show spinner until data arrives
    //this is used to take the inital value of param when the page load
    // if(this.route.snapshot.params['id']){
    //   this.state.setPageUniqueId(this.route.snapshot.params['id'], false);
    // }
    if(this.route.snapshot.queryParams[this.config.skip]){
      this.state.setPageSize(this.route.snapshot.queryParams[this.config.skip], false);
    }
    if(this.route.snapshot.queryParams[this.config.take]){
      this.state.setPageSize(this.route.snapshot.queryParams[this.config.take], false);
    }
    if(this.route.snapshot.queryParams[this.config.orderbyField]){
      this.state.setOrderbyField(this.route.snapshot.queryParams[this.config.orderbyField], false);
    }
    if(this.route.snapshot.queryParams[this.config.isAscending]){
      this.state.setIsAcending(this.route.snapshot.queryParams[this.config.isAscending], false);
    }
    if(this.route.snapshot.queryParams[this.config.name]){
      this.state.setFilterFieldName(this.route.snapshot.queryParams[this.config.name], 0, false);
    }
    if(this.route.snapshot.queryParams[this.config.value]){
      this.state.setFilterValue(this.route.snapshot.queryParams[this.config.value], 0, false);
    }
    if(this.route.snapshot.queryParams[this.config.operator]){
      this.state.setFilterOperator(this.route.snapshot.queryParams[this.config.operator], 0, false);
    }
    if(this.route.snapshot.queryParams[this.config.name1]){
      this.state.setFilterFieldName(this.route.snapshot.queryParams[this.config.name1], 1, false);
    }
    if(this.route.snapshot.queryParams[this.config.value1]){
      this.state.setFilterValue(this.route.snapshot.queryParams[this.config.value1], 1, false);
    }
    if(this.route.snapshot.queryParams[this.config.operator1]){
      this.state.setFilterOperator(this.route.snapshot.queryParams[this.config.operator1], 1, false);
    }
    if(this.route.snapshot.queryParams[this.config.name2]){
      this.state.setFilterFieldName(this.route.snapshot.queryParams[this.config.name2], 2, false);
    }
    if(this.route.snapshot.queryParams[this.config.value2]){
      this.state.setFilterValue(this.route.snapshot.queryParams[this.config.value2], 2, false);
    }
    if(this.route.snapshot.queryParams[this.config.operator2]){
      this.state.setFilterOperator(this.route.snapshot.queryParams[this.config.operator2], 2, false);
    }

    if(this.route.snapshot.fragment){
      this.state.setFragment(this.route.snapshot.fragment, false);
    }

    //This is used to monitor when it change
    this.route.params.subscribe(
      (params: Params) =>{
        if(params['id']){
          //Todo: reload page data base on parameter
          this.id = params['id'];
        }
      }
    )

    //this.route.queryParams.subscribe(
    //  (queryParams) =>{
    //    if(queryParams['skip']){
    //      this.state.setPageSize(Number(queryParams['skip']), false);
    //    }
    //    if(queryParams['take']){
    //      this.state.setPageSize(Number(queryParams['take']), false);
    //    }
    //  }
    //)

    this.state.loadDataList();
  }



  goModify(id, task){
    //task: 'create', update, delete
    //id : is the id of selected item
    this.router.navigate([task, id], {relativeTo: this.route})
  }

}
