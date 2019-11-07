import React, { Component } from 'react'

export default class Details extends Component {
    constructor(){
        super();
        this.state={
            data:[],
            sdata:[],
            rdata:[]
        }
    }
    componentDidMount(){
        let id=this.props.match.params.page;
        fetch('https://cnodejs.org/api/v1/topic/'+id)
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({data:res.data});
            this.setState({sdata:res.data.author});
            this.setState({rdata:res.data.replies});
        })
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.match.params.page!== this.props.match.params.page)
        {
            let id= this.props.match.params.page;
            fetch('https://cnodejs.org/api/v1/topic/'+id)
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({data:res.data});
                this.setState({rdata:res.data.replies});
            })
        }
    }
    render() {
        console.log(this.state.data)
        return (
            <div>
                <div className='details-header'>
                    <div className='details-title'>
                        {this.state.data.title}
                    </div>
                    <div className='changes'>
                        <span>•发布于 {this.state.data.create_at}</span>
                        <span>•作者 {this.state.sdata.loginname}</span>
                        <span>•{this.state.data.visit_count}次浏览</span>
                        <span>•最后一次编辑是 {this.state.data.last_reply_at}</span>
                        <span>•来自{this.state.data.tab}</span>
                    </div>
                </div>
                <div style={{width:900,overflow:'hidden',borderTop:'1px solid #ddd'}} dangerouslySetInnerHTML={{__html:this.state.data.content}}></div>
                <div className='replies'>
                    <div className='replies-header'>{this.state.rdata.length}回复</div>
                    {this.state.rdata.map((item,idx)=>(
                        <div className='replies-cell'>
                            <div className='author_content'>
                                <img src={item.author.avatar_url} alt={item.author.loginname}/>
                                <div>{item.author.loginname}</div>
                                <div>{idx}楼 {item.create_at}</div>
                            </div>
                            <div dangerouslySetInnerHTML={{__html:item.content}} style={{overflow:'hidden'}}></div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}