import { Component } from '@angular/core';

@Component({
    selector: 'todoList',
    template: `
        <div>
            <table class="table">
                <thead>
                <tr>
                    <th style="width:10%">ID</th>
                    <th>Todo</th>
                    <th  style="width:10%">Complete</th>
                    <th  style="width:10%">Delete</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td></td>
                    <td><span></span></td>
                    <td>
                        <button class="btn btn-primary">Complete</button>
                    </td>
                    <td>
                        <button class="btn btn-danger">Delete</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <br>

        <br>
  `,
    styles: [`
        .done {
            text-decoration: line-through;
        }
    `]
})
export class TodoListComponent {

}
