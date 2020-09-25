import { combineReducers } from 'redux';
import user from './user-reducer';
import loginForm from './login-form-reducer';
import console from './console-reducer';

export default combineReducers({ loginForm, user, console });
