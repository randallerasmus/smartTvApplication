import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {TopicService} from "./services/topic-service";
import {HttpClient} from "@angular/common/http";
// import {TopicActions} from "./actions";

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {

  // this list must be retrieved from the API
  typesOfTopics:any[] = [
              'Animation',
              'Cartooning',
              'Character Design',
              'Comedy',
              'Design',
              'Djing',
              'Engineering',
              'Game Design'
              ];
  menuOption: boolean = true;

  constructor(private router: Router, private topicService: TopicService, private http: HttpClient) { }

  ngOnInit(): void {
  }

  selectTopic() {
    this.topicService.getTopics().subscribe((response) =>{
      if(response){
        console.log('data is dynamic', response[0].title);
      }
    })

   }


  }

