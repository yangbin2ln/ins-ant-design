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
import * as React from 'react';
import { DatePicker, Button } from 'antd';
import './Hello.css';
import { Toggle } from './Toggle';
var Hello = /** @class */ (function (_super) {
    __extends(Hello, _super);
    function Hello() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hello.prototype.test1 = function () {
        console.log(1);
    };
    Hello.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("h1", null,
                "Hello from ",
                this.props.compiler,
                " and ",
                this.props.framework,
                "!"),
            React.createElement(Button, { type: "primary" }, "\u6211\u662F\u4E00\u4E2A\u6309\u94AE\u54C8\u54C8"),
            React.createElement(Button, null, "\u6211\u662F\u4E00\u4E2A\u666E\u901A\u6309\u94AE"),
            React.createElement(DatePicker, null),
            React.createElement(Toggle, null)));
    };
    return Hello;
}(React.Component));
export { Hello };
//# sourceMappingURL=Hello.js.map