import { Component, EventEmitter } from "@angular/core";
import { NgRedux } from 'ng2-redux';
import { AppStore } from '../../model/appstore.model';
const TodoAction = require('../../action/todo.action');

@Component({
    selector: 'add-todo',
    template: `<div class="form-inline">
                    <div class="form-group">
                        <label>Todo:</label>
                        <input type="text" [(ngModel)]="todo" class="form-control" />
                        <input type="button" (click)="AddTodo(todo)" class="btn btn-default" value="Add Todo" />
                    </div>
                </div>`                                    
})

export class AddTodoComponent{    
    todo:string;
    constructor(private ngRedux: NgRedux<AppStore>){}     
    AddTodo(value:string) {
        this.ngRedux.dispatch(TodoAction.addTodo(value));   
        this.todo = "";             
    }
}
