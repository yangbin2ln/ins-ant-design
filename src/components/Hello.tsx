import * as React from 'react';
import { DatePicker, Button } from 'antd';
import './Hello.css';
import { Toggle } from './Toggle';

interface HelloProps { compiler?: string; framework?: string; }

class Hello extends React.Component<HelloProps, {}> {
    test1() {
        console.log(1);
    }

    render() {
        return (
            <div>
                <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
                <Button type="primary">我是一个按钮哈哈</Button>
                <Button>我是一个普通按钮</Button>
                <DatePicker />

                <Toggle />
            </div>
        );
    }
}

export { HelloProps, Hello };
