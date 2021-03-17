import React from 'react';
import { Layout } from 'antd';
import HeaderPage from './Header';
import Footer from './Footer';
import PropTypes from 'prop-types';
import './layout.css';
const { Content } = Layout;

const LayoutComponent = (props) => {
   return (
     <>
        <Layout  className="layout">
            <HeaderPage/>
            <Content style={{ padding: '0 50px' }}>
            <div className="site-layout-content">{props.children}</div>
            </Content>
            <Footer/>
        </Layout>
     </>
   );
}
LayoutComponent.propTypes = {
    children: PropTypes.node.isRequired,
}
export default React.memo(LayoutComponent);