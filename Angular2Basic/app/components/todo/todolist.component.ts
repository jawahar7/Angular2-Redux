import { Component } from '@angular/core';
import { Todo } from '../../model/todo.model';

@Component({
    selector: 'todo-list',    
    templateUrl: '../../template/todo/todolist.html',
    inputs: ['todoitem', 'ac_deletetodo', 'ac_completetodo'],
    styles: [`a{cursor:pointer;}
               .complete{text-decoration:line-through;} `]                 
})

export class TodoListComponent{
    private todoitem: Todo;  
    private ac_deletetodo: (id: string) => void;
    private ac_completetodo: (id: string) => void;
    constructor() {}    
    deletetodo(id :string) {        
       this.ac_deletetodo(id);
    }
    toggletodo(id: string) {
        this.ac_completetodo(id);
    }
}