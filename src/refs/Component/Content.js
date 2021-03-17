import React from 'react';

class Content extends React.PureComponent{
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        }
    }
     changeInput = (e) => {
         const val= e.target.value;
         this.setState({...this.state,text: val});
     }
    render() {
        return (
             <input type='text' onChange={this.changeInput}/>
        );
    }
}
export default Content;