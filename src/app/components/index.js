import React from 'react';
import HeaderPage from './partials/HeaderPage';
import NavbarPage from './partials/NavbarPage';
import FooterPage from './partials/FootrerPage';

class IndexPage extends React.Component {
  render() {
    return (
      <>
        <HeaderPage
          color="yellow"
          title="header page"
        />
        <NavbarPage/>
        {this.props.children}
        <FooterPage/>
      </>
    )
  }
}
export default IndexPage;