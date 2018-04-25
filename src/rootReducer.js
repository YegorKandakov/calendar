import {combineReducers} from 'redux';
import user from './reducers/user';
import event from './reducers/event';

export default combineReducers({
  user,
  event
})