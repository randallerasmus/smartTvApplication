import { Injectable } from '@angular/core';
import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
import {
  LoadTopics,
  LoadTopicsSuccess,
  LoadTopicsFailed,
} from "../actions/topic.actions";
import {TopicService} from "../services/topic-service";
import {catchError, map, switchMap} from "rxjs/operators";
// @ts-ignore
import RootObject = namespace.RootObject;



@Injectable()
export class TopicEffects {

  constructor(private actions$: Actions, private topicService: TopicService) {}


  onLoadTopics$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ActionTypes.LOAD_TOPICS),
      switchMap(() => this.topicService.getTopics().pipe(
        map((response:RootObject) => new LoadTopicsSuccess(response)),
        catchError((err) => [new LoadTopicsFailed(err)])
      ))
    )
  );
}
