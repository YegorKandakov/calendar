import {EVENTS_FETCHED, EVENT_CREATED, EVENT_REMOVED} from '../types';

export default function events(state = {}, action = {}) {
  switch (action.type) {
    case EVENTS_FETCHED:
    case EVENT_CREATED:
        return {...state, ...action.data.entities.events};
    case EVENT_REMOVED:
    {
      const newState = {...state};
      delete newState[action.data.result];
      return newState;
    }
    
    default:
      return state;
  }
}