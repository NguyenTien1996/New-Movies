import React from 'react';
import PropTypes from 'prop-types';

//khai niem: function component

const Button = (props) => {
    return(
        <>
            <button
            type={props.type}
            onClick={props.click}
            >
                {props.children}
            </button>
        </>
    );
}


//check type props
Button.propTypes = {
    //kieu du lieu cua props type laf string vaf bat buoc phai truyen vao khi su dung component
    // type: PropTypes.string.isRequired,
    click: PropTypes.func.isRequired,
    children: PropTypes.string.isRequired,
  };
  //gan gia tri mac dinh cho props
  Button.defaultProps={
      type:'button',
  }
export default Button;