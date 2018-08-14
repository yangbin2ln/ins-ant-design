import * as React from 'react';
// import { Form, Input, InputNumber, Radio, Checkbox, Select, DatePicker, Switch, TreeSelect } from 'antd';
import { Form } from 'antd';

interface DefaultProps {
    c: string;
}

// const RadioGroup = Radio.Group;

class InsForm extends React.Component<DefaultProps, any> {

    static defaultProps: DefaultProps = {
        c: '1'
    };

    render() {
        let form = React.createElement(Form, this.props);

        return form;
    }
}

export { InsForm };