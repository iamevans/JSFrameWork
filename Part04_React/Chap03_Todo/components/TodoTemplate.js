
import React from 'react'
import { Todolist } from './TodoList';
import { TodoForm } from './TodoForm';

const TodoTemplate = (props) => {

    const sampleTodos = [
        { id: 1, text: '첫 번째 할 일', done: true },
        { id: 2, text: '두 번째 할 일', done: false },
        { id: 3, text: '세 번째 할 일', done: false },
    ];

    return (
        <div>
            <h3>Todo List</h3>

            <TodoForm></TodoForm>
            <br/>
            <Todolist></Todolist>

        </div>
    )
}
export default TodoTemplate;