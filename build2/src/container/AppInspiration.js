import React, { Component } from 'react'
import { NavBar,Tabs,Icon} from 'antd-mobile';
const tabs2 = [
    { title: '推荐' },
    { title: '冬季'},
    { title: '宜家' },
    { title: '小清新' },
    { title: '小户型' },
    { title: '个性色彩' },
  ];
  
export default class AppInspiration extends Component {
    state = {
        data: [1,2,3,4,5,6],
        data1:['橙色律动','儿童房','翻滚吧，地毯君','角落里的遐想','不知道','别问我']
    }
    render() {
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'#3fcccb',color:'#fff',position:'fixed',top:'0',width:'100%',zIndex:'9'}}
                    rightContent={[
                        <Icon key="0" type="search" style={{ color:'#fff', marginRight: '16px' }} />,
                    ]}
                    >灵感</NavBar>
                    <div style={{width:'100%',height:'45px',float:'left'}}></div>
                    <Tabs tabs={tabs2}
                initialPage={0}
                tabBarActiveTextColor='#3fcccb'
                tabBarUnderlineStyle={{border:'1px solid #fff'}
            }
                // onChange={(tab, index) => { console.log('onChange', index, tab); }}
                // onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                <div>
                {/* <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}> */}
                    {this.state.data.map(val => (
                        <div key={val} style={{float:'left',width:'44%',marginLeft:'4%',marginBottom:'25px'}} >
                            <div>
                                <img src={`images/${val}.png`} alt='' style={{width:'100%',height:'auto',float:'left'}} />
                            </div>
                            <div style={{float:'left',height:'60px',width:'100%',backgroundColor:'#fff',fontSize:'16px',color:'#282828',position:'relative'}}>
                                <img src={`images/${val}h.png`} alt='' style={{width:'20%',height:'auto',float:'left',position:'absolute',top:'-20%',left:'0%'}} />
                                <p style={{position:'absolute',float:'left',left:'18%',top:'15px'}}>{this.state.data1[val-1]}</p>
                                <img src={`images/收藏.png`} alt='' style={{width:'10%',height:'auto',float:'left',position:'absolute',right:'10%',top:'15px'}} />
                            </div>
                        </div>
                    ))}
                </div>
                {/* <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}> */}
                <div>
                    {this.state.data.map(val => (
                        <div key={val} style={{float:'left',width:'44%',marginLeft:'4%',marginBottom:'25px'}} >
                            <div>
                                <img src={`images/${val}.png`} alt='' style={{width:'100%',height:'auto',float:'left'}} />
                            </div>
                            <div style={{float:'left',height:'60px',width:'100%',backgroundColor:'#fff',fontSize:'16px',color:'#282828',position:'relative'}}>
                                <img src={`images/${val}h.png`} alt='' style={{width:'20%',height:'auto',float:'left',position:'absolute',top:'-20%',left:'0%'}} />
                                <p style={{position:'absolute',float:'left',left:'18%',top:'15px'}}>{this.state.data1[val-1]}</p>
                                <img src={`images/收藏.png`} alt='' style={{width:'10%',height:'auto',float:'left',position:'absolute',right:'10%',top:'15px'}} />
                            </div>
                        </div>
                    ))}
                </div>
                {/* <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}> */}
                <div>
                    {this.state.data.map(val => (
                        <div key={val} style={{float:'left',width:'44%',marginLeft:'4%',marginBottom:'25px'}} >
                            <div>
                                <img src={`images/${val}.png`} alt='' style={{width:'100%',height:'auto',float:'left'}} />
                            </div>
                            <div style={{float:'left',height:'60px',width:'100%',backgroundColor:'#fff',fontSize:'16px',color:'#282828',position:'relative'}}>
                                <img src={`images/${val}h.png`} alt='' style={{width:'20%',height:'auto',float:'left',position:'absolute',top:'-20%',left:'0%'}} />
                                <p style={{position:'absolute',float:'left',left:'18%',top:'15px'}}>{this.state.data1[val-1]}</p>
                                <img src={`images/收藏.png`} alt='' style={{width:'10%',height:'auto',float:'left',position:'absolute',right:'10%',top:'15px'}} />
                            </div>
                        </div>
                    ))}
                </div>
                {/* <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}> */}
                <div>
                    {this.state.data.map(val => (
                        <div key={val} style={{float:'left',width:'44%',marginLeft:'4%',marginBottom:'25px'}} >
                            <div>
                                <img src={`images/${val}.png`} alt='' style={{width:'100%',height:'auto',float:'left'}} />
                            </div>
                            <div style={{float:'left',height:'60px',width:'100%',backgroundColor:'#fff',fontSize:'16px',color:'#282828',position:'relative'}}>
                                <img src={`images/${val}h.png`} alt='' style={{width:'20%',height:'auto',float:'left',position:'absolute',top:'-20%',left:'0%'}} />
                                <p style={{position:'absolute',float:'left',left:'18%',top:'15px'}}>{this.state.data1[val-1]}</p>
                                <img src={`images/收藏.png`} alt='' style={{width:'10%',height:'auto',float:'left',position:'absolute',right:'10%',top:'15px'}} />
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    {this.state.data.map(val => (
                        <div key={val} style={{float:'left',width:'44%',marginLeft:'4%',marginBottom:'25px'}} >
                            <div>
                                <img src={`images/${val}.png`} alt='' style={{width:'100%',height:'auto',float:'left'}} />
                            </div>
                            <div style={{float:'left',height:'60px',width:'100%',backgroundColor:'#fff',fontSize:'16px',color:'#282828',position:'relative'}}>
                                <img src={`images/${val}h.png`} alt='' style={{width:'20%',height:'auto',float:'left',position:'absolute',top:'-20%',left:'0%'}} />
                                <p style={{position:'absolute',float:'left',left:'18%',top:'15px'}}>{this.state.data1[val-1]}</p>
                                <img src={`images/收藏.png`} alt='' style={{width:'10%',height:'auto',float:'left',position:'absolute',right:'10%',top:'15px'}} />
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    {this.state.data.map(val => (
                        <div key={val} style={{float:'left',width:'44%',marginLeft:'4%',marginBottom:'25px'}} >
                            <div>
                                <img src={`images/${val}.png`} alt='' style={{width:'100%',height:'auto',float:'left'}} />
                            </div>
                            <div style={{float:'left',height:'60px',width:'100%',backgroundColor:'#fff',fontSize:'16px',color:'#282828',position:'relative'}}>
                                <img src={`images/${val}h.png`} alt='' style={{width:'20%',height:'auto',float:'left',position:'absolute',top:'-20%',left:'0%'}} />
                                <p style={{position:'absolute',float:'left',left:'18%',top:'15px'}}>{this.state.data1[val-1]}</p>
                                <img src={`images/收藏.png`} alt='' style={{width:'10%',height:'auto',float:'left',position:'absolute',right:'10%',top:'15px'}} />
                            </div>
                        </div>
                    ))}
                </div>
                </Tabs>
            </div>
        )
    }
}