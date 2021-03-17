import React from 'react';
import PropTypes from 'prop-types';
const AddTodo = (props) => {
   return (
     <>
        <input  value={props.value} type={props.type} onChange={props.change}/>
        <button 
        type={props.typeButton} 
        onClick={() => props.add(props.value)}
        >{props.children}</button>
     </>
   );
}
AddTodo.propTypes = {
    value:PropTypes.string,
    type:PropTypes.string,
    change:PropTypes.func.isRequired,
    value:PropTypes.string,
    typeButton:PropTypes.string,
    add:PropTypes.func.isRequired,
    children:PropTypes.string
}
export default React.memo(AddTodo);