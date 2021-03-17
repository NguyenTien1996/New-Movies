import React from 'react';
import HeaderPage from './Component/header'

class LifeCycle extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            count:10
        }
    }
    // static getDerivedStateFromProps(props, state) {
    //     //cap nhat lai  state ban dau thong qua props cua component
    //     console.log(`getDerivedStateFromProps of parents : ${props} - ${state}`);
    //     console.log(props);
    //     console.log(state);
    //     return null;
    // }
    clickButton = () =>{
        this.setState ({...this.state,count:this.state.count + 1})
    }
    render() {
        return (
            <>
                <p>{this.state.count}</p>
                <button onClick={this.clickButton}>click</button>
                <HeaderPage count={this.state.count}/>
            </>
        );
    }
}
export default LifeCycle;