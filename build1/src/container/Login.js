import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export default class Login extends Component {
    render() {
        return (
            <div>
                <div className='headerss'>
                    <span style={{color:'#80BD01'}}>主页</span>/<span style={{color:"#999"}}>登录</span>
                </div>
                <div className='inner'>
                    <form>
                        <div className='group'>
                            <div className="control"> 用户名</div>
                            <div className='inputs'><input type='text' /></div>
                        </div>    
                        <div className='group'>
                            <div className="control"> 密码</div>
                            <div className='inputs'><input type='password' /></div>
                        </div>   
                        <div className='buttons'>
                            <Link to='/'><button className='dl' type='button'>登录</button></Link>
                        </div> 
                    </form>
                </div>
            </div>
        )
    }
}
