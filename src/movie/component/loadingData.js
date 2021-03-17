import React from 'react';
import {Spin} from 'antd';
import './loading.css';

const LoadingData = (props) => {
   return (
     <>
        <div className='loading' style={{textAlign:"center"}}>
            <Spin/>
        </div>
     </>
   );
}
export default React.memo(LoadingData);