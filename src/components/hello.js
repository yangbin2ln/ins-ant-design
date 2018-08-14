"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = require("react");
var antd_1 = require("antd");
require("./Hello.css");
var Hello = /** @class */ (function (_super) {
    __extends(Hello, _super);
    function Hello() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hello.prototype.render = function () {
        return (<div>
                <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
                <antd_1.Button type="primary">我是一个按钮哈哈</antd_1.Button>
                <antd_1.Button>我是一个普通按钮</antd_1.Button>
                <antd_1.DatePicker />
            </div>);
    };
    return Hello;
}(React.Component));
exports.Hello = Hello;
