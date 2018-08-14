var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from 'react';
// import { Form, Input, InputNumber, Radio, Checkbox, Select, DatePicker, Switch, TreeSelect } from 'antd';
import { Form, Input, Row, Col } from 'antd';
import emitter from '../listener/Events';
// const RadioGroup = Radio.Group;
var InsForm = /** @class */ (function (_super) {
    __extends(InsForm, _super);
    function InsForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InsForm.prototype.componentDidMount = function () {
        var _this = this;
        this.props.getChild(this);
        emitter.on('getSelf', function (callBack) {
            callBack(_this);
        });
    };
    InsForm.prototype.getState = function () {
        console.log(this);
        return this.props.form.getFieldsValue();
    };
    InsForm.prototype.getForm = function () {
        return this.props.form;
    };
    InsForm.prototype.getColLayout = function (columnSize, span) {
        return {
            lg: span || (24 / columnSize),
            sm: 24
        };
    };
    InsForm.prototype.render = function () {
        var _this = this;
        // const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        var getFieldDecorator = this.props.form.getFieldDecorator;
        var FormItem = Form.Item;
        var formProps = __assign({}, InsForm.defaultFormProps, this.props);
        var formFields = [];
        for (var m = 0; m < formProps.fields.length; m++) {
            var field = __assign({}, InsForm.defaultFieldProps, formProps.fields[m]);
            formFields.push((React.createElement(Col, __assign({}, this.getColLayout(formProps.columnSize, field.span)),
                React.createElement(FormItem, { label: field.text }, getFieldDecorator(field.name, __assign({}, field))(field.component)))));
        }
        var form = (React.createElement(Form, null,
            React.createElement(Row, { gutter: formProps.gutter }, formFields),
            React.createElement("button", { onClick: function () { _this.getState(); } }, "\u7EC4\u4EF6\u5185\u90E8\u8F93\u51FA")));
        return form;
    };
    InsForm.defaultFormProps = {
        columnSize: 1,
        fields: [],
        gutter: { sm: 24 }
    };
    InsForm.defaultFieldProps = {
        name: null,
        text: null,
        component: React.createElement(Input, null)
    };
    return InsForm;
}(React.Component));
var WrappedInsForm = Form.create()(InsForm);
export default WrappedInsForm;
//# sourceMappingURL=InsForm.js.map