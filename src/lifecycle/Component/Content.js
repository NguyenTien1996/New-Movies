import React, { Component } from 'react';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state={
            color:'pink'
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        // console.log(nextProps);
        // console.log(nextState);
        return nextProps.color !== nextState.color;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(prevProps);
        console.log(prevState);
        return 10;
    }   
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(snapshot);
        // return {color:prevProps.color};
        document.getElementById('content').style.backgroundColor = 'black';
    }
    componentDidMount() {
        console.log('componentDidMount da chay xong');
    }
    componentWillMount() {
        console.log('component vua bi xoa');
    }
    render() {
        return (
            <>
                <div id="content" style={{width:'300px',height:'300px',backgroundColor:this.props.color}}>
                    <h1>this is content</h1>
                </div>
            </>
        );
    }
}

export default Content;