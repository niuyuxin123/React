import React, { Component } from 'react'
import { NavBar} from 'antd-mobile';
export default class AppMy extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'#3fcccb',color:'#fff',position:'fixed',top:'0',width:'100%',zIndex:'9'}}
                    >我的</NavBar>
            </div>
        )
    }
}
