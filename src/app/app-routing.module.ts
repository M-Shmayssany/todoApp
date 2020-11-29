import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { DashboardListViewComponent } from './pages/dashboard-list-view/dashboard-list-view.component';
import { DashboardNewListComponent } from './pages/dashboard-new-list/dashboard-new-list.component';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { RegisterComponent } from './pages/register/register.component';

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
