import { combineReducers } from 'redux';
import user from './user-reducer';
import console from './console-reducer';

export default combineReducers({ user, console });
