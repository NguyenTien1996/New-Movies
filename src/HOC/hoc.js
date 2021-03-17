//dinh nghĩa  Higher -oder Compoennt
//nola 1 ham: nhan vao tham so la1 component =>  tra ve 1 component moi
import React from 'react';

const HocsComponent = (MyComponent, data) => {
    //MyComponent la 1 component truyen vao nhu 1 tham so cua ham
    //ham nay bat buoc return ve 1 component moi (MyComponent)
    return class extends React.Component{
        constructor(props) {
            super(props);
            this.state = {
                data: data,
            }
        }
        render(){
            return (
                <MyComponent {...this.props} dataHoc={this.state.data}/>
            )
        }
    }
}
export default HocsComponent;
