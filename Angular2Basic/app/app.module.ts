import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgReduxModule, NgRedux } from 'ng2-redux';
import { createStore, Store } from 'redux';
import { AppStore } from './model/appstore.model';
import { RootReducer } from './reducers/root.reducer';
import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { AddTodoComponent } from './components/todo/addtodo.component';
import { TodoListComponent } from './components/todo/todolist.component';

@NgModule({
    imports: [BrowserModule, FormsModule, NgReduxModule.forRoot() ],
    declarations: [AppComponent, TodoComponent, AddTodoComponent, TodoListComponent],
    bootstrap: [AppComponent]
})

export class AppModule {
    store: Store<AppStore> = createStore(RootReducer) as Store<AppStore>;
    constructor(private ngRedux: NgRedux<AppStore>){
        ngRedux.provideStore(this.store);
    }
}