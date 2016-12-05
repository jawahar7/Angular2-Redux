import { List } from 'immutable';
import { Todo } from './todo.model';

export interface AppStore {
    todo: List<Todo>;
}