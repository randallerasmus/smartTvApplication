import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TopicComponent} from "./components/topic/topic.component";
import {HomeScreenComponent} from "./home-screen.component";


const routes: Routes = [
  {
    path: 'home',
    component: HomeScreenComponent,
    children: [
      {
        path:'topic',
        component: TopicComponent
      }
    ]
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class TopicRoutingModule { }
