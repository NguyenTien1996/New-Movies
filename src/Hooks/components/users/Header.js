import React from 'react';
import{Layout} from 'antd';
const {Header} = Layout;
const HeaderPage = () => {
    return(
        <>
            <Header>
                <h1
                    style={{color:'#fff',textAlign:'center'}}
                >List users</h1>
            </Header>
        </>
    )
}
export default React.memo(HeaderPage);