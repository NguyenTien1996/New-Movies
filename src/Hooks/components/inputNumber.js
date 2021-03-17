import React from 'react';
import PropTypes from 'prop-types';

const InputNumber = (props) => {
   return (
     <>
        <input onChange={props.change} type={props.type} name={props.name}></input>
     </>
   );
}
InputNumber.propTypes={
    type:PropTypes.string,
    name:PropTypes.string,
    change:PropTypes.func
}
export default React.memo(InputNumber);