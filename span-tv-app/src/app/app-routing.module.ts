import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeScreenComponent} from "./home-screen/home-screen.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeScreenComponent,
  },
  {
    path: 'profile',
    component: HomeScreenComponent,
  },
  {
    path: 'about',
    component: HomeScreenComponent,
  },
  {
    path: 'help',
    component: HomeScreenComponent,
  },
  {
    path: '**',
    component: HomeScreenComponent,
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
