import React, { Component } from 'react'

export default class Todoinput extends Component {

    handleInput = (e)=>{
        if(e.keyCode === 13){
            if(e.target.value===''){
                alert('输入不能为空，请重新输入！');
            }
            else{
                this.props.addTodo(e.target.value);
                this.inp.value='';
            }
        }
    }
    render(){
        return (<div style={{backgroundColor:'black',height:40,width:'100%',paddingTop:10}}>
                    <label style={{
                        color:'gainsboro',
                        fontSize:20,
                        marginLeft:'30%',
                        marginRight:100

                    }} 
                    htmlFor="inp">ToDoList</label>
                    <input id='inp' onKeyDown={(e)=>this.handleInput(e)} ref = {inp => this.inp = inp} style={{borderRadius:5,height:20}} placeholder="添加ToDo" type="text"/>
                </div>)
    }
}

