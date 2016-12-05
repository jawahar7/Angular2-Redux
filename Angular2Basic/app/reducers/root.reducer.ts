import { combineReducers } from 'redux';
import { AppStore } from '../model/appstore.model';
import { TodoReducer } from './todo.reducer';

export const RootReducer = combineReducers<AppStore>({
    todo: TodoReducer
});