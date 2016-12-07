import { Component } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { Todo } from '../../model/todo.model';
import { AppStore } from '../../model/appstore.model';
const TodoAction = require('../../action/todo.action');

@Component({
    selector: 'todo-list',
    template: `<table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>#
                            </th>
                            <th>
                                Items
                            </th>  
                            <th>
                                Delete
                            </th>                              
                        </tr>
                    </thead>
                    <tbody>
                        <tr *ngFor="let t of todoitem; let i = index">
                            <td>{{i+1}}
                            </td>
                            <td>
                               {{t.name}}
                            </td>
                            <td>
                                <a (click)="removeitem(t.id)">Delete</a>
                            </td>
                        </tr>
                    </tbody>
                </table>`,
    inputs: ['todoitem'],
    styles: [`a{cursor:pointer;}`]             
})

export class TodoListComponent{
    todoitem: Todo;
    constructor(private ngRedux: NgRedux<AppStore>) {}
    removeitem = function(id){        
        this.ngRedux.dispatch(TodoAction.removeTodo(id));
    }
}