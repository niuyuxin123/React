import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom';

export default class All extends Component {
    constructor(){
        super();
        this.state={
            data:[],
            arr:[1,2,3,4,5,6,7,8,9,10]
        }
    }
    componentDidMount(){
        let tab=this.props.location.search;
        console.log(tab);
        fetch('https://cnodejs.org/api/v1/topics'+tab)
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({data:res.data});
        })
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.location.search !== this.props.location.search)
        {
            let tab = this.props.location.search;
            fetch('https://cnodejs.org/api/v1/topics'+tab)
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res.data)
                this.setState({data:res.data});
            })
        }
    }
    render() {
        // let tabss=this.props.location.search.slice(0,this.props.location.search.indexOf('&'));
        // let tabss=this.props.location.search.indexOf('&')?this.props.location.search.slice(0,this.props.location.search.indexOf('&')):this.props.location.search;
        let tabss=this.props.location.search?this.props.location.search.split("&")[0]:'?tab=all';
        // let tabss;
        // if(this.props.location.search.indexOf('&')){
        //     tabss=this.props.location.search.substring(0,this.props.location.search.indexOf('&'));
        // }else if(this.props.location.search.indexOf('=')){
        //     tabss=this.props.location.search;
        // }else{
        //     tabss='?tab=all';
        // }
        return (
            <div>
                {this.state.data.map((item)=>(
                    <Link to ={`/topic/${item.id}`}>
                    <div className='cell'>
                        <img style={{height:'30px',width:'30px',float:'left'}} src={item.author.avatar_url} alt={item.author.loginname} />
                        <div className='reply'>
                            <span style={{color:'#9E70C0'}}>{item.reply_count}</span>/<span style={{color:'#B4B4B4',fontSize:'10px'}}>{item.visit_count}</span>
                        </div>
                        <div className='tabs'>
                            {item.tab}
                        </div>
                        <div className='titles'>
                            {item.title}
                        </div>
                        <div className='times'>
                            <img style={{height:'30px',width:'30px',float:'left'}} src={item.author.avatar_url} alt={item.author.loginname} />
                            一天前
                        </div>
                    </div>
                    </Link>
                ))}
                <div className='pagination'>
                    <ul>
                    {console.log(tabss)}
                        {this.state.arr.map((item1)=>(
                            
                            <li><Link to={`${tabss}&page=${item1}`}>{item1}</Link></li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}
