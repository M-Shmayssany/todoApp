import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { DashboardNewListComponent } from './dashboard-new-list/dashboard-new-list.component';
import { DashboardListViewComponent } from './dashboard-list-view/dashboard-list-view.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListService } from './todo-list.service';
import { TodoListAddService } from './todo-list-add.service';
import { LoginService } from './login.service';
import { EnrollmentService } from './enrollment.service';
import { DashboardListViewService } from './dashboard-list-view.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    DashboardComponent,
    AboutComponent,
    DashboardNewListComponent,
    DashboardListViewComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    TodoListService,
    TodoListAddService,
    LoginService,
    EnrollmentService,
    DashboardListViewService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
