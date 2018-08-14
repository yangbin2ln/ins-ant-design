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
import { Form, Row, Col, Input, Button, Icon } from 'antd';
import * as React from 'react';
var FormItem = Form.Item;
var AdvancedSearchForm = /** @class */ (function (_super) {
    __extends(AdvancedSearchForm, _super);
    function AdvancedSearchForm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            expand: false,
        };
        _this.handleSearch = function (e) {
            e.preventDefault();
            _this.props.form.validateFields(function (err, values) {
                console.log('Received values of form: ', values, err);
            });
        };
        _this.handleReset = function () {
            _this.props.form.resetFields();
        };
        _this.toggle = function () {
            var expand = _this.state.expand;
            _this.setState({ expand: !expand });
        };
        return _this;
    }
    AdvancedSearchForm.prototype.getItemLayout = function () {
        var formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        return formItemLayout;
    };
    // To generate mock Form.Item
    AdvancedSearchForm.prototype.getFields = function () {
        var count = this.state.expand ? 10 : 6;
        var getFieldDecorator = this.props.form.getFieldDecorator;
        var children = [];
        for (var i = 0; i < 10; i++) {
            children.push(React.createElement(Col, { key: i, xs: 24, sm: 5, style: { display: i < count ? 'block' : 'none' } },
                React.createElement(FormItem, __assign({}, this.getItemLayout(), { label: "Field " + i }), getFieldDecorator("field-" + i, {
                    rules: [{
                            required: true,
                            message: 'Input something!',
                        }],
                })(React.createElement(Input, { placeholder: "placeholder" })))));
        }
        return children;
    };
    AdvancedSearchForm.prototype.render = function () {
        return (React.createElement(Form, { className: "ant-advanced-search-form", onSubmit: this.handleSearch },
            React.createElement(Row, { gutter: 8 }, this.getFields()),
            React.createElement(Row, null,
                React.createElement(Col, { span: 24, style: { textAlign: 'right' } },
                    React.createElement(Button, { type: "primary", htmlType: "submit" }, "Search"),
                    React.createElement(Button, { style: { marginLeft: 8 }, onClick: this.handleReset }, "Clear"),
                    React.createElement("a", { style: { marginLeft: 8, fontSize: 12 }, onClick: this.toggle },
                        "Collapse ",
                        React.createElement(Icon, { type: this.state.expand ? 'up' : 'down' }))))));
    };
    return AdvancedSearchForm;
}(React.Component));
var WrappedAdvancedSearchForm = Form.create()(AdvancedSearchForm);
export { WrappedAdvancedSearchForm };
//# sourceMappingURL=AdvancedSearchForm.js.map