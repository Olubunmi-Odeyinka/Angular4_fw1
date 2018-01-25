import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {DataItemStateService} from "../../../services/data-item-state.service";
import {DataAccessService} from "../../../services/data-access.service";

@Component({
  selector: 'fw-delete-form',
  templateUrl: './delete-form.component.html',
  styleUrls: ['./delete-form.component.scss']
})
export class DeleteFormComponent implements OnInit {

  id: string;
  dataLoaded : boolean = false;
  viewData : any;
  constructor(private router: Router, private route: ActivatedRoute
    , private state: DataItemStateService) { }

  ngOnInit() {
    //Todo: show spinner until data arrives
    this.state.resetState();
    //modelUrl: string, modelName: string
    this.state.setPresentModel('/model','Delete Fake Form');

    this.id = this.route.snapshot.params['id'];
    if(this.id){
      //Todo: dataloaded
      this.state.setPageUniqueId(this.id);
      this.state.loadItemById(this.dataLoaded);
      this.viewData = this.state.getDataItem();
    }
  }

  afterDelete(){
    this.router.navigate(['crud'])
  }
}
