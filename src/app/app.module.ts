import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {SideBarModule} from "./component/sidebar/sidebar";
import {SlimScrollModule} from "./component/scroll/scroll";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    SideBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
