import {Component, OnInit, NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {BreadcrumbModule,MenuItem} from "primeng/primeng"

@Component({
  selector: 'oa-airapp',
  templateUrl: './airapp.html'
})
export class AirAppComponent implements OnInit {

  // private items: MenuItem[];
  private items: any;

  constructor() { }

  ngOnInit() {
    this.items = [];
    this.items.push({label:'Categories'});
    this.items.push({label:'Sports'});
    this.items.push({label:'Football'});
    this.items.push({label:'Countries'});
    this.items.push({label:'Spain'});
    this.items.push({label:'F.C. Barcelona'});
    this.items.push({label:'Squad'});
    this.items.push({label:'Lionel Messi', url: 'https://en.wikipedia.org/wiki/Lionel_Messi'});
  }

}


const airappRoutes:Routes=[
  {
    path:"",
    component:AirAppComponent
  }
]


@NgModule({
  imports:[CommonModule,
    RouterModule.forChild(airappRoutes),
    BreadcrumbModule
  ],
  declarations:[AirAppComponent],
})
export class AirAppModule{}
