import React, { Component } from 'react'
import PropTypes from 'prop-types';
export default class Todoing extends Component {
    render() {
        return (
            <div style={{marginLeft:'30%'}}>
                <h1>正在进行----{this.props.todo.length}</h1>
                <ul className="list">
                    {
                        this.props.todo.map((item,idx)=>
                        <li key={idx}>
                            <input type='checkbox' key={idx} checked={false} onChange={()=>{this.props.transferTodo(idx)}} />
                        {item}----
                        <button onClick={()=>{this.props.delTodo(idx)}}>删除</button>
                        </li>)
                    }
                </ul>
            </div>
        )
    }
}
