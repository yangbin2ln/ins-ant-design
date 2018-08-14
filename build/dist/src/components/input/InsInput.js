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
import { Input } from 'antd';
import * as React from 'react';
var Search = Input.Search;
var InsInput = /** @class */ (function (_super) {
    __extends(InsInput, _super);
    function InsInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InsInput.prototype.render = function () {
        var suffix = (React.createElement("span", null, "sadfasdf_suffix"));
        var inputStyle = {
            paddingRight: 100,
            fontSize: 50
        };
        return (React.createElement("div", null,
            React.createElement(Search, { style: inputStyle, className: 'aaa', placeholder: "input search text", onSearch: function (value) { return console.log(value); }, suffix: suffix })));
    };
    return InsInput;
}(React.Component));
export { InsInput };
//# sourceMappingURL=InsInput.js.map