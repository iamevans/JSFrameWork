import { Component } from '@angular/core';

@Component({
    selector: 'todoForm',
    template: `
        <form [formGroup]="todoForm">
            <div class="input-group">
                <input type="text" class="form-control"/>
                <div class="input-group-append">
                    <button type="submit" class="btn btn-primary mr-1">Submit</button>
                </div>
            </div>
        </form>
  `,
    styles: [``]
})
export class TodoFormComponent {

}
