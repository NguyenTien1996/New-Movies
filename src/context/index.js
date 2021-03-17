import React from 'react';
import MyProvider from './Global/my-provider';
import Header from './Component/Header';
import FooterPage from './Component/Footer';
import Cars from './Component/Cars';

class AppIndex extends React.Component {
    render() {
        return (
            <>
                <MyProvider>
                    <Header/>
                    <Cars/>
                    <FooterPage/>
                </MyProvider>
            </>
        );
    }
}

export default AppIndex;