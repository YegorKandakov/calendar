import {EVENTS_FETCHED, EVENT_CREATED} from '../types';

export default function events(state = {}, action = {}) {
  switch (action.type) {
    case EVENTS_FETCHED:
    case EVENT_CREATED:
      return {...state, ...action.data.entities.events};
    default:
      return state;
  }
}