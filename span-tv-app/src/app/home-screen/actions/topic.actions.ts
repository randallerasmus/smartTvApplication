import {Action} from '@ngrx/store';

 export const LOAD_TOPICS = '[TopicsService] Load Topics';
 export const LOAD_TOPICS_SUCCESS = '[TopicsService] Load Topics Success';
 export const LOAD_TOPICS_FAILED = '[TopicsService] Load Topics Failed';


export class LoadTopics implements Action {
  readonly type = LOAD_TOPICS;
  constructor(public payload: any) {
  }
}

export class LoadTopicsSuccess implements Action {
  readonly type = LOAD_TOPICS_SUCCESS;

  constructor(public payload: any) {
  }
}

export class LoadTopicsFailed implements Action {
  readonly type = LOAD_TOPICS_FAILED;

  constructor(public payload: any) {
  }
}

export type Actions = LoadTopics | LoadTopicsSuccess | LoadTopicsFailed;
