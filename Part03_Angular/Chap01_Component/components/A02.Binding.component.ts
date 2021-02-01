
import { Component } from '@angular/core';

@Component({
    selector: 'a02-binding',
    template: `
        <h3>02. Binding</h3>

        <div class="card-body">
            <h5>단방향 Binding</h5>

            Name: <br>
            일반적인 연산: 1 + 2 = <br>
            좋아하는 과일의 개수: <br>
            과일의 개수 * 100 : <br>
            Are you NolBu? <br>
            Are you NolBu? <br>
            과일 개수가 4개보다 많은가? <br>
            Method: <br>

            Scope에 없는 객체 요소에 접근:  <br>
            Scope에 없는 객체에 접근: <br>
        </div>
        <br>

        <div class="panel-body">
            <h5>속성 바인딩</h5>

            바인딩 방식: <input type="text" class="form-control" ><br>
            속성 바인딩: <input type="text" class="form-control" ><br>
            attr 바인딩: <input type="text" class="form-control" ><br>
        </div>
        <br>

        <div class="panel-body">
            <h5>양방향 바인딩</h5>

            양방향 바인딩: <input type="text" class="form-control" ><br>
            양방향 바인딩: <input type="text" class="form-control" ><br>
            Method 방식: <input type="text" class="form-control" ><br>
        </div>
        <br>

        <div class="panel-body">
            <h5>이벤트 바인딩</h5>

            <div>{{result}}</div>
            innerText: <span></span><br>
            innerHTML: <span></span><br>
            <button>명령식</button>
        </div>
        <br>

        <div class="panel-body">
            <h4>Class Style Binding</h4>

            <div>1. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사..</div>
            <div>2. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사..</div>
            <div>3. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사..</div>

            <div>4. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사..</div>
        </div>

        
    `,
    styles: [`
        .green { color: green; }
        .bold { font-weight: bold; }
    `]
})
export class A02BindingComponent {

    public name: string = 'HongGilDong';
    public address: string = 'Seoul';
    public result: string = '';
    public greenColor: string = 'green';

    public person: { name: string, fruit: string[] } = {
        name: 'NolBu',
        fruit: ['Lemon', 'Banana', 'Orange']
    };

    public ary: string[] = ['One', 'Two', 'Three'];

    public getInfo(): string {
        return `Name: ${this.name}, Fruit: ${this.person.fruit[0]}, Array:  ${this.ary[0]}`;

    }

    public resultChange(): void {
        this.result = '<b>Hello World!!!</b>';
    }

}
