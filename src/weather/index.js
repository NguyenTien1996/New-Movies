import React from 'react';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {Spin} from 'antd';
import configStore from './store/index';
import AppWeather from './pager/weather';


const {store, persistor} = configStore();

const AppIndex = (props) => {
   return (
     <Provider store={store}>
        <PersistGate
            loading={<Spin/>}
            persistor={persistor}
        />
        <AppWeather/>
     </Provider>
   );
}
export default AppIndex;