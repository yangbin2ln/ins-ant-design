import * as React from 'react';
// import { Form, Input, InputNumber, Radio, Checkbox, Select, DatePicker, Switch, TreeSelect } from 'antd';
import { Form, Input, Row, Col } from 'antd';
import emitter from '../listener/Events';

/* 
  表单项参数接口
*/
interface DefaultFieldProps {
  name: string;
  text: string;
  rules?: [{}];
  initialValue?: any;
  span?: number;
  component?: Object;
}

/* 
  表单参数接口
*/
interface DefaultFormProps {
  columnSize?: number;
  gutter?: any;
  fields: Array<DefaultFieldProps>;
  [propName: string]: any;
}

// const RadioGroup = Radio.Group;

class InsForm extends React.Component<any, any> {

  static defaultFormProps: DefaultFormProps = {
    columnSize: 1,
    fields: [],
    gutter: {sm: 24}
  };

  static defaultFieldProps: DefaultFieldProps = {
    name: null,
    text: null,
    component: <Input />
  };

  constructor(props: any) {
    super(props);
    console.log('constructor', props, this);
}

  componentDidMount() {
    this.props.getChild(this);
    emitter.on('getSelf', (callBack) => {
      callBack(this);
    });
  }
  
  getState() {
    console.log(this);
    return this.props.form.getFieldsValue();
  }

  getForm() {
    return this.props.form;
  }

  getColLayout(columnSize: number, span: number) {
    return {
      lg: span || (24 / columnSize),
      sm: 24
    };
  }

  render() {
    // const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
    const { getFieldDecorator } = this.props.form;
    const FormItem = Form.Item;
    const formProps = { ...InsForm.defaultFormProps, ...this.props };

    let formFields = [];

    for (let m = 0; m < formProps.fields.length; m++) {
      let field = { ...InsForm.defaultFieldProps, ...formProps.fields[m] };

      formFields.push((
        <Col {...this.getColLayout(formProps.columnSize, field.span)}>
          <FormItem label={field.text}>
            {getFieldDecorator(field.name, { ...field })(field.component)}
          </FormItem>
        </Col>
      ));

    }

    const form = (
      <Form>
        <Row gutter={...formProps.gutter}>
          {formFields}
        </Row>

        <button onClick={() => {this.getState(); }}>组件内部输出</button>
      </Form>
    );

    return form;
  }
}

const WrappedInsForm = Form.create()(InsForm);

export default WrappedInsForm;