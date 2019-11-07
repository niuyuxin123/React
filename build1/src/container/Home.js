import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom';
import All from './All';


export default class Home extends Component {
    render() {
        let url = this.props.match.url
        return (
            <div>
                <div className='headerss'>
                    <Link to={url+'?tab=all'} style={{color:'#80BD01',paddingRight:'5px'}} >全部</Link>
                    <Link to={url+'?tab=good'} style={{color:'#80BD01',paddingRight:'5px'}}>精华</Link>
                    <Link to={url+'?tab=share'} style={{color:'#80BD01',paddingRight:'5px'}}>分享</Link>
                    <Link to={url+'?tab=ask'} style={{color:'#80BD01',paddingRight:'5px'}}>问答</Link>
                    <Link to={url+'?tab=job'} style={{color:'#80BD01',paddingRight:'5px'}}>招聘</Link>
                </div>
                <div>
                    <Route path={`${url}`} component={All} />
                </div>
            </div>
        )
    }
}