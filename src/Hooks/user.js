import React from 'react';
import LayoutPage from './components/users/layout';
import ContentUser from './components/users/content';

const AddUsers = (props) => {
   return (
     <>
        <LayoutPage>
            <ContentUser/>
        </LayoutPage>
     </>
   );
}
export default AddUsers;