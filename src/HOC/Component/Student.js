import React from 'react';
import TableData from './table';

class Student extends React.PureComponent{
    render(){
        return(
            <TableData data={this.props.dataHoc}/>
        )
    }
}
export default Student;