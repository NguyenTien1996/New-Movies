import React from 'react';
import PropTypes from 'prop-types';
import * as actions from '../Actions/index';
import {useSelector, useDispatch} from 'react-redux';

const ButtonComponent = (props) => {
    const dispatch = useDispatch();
    const count = useSelector(state => state.counter.count);
    const clickButton = () => {
        if(props.name === 'increment'){
            dispatch(actions.incrementCounter(count));
        }else if(props.name === 'decrement'){
            dispatch(actions.decrementCounter(count));
        }
    }
   return (
     <>
        <button onClick={() => clickButton()}>
            {props.children}
        </button>
     </>
   );
}
ButtonComponent.propTypes = {
    children: PropTypes.string.isRequired,
}
export default React.memo(ButtonComponent);