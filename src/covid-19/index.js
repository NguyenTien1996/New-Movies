import React from 'react';
import LayoutPage from './Component/Layout';
import Global from './Component/Global';
import Country from './Component/Country';
import MyProvider from './Context/my-provider';

class Corona extends React.Component{
    render(){
        return(
            <MyProvider>
                <LayoutPage>
                    <Global/>
                    <Country/>
                </LayoutPage>
            </MyProvider>
        )
    }
}
export default Corona;