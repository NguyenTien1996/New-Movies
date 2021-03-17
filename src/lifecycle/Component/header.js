import React from 'react';
class HeaderPage extends React.PureComponent{
    constructor(props) {
        super(props);
        this.state={
            number:0
        }
    }
    
    static getDerivedStateFromProps(props, state) {
        //cap nhat lai  state ban dau thong qua props cua component
        // console.log(`getDerivedStateFromProps : ${props} - ${state}`);
        console.log(props);
        console.log(state);
        if(props.count !== state.number){
            return ({number:props.count});
        }
        return null;
    }
    
    render(){
        console.log('Header component da dc render');
        return(
            <>
            <header>
                <h1>This is header - {this.state.number}</h1>
            </header>
            </>
        )
    }
}
export default HeaderPage;