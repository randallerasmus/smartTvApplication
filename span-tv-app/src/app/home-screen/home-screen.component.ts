import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {select, State, Store} from "@ngrx/store";
import {TopicService} from "./services/topic-service";
import {HttpClient} from "@angular/common/http";
import {TopicActions} from "./actions";
import {TopicReducer} from "./reducers";


@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {

  // this list must be retrieved from the API
  // hardcoded values
  typesOfTopics:any[] = [];
  menuOption: boolean = true;
  private newtopic: any;
  constructor(private router: Router, private topicService: TopicService, private http: HttpClient) { }

  ngOnInit(): void {
    //load data when opening screen
    this.topicService.getTopics().subscribe((response) =>{
      if(response){
         for(const topic of response){
         this.newtopic = topic.title
         this.typesOfTopics.push(this.newtopic);
        }
      }
    })
  }

  selectTopic(title: any) {
      // Calling the service directly from the component
      this.topicService.getTopicsPhotos(title).subscribe((response) =>{
        if(response){
          console.log('data is dynamic', response);
        }
      })
    }
  }

