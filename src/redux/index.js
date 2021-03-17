import React from 'react';
import ButtonComponent from './Components/button';
import Result from './Components/result';
import {Provider} from 'react-redux';
import store from './Store/index';

const AppRedux = (props) => {
   return (
     <Provider store={store}>
        <Result/>
        <ButtonComponent name='increment'>+</ButtonComponent>
        <ButtonComponent name='decrement'>-</ButtonComponent>
     </Provider>
   );
}
export default React.memo(AppRedux);