import { Component } from "@angular/core";

@Component({
    selector: 'todo',
    template: `
        <div>
            <h3>Todo List</h3>

            <todoForm></todoForm>
            <todoList></todoList>
        </div>
    `
})
export class Todo {

    // public todos: todoType[] = [
    //     {id: 1, text: '첫번째 할 일', done: false},
    //     {id: 2, text: '두번째 할 일', done: true},
    //     {id: 3, text: '세번째 할 일', done: false},
    // ];

}