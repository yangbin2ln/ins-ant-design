import * as React from 'react';
// import { WrappedHorizontalLoginForm } from './components/insform/HorizontalLoginForm';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

import { Switch, Route, BrowserRouter } from 'react-router-dom';
// import InsForm from '../components/ins/form/hoc/InsForm';
import { connect } from 'dva';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

// import emitter from './components/ins/listener/Events';

// class WrapWrappedHorizontalLoginForm extends WrappedHorizontalLoginForm {
//     render() {
//         const aaa = super.render();
//         return <div>111{aaa}{this.props.children}</div>;
//     }
// }
@connect(({ formaaa, formdemo }) => ({
    data: {...formaaa.step, ...formdemo},
  }))
export default class Index extends React.Component<any> {
    
    render() {
        const { data } = this.props;
        let InsForm = require('../components/ins/form/hoc/InsForm').default;
        const config = {
            columnSize: 3,
            fields: [
                {
                    name: 'userName',
                    text: '姓名',
                }, {
                    name: 'sex',
                    text: '性别'
                }
            ]
        };

        const insForm = InsForm.getInit(config);

        return (
            <div>
                <Layout>
                    <Header className="header">
                        <div className="logo" />
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['2']}
                            style={{ lineHeight: '64px' }}
                        >
                            <Menu.Item key="1">{data.payAccount}</Menu.Item>
                            <Menu.Item key="2">{data.text}</Menu.Item>
                            <Menu.Item key="3">nav 3</Menu.Item>
                        </Menu>
                    </Header>
                    <Content style={{ padding: '0 50px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Layout style={{ padding: '24px 0', background: '#fff' }}>
                            <Sider width={200} style={{ background: '#fff' }}>
                                <Menu

                                    mode="inline"
                                    defaultSelectedKeys={['1']}
                                    defaultOpenKeys={['sub1']}
                                    style={{ height: '100%' }}
                                >
                                    <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
                                        <Menu.Item key="1"><a href="#/form">form组件</a></Menu.Item>
                                        <Menu.Item key="2"><a href="#/test">test</a></Menu.Item>
                                        <Menu.Item key="3"><a href="#/form/001">404</a></Menu.Item>
                                        <Menu.Item key="4"><a href="#/model:1">模块1</a></Menu.Item>
                                    </SubMenu>
                                    <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
                                        <SubMenu key="sub22" title={<span><Icon type="laptop" />subnav 2</span>}>
                                            <Menu.Item key="52">option5</Menu.Item>
                                            <Menu.Item key="62">option6</Menu.Item>
                                            <Menu.Item key="72">option7</Menu.Item>
                                            <Menu.Item key="82">option8</Menu.Item>
                                        </SubMenu>
                                        <Menu.Item key="6">option6</Menu.Item>
                                        <Menu.Item key="7">option7</Menu.Item>
                                        <Menu.Item key="8">option8</Menu.Item>
                                    </SubMenu>
                                    <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
                                        <Menu.Item key="9">option9</Menu.Item>
                                        <Menu.Item key="10">option10</Menu.Item>
                                        <Menu.Item key="11">option11</Menu.Item>
                                        <Menu.Item key="12">option12</Menu.Item>
                                    </SubMenu>
                                </Menu>
                            </Sider>
                            <Content style={{ padding: '0 24px', minHeight: 280 }}>
                                <BrowserRouter basename="/#">
                                    <Switch>
                                        <Route path="/form" component={insForm.ReactCom} />
                                        <Route path="/test" render={() => {
                                            return (<div>test123</div>);
                                        }} />}
                                        <Route path="/model:id" render={this.routeMapping} />
                                        <Route render={() => {
                                                return (<div>404</div>);
                                            }} />}
                                </Switch>
                                </BrowserRouter>
                            </Content>
                        </Layout>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2018 Created by Ant UED
        </Footer>
                </Layout>
            </div>);
    }

    routeMapping(props) {
        const id = props.match.params.id;
        let Model;
        Model = require('../routes/form/BasicForm').default;
        if (id === 1) {
            Model = require('../routes/form/BasicForm').default;
        }
        return (<div>model: <Model /></div>);
    }
}