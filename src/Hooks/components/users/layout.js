import React from 'react';
import HeaderPage from './Header';
import FooterPage from './Footer';
import {Layout, Row, Col} from 'antd';
import PropsTypes from 'prop-types';
const {Content} = Layout;

const LayoutPage = (props) => {
   return (
     <>
        <HeaderPage/>
        <Content>
            <Row>
                <Col span={12} offset={6}>
                {props.children}
                </Col>
            </Row>
        </Content>
        <FooterPage/>
     </>
   );
}
LayoutPage.propTypes = {
    children : PropsTypes.node,
}
export default React.memo(LayoutPage);