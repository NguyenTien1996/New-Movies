import React from 'react';
import{Layout} from 'antd';
const {Footer} = Layout;
const FooterPage = () => {
    return(
        <>
            <Footer>
                <p>CopyRight 2020 - Ant Design</p>
            </Footer>
        </>
    )
}
export default React.memo(FooterPage);