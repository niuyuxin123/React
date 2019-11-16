import React, { Component } from 'react'
import { NavBar,Carousel, WingBlank } from 'antd-mobile';
export default class AppHome extends Component {
    state = {
        data: ['1', '2']
      }
    render() {
        var arr=[1,2,3,4,5,6,7];
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'#3fcccb',color:'#fff',position:'fixed',top:'0',width:'100%',zIndex:'9'}}
                    >住吧家具</NavBar>
                <div style={{position:'relative',top:'45px'}}>
                    <WingBlank style={{margin:0}} >
                        <Carousel
                        autoplay={true}
                        infinite
                        >
                        {this.state.data.map(val => (
                            <a
                            key={val}
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                            >
                            <img
                                src={`images/banner-${val}.png`}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                // fire window resize event to change height
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: 'auto' });
                                }}
                            />
                            </a>
                        ))}
                        </Carousel>
                    </WingBlank>
                </div>
                <div style={{backgroundColor:'#eeeeee',padding:'25px 0',float:'left',width:'100%',position:'relative',top:'45px'}}>
                    <div style={{float:'left',width:'28%',marginLeft:'4%'}}>
                        <img src='images/middle-1.png' style={{width:'100%',height:'auto'}} alt='' />
                    </div>
                    <div style={{float:'left',width:'28%',marginLeft:'4%'}}>
                        <img src='images/middle-2.png' style={{width:'100%',height:'auto'}} alt='' />
                    </div>
                    <div style={{float:'left',width:'28%',marginLeft:'4%'}}>
                        <img src='images/middle-3.png' style={{width:'100%',height:'auto'}} alt='' />
                    </div>
                </div>
                <div style={{height:'70px',backgroundColor:'white',float:'left',width:'100%',position:'relative',top:'45px'}}>
                    <div style={{margin:'15px 0',float:'left',borderLeft:'8px solid #3fcccb',width:'100%'}}>
                        <a style={{fontSize:'20px',paddingLeft:'5%'}}>热门推荐</a>
                    </div>
                </div>
                {arr.map(val=>(
                    <div style={{float:'left',marginBottom:'10px'}}>
                    <img src='images/hot.png' style={{width:'100%'}} alt=''/>
                    </div>
                ))}
                

              
            </div>
        )
    }
}