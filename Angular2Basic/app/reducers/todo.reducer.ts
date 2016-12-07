import { List } from 'immutable';
import { UUID } from 'angular2-uuid';
import { Todo } from '../model/todo.model';

export const TodoReducer = (state: List<Todo> = List<Todo>(), action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return addtodo(state, action);
        case 'REMOVE_TODO':
            return removetodo(state, action);  
        case 'CHANGE_STATUS':   
            return completetodo(state, action);                   
        default:
            return state;
    }
}

function addtodo(state: List<Todo>, action) {
    var obj: Todo = {id: UUID.UUID(), name: action.payload.item, completed: false };    
    return state.push(obj);
}

function removetodo(state: List<Todo>, action) {      
    return state.remove(state.findIndex(function(items){ return items.id === action.payload.id}));
}

function completetodo(state: List<Todo>, action) {   
    const idx = state.findIndex(function(items){ return items.id === action.payload.id});
    return state.update(idx, x=>{x.completed = !x.completed; return x});     
}