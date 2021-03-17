import React from 'react';
import Button from './Component/Button';
import Content from './Component/Content';

class AppIndex extends React.Component {
    constructor(){
        super();
        this.state = {
            theme:"dark",
            color:'text-dark',
        }
    }
changeTheme = () => {
    this.setState(state =>{
        let newTheme = state.theme === 'dark' ? 'light' : 'dark';
        let newColor = state.color === 'text-dark' ? 'text-light' : 'text-dark';
        return {theme:newTheme , color:newColor};
    });
}

    render() {
        return (
            <>
                <Button 
                click={this.changeTheme}
                >
                    change Theme and Color
                </Button>
                <Content 
                    theme={this.state.theme}
                    color={this.state.color}
                />
            </>
        );
    }
}

export default AppIndex;