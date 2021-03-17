import React from 'react';
import {useSelector} from 'react-redux';

const Today = () => {
    const weather = useSelector(state => state.currentWeather.weather);
   return (
     <>
         
     </>
   );
}
export default React.memo(Today);