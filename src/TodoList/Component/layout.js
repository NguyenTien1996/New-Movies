import React from 'react';
import {Layout, Row, Col,} from 'antd';
import HeaderPage from './partials/Header';
import FooterPage from './partials/Footer';
const {Content} = Layout;

class LayoutPage extends React.PureComponent {
  render() {
    return (
      <>
        <HeaderPage/>
        <Content>
          <Row style={{paddingTop: '20px', paddingBottom: '20px'}}>
            <Col span={12} offset={6}>
              {this.props.children}
            </Col>
          </Row>
        </Content>
        <FooterPage/>
      </>
    )
  }
}
export default LayoutPage;