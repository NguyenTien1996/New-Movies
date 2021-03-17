import React from 'react';
import ConfirmComponent from './component/confirm';
import CheckOutComponent from './component/checkout';
import * as helper from '../../helpers/authentication';
import * as reselect from '../login/reselect/login-reselect';
import {createStructuredSelector} from 'reselect';
import {useSelector} from 'react-redux';
import LayoutComponent from '../../components/layout';

const AppCheckout = () => {
    const {token} = useSelector(createStructuredSelector({
        token:reselect.getTokenLogin
    }));
    const chkLogin = helper.isLogin(token)

    return(
        <>
            <LayoutComponent>
                {chkLogin ? (<ConfirmComponent/>) : (<CheckOutComponent/>)}
            </LayoutComponent>
        </>
    )
}
export default React.memo(AppCheckout)