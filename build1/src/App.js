import React, { Component } from 'react'
import Header from './components/Header'
// import {BrowserRouter as Router,Route} from 'react-router-dom';
import {HashRouter as Router,Route} from 'react-router-dom';
import Home from './container/Home';
import Api from './container/Api';
import About from './container/About';
import Start from './container/Start';
import Login from './container/Login';
import Details from './container/Details';


export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <div className='main'>
                        <div className="content">
                            <Route path='/' exact component={Home} />
                            <Route path='/api' component={Api} />
                            <Route path='/start' component={Start} />
                            <Route path='/about' component={About} />
                            <Route path='/login' component={Login} />
                            <Route path='/topic/:page' component={Details} />
                      
                        </div>
                        <div className="sider">
                            <img src={require('./1.png')} alt='sider'/>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}


// import React, { Component } from 'react'
// import {HashRouter as Router,Route,Link,Switch,Redirect} from 'react-router-dom';

// import ShowTime from './ShowTime';
// import Todolist from './TodoList/Todolist'
// import Request from './Request';
// import Parent from './Context/Parent';
// import Hoc from './Hoc/Hoc';
// import Sider from './Sider';
// import { Button } from 'antd';
// import NoMatch from './NoMatch';
// import UserInfor from './Router/UserInfor';
// import Topic from './Router/Topic';
// import Hooks from './Router/Hooks';
// // antd使用：
// // 1、下载安装antd框架 ：npm i antd 
// // 2、在某个css里引入antd的css：@import '~antd/dist/antd.css';
// // 3、在需要的组件内import相应的组件，然后使用
// export default class App extends Component {
//     render() {
//         // 所有路由的组件都得放在 BrowserRouter 里
//         // BrowserRouter里只能有一个子元素
//         return (
//             <Router basename='todolist'>
//                 <div>
//                     {/* <UserInfor /> */}
//                     {/* <UserInfor /> */}
//                     <Sider/>
//                     {/* <Button type="primary">Primary</Button> */}
//                     <div style={{marginLeft: 50,float: 'left',border: '2px solid red'}}>
//                         <Switch>
//                             <Route exact path='/' render={()=><Todolist/>}/>
//                             <Route path='/hoc' component={Hoc} />
//                             <Route path='/request' component={Request}/>
//                             <Route path='/userinfor/:id' component={UserInfor}/>
//                             <Route path='/Topic/:page' component={Topic}/>
//                             <Route path='/hooks/:id' component={Hooks}/>
//                             <Redirect from='/old' to='hoc'/>
//                             <Route path='*' component={NoMatch}/>
//                         </Switch>
//                     </div>
//                 </div>
//             </Router>
//         )
//     }
// }