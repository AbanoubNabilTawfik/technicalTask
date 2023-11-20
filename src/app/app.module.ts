import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { EmployeeListComponent } from './Components/employee-list/employee-list.component';
import {HttpClientModule} from '@angular/common/http';
import { RealocateProcessComponent } from './Components/realocate-process/realocate-process.component';
import { FormsModule } from '@angular/forms';
import { NotfoundComponent } from './Components/notfound/notfound.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployeeListComponent,
    RealocateProcessComponent,
    NotfoundComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
