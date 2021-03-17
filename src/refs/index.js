import React from 'react';
import ContentInput from './Component/Content';
class AppRefs extends React.Component{
    constructor(props) {
        super(props);
        //tao ra1 refs de truy cap vao DOM note element khi render ra
        this.infoDom = React.createRef();
        this.infoInput = React.createRef();
    }
    showInfoDom = ()=> {
        console.log(this.infoDom.current);
    }
    getDataInput = () =>{
        const data = this.infoInput.current.state.text;
        console.log(data);
        alert(data)
    }
    render(){
        return(
            <>
                <h1 ref={this.infoDom} id="title" name="title">this is element</h1>
                <ContentInput ref={this.infoInput}/>
                <button onClick={this.showInfoDom}>
                    Lay thong tin the h1
                </button>
                <button onClick={this.getDataInput}>
                    Lay thong tin the h1
                </button>
                
            </>
        )
    }
}
export default AppRefs;