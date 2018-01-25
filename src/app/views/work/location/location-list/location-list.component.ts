import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {DataListStateService} from "../../../../services/data-list-state.service";
import {APP_CONFIG} from "../../../../app.config";
import {UtilityService} from "../../../../services/utility.service";


@Component({
  selector: 'fw-list-table',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss']
})
export class LocationListComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute
    , private state: DataListStateService, @Inject(APP_CONFIG) private config,
    private utility: UtilityService) { }

  id : any;
  spec: any;
  dataLoaded : boolean = false;
  dataListObservable: any;

  ngOnInit() {
    this.state.resetState();
    //modelUrl: string, modelName: string, componentRoute: string
    this.state.setPresentModel('/locations','Locations', '/work/location');

    this.spec = {
      // _id:{
      //   invisible: true
      // },
      state: {
        label: 'State',
        control: 'text',
        isSortable: true
      },
      area: {
        label: 'Area',
        control: 'text'
      },
      subarea: {
        label: 'Sub Area',
        control: 'text',
        isSortable: true
      },
      name: {
        label: 'Full Adress',
        control: 'text'
      }
    };

    //Todo: show spinner until data arrives
    //this is used to take the inital value of param when the page load
    // if(this.route.snapshot.params['id']){
    //   this.state.setPageUniqueId(this.route.snapshot.params['id'], false);
    // }

    this.utility.SetFilterParameterFromQueryParam(this.route, this.state, this.config);


    // //This is used to monitor when it change
    // this.route.params.subscribe(
    //   (params: Params) =>{
    //     if(params['id']){
    //       //Todo: reload page data base on parameter
    //       this.id = params['id'];
    //     }
    //   }
    // )

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


      }
}
