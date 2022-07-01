import {Action, createFeatureSelector, createReducer, createSelector, on} from '@ngrx/store';
import * as TopicsActions from '../actions/topic.actions';


export const topicFeatureKey = 'topic';

export interface TopicState {
  ids: string[];
  entities: any;
  topicName: string[];
}

export const initialState: TopicState = {
  ids: [],
  entities: [],
  topicName: [],
};

export function topicReducer(state : TopicState = initialState,action : TopicsActions.LoadTopics){

  switch (action.type){
    case TopicsActions.LOAD_TOPICS: {
      return {
        ...state,
       ids: [...state.ids,action.payload],
        topicName: [...state.topicName,action.payload],
        entities: [...state.entities,action.payload]
      };
    }
    // case TopicsActions.LOAD_TOPICS_SUCCESS: {
    //   return {
    //     ...state,
    //     loaded: true,
    //     loading: false,
    //     ids:
    //       state.ids.indexOf('TopicResponse') < 0
    //         ? [...state.ids, 'TopicResponse']
    //         : state.ids,
    //     entities: Object.assign({}, state.entities, {
    //       ['TopicResponse']: action.payload,
    //     }),
    //   };
    // }
    default:
      return state;
  }
}

/////////////////////////////////////////////////////////////////////////
//  Selectors                                                          //
/////////////////////////////////////////////////////////////////////////

// Taking a slice out of my Active Task State
export const getTopicState =
  createFeatureSelector<TopicState>('topic-state-selector');

export const getEntityState = createSelector(
  getTopicState,
  (state: TopicState) => state.entities
);

export const getTopicData = (key: string) =>
  createSelector(getEntityState, (entities) => entities[key]);
