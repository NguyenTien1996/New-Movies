import React from 'react';
import ViewData from './Component/viewData'
import ButtonColor from './Component/buttonColor';

class Color extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            color:'pink'
        }
    }
    setColor = (e) => {
        // console.log(e.target);
        const nameButton = e.target.name;
        this.setState({...this.state, color:nameButton},()=>{
            console.log('vua thay mau sac xong');
        })
    }

    render() {
        return (
            <>
                <ViewData color={this.state.color}/>
                <ButtonColor
                    click={this.setColor}
                    name="red"
                >Red</ButtonColor>
                <ButtonColor
                     click={this.setColor}
                     name="yellow"
                >Yellow</ButtonColor>
                <ButtonColor
                     click={this.setColor}
                     name="green"
                >Green</ButtonColor>
            </>
        );
    }
}
export default Color;
