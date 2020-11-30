import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AboutComponent } from './pages/about/about.component';
import { DashboardNewListComponent } from './pages/dashboard-new-list/dashboard-new-list.component';
import { DashboardListViewComponent } from './pages/dashboard-list-view/dashboard-list-view.component';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
// import { TodoListService } from './services/todo-list.service';
// import { TodoListAddService } from './services/todo-list-add.service';
import { LoginService } from './services/login.service';
import { EnrollmentService } from './services/enrollment.service';
import { DashboardListViewService } from './services/dashboard-list-view.service';

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
    // TodoListService,
    // TodoListAddService,
    LoginService,
    EnrollmentService,
    DashboardListViewService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
