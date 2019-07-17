import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import{UsersService} from './users.service';
import { Employeelistcomponent } from './usersdata.component';
import { TaskingitComponent } from './taskingit/taskingit.component';


@NgModule({
  declarations: [
    AppComponent,Employeelistcomponent, TaskingitComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule

  ],
  providers: [UsersService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
