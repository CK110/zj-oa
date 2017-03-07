import {Component, OnInit, NgModule, ViewChild} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {FieldsetModule, ButtonModule,InputTextModule,  DropdownModule, AutoCompleteModule, CalendarModule, InputTextareaModule, SharedModule} from 'primeng/primeng';
import {FormBuilder, FormGroup, FormsModule} from "@angular/forms";
import {Http, HttpModule} from "@angular/http";
@Component({
    selector: 'oa-errand',
    templateUrl: './errand.html'
})
export class ErrandComponent  {
  @ViewChild("userForm")
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: Http /*, private router: Router, private route: ActivatedRoute*/) {

  }


  corpList = [
    { "corpcode": "NJ", "corpName": "融畅" },
    { "corpcode": "BJ", "corpName": "北京" },
    { "corpcode": "SZ", "corpName": "深圳" },
    { "corpcode": "SH", "corpName": "上海" }
  ];
  deptList = [
    { "deptId": "1", "deptName": "研发中心" },
    { "deptId": "2", "deptName": "软件一部" },
    { "deptId": "3", "deptName": "软件二部" },
    { "deptId": "4", "deptName": "软件三部" },
    { "deptId": "5", "deptName": "信息开发中心" }
  ];
  username: string;
  birthday: string;
  note: string;
  corpcode = "BJ";
  deptId = "2";
  provinceId: string = "";
  cityId: string = "";

  provinces = [
    { 'id': "jiangsu", 'name': "江苏" },
    { 'id': "guangdong", 'name': "广东" }];


  cities = [];

  provinceChange($event) {
    //        if ($event) {
    //            this.http.post("/uibook/region/cities?province=" + $event)
    //                .toPromise().then(response => {
    //                    this.cities = response.json();
    //                });
    //        }
    if ($event) {
      // this.http.post("/uibook/region/cities")
      //   .toPromise().then(response => {
      //   var cityList = response.json();
      //   for (var i = 0; i < cityList.length; i++) {
      //     if (cityList[i].province == $event) {
      //       this.cities.push(cityList[i]);
      //     }
      //   }
      // });
      this.cities.push([]);
      //     }
    }


  }

  reset() {
    this.username = '';
    this.birthday = '';
    this.note = '';
    this.corpcode = 'BJ';
    this.deptId = "2";
    this.provinceId = "";
    this.cityId = "";
  }

  addUser() {
    console.log(this.userForm);
    if (this.userForm.valid) {
      alert("表单验证通过，数据为：username = " + this.username + "deptId = " + this.deptId + "corpcode = " + this.corpcode + "birthday = " + this.birthday + "note = " + this.note);
    } else {
      alert("表单验证未通过，不允许提交！");
    }
  }

}


const errandRoutes:Routes=[
  {
    path:"",
    component:ErrandComponent
  }
]


@NgModule({
  imports:[CommonModule,
    HttpModule, FormsModule,
    RouterModule.forChild(errandRoutes),
    InputTextModule,  DropdownModule, AutoCompleteModule, CalendarModule, InputTextareaModule, ButtonModule, CommonModule, SharedModule
  ],
  declarations:[ErrandComponent],
  providers: [FormBuilder]
})
export class ErrandModule{}
