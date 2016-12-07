import { Component } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { bindActionCreators } from 'redux';
import { Todo } from '../../model/todo.model';
import { AppStore } from '../../model/appstore.model';
const TodoAction = require('../../action/todo.action');

@Component({
    selector: 'todo',    
    template: `<div class="col-md-12">
                    <h4>Todo List</h4>
                    <add-todo></add-todo><br/>
                    <todo-list [todoitem]="todos" [ac_deletetodo]="actions.removeTodo" [ac_completetodo]="actions.toggleTodo"></todo-list>                 
                </div>`   
})

export class TodoComponent {  
    private disconnect: (a?:any) => void;  
    constructor(private ngRedux: NgRedux<AppStore>) {}
    ngOnInit() {        
       this.disconnect = this.ngRedux.connect(this.mapStateToTarget, this.mapDispatchToThis)(this);                                    
    } 
    ngOnDestroy() {
        this.disconnect();
    }   
    mapStateToTarget(state) {
        return { todos: state.todo };
    }   
    mapDispatchToThis(dispatch) {
        return { actions: bindActionCreators(TodoAction, dispatch) };
    }     
}