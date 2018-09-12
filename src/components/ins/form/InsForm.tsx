import * as React from 'react';
// import { Form, Input, InputNumber, Radio, Checkbox, Select, DatePicker, Switch, TreeSelect } from 'antd';
import { Form, Input, Row, Col } from 'antd';
// import emitter from '../listener/Events';

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

export default class InsForm {
  public ReactCom: any;
  public view: any;
  private config: DefaultFormProps;

  static getInit(config: DefaultFormProps) {
    const upload = new InsForm(config);
    return upload;
  }
  constructor(config: DefaultFormProps) {
    this.config = config;

    this.getReactCom();
  }

  getForm() {
    return this.view.getForm();
  }

  getReactCom() {
    const me = this;
    class ReactCom extends React.Component<any, any> {

      static defaultFormProps: DefaultFormProps = {
        columnSize: 1,
        fields: [],
        gutter: { sm: 24 }
      };

      static defaultFieldProps: DefaultFieldProps = {
        name: null,
        text: null,
        component: <Input />
      };

      constructor(props: any) {
        super(props);
        me.view = this;
        console.log('constructor', props, this, me);
      }

      componentDidMount() {
        // console.log(this.props);
        // this.props.getChild(this);
        // emitter.on('getSelf', (callBack) => {
        //   callBack(this);
        // });
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
        const formProps = { ...ReactCom.defaultFormProps, ...me.config };

        let formFields = [];

        for (let m = 0; m < formProps.fields.length; m++) {
          let field = { ...ReactCom.defaultFieldProps, ...formProps.fields[m] };

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

            <button onClick={() => { this.getState(); }}>组件内部输出</button>
          </Form>
        );

        return form;
      }
    }
    const WrappedInsForm = Form.create()(ReactCom);
    this.ReactCom = WrappedInsForm;
    return ReactCom;
  }

}