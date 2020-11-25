import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DashboardListViewComponent } from './dashboard-list-view/dashboard-list-view.component';
import { DashboardNewListComponent } from './dashboard-new-list/dashboard-new-list.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'list-view', component: DashboardListViewComponent },
      { path: 'new-list', component: DashboardNewListComponent},
      { path: 'todo-list/:id', component: TodoListComponent }
    ]
  },
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [
  HomeComponent,
  DashboardComponent,
  AboutComponent,
  RegisterComponent,
  LoginComponent,
  LogoutComponent,
  DashboardListViewComponent,
  DashboardNewListComponent,
  TodoListComponent
];
