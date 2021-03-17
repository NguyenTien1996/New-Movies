import React, { Component } from 'react';
import Content from './Component/Content';
import 'antd/dist/antd.css';yarn add axios
class App extends Component {
    constructor() {
        super();
        this.state={
            color:'green',
            show: true,
        }
    }
    changeColor=()=>{
        this.setState({...this.state,color:this.state.color === 'violet' ? 'green' : 'violet'});
    }

    showHideContent=()=>{
        this.setState({
            ...this.state,
            show: !this.state.show
        })
    }
    render() {
        return (
            <>
                <button onClick={this.changeColor}>
                    change color
                </button>
                <button onClick={this.showHideContent}>Show/hide</button>
                {this.state.show ? (<Content color={this.state.color}/>) : null}
            </>
        );
    }
}

export default App;