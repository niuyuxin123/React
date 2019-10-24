import React, { Component } from 'react'
import PropTypes from 'prop-types';
export default class Tofinish extends Component {
    render() {
        return (
            <div style={{marginLeft:'30%'}}>
                <h1>已经完成----{this.props.todo1.length}</h1>
                <ul className="list">
                    {
                        this.props.todo1.map((item,idx)=><li key={idx}>
                            <input type='checkbox' checked={true} key={idx} onChange={()=>{this.props.returnTodo(idx)}} />
                        {item}----<button onClick={()=>{this.props.delTodo1(idx)}}>删除</button></li>)
                    }
                </ul>
            </div>
        )
    }
}
