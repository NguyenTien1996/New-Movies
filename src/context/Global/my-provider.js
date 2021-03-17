import React from 'react';
import MyContext from './my-context';
//Tao provider de share du lieu Data 
class MyProvider extends React.Component{
    // co du lieu can chia se thi thao tac o day
    constructor(){
        super();
        this.state={
            cars:[
                {name:'BMW',price:1000,color:'white'},
                {name:'Toyota',price:500,color:'black'},
                {name:'Vinfast',price:800,color:'plink'},
            ]
        }
    }
    render(){
        return(
            <MyContext.Provider
                value={this.state.cars}
            >
                {this.props.children}
            </MyContext.Provider>
        )
    }
}
export default MyProvider;