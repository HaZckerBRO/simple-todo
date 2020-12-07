import {combineReducers} from 'redux'
import {todoReducer} from '@/redux/todoReducer';

export const rootReducer = combineReducers({
  todo: todoReducer,
});