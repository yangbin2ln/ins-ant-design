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
import { Form, Icon, Input, Button } from 'antd';
import * as React from 'react';
var FormItem = Form.Item;
function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(function (field) { return fieldsError[field]; });
}
var HorizontalLoginForm = /** @class */ (function (_super) {
    __extends(HorizontalLoginForm, _super);
    function HorizontalLoginForm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleSubmit = function (e) {
            e.preventDefault();
            _this.props.form.validateFields(function (err, values) {
                if (!err) {
                    console.log('Received values of form: ', values);
                    console.log('this2', _this);
                }
            });
        };
        return _this;
    }
    HorizontalLoginForm.prototype.componentDidMount = function () {
        // To disabled submit button at the beginning.
        console.log('this1', this);
        this.props.form.validateFields();
    };
    HorizontalLoginForm.prototype.render = function () {
        var _a = this.props.form, getFieldDecorator = _a.getFieldDecorator, getFieldsError = _a.getFieldsError, getFieldError = _a.getFieldError, isFieldTouched = _a.isFieldTouched;
        // Only show error after a field is touched.
        var userNameError = isFieldTouched('userName') && getFieldError('userName');
        var passwordError = isFieldTouched('password') && getFieldError('password');
        var submitBtn = (React.createElement(Button, { onClick: this.handleSubmit, type: "primary", htmlType: "submit", disabled: hasErrors(getFieldsError()) }, "Log in"));
        // submitBtn.onSubmit = () => {
        //   alert(1);
        // };
        return (React.createElement(Form, { layout: "inline", onSubmit: this.handleSubmit },
            React.createElement(FormItem, { validateStatus: userNameError ? 'warning' : 'success', help: userNameError || '' }, getFieldDecorator('userName', {
                rules: [{ required: true, message: 'Please input your username!' }],
                initialValue: '默认值'
            })(React.createElement(Input, { prefix: React.createElement(Icon, { type: "user", style: { color: 'rgba(0,0,0,.25)' } }), placeholder: this.props.aaa }))),
            React.createElement(FormItem, { validateStatus: passwordError ? 'error' : 'success', help: passwordError || '' }, getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
            })(React.createElement(Input, { prefix: React.createElement(Icon, { type: "lock", style: { color: 'rgba(0,0,0,.25)' } }), type: "password", placeholder: "Password" }))),
            React.createElement(FormItem, null, submitBtn)));
    };
    return HorizontalLoginForm;
}(React.Component));
var WrappedHorizontalLoginForm = Form.create()(HorizontalLoginForm);
export { WrappedHorizontalLoginForm };
//# sourceMappingURL=HorizontalLoginForm.js.map