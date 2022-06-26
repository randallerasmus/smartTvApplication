import { createAction, props } from '@ngrx/store';

export const loadTopics = createAction(
  '[Topic] Load Topics'
);

export const loadTopicsSuccess = createAction(
  '[Topic] Load Topics Success',
  props<{ payload: any }>()
);

export const loadTopicsFailure = createAction(
  '[Topic] Load Topics Failure',
  props<{ error: any }>()
);
