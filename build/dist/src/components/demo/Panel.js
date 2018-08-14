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
var Panel = /** @class */ (function (_super) {
    __extends(Panel, _super);
    function Panel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Panel.prototype.render = function () {
        var children = this.props.children;
        return (React.createElement("div", null,
            "12 ",
            React.Children.map(children, function (child) {
                var a = child.props.order + 10;
                return React.createElement("div", null,
                    "asdfasd ",
                    a);
            })));
    };
    return Panel;
}(React.Component));
export { Panel };
//# sourceMappingURL=Panel.js.map