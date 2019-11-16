import React, { Component } from 'react'
import { NavBar,Carousel, WingBlank,SearchBar} from 'antd-mobile';

export default class AppMarket extends Component {
    state = {
        data: [1,2,3,4]
      }
    render() {
        var img=[1,2,3,4,5,6,7,8,9,10];
        var arr=[1,2,3,4,5,6,7,8,9,10];
        var data1=['桌','床','椅','几','柜','书架','沙发','家居饰品','户外家具','全部分类'];
        return (
            <div>
                 <NavBar
                    style={{backgroundColor:'#3fcccb',color:'#fff',position:'fixed',top:'0',width:'100%',zIndex:'9'}}
                    rightContent={[
                        // <Icon key="0" type="search" style={{ color:'#fff', marginRight: '16px' }} />,
                        <img src={`images/购物车.png`} key='0' style={{marginRight:'16px',width:'25px',height:'25px'}} alt='shopping' />
                    ]}
                    >商城</NavBar>
                {/* <div style={{position:'fixed',top:'45px',backgroundColor:'black',opacity:'40%',zIndex:'9',width:'100%',height:'80px'}}> */}
                <div className='tops'>
                    <div style={{float:'left',marginLeft:'3%',width:'5%'}}>
                        <img src='images/ss.png' style={{float:'left',width:'100%',height:'auto'}} alt='ss'/>
                    </div>
                    <div style={{float:'left',marginLeft:'5%',width:'75%'}}>
                        <SearchBar placeholder='输入关键字搜索' style={{backgroundColor:'#f5e9e2',borderRadius:'5px',border:'1px solid white',width:'100%',height:'35px'}}  />
                    </div>
                </div>
                <div style={{position:'relative',top:'45px'}}>
                <WingBlank style={{margin:'0'}} >
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
                            src={`images/mbanner.png`}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });
                            }}
                        />
                        </a>
                    ))}
                    </Carousel>
                </WingBlank>
                </div>
                <div style={{float:'left',width:'100%',backgroundColor:'white',padding:'0 5% 0 5%',position:'relative',top:'45px'}} >
                    {img.map(val=>(
                        <div key={val} style={{float:'left',width:'20%',padding:'15px 3% 7px 3%'}}>
                            <img src={`images/m${val}.png`} alt={val} style={{width:'100%',height:'auto'}} />
                            <p style={{margin:'5px 0 0 0',padding:'0',color:'#2f2f2f',textAlign:'center'}}>{data1[val-1]}</p>
                        </div>
                    ))}
                </div>
                {arr.map(val=>(
                    <div>
                        <div style={{float:'left',marginTop:'20px',marginLeft:'5%',width:'43%',position:'relative',top:'45px'}}>
                            <img src='images/b1.png' alt='b1' style={{width:'100%',height:'auto'}}/>
                            <p style={{color:'#686868',float:'left',margin:'0',width:'100%'}}>Top Art Studio 欧式风格精细…</p>
                            <a style={{float:'left'}}>¥39.95</a>
                        </div>  
                        <div style={{float:'left',marginTop:'20px',marginLeft:'5%',width:'43%',position:'relative',top:'45px'}}>
                            <img src='images/b2.png' alt='b2' style={{width:'100%',height:'auto'}}/>
                            <p style={{color:'#686868',float:'left',margin:'0',width:'100%'}}>顺顺工艺欧式风格塑料外框黑…</p>
                            <a style={{float:'left'}}>¥83.99</a>
                        </div> 
                        <div style={{float:'left',marginTop:'20px',marginLeft:'5%',width:'90%',position:'relative',top:'45px'}}>
                            <img src='images/b3.png' alt='b3' style={{width:'100%',height:'auto'}}/>
                            <p style={{color:'#686868',float:'left',margin:'0',width:'100%'}}>就是普通的双人床吧我觉得…</p>
                            <a style={{float:'left'}}>¥2333.33</a>
                        </div> 
                    </div>
                ))}
                
            </div>
        )
    }
}
