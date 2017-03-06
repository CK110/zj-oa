import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '',
    redirectTo:'errand',
    pathMatch:'full'
  },

  {
    path:'errand',
    loadChildren:"app/oa/errand/errand#ErrandModule"
  },
  {
    path:'airapp',
    loadChildren:"app/oa/airapp/airapp#AirAppModule"
  }



]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
