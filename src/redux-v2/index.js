import React from 'react';
import CoronaApp from './pager/corona';
import {Provider} from 'react-redux';
import configStore from './Store/index';

const { store } = configStore();

const CoronaVirus = () => {
   return (
     <Provider store={store}>
        <CoronaApp/>
     </Provider>
   );
}
export default CoronaVirus;