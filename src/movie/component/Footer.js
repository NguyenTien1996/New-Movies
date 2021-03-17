import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const FooterComponent = (props) => {
   return (
     <>
        <Footer style={{ textAlign: 'center' }}>ReactJS-2007 CopyRight</Footer>
     </>
   );
}
export default React.memo(FooterComponent);