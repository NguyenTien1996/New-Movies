import React, { useState } from 'react';
import { Row, Col, Form, Input, Button, Spin } from 'antd';
import { useHistory } from 'react-router-dom';
import * as api from '../service/login';
import * as helper from '../helpers/common';



const LoginPage = () => {
    const history = useHistory();
    const [loadingLogin, setLoadingLogin] = useState(false);
    const [MessageError, setMessageError] = useState('');

    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };
    const onFinish = async (values) => {
        const use = values.username;
        const pass = values.password;
        setLoadingLogin(true);
        const data = await api.loginApi(use, pass);
        if (!helper.isEmptyObject(data)) {
            if (data.code === 200) {
                setLoadingLogin(false);
                setMessageError('');
                api.saveTokenLocalStorage(data.token_user);
                history.push("/home")
            } else { 
                setLoadingLogin(false);
                 setMessageError('account is invalid'); }
                 api.removeTokenLocalStorage();
        } else {
            setLoadingLogin(false);
            setMessageError('account is invalid');
        }
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <Row>
                <Col span={12} offset={6}>
                    <h1 style={{ textAlign: 'center', margin: '10px 0' }}>
                        login User
                    </h1>
                    {MessageError !== '' && (<h3 style={{ textAlign: 'center', margin: '5px 0px', color: 'red' }}>{MessageError}</h3>)}
                    <Col span={24}>
                        <Form
                            name="basic"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                        >
                            <Form.Item
                                label="Username"
                                name="username"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password />
                            </Form.Item>
                            <Form.Item {...tailLayout}>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                                {/* <Link to="/">Quay về trang chủ</Link> */}
                                {loadingLogin && <Spin style={{ marginLeft: '10px' }} />}
                            </Form.Item>
                        </Form>
                    </Col>
                </Col>
            </Row>
        </>
    )
}
export default React.memo(LoginPage);