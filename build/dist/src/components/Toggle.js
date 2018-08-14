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
var Toggle = /** @class */ (function (_super) {
    __extends(Toggle, _super);
    function Toggle(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { isToggleOn: true };
        return _this;
        // This binding is necessary to make `this` work in the callback
        // this.handleClick = this.handleClick.bind(this);
    }
    Toggle.prototype.handleClick = function () {
        this.setState(function (prevState) { return ({
            isToggleOn: !prevState.isToggleOn
        }); });
    };
    Toggle.prototype.render = function () {
        var _this = this;
        return (React.createElement("button", { onClick: function () { _this.handleClick(); } }, this.state.isToggleOn ? 'ON' : 'OFF'));
    };
    return Toggle;
}(React.Component));
export { Toggle };
//# sourceMappingURL=Toggle.js.map