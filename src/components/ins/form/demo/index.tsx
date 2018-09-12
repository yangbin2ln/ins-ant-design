import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { WrappedHorizontalLoginForm } from './components/insform/HorizontalLoginForm';
import InsForm from '../InsForm';
import { Input } from 'antd';
import { Radio } from 'antd';
// import emitter from './components/ins/listener/Events';

// class WrapWrappedHorizontalLoginForm extends WrappedHorizontalLoginForm {
    //     render() {
        //         const aaa = super.render();
        //         return <div>111{aaa}{this.props.children}</div>;
        //     }
        // }
        
const { TextArea } = Input;
const RadioGroup = Radio.Group;
const getChild = (childIns) => {
    this.childIns = childIns;

};

const config = {
    columnSize: 3,
    fields: [
        {
            name: 'userName',
            text: '姓名',
        }, {
            name: 'sex',
            text: '性别'
        }, {
            name: 'mark',
            text: '备注',
            component: <TextArea rows={4} />
        }, {
            name: 'sex2',
            text: '性别2',
            component: (
                <RadioGroup>
                    <Radio value={1}>A</Radio>
                    <Radio value={2}>B</Radio>
                    <Radio value={3}>C</Radio>
                    <Radio value={4}>D</Radio>
                </RadioGroup>
            )
        }
    ],
    getChild: getChild
};

const insForm = InsForm.getInit(config);

ReactDOM.render(
    (
    <div>
        <insForm.ReactCom />
        <button onClick={() => {console.log(this.childIns); }}>原始组件</button>
        <button onClick={() => {
        console.log(insForm.getForm());
        insForm.getForm().validateFieldsAndScroll((error, values) => {
        console.log(error);
        console.log(values);
      }); }}>包装后的HOC组件</button>
    </div>),
    document.getElementById('root') as HTMLElement
);