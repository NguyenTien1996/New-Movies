import React, {useEffect} from 'react';
import WelcomeComponent from '../Components/welcome';
import Result from '../Components/result';
import {getDataVirusCorona} from '../Action/index';
import {useDispatch} from 'react-redux';

const Corona = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const getData = () => {
            dispatch(getDataVirusCorona());
        }
        getData();
    },[])

   return (
     <>
        <WelcomeComponent/>
        <Result/>
     </>
   );
}
export default React.memo(Corona);