import {Component, OnInit, NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule, Route, Routes} from "@angular/router";

@Component({
    selector: 'oa-errand',
    templateUrl: './errand.html'
})
export class ErrandComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}


const errandRoutes:Routes=[
  {
    path:"",
    component:ErrandComponent
  }
]


@NgModule({
  imports:[CommonModule,
    RouterModule.forChild(errandRoutes)
  ],
  declarations:[ErrandComponent],
})
export class ErrandModule{}
