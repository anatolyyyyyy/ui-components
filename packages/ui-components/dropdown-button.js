(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
	(factory((global.DropdownButton = {}),global.React));
}(this, (function (exports,React) { 'use strict';

React = React && React.hasOwnProperty('default') ? React['default'] : React;

const __assign = Object.assign || function (target) {
    for (var source, i = 1; i < arguments.length; i++) {
        source = arguments[i];
        for (var prop in source) {
            if (Object.prototype.hasOwnProperty.call(source, prop)) {
                target[prop] = source[prop];
            }
        }
    }
    return target;
};

function __extends(d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function classNames() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var result = '';
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var arg = args_1[_a];
        if (!arg) {
            continue;
        }
        if (typeof arg === 'string' || typeof arg === 'number') {
            result = result + " " + arg;
            continue;
        }
        if (Array.isArray(arg)) {
            result = result + " " + classNames.apply(void 0, arg);
            continue;
        }
        if (typeof arg === 'object') {
            var keys = Object.keys(arg);
            for (var _b = 0, keys_1 = keys; _b < keys_1.length; _b++) {
                var key = keys_1[_b];
                if (arg[key]) {
                    result = result + " " + key;
                }
            }
        }
    }
    return result.trim();
}

var Badge = function (_a) {
    var children = _a.children, color = _a.color, content = _a.content;
    return (React.createElement("span", { className: classNames('badge', color) }, children || content));
};
Badge.defaultProps = {
    children: 0,
    color: '',
};

var lightStyle = { color: 'white' };
var Icon = function (_a) {
    var type = _a.type, className = _a.className, handleClick = _a.onClick, onDark = _a.onDark;
    return (React.createElement("i", { className: classNames('sg-icon', "sg-icon-" + type, (_b = {}, _b[className] = !!className, _b)), onClick: handleClick, style: onDark ? lightStyle : null }));
    var _b;
};
Icon.defaultProps = {
    className: '',
    onDark: false,
};

var Loader = function (_a) {
    var onDark = _a.onDark, large = _a.large, small = _a.small, centered = _a.centered;
    var size = 10;
    if (large) {
        size *= 2;
    }
    if (small) {
        size /= 2;
    }
    return (React.createElement("svg", { className: classNames('sg-loader', {
            'is-centered': centered,
            'is-large': large,
            'is-small': small,
            'loader-on-dark': onDark,
        }) },
        React.createElement("rect", { className: "logo-square bottom-left", width: size, height: size }),
        React.createElement("rect", { className: "logo-square bottom-middle", width: size, height: size }),
        React.createElement("rect", { className: "logo-square middle", width: size, height: size }),
        React.createElement("rect", { className: "logo-square top-middle", width: size, height: size }),
        React.createElement("rect", { className: "logo-square top-right", width: size, height: size }),
        React.createElement("rect", { className: "logo-square middle-left", width: size, height: size }),
        React.createElement("rect", { className: "logo-square middle-right", width: size, height: size })));
};
Loader.defaultProps = {
    centered: false,
    large: false,
    onDark: false,
    small: false,
};

var Button = function (props) {
    return (React.createElement(Buttonized, __assign({}, props),
        React.createElement("button", null, props.children)));
};
var Buttonized = function (_a) {
    var children = _a.children, type = _a.type, badge = _a.badge, disabled = _a.disabled, loading = _a.loading, small = _a.small, onDark = _a.onDark, onClick = _a.onClick, group = _a.group, active = _a.active, icon = _a.icon, id = _a.id;
    var hasBadge = !!badge || badge === 0;
    var hasIcon = !!icon;
    var content = [];
    if (hasBadge) {
        content.push(React.createElement(Badge, { key: 1 }, badge));
    }
    if (hasIcon) {
        content.push(React.createElement(Icon, { key: 2, type: icon }));
    }
    if (loading) {
        content.push(React.createElement(Loader, { key: 3, small: true, onDark: type === 'primary' }));
    }
    // the children of the element being buttonized
    if (children.props.children) {
        content.push(children.props.children);
    }
    return (React.cloneElement(children, {
        className: classNames('btn', "btn-" + type, {
            'btn-on-dark': onDark,
            'btn-small': small,
            'has-badge': hasBadge,
            'has-icon': hasIcon || loading,
            'is-active': active,
            'is-disabled': disabled,
            'is-loading': loading,
        }),
        id: id,
        onClick: onClick,
    }, content));
};
Button.defaultProps = {
    active: false,
    badge: null,
    children: '',
    disabled: false,
    group: false,
    icon: null,
    loading: false,
    onClick: function () { },
    onDark: false,
    small: false,
    type: 'primary',
};

var map = React.Children.map;
var DropdownButton = /** @class */ (function (_super) {
    __extends(DropdownButton, _super);
    function DropdownButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            active: false,
        };
        _this.handleClick = function () {
            var active = _this.state.active;
            _this.setState({ active: !active });
        };
        return _this;
    }
    DropdownButton.prototype.render = function () {
        var _a = this.props, badge = _a.badge, children = _a.children, disabled = _a.disabled, gear = _a.gear, group = _a.group, icon = _a.icon, label = _a.label, loading = _a.loading, onClick = _a.onClick, onDark = _a.onDark, small = _a.small, type = _a.type;
        var active = this.state.active;
        var hasBadge = !!badge || badge === 0;
        var hasIcon = !!icon;
        var buttonType = type;
        if (gear) {
            buttonType = 'secondary';
        }
        var links = map(children, function (link) {
            return React.cloneElement(link, {
                className: link.props.className + " dropdown-link",
            });
        });
        return (React.createElement("div", { className: "btn-list" },
            React.createElement("div", { className: classNames('btn', 'btn-dropdown', 'dropdown', "btn-" + buttonType, {
                    'btn-dropdown-gear': gear,
                    'btn-on-dark': onDark,
                    'btn-small': small,
                    'has-badge': hasBadge,
                    'has-icon': hasIcon || loading,
                    'is-active': active,
                    'is-disabled': disabled,
                    'is-loading': loading,
                }), onClick: this.handleClick },
                !gear && hasBadge && React.createElement(Badge, null, badge),
                !gear && hasIcon && React.createElement(Icon, { type: icon, onDark: type === 'primary' }),
                gear ? React.createElement(Icon, { type: "gear" }) : label,
                React.createElement("ul", { className: "dropdown-menu" }, links))));
    };
    DropdownButton.defaultProps = Button.defaultProps;
    return DropdownButton;
}(React.Component));

exports.default = DropdownButton;
exports.DropdownButton = DropdownButton;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=dropdown-button.js.map
