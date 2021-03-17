import React from 'react';
import SearchWeather from '../component/search'; 
import ResultWeather from '../component/result';

const AppWeather = (props) => {
   return (
     <>
        <SearchWeather/>
        <ResultWeather/>
     </>
   );
}
export default React.memo(AppWeather);