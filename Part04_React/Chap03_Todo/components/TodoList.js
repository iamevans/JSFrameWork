
import React from 'react'
import './css/todos.css';

export const Todolist = () => {

    const todoDOM = [1,2,3].map( (todo) => {
        return <tr>
            <td></td>
            <td><span></span></td>
            <td>
                <button className="btn btn-primary">Complete</button>
            </td>
            <td>
                <button className="btn btn-danger">Delete</button>
            </td>
        </tr>
    })

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th style={{width:'10%'}}>ID</th>
                        <th>Todo</th>
                        <th style={{width:'10%'}}>Complete</th>
                        <th style={{width:'10%'}}>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
        </div>
    )
}
