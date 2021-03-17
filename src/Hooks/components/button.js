import React from 'react';
import PropTypes from 'prop-types';

const ButtonNumber = (props) => {
   return (
     <>
        <button
            type={props.type}
            onClick={() => props.giaipt()}
        >
            {props.children}
        </button>
     </>
   );
}
ButtonNumber.propTypes = {
    type:PropTypes.string,
    giaipt:PropTypes.func,
    children:PropTypes.string
}
export default ButtonNumber;