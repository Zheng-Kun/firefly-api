(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~hqqfront"],{

/***/ "./node_modules/antd-mobile/lib/_util/class.js":
/*!*****************************************************!*\
  !*** ./node_modules/antd-mobile/lib/_util/class.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hasClass = hasClass;
exports.addClass = addClass;
exports.removeClass = removeClass;
function hasClass(node, className) {
    if (node.classList) {
        return node.classList.contains(className);
    }
    var originClass = node.className;
    return (' ' + originClass + ' ').indexOf(' ' + className + ' ') > -1;
}
function addClass(node, className) {
    if (node.classList) {
        node.classList.add(className);
    } else {
        if (!hasClass(node, className)) {
            node.className = node.className + ' ' + className;
        }
    }
}
function removeClass(node, className) {
    if (node.classList) {
        node.classList.remove(className);
    } else {
        if (hasClass(node, className)) {
            var originClass = node.className;
            node.className = (' ' + originClass + ' ').replace(' ' + className + ' ', '');
        }
    }
}

/***/ }),

/***/ "./node_modules/antd-mobile/lib/_util/exenv.js":
/*!*****************************************************!*\
  !*** ./node_modules/antd-mobile/lib/_util/exenv.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var canUseDOM = exports.canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
var IS_IOS = exports.IS_IOS = canUseDOM && /iphone|ipad|ipod/i.test(window.navigator.userAgent);

/***/ }),

/***/ "./node_modules/antd-mobile/lib/_util/getLocale.js":
/*!*********************************************************!*\
  !*** ./node_modules/antd-mobile/lib/_util/getLocale.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

exports.getComponentLocale = getComponentLocale;
exports.getLocaleCode = getLocaleCode;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function getComponentLocale(props, context, componentName, getDefaultLocale) {
    var locale = {};
    if (context && context.antLocale && context.antLocale[componentName]) {
        locale = context.antLocale[componentName];
    } else {
        var defaultLocale = getDefaultLocale();
        // TODO: make default lang of antd be English
        // https://github.com/ant-design/ant-design/issues/6334
        locale = defaultLocale['default'] || defaultLocale;
    }
    var result = (0, _extends3['default'])({}, locale);
    if (props.locale) {
        result = (0, _extends3['default'])({}, result, props.locale);
        if (props.locale.lang) {
            result.lang = (0, _extends3['default'])({}, locale.lang, props.locale.lang);
        }
    }
    return result;
}
function getLocaleCode(context) {
    var localeCode = context.antLocale && context.antLocale.locale;
    // Had use LocaleProvide but didn't set locale
    if (context.antLocale && context.antLocale.exist && !localeCode) {
        return 'zh-cn';
    }
    return localeCode;
}

/***/ }),

/***/ "./node_modules/antd-mobile/lib/button/index.js":
/*!******************************************************!*\
  !*** ./node_modules/antd-mobile/lib/button/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames2 = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames3 = _interopRequireDefault(_classnames2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var React = _interopRequireWildcard(_react);

var _rmcFeedback = __webpack_require__(/*! rmc-feedback */ "./node_modules/rmc-feedback/es/index.js");

var _rmcFeedback2 = _interopRequireDefault(_rmcFeedback);

var _icon = __webpack_require__(/*! ../icon */ "./node_modules/antd-mobile/lib/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
var isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
function isString(str) {
    return typeof str === 'string';
}
// Insert one space between two chinese characters automatically.
function insertSpace(child) {
    if (isString(child.type) && isTwoCNChar(child.props.children)) {
        return React.cloneElement(child, {}, child.props.children.split('').join(' '));
    }
    if (isString(child)) {
        if (isTwoCNChar(child)) {
            child = child.split('').join(' ');
        }
        return React.createElement(
            'span',
            null,
            child
        );
    }
    return child;
}

var Button = function (_React$Component) {
    (0, _inherits3['default'])(Button, _React$Component);

    function Button() {
        (0, _classCallCheck3['default'])(this, Button);
        return (0, _possibleConstructorReturn3['default'])(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
    }

    (0, _createClass3['default'])(Button, [{
        key: 'render',
        value: function render() {
            var _classnames;

            var _a = this.props,
                children = _a.children,
                className = _a.className,
                prefixCls = _a.prefixCls,
                type = _a.type,
                size = _a.size,
                inline = _a.inline,
                disabled = _a.disabled,
                icon = _a.icon,
                loading = _a.loading,
                activeStyle = _a.activeStyle,
                activeClassName = _a.activeClassName,
                onClick = _a.onClick,
                restProps = __rest(_a, ["children", "className", "prefixCls", "type", "size", "inline", "disabled", "icon", "loading", "activeStyle", "activeClassName", "onClick"]);
            var iconType = loading ? 'loading' : icon;
            var wrapCls = (0, _classnames3['default'])(prefixCls, className, (_classnames = {}, (0, _defineProperty3['default'])(_classnames, prefixCls + '-primary', type === 'primary'), (0, _defineProperty3['default'])(_classnames, prefixCls + '-ghost', type === 'ghost'), (0, _defineProperty3['default'])(_classnames, prefixCls + '-warning', type === 'warning'), (0, _defineProperty3['default'])(_classnames, prefixCls + '-small', size === 'small'), (0, _defineProperty3['default'])(_classnames, prefixCls + '-inline', inline), (0, _defineProperty3['default'])(_classnames, prefixCls + '-disabled', disabled), (0, _defineProperty3['default'])(_classnames, prefixCls + '-loading', loading), (0, _defineProperty3['default'])(_classnames, prefixCls + '-icon', !!iconType), _classnames));
            var kids = React.Children.map(children, insertSpace);
            var iconEl = void 0;
            if (typeof iconType === 'string') {
                iconEl = React.createElement(_icon2['default'], { 'aria-hidden': 'true', type: iconType, size: size === 'small' ? 'xxs' : 'md', className: prefixCls + '-icon' });
            } else if (iconType) {
                var rawCls = iconType.props && iconType.props.className;
                var cls = (0, _classnames3['default'])('am-icon', prefixCls + '-icon', size === 'small' ? 'am-icon-xxs' : 'am-icon-md');
                iconEl = React.cloneElement(iconType, {
                    className: rawCls ? rawCls + ' ' + cls : cls
                });
            }
            // use div, button native is buggy @yiminghe
            return React.createElement(
                _rmcFeedback2['default']
                // tslint:disable-next-line:jsx-no-multiline-js
                ,
                { activeClassName: activeClassName || (activeStyle ? prefixCls + '-active' : undefined), disabled: disabled, activeStyle: activeStyle },
                React.createElement(
                    'a',
                    (0, _extends3['default'])({ role: 'button', className: wrapCls }, restProps, { onClick: disabled ? undefined : onClick, 'aria-disabled': disabled }),
                    iconEl,
                    kids
                )
            );
        }
    }]);
    return Button;
}(React.Component);

Button.defaultProps = {
    prefixCls: 'am-button',
    size: 'large',
    inline: false,
    disabled: false,
    loading: false,
    activeStyle: {}
};
exports['default'] = Button;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd-mobile/lib/button/style/index.js":
/*!************************************************************!*\
  !*** ./node_modules/antd-mobile/lib/button/style/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/ */ "./node_modules/antd-mobile/lib/style/index.js");

__webpack_require__(/*! ../../icon/style/ */ "./node_modules/antd-mobile/lib/icon/style/index.js");

__webpack_require__(/*! ./index.less */ "./node_modules/antd-mobile/lib/button/style/index.less");

/***/ }),

/***/ "./node_modules/antd-mobile/lib/button/style/index.less":
/*!**************************************************************!*\
  !*** ./node_modules/antd-mobile/lib/button/style/index.less ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader/dist/cjs.js??ref--4-1!../../../../postcss-loader/src!../../../../less-loader/dist/cjs.js??postcss!./index.less */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/antd-mobile/lib/button/style/index.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../css-loader/dist/cjs.js??ref--4-1!../../../../postcss-loader/src!../../../../less-loader/dist/cjs.js??postcss!./index.less */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/antd-mobile/lib/button/style/index.less", function() {
		var newContent = __webpack_require__(/*! !../../../../css-loader/dist/cjs.js??ref--4-1!../../../../postcss-loader/src!../../../../less-loader/dist/cjs.js??postcss!./index.less */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/antd-mobile/lib/button/style/index.less");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/antd-mobile/lib/icon/index.js":
/*!****************************************************!*\
  !*** ./node_modules/antd-mobile/lib/icon/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var React = _interopRequireWildcard(_react);

var _loadSprite = __webpack_require__(/*! ./loadSprite */ "./node_modules/antd-mobile/lib/icon/loadSprite.js");

var _loadSprite2 = _interopRequireDefault(_loadSprite);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var Icon = function (_React$Component) {
    (0, _inherits3['default'])(Icon, _React$Component);

    function Icon() {
        (0, _classCallCheck3['default'])(this, Icon);
        return (0, _possibleConstructorReturn3['default'])(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
    }

    (0, _createClass3['default'])(Icon, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            (0, _loadSprite2['default'])();
        }
    }, {
        key: 'render',
        value: function render() {
            var _a = this.props,
                type = _a.type,
                className = _a.className,
                size = _a.size,
                restProps = __rest(_a, ["type", "className", "size"]);
            var cls = (0, _classnames2['default'])(className, 'am-icon', 'am-icon-' + type, 'am-icon-' + size);
            return React.createElement(
                'svg',
                (0, _extends3['default'])({ className: cls }, restProps),
                React.createElement('use', { xlinkHref: '#' + type })
            );
        }
    }]);
    return Icon;
}(React.Component);

exports['default'] = Icon;

Icon.defaultProps = {
    size: 'md'
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd-mobile/lib/icon/loadSprite.js":
/*!*********************************************************!*\
  !*** ./node_modules/antd-mobile/lib/icon/loadSprite.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/* tslint:disable:max-line-length */
// inspried by https://github.com/kisenka/svg-sprite-loader/blob/master/runtime/browser-sprite.js
// Much simplified, do make sure run this after document ready
var svgSprite = function svgSprite(contents) {
    return '\n  <svg\n    xmlns="http://www.w3.org/2000/svg"\n    xmlns:xlink="http://www.w3.org/1999/xlink"\n    id="__ANTD_MOBILE_SVG_SPRITE_NODE__"\n    style="display:none;overflow:hidden;width:0;height:0"\n  >\n    <defs>\n      ' + contents + '\n    </defs>\n  </svg>\n';
};
// both minified by https://github.com/svg/svgo
var icons = {
    check: '<svg viewBox="0 0 44 44"><path fill-rule="evenodd" d="M34.538 8L38 11.518 17.808 32 8 22.033l3.462-3.518 6.346 6.45z"/></svg>',
    'check-circle': '<svg viewBox="0 0 48 48"><path d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24zM13.1 23.2l-2.2 2.1 10 9.9L38.1 15l-2.2-2-15.2 17.8-7.6-7.6z" fill-rule="evenodd"/></svg>',
    'check-circle-o': '<svg viewBox="0 0 48 48"><g fill-rule="evenodd"><path d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24zm0-3c11.598 0 21-9.402 21-21S35.598 3 24 3 3 12.402 3 24s9.402 21 21 21z"/><path d="M12.2 23.2L10 25.3l10 9.9L37.2 15 35 13 19.8 30.8z"/></g></svg>',
    cross: '<svg viewBox="0 0 44 44"><path fill-rule="evenodd" d="M24.008 21.852l8.97-8.968L31.092 11l-8.97 8.968L13.157 11l-1.884 1.884 8.968 8.968-9.24 9.24 1.884 1.885 9.24-9.24 9.24 9.24 1.885-1.884-9.24-9.24z"/></svg>',
    'cross-circle': '<svg viewBox="0 0 48 48"><g fill-rule="evenodd"><path d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24zm0-3c11.598 0 21-9.402 21-21S35.598 3 24 3 3 12.402 3 24s9.402 21 21 21z"/><path d="M24.34 22.22l-7.775-7.775a1.5 1.5 0 1 0-2.12 2.12l7.773 7.775-7.774 7.775a1.5 1.5 0 1 0 2.12 2.12l7.775-7.773 7.774 7.774a1.5 1.5 0 1 0 2.12-2.12L26.46 24.34l7.774-7.774a1.5 1.5 0 1 0-2.12-2.12l-7.776 7.773z"/></g></svg>',
    'cross-circle-o': '<svg viewBox="0 0 48 48"><path d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24zm.353-25.77l-7.593-7.593c-.797-.8-1.538-.822-2.263-.207-.724.614-.56 1.617-.124 2.067l7.852 7.847-7.72 7.723c-.727.728-.56 1.646-.066 2.177.493.532 1.553.683 2.31-.174l7.588-7.584 7.644 7.623c.796.798 1.608.724 2.21.145.605-.58.72-1.442-.074-2.24l-7.657-7.67 7.545-7.52c.81-.697.9-1.76.297-2.34-.92-.885-1.85-.338-2.264.078l-7.685 7.667z" fill-rule="evenodd"/></svg>',
    // Todo: simplify direction to 2, use css transform
    left: '<svg viewBox="0 0 44 44"><defs><path id="a" d="M-129-845h24v24h-24z"/></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath><g clip-path="url(#b)"><defs><path id="c" d="M-903-949H947V996H-903z"/></defs></g><path d="M16.247 21.4L28.48 9.165l2.12 2.12-10.117 10.12L30.6 31.524l-2.12 2.12-12.233-12.232.007-.006z"/></svg>',
    right: '<svg viewBox="0 0 44 44"><defs><path id="a" d="M-129-845h24v24h-24z"/></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath><g clip-path="url(#b)"><defs><path id="c" d="M-903-949H947V996H-903z"/></defs></g><path d="M30.6 21.4L18.37 9.165l-2.12 2.12 10.117 10.12-10.118 10.118 2.12 2.12 12.234-12.232-.005-.006z"/></svg>',
    down: '<svg viewBox="0 0 44 44"><path d="M22.355 28.237l-11.483-10.9c-.607-.576-1.714-.396-2.48.41l.674-.71c-.763.802-.73 2.07-.282 2.496l11.37 10.793-.04.04 2.088 2.195L23.3 31.52l12.308-11.682c.447-.425.48-1.694-.282-2.496l.674.71c-.766-.806-1.873-.986-2.48-.41L22.355 28.237z" fill-rule="evenodd"/></svg>',
    up: '<svg viewBox="0 0 44 44"><path fill="none" d="M-1-1h46v46H-1z"/><defs><path id="a" d="M-129-845h24v24h-24z"/></defs><clipPath id="b"><use xlink:href="#a"/></clipPath><g clip-path="url(#b)"><defs><path id="c" d="M-903-949H947V996H-903z"/></defs></g><path d="M23.417 14.23L11.184 26.46l2.12 2.12 10.12-10.117 10.118 10.118 2.12-2.12L23.43 14.228l-.006.005z"/></svg>',
    loading: '<svg viewBox="0 -2 59.75 60.25"><path fill="#ccc" d="M29.69-.527C14.044-.527 1.36 12.158 1.36 27.806S14.043 56.14 29.69 56.14c15.65 0 28.334-12.686 28.334-28.334S45.34-.527 29.69-.527zm.185 53.75c-14.037 0-25.417-11.38-25.417-25.417S15.838 2.39 29.875 2.39s25.417 11.38 25.417 25.417-11.38 25.416-25.417 25.416z"/><path fill="none" stroke="#108ee9" stroke-width="3" stroke-linecap="round" stroke-miterlimit="10" d="M56.587 29.766c.37-7.438-1.658-14.7-6.393-19.552"/></svg>',
    search: '<svg viewBox="0 0 44 44"><path d="M32.98 29.255l8.915 8.293L39.603 40l-8.86-8.242a15.952 15.952 0 0 1-10.753 4.147C11.16 35.905 4 28.763 4 19.952 4 11.142 11.16 4 19.99 4s15.99 7.142 15.99 15.952c0 3.472-1.112 6.685-3 9.303zm.05-9.21c0 7.123-5.7 12.918-12.88 12.918-7.176 0-13.015-5.795-13.015-12.918 0-7.12 5.84-12.917 13.017-12.917 7.178 0 12.88 5.797 12.88 12.917z" fill-rule="evenodd"/></svg>',
    ellipsis: '<svg viewBox="0 0 44 44"><circle cx="21.888" cy="22" r="4.045"/><circle cx="5.913" cy="22" r="4.045"/><circle cx="37.863" cy="22" r="4.045"/></svg>',
    'ellipsis-circle': '<svg viewBox="0 0 44 44"><g fill-rule="evenodd"><path d="M22.13.11C10.05.11.255 9.902.255 21.983S10.05 43.86 22.13 43.86s21.875-9.795 21.875-21.876S34.21.11 22.13.11zm0 40.7c-10.396 0-18.825-8.43-18.825-18.826S11.735 3.16 22.13 3.16c10.396 0 18.825 8.428 18.825 18.824S32.525 40.81 22.13 40.81z"/><circle cx="21.888" cy="22.701" r="2.445"/><circle cx="12.23" cy="22.701" r="2.445"/><circle cx="31.546" cy="22.701" r="2.445"/></g></svg>',
    'exclamation-circle': '<svg viewBox="0 0 64 64"><path d="M59.58 40.89L41.193 9.11C39.135 5.382 35.723 3 31.387 3c-3.11 0-6.52 2.382-8.58 6.11L4.42 40.89c-2.788 4.635-3.126 8.81-1.225 12.22C5.015 56.208 7.572 58 13 58h36.773c5.428 0 9.21-1.792 11.03-4.89 1.9-3.41 1.565-7.583-1.224-12.22zm-2.452 11c-.635 1.694-3.802 2.443-7.354 2.443H13c-3.59 0-5.493-.75-6.13-2.444-1.71-2.41-1.374-5.263 0-8.557l18.387-31.777c2.116-3.168 4.394-4.89 6.13-4.89 2.96 0 5.238 1.722 7.354 4.89l18.387 31.777c1.374 3.294 1.713 6.146 0 8.556zm-25.74-33c-.405 0-1.227.835-1.227 2.443v15.89c0 1.608.823 2.444 1.227 2.444 1.628 0 2.452-.836 2.452-2.445v-15.89c0-1.607-.825-2.443-2.453-2.443zm0 23.22c-.405 0-1.227.79-1.227 1.223v2.445c0 .434.823 1.222 1.227 1.222 1.628 0 2.452-.788 2.452-1.222v-2.445c0-.434-.825-1.222-2.453-1.222z" fill-rule="evenodd"/></svg>',
    'info-circle': '<svg viewBox="0 0 44 44"><circle cx="13.828" cy="19.63" r="1.938"/><circle cx="21.767" cy="19.63" r="1.938"/><circle cx="29.767" cy="19.63" r="1.938"/><path d="M22.102 4.16c-9.918 0-17.958 7.147-17.958 15.962 0 4.935 2.522 9.345 6.48 12.273v5.667l.04.012a2.627 2.627 0 1 0 4.5 1.455h.002l5.026-3.54c.628.06 1.265.094 1.91.094 9.92 0 17.96-7.146 17.96-15.96C40.06 11.306 32.02 4.16 22.1 4.16zm-.04 29.902c-.902 0-1.78-.08-2.642-.207l-5.882 4.234c-.024.024-.055.04-.083.06l-.008.005a.51.51 0 0 1-.284.095.525.525 0 0 1-.525-.525l.005-6.375c-3.91-2.516-6.456-6.544-6.456-11.1 0-7.628 7.107-13.812 15.875-13.812s15.875 6.184 15.875 13.812-7.107 13.812-15.875 13.812z"/></svg>',
    'question-circle': '<svg viewBox="0 0 44 44"><g fill-rule="evenodd"><path d="M21.186 3c-10.853 0-19.36 8.506-19.36 19.358C1.827 32.494 10.334 41 21.187 41c10.133 0 18.64-8.506 18.64-18.642C39.827 11.506 31.32 3 21.187 3m15.64 19c0 8.823-7.178 16-16 16s-16-7.177-16-16 7.178-16 16-16 16 7.177 16 16z"/><path d="M22.827 31.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m4-15.48c0 .957-.203 1.822-.61 2.593-.427.792-1.117 1.612-2.073 2.457-.867.734-1.453 1.435-1.754 2.096-.302.7-.453 1.693-.453 2.98a.828.828 0 0 1-.823.854.828.828 0 0 1-.584-.22.877.877 0 0 1-.24-.635c0-1.305.168-2.38.506-3.227.336-.883.93-1.682 1.78-2.4 1.01-.883 1.71-1.692 2.1-2.428.336-.645.503-1.38.503-2.21-.02-.935-.3-1.7-.85-2.288-.655-.717-1.62-1.075-2.897-1.075-1.506 0-2.596.535-3.27 1.6-.46.754-.688 1.645-.688 2.677a.92.92 0 0 1-.266.66.747.747 0 0 1-.56.25.73.73 0 0 1-.584-.194c-.16-.164-.24-.393-.24-.69 0-1.82.585-3.272 1.755-4.357C18.645 11.486 19.928 11 21.434 11h.293c1.452 0 2.638.414 3.56 1.24 1.028.903 1.54 2.163 1.54 3.78z"/></g></svg>',
    voice: '<svg viewBox="0 0 38 33"><g fill-rule="evenodd"><path d="M17.838 28.8c-.564-.468-1.192-.983-1.836-1.496-4.244-3.385-5.294-3.67-6.006-3.67-.014 0-.027.005-.04.005-.015 0-.028-.006-.042-.006H3.562c-.734 0-.903-.203-.903-.928v-12.62c0-.49.057-.8.66-.8H9.1c.694 0 1.76-.28 6.4-3.63.83-.596 1.638-1.196 2.337-1.722V28.8zM19.682.19c-.463-.22-1.014-.158-1.417.157-.02.016-1.983 1.552-4.152 3.125C10.34 6.21 9.243 6.664 9.02 6.737H3.676c-.027 0-.053.003-.08.004H1.183c-.608 0-1.1.487-1.1 1.086V25.14c0 .598.492 1.084 1.1 1.084h8.71c.22.08 1.257.55 4.605 3.24 1.947 1.562 3.694 3.088 3.712 3.103.25.22.568.333.89.333.186 0 .373-.038.55-.116.48-.213.79-.684.79-1.204V1.38c0-.506-.294-.968-.758-1.19z" mask="url(#mask-2)"/><path d="M31.42 16.475c0-3.363-1.854-6.297-4.606-7.876-.125-.067-.42-.193-.625-.193-.613 0-1.11.488-1.11 1.09 0 .404.22.764.55.952 2.13 1.19 3.566 3.44 3.566 6.024 0 2.627-1.486 4.913-3.677 6.087-.32.19-.53.54-.53.935 0 .602.495 1.09 1.106 1.09.26.002.568-.15.568-.15 2.835-1.556 4.754-4.538 4.754-7.96" mask="url(#mask-4)"/><path d="M30.14 3.057c-.205-.122-.41-.22-.658-.22-.608 0-1.1.485-1.1 1.084 0 .434.26.78.627.978 4.042 2.323 6.76 6.636 6.76 11.578 0 4.938-2.715 9.248-6.754 11.572-.354.19-.66.55-.66.993 0 .6.494 1.085 1.102 1.085.243 0 .438-.092.65-.213 4.692-2.695 7.848-7.7 7.848-13.435 0-5.723-3.142-10.718-7.817-13.418" mask="url(#mask-6)"/></g></svg>',
    plus: '<svg viewBox="0 0 30 30"><path d="M14 14H0v2h14v14h2V16h14v-2H16V0h-2v14z" fill-rule="evenodd"/></svg>',
    minus: '<svg viewBox="0 0 30 2"><path d="M0 0h30v2H0z" fill-rule="evenodd"/></svg>',
    dislike: '<svg viewBox="0 0 72 72"><g fill="none" fill-rule="evenodd"><path d="M36 72c19.882 0 36-16.118 36-36S55.882 0 36 0 0 16.118 0 36s16.118 36 36 36zm0-2c18.778 0 34-15.222 34-34S54.778 2 36 2 2 17.222 2 36s15.222 34 34 34z" fill="#FFF"/><path fill="#FFF" d="M47 22h2v6h-2zm-24 0h2v6h-2z"/><path d="M21 51s4.6-7 15-7 15 7 15 7" stroke="#FFF" stroke-width="2"/></g></svg>',
    fail: '<svg viewBox="0 0 72 72"><g fill="none" fill-rule="evenodd"><path d="M36 72c19.882 0 36-16.118 36-36S55.882 0 36 0 0 16.118 0 36s16.118 36 36 36zm0-2c18.778 0 34-15.222 34-34S54.778 2 36 2 2 17.222 2 36s15.222 34 34 34z" fill="#FFF"/><path d="M22 22l28.304 28.304m-28.304 0L50.304 22" stroke="#FFF" stroke-width="2"/></g></svg>',
    success: '<svg viewBox="0 0 72 72"><g fill="none" fill-rule="evenodd"><path d="M36 72c19.882 0 36-16.118 36-36S55.882 0 36 0 0 16.118 0 36s16.118 36 36 36zm0-2c18.778 0 34-15.222 34-34S54.778 2 36 2 2 17.222 2 36s15.222 34 34 34z" fill="#FFF"/><path stroke="#FFF" stroke-width="2" d="M19 34.54l11.545 11.923L52.815 24"/></g></svg>'
};
var renderSvgSprite = function renderSvgSprite() {
    var symbols = Object.keys(icons).map(function (iconName) {
        var svgContent = icons[iconName].split('svg')[1];
        return '<symbol id=' + iconName + svgContent + 'symbol>';
    }).join('');
    return svgSprite(symbols);
};
var loadSprite = function loadSprite() {
    if (!document) {
        return;
    }
    var existing = document.getElementById('__ANTD_MOBILE_SVG_SPRITE_NODE__');
    var mountNode = document.body;
    if (!existing) {
        mountNode.insertAdjacentHTML('afterbegin', renderSvgSprite());
    }
};
exports['default'] = loadSprite;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd-mobile/lib/icon/style/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/antd-mobile/lib/icon/style/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./index.less */ "./node_modules/antd-mobile/lib/icon/style/index.less");

/***/ }),

/***/ "./node_modules/antd-mobile/lib/icon/style/index.less":
/*!************************************************************!*\
  !*** ./node_modules/antd-mobile/lib/icon/style/index.less ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader/dist/cjs.js??ref--4-1!../../../../postcss-loader/src!../../../../less-loader/dist/cjs.js??postcss!./index.less */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/antd-mobile/lib/icon/style/index.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../css-loader/dist/cjs.js??ref--4-1!../../../../postcss-loader/src!../../../../less-loader/dist/cjs.js??postcss!./index.less */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/antd-mobile/lib/icon/style/index.less", function() {
		var newContent = __webpack_require__(/*! !../../../../css-loader/dist/cjs.js??ref--4-1!../../../../postcss-loader/src!../../../../less-loader/dist/cjs.js??postcss!./index.less */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/antd-mobile/lib/icon/style/index.less");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/antd-mobile/lib/input-item/CustomInput.js":
/*!****************************************************************!*\
  !*** ./node_modules/antd-mobile/lib/input-item/CustomInput.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var React = _interopRequireWildcard(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var ReactDOM = _interopRequireWildcard(_reactDom);

var _class = __webpack_require__(/*! ../_util/class */ "./node_modules/antd-mobile/lib/_util/class.js");

var _CustomKeyboard = __webpack_require__(/*! ./CustomKeyboard */ "./node_modules/antd-mobile/lib/input-item/CustomKeyboard.js");

var _CustomKeyboard2 = _interopRequireDefault(_CustomKeyboard);

var _Portal = __webpack_require__(/*! ./Portal */ "./node_modules/antd-mobile/lib/input-item/Portal.js");

var _Portal2 = _interopRequireDefault(_Portal);

var _exenv = __webpack_require__(/*! ../_util/exenv */ "./node_modules/antd-mobile/lib/_util/exenv.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var customNumberKeyboard = null;
var IS_REACT_16 = !!ReactDOM.createPortal;
function getBodyScrollTop() {
    var el = document.scrollingElement || document.documentElement;
    return el && el.scrollTop || 0;
}
function setBodyScrollTop(scrollTop) {
    var el = document.scrollingElement || document.documentElement;
    el.scrollTop = scrollTop;
}

var NumberInput = function (_React$Component) {
    (0, _inherits3['default'])(NumberInput, _React$Component);

    function NumberInput(props) {
        (0, _classCallCheck3['default'])(this, NumberInput);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (NumberInput.__proto__ || Object.getPrototypeOf(NumberInput)).call(this, props));

        _this.onChange = function (value) {
            if (!('value' in _this.props)) {
                _this.setState({ value: value.target.value });
            }
            _this.props.onChange(value);
        };
        _this.onConfirm = function (value) {
            _this.props.onVirtualKeyboardConfirm(value);
        };
        _this.addBlurListener = function () {
            document.addEventListener('click', _this.doBlur, false);
        };
        _this.removeBlurListener = function () {
            document.removeEventListener('click', _this.doBlur, false);
        };
        _this.saveRef = function (el) {
            if (IS_REACT_16 && el) {
                customNumberKeyboard = el;
            }
        };
        _this.doBlur = function (ev) {
            var value = _this.state.value;

            if (ev.target !== _this.inputRef) {
                _this.onInputBlur(value);
            }
        };
        _this.unLinkInput = function () {
            if (customNumberKeyboard && customNumberKeyboard.antmKeyboard && customNumberKeyboard.linkedInput && customNumberKeyboard.linkedInput === _this) {
                customNumberKeyboard.linkedInput = null;
                if (_this.props.autoAdjustHeight) {
                    _this.getContainer().style.height = '0';
                }
                (0, _class.addClass)(customNumberKeyboard.antmKeyboard, _this.props.keyboardPrefixCls + '-wrapper-hide');
            }
            // for unmount
            _this.removeBlurListener();
        };
        _this.onInputBlur = function (value) {
            if (IS_REACT_16) {
                _this.keyBoard = null;
            }
            var focus = _this.state.focus;

            if (focus) {
                _this.setState({
                    focus: false
                });
                _this.props.onBlur(value);
                setTimeout(function () {
                    _this.unLinkInput();
                }, 50);
            }
        };
        _this.onInputFocus = function () {
            var value = _this.state.value;

            _this.props.onFocus(value);
            _this.setState({
                focus: true
            }, function () {
                if (customNumberKeyboard) {
                    customNumberKeyboard.linkedInput = _this;
                    if (customNumberKeyboard.antmKeyboard) {
                        if (_this.props.autoAdjustHeight) {
                            var keyBoardHeight = customNumberKeyboard.antmKeyboard.offsetHeight;
                            _this.getContainer().style.height = keyBoardHeight + 'px';
                            if (_this.inputRef) {
                                var _this$inputRef$getBou = _this.inputRef.getBoundingClientRect(),
                                    bottom = _this$inputRef$getBou.bottom;

                                var clientHeight = window.innerHeight;
                                // 计算输入框距离视窗的底部距离
                                var distance = clientHeight - bottom;
                                if (distance < keyBoardHeight) {
                                    setBodyScrollTop(getBodyScrollTop() + keyBoardHeight - distance);
                                }
                            }
                        }
                        (0, _class.removeClass)(customNumberKeyboard.antmKeyboard, _this.props.keyboardPrefixCls + '-wrapper-hide');
                    }
                    customNumberKeyboard.confirmDisabled = value === '';
                    if (customNumberKeyboard.confirmKeyboardItem) {
                        if (value === '') {
                            (0, _class.addClass)(customNumberKeyboard.confirmKeyboardItem, _this.props.keyboardPrefixCls + '-item-disabled');
                        } else {
                            (0, _class.removeClass)(customNumberKeyboard.confirmKeyboardItem, _this.props.keyboardPrefixCls + '-item-disabled');
                        }
                    }
                }
            });
        };
        _this.onKeyboardClick = function (KeyboardItemValue) {
            var maxLength = _this.props.maxLength;
            var value = _this.state.value;
            // tslint:disable-next-line:no-this-assignment

            var onChange = _this.onChange;

            var valueAfterChange = void 0;
            // 删除键
            if (KeyboardItemValue === 'delete') {
                valueAfterChange = value.substring(0, value.length - 1);
                onChange({ target: { value: valueAfterChange } });
                // 确认键
            } else if (KeyboardItemValue === 'confirm') {
                valueAfterChange = value;
                onChange({ target: { value: valueAfterChange } });
                _this.onInputBlur(value);
                _this.onConfirm(value);
                // 收起键
            } else if (KeyboardItemValue === 'hide') {
                valueAfterChange = value;
                _this.onInputBlur(valueAfterChange);
            } else {
                if (maxLength !== undefined && +maxLength >= 0 && (value + KeyboardItemValue).length > maxLength) {
                    valueAfterChange = (value + KeyboardItemValue).substr(0, maxLength);
                    onChange({ target: { value: valueAfterChange } });
                } else {
                    valueAfterChange = value + KeyboardItemValue;
                    onChange({ target: { value: valueAfterChange } });
                }
            }
            if (customNumberKeyboard) {
                customNumberKeyboard.confirmDisabled = valueAfterChange === '';
                if (customNumberKeyboard.confirmKeyboardItem) {
                    if (valueAfterChange === '') {
                        (0, _class.addClass)(customNumberKeyboard.confirmKeyboardItem, _this.props.keyboardPrefixCls + '-item-disabled');
                    } else {
                        (0, _class.removeClass)(customNumberKeyboard.confirmKeyboardItem, _this.props.keyboardPrefixCls + '-item-disabled');
                    }
                }
            }
        };
        _this.onFakeInputClick = function () {
            _this.focus();
        };
        _this.focus = function () {
            // this focus may invocked by users page button click, so this click may trigger blurEventListener at the same time
            _this.renderCustomKeyboard();
            _this.removeBlurListener();
            var focus = _this.state.focus;

            if (!focus) {
                _this.onInputFocus();
            }
            setTimeout(function () {
                _this.addBlurListener();
            }, 50);
        };
        _this.state = {
            focus: false,
            value: props.value || ''
        };
        return _this;
    }

    (0, _createClass3['default'])(NumberInput, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if ('value' in nextProps) {
                this.setState({
                    value: nextProps.value
                });
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            // focus:true unmount 不能触发 blur
            if (this.state.focus) {
                this.props.onBlur(this.state.value);
            }
            this.unLinkInput();
        }
    }, {
        key: 'getComponent',
        value: function getComponent() {
            var _props = this.props,
                confirmLabel = _props.confirmLabel,
                backspaceLabel = _props.backspaceLabel,
                cancelKeyboardLabel = _props.cancelKeyboardLabel,
                keyboardPrefixCls = _props.keyboardPrefixCls,
                moneyKeyboardWrapProps = _props.moneyKeyboardWrapProps,
                moneyKeyboardHeader = _props.moneyKeyboardHeader,
                disabledKeys = _props.disabledKeys;

            return React.createElement(_CustomKeyboard2['default'], { ref: this.saveRef, onClick: this.onKeyboardClick, prefixCls: keyboardPrefixCls, confirmLabel: confirmLabel, backspaceLabel: backspaceLabel, cancelKeyboardLabel: cancelKeyboardLabel, wrapProps: moneyKeyboardWrapProps, header: moneyKeyboardHeader, disabledKeys: disabledKeys });
        }
    }, {
        key: 'getContainer',
        value: function getContainer() {
            var keyboardPrefixCls = this.props.keyboardPrefixCls;

            var container = document.querySelector('#' + keyboardPrefixCls + '-container');
            if (!container) {
                container = document.createElement('div');
                container.setAttribute('id', keyboardPrefixCls + '-container');
                document.body.appendChild(container);
            }
            this.container = container;
            return this.container;
        }
    }, {
        key: 'renderCustomKeyboard',
        value: function renderCustomKeyboard() {
            var _this2 = this;

            if (IS_REACT_16) {
                this.keyBoard = React.createElement(
                    _Portal2['default'],
                    { getContainer: function getContainer() {
                            return _this2.getContainer();
                        } },
                    this.getComponent()
                );
            } else {
                customNumberKeyboard = ReactDOM.unstable_renderSubtreeIntoContainer(this, this.getComponent(), this.getContainer());
            }
        }
    }, {
        key: 'renderPortal',
        value: function renderPortal() {
            if (!IS_REACT_16 || !_exenv.canUseDOM) {
                return null;
            }
            return this.keyBoard;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _props2 = this.props,
                placeholder = _props2.placeholder,
                disabled = _props2.disabled,
                editable = _props2.editable,
                moneyKeyboardAlign = _props2.moneyKeyboardAlign;
            var _state = this.state,
                focus = _state.focus,
                value = _state.value;

            var preventKeyboard = disabled || !editable;
            var fakeInputCls = (0, _classnames2['default'])('fake-input', {
                focus: focus,
                'fake-input-disabled': disabled
            });
            var fakeInputContainerCls = (0, _classnames2['default'])('fake-input-container', {
                'fake-input-container-left': moneyKeyboardAlign === 'left'
            });
            return React.createElement(
                'div',
                { className: fakeInputContainerCls },
                value === '' &&
                // tslint:disable-next-line:jsx-no-multiline-js
                React.createElement(
                    'div',
                    { className: 'fake-input-placeholder' },
                    placeholder
                ),
                React.createElement(
                    'div',
                    { role: 'textbox', 'aria-label': value || placeholder, className: fakeInputCls, ref: function ref(el) {
                            return _this3.inputRef = el;
                        }, onClick: preventKeyboard ? function () {} : this.onFakeInputClick },
                    value
                ),
                this.renderPortal()
            );
        }
    }]);
    return NumberInput;
}(React.Component);

NumberInput.defaultProps = {
    onChange: function onChange() {},
    onFocus: function onFocus() {},
    onBlur: function onBlur() {},
    onVirtualKeyboardConfirm: function onVirtualKeyboardConfirm() {},
    placeholder: '',
    disabled: false,
    editable: true,
    prefixCls: 'am-input',
    keyboardPrefixCls: 'am-number-keyboard',
    autoAdjustHeight: false
};
exports['default'] = NumberInput;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd-mobile/lib/input-item/CustomKeyboard.js":
/*!*******************************************************************!*\
  !*** ./node_modules/antd-mobile/lib/input-item/CustomKeyboard.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.KeyboardItem = undefined;

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var React = _interopRequireWildcard(_react);

var _rmcFeedback = __webpack_require__(/*! rmc-feedback */ "./node_modules/rmc-feedback/es/index.js");

var _rmcFeedback2 = _interopRequireDefault(_rmcFeedback);

var _exenv = __webpack_require__(/*! ../_util/exenv */ "./node_modules/antd-mobile/lib/_util/exenv.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

/**
 * determines whether an array includes a certain value among its entries, returning true or false as appropriate.
 * @param {array} arr The array to search in
 * @param {any} item  The value to search for
 */
function includes(arr, item) {
    if (!arr || !arr.length || !item) {
        return false;
    }
    for (var i = 0, len = arr.length; i < len; i++) {
        if (arr[i] === item) {
            return true;
        }
    }
    return false;
}

var KeyboardItem = exports.KeyboardItem = function (_React$Component) {
    (0, _inherits3['default'])(KeyboardItem, _React$Component);

    function KeyboardItem() {
        (0, _classCallCheck3['default'])(this, KeyboardItem);
        return (0, _possibleConstructorReturn3['default'])(this, (KeyboardItem.__proto__ || Object.getPrototypeOf(KeyboardItem)).apply(this, arguments));
    }

    (0, _createClass3['default'])(KeyboardItem, [{
        key: 'render',
        value: function render() {
            var _a = this.props,
                prefixCls = _a.prefixCls,
                _onClick = _a.onClick,
                className = _a.className,
                disabled = _a.disabled,
                children = _a.children,
                tdRef = _a.tdRef,
                label = _a.label,
                iconOnly = _a.iconOnly,
                restProps = __rest(_a, ["prefixCls", "onClick", "className", "disabled", "children", "tdRef", "label", "iconOnly"]);
            var value = children;
            if (className === 'keyboard-delete') {
                value = 'delete';
            } else if (className === 'keyboard-hide') {
                value = 'hide';
            } else if (className === 'keyboard-confirm') {
                value = 'confirm';
            }
            var extraCls = (0, _defineProperty3['default'])({}, prefixCls + '-item-disabled', disabled);
            var wrapCls = (0, _classnames2['default'])(prefixCls + '-item', className, extraCls);
            return React.createElement(
                _rmcFeedback2['default'],
                { disabled: disabled, activeClassName: prefixCls + '-item-active' },
                React.createElement(
                    'td',
                    (0, _extends3['default'])({ ref: tdRef
                        // tslint:disable-next-line:jsx-no-multiline-js
                        , onClick: function onClick(e) {
                            _onClick(e, value);
                        }, className: wrapCls }, restProps),
                    children,
                    iconOnly && React.createElement(
                        'i',
                        { className: 'sr-only' },
                        label
                    )
                )
            );
        }
    }]);
    return KeyboardItem;
}(React.Component);

KeyboardItem.defaultProps = {
    prefixCls: 'am-number-keyboard',
    onClick: function onClick() {},
    disabled: false
};

var CustomKeyboard = function (_React$Component2) {
    (0, _inherits3['default'])(CustomKeyboard, _React$Component2);

    function CustomKeyboard() {
        (0, _classCallCheck3['default'])(this, CustomKeyboard);

        var _this2 = (0, _possibleConstructorReturn3['default'])(this, (CustomKeyboard.__proto__ || Object.getPrototypeOf(CustomKeyboard)).apply(this, arguments));

        _this2.onKeyboardClick = function (e) {
            var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

            e.nativeEvent.stopImmediatePropagation();
            if (_this2.props.disabledKeys && includes(_this2.props.disabledKeys, value)) {
                return null;
            }
            if (value === 'confirm' && _this2.confirmDisabled) {
                return null;
            } else {
                if (_this2.linkedInput) {
                    _this2.linkedInput.onKeyboardClick(value);
                }
            }
        };
        _this2.renderKeyboardItem = function (item, index) {
            var disabled = false;
            if (_this2.props.disabledKeys && includes(_this2.props.disabledKeys, item)) {
                disabled = true;
            }
            return React.createElement(
                KeyboardItem,
                { onClick: _this2.onKeyboardClick, key: 'item-' + item + '-' + index, disabled: disabled },
                item
            );
        };
        return _this2;
    }

    (0, _createClass3['default'])(CustomKeyboard, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _props = this.props,
                prefixCls = _props.prefixCls,
                confirmLabel = _props.confirmLabel,
                backspaceLabel = _props.backspaceLabel,
                cancelKeyboardLabel = _props.cancelKeyboardLabel,
                wrapProps = _props.wrapProps,
                header = _props.header;

            var wrapperCls = (0, _classnames2['default'])(prefixCls + '-wrapper', prefixCls + '-wrapper-hide');
            return React.createElement(
                'div',
                (0, _extends3['default'])({ className: wrapperCls, ref: function ref(el) {
                        return _this3.antmKeyboard = el;
                    } }, wrapProps),
                header && React.cloneElement(header, { onClick: this.onKeyboardClick }),
                React.createElement(
                    'table',
                    null,
                    React.createElement(
                        'tbody',
                        null,
                        React.createElement(
                            'tr',
                            null,
                            ['1', '2', '3'].map(function (item, index) {
                                return (
                                    // tslint:disable-next-line:jsx-no-multiline-js
                                    _this3.renderKeyboardItem(item, index)
                                );
                            }),
                            React.createElement(KeyboardItem, (0, _extends3['default'])({ className: 'keyboard-delete', rowSpan: 2, onClick: this.onKeyboardClick }, this.getAriaAttr(backspaceLabel)))
                        ),
                        React.createElement(
                            'tr',
                            null,
                            ['4', '5', '6'].map(function (item, index) {
                                return (
                                    // tslint:disable-next-line:jsx-no-multiline-js
                                    _this3.renderKeyboardItem(item, index)
                                );
                            })
                        ),
                        React.createElement(
                            'tr',
                            null,
                            ['7', '8', '9'].map(function (item, index) {
                                return (
                                    // tslint:disable-next-line:jsx-no-multiline-js
                                    _this3.renderKeyboardItem(item, index)
                                );
                            }),
                            React.createElement(
                                KeyboardItem,
                                { className: 'keyboard-confirm', rowSpan: 2, onClick: this.onKeyboardClick, tdRef: function tdRef(el) {
                                        return _this3.confirmKeyboardItem = el;
                                    } },
                                confirmLabel
                            )
                        ),
                        React.createElement(
                            'tr',
                            null,
                            ['.', '0'].map(function (item, index) {
                                return (
                                    // tslint:disable-next-line:jsx-no-multiline-js
                                    _this3.renderKeyboardItem(item, index)
                                );
                            }),
                            React.createElement(KeyboardItem, (0, _extends3['default'])({ className: 'keyboard-hide', onClick: this.onKeyboardClick }, this.getAriaAttr(cancelKeyboardLabel)))
                        )
                    )
                )
            );
        }
    }, {
        key: 'getAriaAttr',
        value: function getAriaAttr(label) {
            if (_exenv.IS_IOS) {
                return { label: label, iconOnly: true };
            } else {
                return { role: 'button', 'aria-label': label };
            }
        }
    }]);
    return CustomKeyboard;
}(React.Component);

CustomKeyboard.defaultProps = {
    prefixCls: 'am-number-keyboard',
    disabledKeys: null
};
exports['default'] = CustomKeyboard;

/***/ }),

/***/ "./node_modules/antd-mobile/lib/input-item/Input.js":
/*!**********************************************************!*\
  !*** ./node_modules/antd-mobile/lib/input-item/Input.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var Input = function (_React$Component) {
    (0, _inherits3["default"])(Input, _React$Component);

    function Input() {
        (0, _classCallCheck3["default"])(this, Input);

        var _this = (0, _possibleConstructorReturn3["default"])(this, (Input.__proto__ || Object.getPrototypeOf(Input)).apply(this, arguments));

        _this.onInputBlur = function (e) {
            var value = e.target.value;
            if (_this.props.onBlur) {
                _this.props.onBlur(value);
            }
        };
        _this.onInputFocus = function (e) {
            // here should have a value definition but none.
            var value = e.target.value;
            if (_this.props.onFocus) {
                _this.props.onFocus(value);
            }
        };
        _this.focus = function () {
            if (_this.inputRef) {
                _this.inputRef.focus();
            }
        };
        return _this;
    }

    (0, _createClass3["default"])(Input, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var _a = this.props,
                onBlur = _a.onBlur,
                onFocus = _a.onFocus,
                restProps = __rest(_a, ["onBlur", "onFocus"]);
            return React.createElement("input", (0, _extends3["default"])({ ref: function ref(el) {
                    return _this2.inputRef = el;
                }, onBlur: this.onInputBlur, onFocus: this.onInputFocus }, restProps));
        }
    }]);
    return Input;
}(React.Component);

exports["default"] = Input;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/antd-mobile/lib/input-item/Portal.js":
/*!***********************************************************!*\
  !*** ./node_modules/antd-mobile/lib/input-item/Portal.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var React = _interopRequireWildcard(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var ReactDOM = _interopRequireWildcard(_reactDom);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var createPortal = ReactDOM.createPortal;

var Portal = function (_React$Component) {
    (0, _inherits3['default'])(Portal, _React$Component);

    function Portal(props) {
        (0, _classCallCheck3['default'])(this, Portal);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).call(this, props));

        _this.container = _this.props.getContainer();
        return _this;
    }

    (0, _createClass3['default'])(Portal, [{
        key: 'render',
        value: function render() {
            if (this.props.children) {
                return createPortal(this.props.children, this.container);
            }
            return null;
        }
    }]);
    return Portal;
}(React.Component);

exports['default'] = Portal;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd-mobile/lib/input-item/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/antd-mobile/lib/input-item/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames3 = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames4 = _interopRequireDefault(_classnames3);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var PropTypes = _interopRequireWildcard(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var React = _interopRequireWildcard(_react);

var _rmcFeedback = __webpack_require__(/*! rmc-feedback */ "./node_modules/rmc-feedback/es/index.js");

var _rmcFeedback2 = _interopRequireDefault(_rmcFeedback);

var _getLocale = __webpack_require__(/*! ../_util/getLocale */ "./node_modules/antd-mobile/lib/_util/getLocale.js");

var _CustomInput = __webpack_require__(/*! ./CustomInput */ "./node_modules/antd-mobile/lib/input-item/CustomInput.js");

var _CustomInput2 = _interopRequireDefault(_CustomInput);

var _Input = __webpack_require__(/*! ./Input */ "./node_modules/antd-mobile/lib/input-item/Input.js");

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
/* tslint:disable:jsx-no-multiline-js */

function noop() {}
function normalizeValue(value) {
    if (typeof value === 'undefined' || value === null) {
        return '';
    }
    return value + '';
}

var InputItem = function (_React$Component) {
    (0, _inherits3['default'])(InputItem, _React$Component);

    function InputItem(props) {
        (0, _classCallCheck3['default'])(this, InputItem);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (InputItem.__proto__ || Object.getPrototypeOf(InputItem)).call(this, props));

        _this.onInputChange = function (e) {
            var el = e.target;
            var rawVal = el.value;

            var prePos = 0;
            try {
                // some input type do not support selection, see https://html.spec.whatwg.org/multipage/input.html#do-not-apply
                prePos = el.selectionEnd || 0;
            } catch (error) {
                console.warn('Get selection error:', error);
            }
            var _this$state$value = _this.state.value,
                preCtrlVal = _this$state$value === undefined ? '' : _this$state$value;
            var type = _this.props.type;

            var ctrlValue = rawVal;
            switch (type) {
                case 'bankCard':
                    ctrlValue = rawVal.replace(/\D/g, '').replace(/(....)(?=.)/g, '$1 ');
                    break;
                case 'phone':
                    ctrlValue = rawVal.replace(/\D/g, '').substring(0, 11);
                    var valueLen = ctrlValue.length;
                    if (valueLen > 3 && valueLen < 8) {
                        ctrlValue = ctrlValue.substr(0, 3) + ' ' + ctrlValue.substr(3);
                    } else if (valueLen >= 8) {
                        ctrlValue = ctrlValue.substr(0, 3) + ' ' + ctrlValue.substr(3, 4) + ' ' + ctrlValue.substr(7);
                    }
                    break;
                case 'number':
                    ctrlValue = rawVal.replace(/\D/g, '');
                    break;
                case 'text':
                case 'password':
                default:
                    break;
            }
            _this.handleOnChange(ctrlValue, ctrlValue !== rawVal, function () {
                switch (type) {
                    case 'bankCard':
                    case 'phone':
                    case 'number':
                        // controlled input type needs to adjust the position of the caret
                        try {
                            // some input type do not support selection, see https://html.spec.whatwg.org/multipage/input.html#do-not-apply
                            var pos = _this.calcPos(prePos, preCtrlVal, rawVal, ctrlValue, [' '], /\D/g);
                            if (type === 'phone' && (pos === 4 || pos === 9) || type === 'bankCard' && pos > 0 && pos % 5 === 0) {
                                pos -= 1;
                            }
                            el.selectionStart = el.selectionEnd = pos;
                        } catch (error) {
                            console.warn('Set selection error:', error);
                        }
                        break;
                    default:
                        break;
                }
            });
        };
        _this.handleOnChange = function (value) {
            var isMutated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var adjustPos = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : noop;
            var onChange = _this.props.onChange;

            if (!('value' in _this.props)) {
                _this.setState({ value: value });
            } else {
                _this.setState({ value: _this.props.value });
            }
            if (onChange) {
                if (isMutated) {
                    setTimeout(function () {
                        onChange(value);
                        adjustPos();
                    });
                } else {
                    onChange(value);
                    adjustPos();
                }
            } else {
                adjustPos();
            }
        };
        _this.onInputFocus = function (value) {
            if (_this.debounceTimeout) {
                clearTimeout(_this.debounceTimeout);
                _this.debounceTimeout = null;
            }
            _this.setState({
                focus: true
            });
            if (_this.props.onFocus) {
                _this.props.onFocus(value);
            }
        };
        _this.onInputBlur = function (value) {
            if (_this.inputRef) {
                // this.inputRef may be null if customKeyboard unmount
                _this.debounceTimeout = window.setTimeout(function () {
                    if (document.activeElement !== (_this.inputRef && _this.inputRef.inputRef)) {
                        _this.setState({
                            focus: false
                        });
                    }
                }, 200);
            }
            if (_this.props.onBlur) {
                // fix autoFocus item blur with flash
                setTimeout(function () {
                    // fix ios12 wechat browser click failure after input
                    if (document.body) {
                        document.body.scrollTop = document.body.scrollTop;
                    }
                }, 100);
                _this.props.onBlur(value);
            }
        };
        _this.clearInput = function () {
            if (_this.props.type !== 'password' && _this.props.updatePlaceholder) {
                _this.setState({
                    placeholder: _this.props.value
                });
            }
            _this.setState({
                value: ''
            });
            if (_this.props.onChange) {
                _this.props.onChange('');
            }
            _this.focus();
        };
        // this is instance method for user to use
        _this.focus = function () {
            if (_this.inputRef) {
                _this.inputRef.focus();
            }
        };
        // calculate the position of the caret
        _this.calcPos = function (prePos, preCtrlVal, rawVal, ctrlVal, placeholderChars, maskReg) {
            var editLength = rawVal.length - preCtrlVal.length;
            var isAddition = editLength > 0;
            var pos = prePos;
            if (isAddition) {
                var additionStr = rawVal.substr(pos - editLength, editLength);
                var ctrlCharCount = additionStr.replace(maskReg, '').length;
                pos -= editLength - ctrlCharCount;
                var placeholderCharCount = 0;
                while (ctrlCharCount > 0) {
                    if (placeholderChars.indexOf(ctrlVal.charAt(pos - ctrlCharCount + placeholderCharCount)) === -1) {
                        ctrlCharCount--;
                    } else {
                        placeholderCharCount++;
                    }
                }
                pos += placeholderCharCount;
            }
            return pos;
        };
        _this.state = {
            placeholder: props.placeholder,
            value: normalizeValue(props.value || props.defaultValue)
        };
        return _this;
    }

    (0, _createClass3['default'])(InputItem, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if ('placeholder' in nextProps && !nextProps.updatePlaceholder) {
                this.setState({
                    placeholder: nextProps.placeholder
                });
            }
            if ('value' in nextProps) {
                this.setState({
                    value: nextProps.value
                });
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.debounceTimeout) {
                window.clearTimeout(this.debounceTimeout);
                this.debounceTimeout = null;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _classnames,
                _classnames2,
                _this2 = this;

            var props = (0, _extends3['default'])({}, this.props);
            delete props.updatePlaceholder;

            var prefixCls = props.prefixCls,
                prefixListCls = props.prefixListCls,
                editable = props.editable,
                style = props.style,
                clear = props.clear,
                children = props.children,
                error = props.error,
                className = props.className,
                extra = props.extra,
                labelNumber = props.labelNumber,
                type = props.type,
                onExtraClick = props.onExtraClick,
                onErrorClick = props.onErrorClick,
                moneyKeyboardAlign = props.moneyKeyboardAlign,
                moneyKeyboardWrapProps = props.moneyKeyboardWrapProps,
                moneyKeyboardHeader = props.moneyKeyboardHeader,
                onVirtualKeyboardConfirm = props.onVirtualKeyboardConfirm,
                autoAdjustHeight = props.autoAdjustHeight,
                disabledKeys = props.disabledKeys,
                restProps = __rest(props, ["prefixCls", "prefixListCls", "editable", "style", "clear", "children", "error", "className", "extra", "labelNumber", "type", "onExtraClick", "onErrorClick", "moneyKeyboardAlign", "moneyKeyboardWrapProps", "moneyKeyboardHeader", "onVirtualKeyboardConfirm", "autoAdjustHeight", "disabledKeys"]);

            var name = restProps.name,
                disabled = restProps.disabled,
                maxLength = restProps.maxLength;
            var value = this.state.value;
            // tslint:disable-next-line:variable-name

            var _locale = (0, _getLocale.getComponentLocale)(this.props, this.context, 'InputItem', function () {
                return __webpack_require__(/*! ./locale/zh_CN */ "./node_modules/antd-mobile/lib/input-item/locale/zh_CN.js");
            });
            var confirmLabel = _locale.confirmLabel,
                backspaceLabel = _locale.backspaceLabel,
                cancelKeyboardLabel = _locale.cancelKeyboardLabel;
            var _state = this.state,
                focus = _state.focus,
                placeholder = _state.placeholder;

            var wrapCls = (0, _classnames4['default'])(prefixListCls + '-item', prefixCls + '-item', prefixListCls + '-item-middle', className, (_classnames = {}, (0, _defineProperty3['default'])(_classnames, prefixCls + '-disabled', disabled), (0, _defineProperty3['default'])(_classnames, prefixCls + '-error', error), (0, _defineProperty3['default'])(_classnames, prefixCls + '-focus', focus), (0, _defineProperty3['default'])(_classnames, prefixCls + '-android', focus), _classnames));
            var labelCls = (0, _classnames4['default'])(prefixCls + '-label', (_classnames2 = {}, (0, _defineProperty3['default'])(_classnames2, prefixCls + '-label-2', labelNumber === 2), (0, _defineProperty3['default'])(_classnames2, prefixCls + '-label-3', labelNumber === 3), (0, _defineProperty3['default'])(_classnames2, prefixCls + '-label-4', labelNumber === 4), (0, _defineProperty3['default'])(_classnames2, prefixCls + '-label-5', labelNumber === 5), (0, _defineProperty3['default'])(_classnames2, prefixCls + '-label-6', labelNumber === 6), (0, _defineProperty3['default'])(_classnames2, prefixCls + '-label-7', labelNumber === 7), _classnames2));
            var controlCls = prefixCls + '-control';
            var inputType = 'text';
            if (type === 'bankCard' || type === 'phone') {
                inputType = 'tel';
            } else if (type === 'password') {
                inputType = 'password';
            } else if (type === 'digit') {
                inputType = 'number';
            } else if (type !== 'text' && type !== 'number') {
                inputType = type;
            }
            var patternProps = void 0;
            if (type === 'number') {
                patternProps = {
                    pattern: '[0-9]*'
                };
            }
            var classNameProps = void 0;
            if (type === 'digit') {
                classNameProps = {
                    className: 'h5numInput'
                };
            }
            return React.createElement(
                'div',
                { className: wrapCls },
                React.createElement(
                    'div',
                    { className: prefixListCls + '-line' },
                    children ? React.createElement(
                        'div',
                        { className: labelCls },
                        children
                    ) : null,
                    React.createElement(
                        'div',
                        { className: controlCls },
                        type === 'money' ? React.createElement(_CustomInput2['default'], { value: normalizeValue(value), type: type, ref: function ref(el) {
                                return _this2.inputRef = el;
                            }, maxLength: maxLength, placeholder: placeholder, onChange: this.onInputChange, onFocus: this.onInputFocus, onBlur: this.onInputBlur, onVirtualKeyboardConfirm: onVirtualKeyboardConfirm, disabled: disabled, editable: editable, prefixCls: prefixCls, style: style, confirmLabel: confirmLabel, backspaceLabel: backspaceLabel, cancelKeyboardLabel: cancelKeyboardLabel, moneyKeyboardAlign: moneyKeyboardAlign, moneyKeyboardWrapProps: moneyKeyboardWrapProps, moneyKeyboardHeader: moneyKeyboardHeader, autoAdjustHeight: autoAdjustHeight, disabledKeys: disabledKeys }) : React.createElement(_Input2['default'], (0, _extends3['default'])({}, patternProps, restProps, classNameProps, { value: normalizeValue(value), defaultValue: undefined, ref: function ref(el) {
                                return _this2.inputRef = el;
                            }, style: style, type: inputType, maxLength: maxLength, name: name, placeholder: placeholder, onChange: this.onInputChange, onFocus: this.onInputFocus, onBlur: this.onInputBlur, readOnly: !editable, disabled: disabled }))
                    ),
                    clear && editable && !disabled && value && ('' + value).length > 0 ? React.createElement(
                        _rmcFeedback2['default'],
                        { activeClassName: prefixCls + '-clear-active' },
                        React.createElement('div', { className: prefixCls + '-clear', onClick: this.clearInput })
                    ) : null,
                    error ? React.createElement('div', { className: prefixCls + '-error-extra', onClick: onErrorClick }) : null,
                    extra !== '' ? React.createElement(
                        'div',
                        { className: prefixCls + '-extra', onClick: onExtraClick },
                        extra
                    ) : null
                )
            );
        }
    }]);
    return InputItem;
}(React.Component);

InputItem.defaultProps = {
    prefixCls: 'am-input',
    prefixListCls: 'am-list',
    type: 'text',
    editable: true,
    disabled: false,
    placeholder: '',
    clear: false,
    onChange: noop,
    onBlur: noop,
    onFocus: noop,
    extra: '',
    onExtraClick: noop,
    error: false,
    onErrorClick: noop,
    onVirtualKeyboardConfirm: noop,
    labelNumber: 5,
    updatePlaceholder: false,
    moneyKeyboardAlign: 'right',
    moneyKeyboardWrapProps: {},
    moneyKeyboardHeader: null,
    disabledKeys: null
};
InputItem.contextTypes = {
    antLocale: PropTypes.object
};
exports['default'] = InputItem;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd-mobile/lib/input-item/locale/zh_CN.js":
/*!*****************************************************************!*\
  !*** ./node_modules/antd-mobile/lib/input-item/locale/zh_CN.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = {
    confirmLabel: '确定',
    backspaceLabel: '退格',
    cancelKeyboardLabel: '收起键盘'
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd-mobile/lib/input-item/style/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/antd-mobile/lib/input-item/style/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/ */ "./node_modules/antd-mobile/lib/style/index.js");

__webpack_require__(/*! ../../list/style/ */ "./node_modules/antd-mobile/lib/list/style/index.js");

__webpack_require__(/*! ./index.less */ "./node_modules/antd-mobile/lib/input-item/style/index.less");

/***/ }),

/***/ "./node_modules/antd-mobile/lib/input-item/style/index.less":
/*!******************************************************************!*\
  !*** ./node_modules/antd-mobile/lib/input-item/style/index.less ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader/dist/cjs.js??ref--4-1!../../../../postcss-loader/src!../../../../less-loader/dist/cjs.js??postcss!./index.less */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/antd-mobile/lib/input-item/style/index.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../css-loader/dist/cjs.js??ref--4-1!../../../../postcss-loader/src!../../../../less-loader/dist/cjs.js??postcss!./index.less */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/antd-mobile/lib/input-item/style/index.less", function() {
		var newContent = __webpack_require__(/*! !../../../../css-loader/dist/cjs.js??ref--4-1!../../../../postcss-loader/src!../../../../less-loader/dist/cjs.js??postcss!./index.less */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/antd-mobile/lib/input-item/style/index.less");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/antd-mobile/lib/list/ListItem.js":
/*!*******************************************************!*\
  !*** ./node_modules/antd-mobile/lib/list/ListItem.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Brief = undefined;

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames5 = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames6 = _interopRequireDefault(_classnames5);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var React = _interopRequireWildcard(_react);

var _rmcFeedback = __webpack_require__(/*! rmc-feedback */ "./node_modules/rmc-feedback/es/index.js");

var _rmcFeedback2 = _interopRequireDefault(_rmcFeedback);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
/* tslint:disable:jsx-no-multiline-js */

var Brief = exports.Brief = function (_React$Component) {
    (0, _inherits3['default'])(Brief, _React$Component);

    function Brief() {
        (0, _classCallCheck3['default'])(this, Brief);
        return (0, _possibleConstructorReturn3['default'])(this, (Brief.__proto__ || Object.getPrototypeOf(Brief)).apply(this, arguments));
    }

    (0, _createClass3['default'])(Brief, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'am-list-brief', style: this.props.style },
                this.props.children
            );
        }
    }]);
    return Brief;
}(React.Component);

var ListItem = function (_React$Component2) {
    (0, _inherits3['default'])(ListItem, _React$Component2);

    function ListItem(props) {
        (0, _classCallCheck3['default'])(this, ListItem);

        var _this2 = (0, _possibleConstructorReturn3['default'])(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).call(this, props));

        _this2.onClick = function (ev) {
            var _this2$props = _this2.props,
                onClick = _this2$props.onClick,
                platform = _this2$props.platform;

            var isAndroid = platform === 'android';
            if (!!onClick && isAndroid) {
                if (_this2.debounceTimeout) {
                    clearTimeout(_this2.debounceTimeout);
                    _this2.debounceTimeout = null;
                }
                var Item = ev.currentTarget;
                var RippleWidth = Math.max(Item.offsetHeight, Item.offsetWidth);
                var ClientRect = ev.currentTarget.getBoundingClientRect();
                var pointX = ev.clientX - ClientRect.left - Item.offsetWidth / 2;
                var pointY = ev.clientY - ClientRect.top - Item.offsetWidth / 2;
                var coverRippleStyle = {
                    width: RippleWidth + 'px',
                    height: RippleWidth + 'px',
                    left: pointX + 'px',
                    top: pointY + 'px'
                };
                _this2.setState({
                    coverRippleStyle: coverRippleStyle,
                    RippleClicked: true
                }, function () {
                    _this2.debounceTimeout = setTimeout(function () {
                        _this2.setState({
                            coverRippleStyle: { display: 'none' },
                            RippleClicked: false
                        });
                    }, 1000);
                });
            }
            if (onClick) {
                onClick(ev);
            }
        };
        _this2.state = {
            coverRippleStyle: { display: 'none' },
            RippleClicked: false
        };
        return _this2;
    }

    (0, _createClass3['default'])(ListItem, [{
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.debounceTimeout) {
                clearTimeout(this.debounceTimeout);
                this.debounceTimeout = null;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _classnames,
                _classnames3,
                _classnames4,
                _this3 = this;

            var _a = this.props,
                prefixCls = _a.prefixCls,
                className = _a.className,
                activeStyle = _a.activeStyle,
                error = _a.error,
                align = _a.align,
                wrap = _a.wrap,
                disabled = _a.disabled,
                children = _a.children,
                multipleLine = _a.multipleLine,
                thumb = _a.thumb,
                extra = _a.extra,
                arrow = _a.arrow,
                onClick = _a.onClick,
                restProps = __rest(_a, ["prefixCls", "className", "activeStyle", "error", "align", "wrap", "disabled", "children", "multipleLine", "thumb", "extra", "arrow", "onClick"]);var platform = restProps.platform,
                otherProps = __rest(restProps, ["platform"]);var _state = this.state,
                coverRippleStyle = _state.coverRippleStyle,
                RippleClicked = _state.RippleClicked;

            var wrapCls = (0, _classnames6['default'])(prefixCls + '-item', className, (_classnames = {}, (0, _defineProperty3['default'])(_classnames, prefixCls + '-item-disabled', disabled), (0, _defineProperty3['default'])(_classnames, prefixCls + '-item-error', error), (0, _defineProperty3['default'])(_classnames, prefixCls + '-item-top', align === 'top'), (0, _defineProperty3['default'])(_classnames, prefixCls + '-item-middle', align === 'middle'), (0, _defineProperty3['default'])(_classnames, prefixCls + '-item-bottom', align === 'bottom'), _classnames));
            var rippleCls = (0, _classnames6['default'])(prefixCls + '-ripple', (0, _defineProperty3['default'])({}, prefixCls + '-ripple-animate', RippleClicked));
            var lineCls = (0, _classnames6['default'])(prefixCls + '-line', (_classnames3 = {}, (0, _defineProperty3['default'])(_classnames3, prefixCls + '-line-multiple', multipleLine), (0, _defineProperty3['default'])(_classnames3, prefixCls + '-line-wrap', wrap), _classnames3));
            var arrowCls = (0, _classnames6['default'])(prefixCls + '-arrow', (_classnames4 = {}, (0, _defineProperty3['default'])(_classnames4, prefixCls + '-arrow-horizontal', arrow === 'horizontal'), (0, _defineProperty3['default'])(_classnames4, prefixCls + '-arrow-vertical', arrow === 'down' || arrow === 'up'), (0, _defineProperty3['default'])(_classnames4, prefixCls + '-arrow-vertical-up', arrow === 'up'), _classnames4));
            var content = React.createElement(
                'div',
                (0, _extends3['default'])({}, otherProps, { onClick: function onClick(ev) {
                        _this3.onClick(ev);
                    }, className: wrapCls }),
                thumb ? React.createElement(
                    'div',
                    { className: prefixCls + '-thumb' },
                    typeof thumb === 'string' ? React.createElement('img', { src: thumb }) : thumb
                ) : null,
                React.createElement(
                    'div',
                    { className: lineCls },
                    children !== undefined && React.createElement(
                        'div',
                        { className: prefixCls + '-content' },
                        children
                    ),
                    extra !== undefined && React.createElement(
                        'div',
                        { className: prefixCls + '-extra' },
                        extra
                    ),
                    arrow && React.createElement('div', { className: arrowCls, 'aria-hidden': 'true' })
                ),
                React.createElement('div', { style: coverRippleStyle, className: rippleCls })
            );
            var touchProps = {};
            Object.keys(otherProps).forEach(function (key) {
                if (/onTouch/i.test(key)) {
                    touchProps[key] = otherProps[key];
                    delete otherProps[key];
                }
            });
            return React.createElement(
                _rmcFeedback2['default'],
                (0, _extends3['default'])({}, touchProps, { disabled: disabled || !onClick, activeStyle: activeStyle, activeClassName: prefixCls + '-item-active' }),
                content
            );
        }
    }]);
    return ListItem;
}(React.Component);

ListItem.defaultProps = {
    prefixCls: 'am-list',
    align: 'middle',
    error: false,
    multipleLine: false,
    wrap: false,
    platform: 'ios'
};
ListItem.Brief = Brief;
exports['default'] = ListItem;

/***/ }),

/***/ "./node_modules/antd-mobile/lib/list/index.js":
/*!****************************************************!*\
  !*** ./node_modules/antd-mobile/lib/list/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var React = _interopRequireWildcard(_react);

var _ListItem = __webpack_require__(/*! ./ListItem */ "./node_modules/antd-mobile/lib/list/ListItem.js");

var _ListItem2 = _interopRequireDefault(_ListItem);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
/* tslint:disable:jsx-no-multiline-js */

var List = function (_React$Component) {
    (0, _inherits3['default'])(List, _React$Component);

    function List() {
        (0, _classCallCheck3['default'])(this, List);
        return (0, _possibleConstructorReturn3['default'])(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
    }

    (0, _createClass3['default'])(List, [{
        key: 'render',
        value: function render() {
            var _a = this.props,
                prefixCls = _a.prefixCls,
                children = _a.children,
                className = _a.className,
                style = _a.style,
                renderHeader = _a.renderHeader,
                renderFooter = _a.renderFooter,
                restProps = __rest(_a, ["prefixCls", "children", "className", "style", "renderHeader", "renderFooter"]);
            var wrapCls = (0, _classnames2['default'])(prefixCls, className);
            return React.createElement(
                'div',
                (0, _extends3['default'])({ className: wrapCls, style: style }, restProps),
                renderHeader ? React.createElement(
                    'div',
                    { className: prefixCls + '-header' },
                    typeof renderHeader === 'function' ? renderHeader() : renderHeader
                ) : null,
                children ? React.createElement(
                    'div',
                    { className: prefixCls + '-body' },
                    children
                ) : null,
                renderFooter ? React.createElement(
                    'div',
                    { className: prefixCls + '-footer' },
                    typeof renderFooter === 'function' ? renderFooter() : renderFooter
                ) : null
            );
        }
    }]);
    return List;
}(React.Component);

exports['default'] = List;

List.Item = _ListItem2['default'];
List.defaultProps = {
    prefixCls: 'am-list'
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd-mobile/lib/list/style/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/antd-mobile/lib/list/style/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/ */ "./node_modules/antd-mobile/lib/style/index.js");

__webpack_require__(/*! ./index.less */ "./node_modules/antd-mobile/lib/list/style/index.less");

/***/ }),

/***/ "./node_modules/antd-mobile/lib/list/style/index.less":
/*!************************************************************!*\
  !*** ./node_modules/antd-mobile/lib/list/style/index.less ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader/dist/cjs.js??ref--4-1!../../../../postcss-loader/src!../../../../less-loader/dist/cjs.js??postcss!./index.less */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/antd-mobile/lib/list/style/index.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../css-loader/dist/cjs.js??ref--4-1!../../../../postcss-loader/src!../../../../less-loader/dist/cjs.js??postcss!./index.less */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/antd-mobile/lib/list/style/index.less", function() {
		var newContent = __webpack_require__(/*! !../../../../css-loader/dist/cjs.js??ref--4-1!../../../../postcss-loader/src!../../../../less-loader/dist/cjs.js??postcss!./index.less */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/antd-mobile/lib/list/style/index.less");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/antd-mobile/lib/style/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/antd-mobile/lib/style/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! normalize.css/normalize.css */ "./node_modules/normalize.css/normalize.css");

__webpack_require__(/*! ./index.less */ "./node_modules/antd-mobile/lib/style/index.less");

/***/ }),

/***/ "./node_modules/antd-mobile/lib/style/index.less":
/*!*******************************************************!*\
  !*** ./node_modules/antd-mobile/lib/style/index.less ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../css-loader/dist/cjs.js??ref--4-1!../../../postcss-loader/src!../../../less-loader/dist/cjs.js??postcss!./index.less */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/antd-mobile/lib/style/index.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../css-loader/dist/cjs.js??ref--4-1!../../../postcss-loader/src!../../../less-loader/dist/cjs.js??postcss!./index.less */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/antd-mobile/lib/style/index.less", function() {
		var newContent = __webpack_require__(/*! !../../../css-loader/dist/cjs.js??ref--4-1!../../../postcss-loader/src!../../../less-loader/dist/cjs.js??postcss!./index.less */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/antd-mobile/lib/style/index.less");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/antd-mobile/lib/toast/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/antd-mobile/lib/toast/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classnames2 = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames3 = _interopRequireDefault(_classnames2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var React = _interopRequireWildcard(_react);

var _rmcNotification = __webpack_require__(/*! rmc-notification */ "./node_modules/rmc-notification/es/index.js");

var _rmcNotification2 = _interopRequireDefault(_rmcNotification);

var _icon = __webpack_require__(/*! ../icon */ "./node_modules/antd-mobile/lib/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var SHORT = 3;
var _config = {
    duration: SHORT,
    mask: true
};
var messageInstance = void 0;
var prefixCls = 'am-toast';
function getMessageInstance(mask, callback) {
    var _classnames;

    if (messageInstance) {
        messageInstance.destroy();
        messageInstance = null;
    }
    _rmcNotification2['default'].newInstance({
        prefixCls: prefixCls,
        style: {},
        transitionName: 'am-fade',
        className: (0, _classnames3['default'])((_classnames = {}, (0, _defineProperty3['default'])(_classnames, prefixCls + '-mask', mask), (0, _defineProperty3['default'])(_classnames, prefixCls + '-nomask', !mask), _classnames))
    }, function (notification) {
        return callback && callback(notification);
    });
}
function notice(content, type) {
    var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _config.duration;
    var _onClose = arguments[3];
    var mask = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _config.mask;

    var iconTypes = {
        info: '',
        success: 'success',
        fail: 'fail',
        offline: 'dislike',
        loading: 'loading'
    };
    var iconType = iconTypes[type];
    getMessageInstance(mask, function (notification) {
        messageInstance = notification;
        notification.notice({
            duration: duration,
            style: {},
            content: !!iconType ? React.createElement(
                'div',
                { className: prefixCls + '-text ' + prefixCls + '-text-icon', role: 'alert', 'aria-live': 'assertive' },
                React.createElement(_icon2['default'], { type: iconType, size: 'lg' }),
                React.createElement(
                    'div',
                    { className: prefixCls + '-text-info' },
                    content
                )
            ) : React.createElement(
                'div',
                { className: prefixCls + '-text', role: 'alert', 'aria-live': 'assertive' },
                React.createElement(
                    'div',
                    null,
                    content
                )
            ),
            closable: true,
            onClose: function onClose() {
                if (_onClose) {
                    _onClose();
                }
                notification.destroy();
                notification = null;
                messageInstance = null;
            }
        });
    });
}
exports['default'] = {
    SHORT: SHORT,
    LONG: 8,
    show: function show(content, duration, mask) {
        return notice(content, 'info', duration, function () {}, mask);
    },
    info: function info(content, duration, onClose, mask) {
        return notice(content, 'info', duration, onClose, mask);
    },
    success: function success(content, duration, onClose, mask) {
        return notice(content, 'success', duration, onClose, mask);
    },
    fail: function fail(content, duration, onClose, mask) {
        return notice(content, 'fail', duration, onClose, mask);
    },
    offline: function offline(content, duration, onClose, mask) {
        return notice(content, 'offline', duration, onClose, mask);
    },
    loading: function loading(content, duration, onClose, mask) {
        return notice(content, 'loading', duration, onClose, mask);
    },
    hide: function hide() {
        if (messageInstance) {
            messageInstance.destroy();
            messageInstance = null;
        }
    },
    config: function config() {
        var conf = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var _conf$duration = conf.duration,
            duration = _conf$duration === undefined ? SHORT : _conf$duration,
            mask = conf.mask;

        _config.duration = duration;
        if (mask === false) {
            _config.mask = false;
        }
    }
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd-mobile/lib/toast/style/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/antd-mobile/lib/toast/style/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/ */ "./node_modules/antd-mobile/lib/style/index.js");

__webpack_require__(/*! ../../icon/style/ */ "./node_modules/antd-mobile/lib/icon/style/index.js");

__webpack_require__(/*! ./index.less */ "./node_modules/antd-mobile/lib/toast/style/index.less");

/***/ }),

/***/ "./node_modules/antd-mobile/lib/toast/style/index.less":
/*!*************************************************************!*\
  !*** ./node_modules/antd-mobile/lib/toast/style/index.less ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader/dist/cjs.js??ref--4-1!../../../../postcss-loader/src!../../../../less-loader/dist/cjs.js??postcss!./index.less */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/antd-mobile/lib/toast/style/index.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../css-loader/dist/cjs.js??ref--4-1!../../../../postcss-loader/src!../../../../less-loader/dist/cjs.js??postcss!./index.less */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/antd-mobile/lib/toast/style/index.less", function() {
		var newContent = __webpack_require__(/*! !../../../../css-loader/dist/cjs.js??ref--4-1!../../../../postcss-loader/src!../../../../less-loader/dist/cjs.js??postcss!./index.less */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/antd-mobile/lib/toast/style/index.less");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/antd-mobile/lib/button/style/index.less":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--4-1!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js??postcss!./node_modules/antd-mobile/lib/button/style/index.less ***!
  \************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".am-button {\n  display: block;\n  outline: 0 none;\n  -webkit-appearance: none;\n  box-sizing: border-box;\n  padding: 0;\n  text-align: center;\n  font-size: 18px;\n  height: 47px;\n  line-height: 47px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  word-break: break-word;\n  white-space: nowrap;\n  color: #000;\n  background-color: #fff;\n  border: 1PX solid #ddd;\n  border-radius: 5px;\n}\n@media (min-resolution: 2dppx) {\n  html:not([data-scale]) .am-button {\n    position: relative;\n    border: none;\n  }\n  html:not([data-scale]) .am-button::before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 200%;\n    height: 200%;\n    border: 1PX solid #ddd;\n    border-radius: 10px;\n    transform-origin: 0 0;\n    transform: scale(0.5);\n    box-sizing: border-box;\n    pointer-events: none;\n  }\n}\n.am-button-borderfix:before {\n  transform: scale(0.49) !important;\n}\n.am-button.am-button-active {\n  background-color: #ddd;\n}\n.am-button.am-button-disabled {\n  color: rgba(0, 0, 0, 0.3);\n  opacity: 0.6;\n}\n.am-button-primary {\n  color: #fff;\n  background-color: #108ee9;\n  border: 1PX solid #108ee9;\n  border-radius: 5px;\n}\n@media (min-resolution: 2dppx) {\n  html:not([data-scale]) .am-button-primary {\n    position: relative;\n    border: none;\n  }\n  html:not([data-scale]) .am-button-primary::before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 200%;\n    height: 200%;\n    border: 1PX solid #108ee9;\n    border-radius: 10px;\n    transform-origin: 0 0;\n    transform: scale(0.5);\n    box-sizing: border-box;\n    pointer-events: none;\n  }\n}\n.am-button-primary.am-button-active {\n  color: rgba(255, 255, 255, 0.3);\n  background-color: #0e80d2;\n}\n.am-button-primary.am-button-disabled {\n  color: rgba(255, 255, 255, 0.6);\n  opacity: 0.4;\n}\n.am-button-ghost {\n  color: #108ee9;\n  background-color: transparent;\n  border: 1PX solid #108ee9;\n  border-radius: 5px;\n}\n@media (min-resolution: 2dppx) {\n  html:not([data-scale]) .am-button-ghost {\n    position: relative;\n    border: none;\n  }\n  html:not([data-scale]) .am-button-ghost::before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 200%;\n    height: 200%;\n    border: 1PX solid #108ee9;\n    border-radius: 10px;\n    transform-origin: 0 0;\n    transform: scale(0.5);\n    box-sizing: border-box;\n    pointer-events: none;\n  }\n}\n.am-button-ghost.am-button-active {\n  color: rgba(16, 142, 233, 0.6);\n  background-color: transparent;\n  border: 1PX solid rgba(16, 142, 233, 0.6);\n  border-radius: 5px;\n}\n@media (min-resolution: 2dppx) {\n  html:not([data-scale]) .am-button-ghost.am-button-active {\n    position: relative;\n    border: none;\n  }\n  html:not([data-scale]) .am-button-ghost.am-button-active::before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 200%;\n    height: 200%;\n    border: 1PX solid rgba(16, 142, 233, 0.6);\n    border-radius: 10px;\n    transform-origin: 0 0;\n    transform: scale(0.5);\n    box-sizing: border-box;\n    pointer-events: none;\n  }\n}\n.am-button-ghost.am-button-disabled {\n  color: rgba(0, 0, 0, 0.1);\n  border: 1PX solid rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  opacity: 1;\n}\n@media (min-resolution: 2dppx) {\n  html:not([data-scale]) .am-button-ghost.am-button-disabled {\n    position: relative;\n    border: none;\n  }\n  html:not([data-scale]) .am-button-ghost.am-button-disabled::before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 200%;\n    height: 200%;\n    border: 1PX solid rgba(0, 0, 0, 0.1);\n    border-radius: 10px;\n    transform-origin: 0 0;\n    transform: scale(0.5);\n    box-sizing: border-box;\n    pointer-events: none;\n  }\n}\n.am-button-warning {\n  color: #fff;\n  background-color: #e94f4f;\n}\n.am-button-warning.am-button-active {\n  color: rgba(255, 255, 255, 0.3);\n  background-color: #d24747;\n}\n.am-button-warning.am-button-disabled {\n  color: rgba(255, 255, 255, 0.6);\n  opacity: 0.4;\n}\n.am-button-inline {\n  display: inline-block;\n  padding: 0 15px;\n}\n.am-button-inline.am-button-icon {\n  display: inline-flex;\n}\n.am-button-small {\n  font-size: 13px;\n  height: 30px;\n  line-height: 30px;\n  padding: 0 15px;\n}\n.am-button-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.am-button > .am-button-icon {\n  margin-right: 0.5em;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/antd-mobile/lib/icon/style/index.less":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--4-1!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js??postcss!./node_modules/antd-mobile/lib/icon/style/index.less ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".am-icon {\n  fill: currentColor;\n  background-size: cover;\n  width: 22px;\n  height: 22px;\n}\n.am-icon-xxs {\n  width: 15px;\n  height: 15px;\n}\n.am-icon-xs {\n  width: 18px;\n  height: 18px;\n}\n.am-icon-sm {\n  width: 21px;\n  height: 21px;\n}\n.am-icon-md {\n  width: 22px;\n  height: 22px;\n}\n.am-icon-lg {\n  width: 36px;\n  height: 36px;\n}\n.am-icon-loading {\n  animation: cirle-anim 1s linear infinite;\n}\n@keyframes cirle-anim {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/antd-mobile/lib/input-item/style/index.less":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--4-1!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js??postcss!./node_modules/antd-mobile/lib/input-item/style/index.less ***!
  \****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".am-list-item .am-input-control .fake-input-container {\n  height: 30px;\n  line-height: 30px;\n  position: relative;\n}\n.am-list-item .am-input-control .fake-input-container .fake-input {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  margin-right: 5px;\n  text-decoration: rtl;\n  text-align: right;\n  color: #000;\n  font-size: 17px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.am-list-item .am-input-control .fake-input-container .fake-input.fake-input-disabled {\n  color: #bbb;\n}\n.am-list-item .am-input-control .fake-input-container .fake-input.focus {\n  transition: color 0.2s;\n}\n.am-list-item .am-input-control .fake-input-container .fake-input.focus:after {\n  content: \"\";\n  position: absolute;\n  right: 0;\n  top: 10%;\n  height: 80%;\n  border-right: 1.5px solid #108ee9;\n  animation: keyboard-cursor infinite 1s step-start;\n}\n.am-list-item .am-input-control .fake-input-container .fake-input-placeholder {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  color: #bbb;\n  text-align: right;\n}\n.am-list-item .am-input-control .fake-input-container-left .fake-input {\n  text-align: left;\n}\n.am-list-item .am-input-control .fake-input-container-left .fake-input.focus:after {\n  position: relative;\n}\n.am-list-item .am-input-control .fake-input-container-left .fake-input-placeholder {\n  text-align: left;\n}\n.am-number-keyboard-wrapper {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  z-index: 10000;\n  font-family: 'PingFang SC';\n  background-color: #f6f6f7;\n  transition-duration: 0.2s;\n  transition-property: transform display;\n  transform: translateZ(0);\n  padding-bottom: env(safe-area-inset-bottom);\n}\n.am-number-keyboard-wrapper.am-number-keyboard-wrapper-hide {\n  bottom: -500px;\n}\n.am-number-keyboard-wrapper table {\n  width: 100%;\n  padding: 0;\n  margin: 0;\n  border-collapse: collapse;\n  border-top: 1PX solid #ddd;\n}\n@media (min-resolution: 2dppx) {\n  html:not([data-scale]) .am-number-keyboard-wrapper table {\n    border-top: none;\n  }\n  html:not([data-scale]) .am-number-keyboard-wrapper table::before {\n    content: '';\n    position: absolute;\n    background-color: #ddd;\n    display: block;\n    z-index: 1;\n    top: 0;\n    right: auto;\n    bottom: auto;\n    left: 0;\n    width: 100%;\n    height: 1PX;\n    transform-origin: 50% 50%;\n    transform: scaleY(0.5);\n  }\n}\n@media (min-resolution: 2dppx) and (min-resolution: 3dppx) {\n  html:not([data-scale]) .am-number-keyboard-wrapper table::before {\n    transform: scaleY(0.33);\n  }\n}\n.am-number-keyboard-wrapper table tr {\n  width: 100%;\n  padding: 0;\n  margin: 0;\n}\n.am-number-keyboard-wrapper table tr .am-number-keyboard-item {\n  width: 25%;\n  padding: 0;\n  margin: 0;\n  height: 50px;\n  text-align: center;\n  font-size: 25.5px;\n  color: #2a2b2c;\n  position: relative;\n}\n.am-number-keyboard-wrapper table tr .am-number-keyboard-item:not(.keyboard-confirm) {\n  border-left: 1PX solid #ddd;\n  border-bottom: 1PX solid #ddd;\n}\n@media (min-resolution: 2dppx) {\n  html:not([data-scale]) .am-number-keyboard-wrapper table tr .am-number-keyboard-item:not(.keyboard-confirm) {\n    border-left: none;\n  }\n  html:not([data-scale]) .am-number-keyboard-wrapper table tr .am-number-keyboard-item:not(.keyboard-confirm)::before {\n    content: '';\n    position: absolute;\n    background-color: #ddd;\n    display: block;\n    z-index: 1;\n    top: 0;\n    right: auto;\n    bottom: auto;\n    left: 0;\n    width: 1PX;\n    height: 100%;\n    transform-origin: 100% 50%;\n    transform: scaleX(0.5);\n  }\n}\n@media (min-resolution: 2dppx) and (min-resolution: 3dppx) {\n  html:not([data-scale]) .am-number-keyboard-wrapper table tr .am-number-keyboard-item:not(.keyboard-confirm)::before {\n    transform: scaleX(0.33);\n  }\n}\n@media (min-resolution: 2dppx) {\n  html:not([data-scale]) .am-number-keyboard-wrapper table tr .am-number-keyboard-item:not(.keyboard-confirm) {\n    border-bottom: none;\n  }\n  html:not([data-scale]) .am-number-keyboard-wrapper table tr .am-number-keyboard-item:not(.keyboard-confirm)::after {\n    content: '';\n    position: absolute;\n    background-color: #ddd;\n    display: block;\n    z-index: 1;\n    top: auto;\n    right: auto;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 1PX;\n    transform-origin: 50% 100%;\n    transform: scaleY(0.5);\n  }\n}\n@media (min-resolution: 2dppx) and (min-resolution: 3dppx) {\n  html:not([data-scale]) .am-number-keyboard-wrapper table tr .am-number-keyboard-item:not(.keyboard-confirm)::after {\n    transform: scaleY(0.33);\n  }\n}\n.am-number-keyboard-wrapper table tr .am-number-keyboard-item.am-number-keyboard-item-active {\n  background-color: #ddd;\n}\n.am-number-keyboard-wrapper table tr .am-number-keyboard-item.keyboard-confirm {\n  color: #fff;\n  font-size: 21px;\n  background-color: #108ee9;\n  border-bottom: 1PX solid #ddd;\n}\n@media (min-resolution: 2dppx) {\n  html:not([data-scale]) .am-number-keyboard-wrapper table tr .am-number-keyboard-item.keyboard-confirm {\n    border-bottom: none;\n  }\n  html:not([data-scale]) .am-number-keyboard-wrapper table tr .am-number-keyboard-item.keyboard-confirm::after {\n    content: '';\n    position: absolute;\n    background-color: #ddd;\n    display: block;\n    z-index: 1;\n    top: auto;\n    right: auto;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 1PX;\n    transform-origin: 50% 100%;\n    transform: scaleY(0.5);\n  }\n}\n@media (min-resolution: 2dppx) and (min-resolution: 3dppx) {\n  html:not([data-scale]) .am-number-keyboard-wrapper table tr .am-number-keyboard-item.keyboard-confirm::after {\n    transform: scaleY(0.33);\n  }\n}\n.am-number-keyboard-wrapper table tr .am-number-keyboard-item.keyboard-confirm.am-number-keyboard-item-active {\n  background-color: #0e80d2;\n}\n.am-number-keyboard-wrapper table tr .am-number-keyboard-item.keyboard-confirm.am-number-keyboard-item-disabled {\n  background-color: #0e80d2;\n  color: rgba(255, 255, 255, 0.45);\n}\n.am-number-keyboard-wrapper table tr .am-number-keyboard-item.keyboard-delete {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20version%3D%221%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22204%22%20height%3D%22148%22%20viewBox%3D%220%200%20153.000000%20111.000000%22%3E%3Cpath%20d%3D%22M46.9%204.7c-2.5%202.6-14.1%2015.5-25.8%2028.6L-.1%2057l25.6%2027%2025.7%2027.1%2047.4-.3%2047.4-.3%203.2-3.3%203.3-3.2V7l-3.3-3.2L146%20.5%2098.7.2%2051.5-.1l-4.6%204.8zm97.9%203.5c1.7%201.7%201.7%2092.9%200%2094.6-.9.9-12.6%201.2-46.3%201.2H53.4L31.2%2080.4%209%2056.9l5.1-5.7c2.8-3.1%2012.8-14.4%2022.2-24.9L53.5%207h45c33.8%200%2045.4.3%2046.3%201.2z%22%2F%3E%3Cpath%20d%3D%22M69.5%2031c-1.9%202.1-1.7%202.2%209.3%2013.3L90%2055.5%2078.8%2066.7%2067.5%2078l2.3%202.2%202.2%202.3%2011.3-11.3L94.5%2060l11.2%2011.2L117%2082.5l2.2-2.3%202.3-2.2-11.3-11.3L99%2055.5l11.2-11.2L121.5%2033l-2.3-2.2-2.2-2.3-11.3%2011.3L94.5%2051l-11-11c-6-6-11.2-11-11.6-11-.3%200-1.4.9-2.4%202z%22%2F%3E%3C%2Fsvg%3E\");\n  background-size: 25.5px 18.5px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n}\n.am-number-keyboard-wrapper table tr .am-number-keyboard-item.keyboard-hide {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20version%3D%221%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22260%22%20height%3D%22188%22%20viewBox%3D%220%200%20195.000000%20141.000000%22%3E%3Cpath%20d%3D%22M0%2057v57h195V0H0v57zm183%200v45H12V12h171v45z%22%2F%3E%3Cpath%20d%3D%22M21%2031.5V39h15V24H21v7.5zM48%2031.5V39h15V24H48v7.5zM75%2031.5V39h15V24H75v7.5zM102%2031.5V39h15V24h-15v7.5zM129%2031.5V39h15V24h-15v7.5zM156%2031.5V39h15V24h-15v7.5zM36%2055.5V63h15V48H36v7.5zM63%2055.5V63h15V48H63v7.5zM90%2055.5V63h15V48H90v7.5zM117%2055.5V63h15V48h-15v7.5zM144%2055.5V63h15V48h-15v7.5zM27%2079.5V87h15V72H27v7.5zM48%2079.5V87h96V72H48v7.5zM150%2079.5V87h15V72h-15v7.5zM81%20124.5c0%20.8.7%201.5%201.5%201.5s1.5.7%201.5%201.5.7%201.5%201.5%201.5%201.5.7%201.5%201.5.7%201.5%201.5%201.5%201.5.7%201.5%201.5.7%201.5%201.5%201.5%201.5.7%201.5%201.5.7%201.5%201.5%201.5%201.5.7%201.5%201.5.7%201.5%201.5%201.5%201.5-.7%201.5-1.5.7-1.5%201.5-1.5%201.5-.7%201.5-1.5.7-1.5%201.5-1.5%201.5-.7%201.5-1.5.7-1.5%201.5-1.5%201.5-.7%201.5-1.5.7-1.5%201.5-1.5%201.5-.7%201.5-1.5.7-1.5%201.5-1.5%201.5-.7%201.5-1.5c0-1.3-2.5-1.5-16.5-1.5s-16.5.2-16.5%201.5z%22%2F%3E%3C%2Fsvg%3E\");\n  background-size: 32.5px 23.5px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n}\n.am-number-keyboard-wrapper table tr .am-number-keyboard-item-disabled {\n  color: #bbb;\n}\n@keyframes keyboard-cursor {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.am-list-item.am-input-item {\n  height: 44px;\n  padding-left: 15px;\n}\n.am-list-item:not(:last-child) .am-list-line {\n  border-bottom: 1PX solid #ddd;\n}\n@media (min-resolution: 2dppx) {\n  html:not([data-scale]) .am-list-item:not(:last-child) .am-list-line {\n    border-bottom: none;\n  }\n  html:not([data-scale]) .am-list-item:not(:last-child) .am-list-line::after {\n    content: '';\n    position: absolute;\n    background-color: #ddd;\n    display: block;\n    z-index: 1;\n    top: auto;\n    right: auto;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 1PX;\n    transform-origin: 50% 100%;\n    transform: scaleY(0.5);\n  }\n}\n@media (min-resolution: 2dppx) and (min-resolution: 3dppx) {\n  html:not([data-scale]) .am-list-item:not(:last-child) .am-list-line::after {\n    transform: scaleY(0.33);\n  }\n}\n.am-list-item .am-input-label {\n  color: #000;\n  font-size: 17px;\n  margin-left: 0;\n  margin-right: 5px;\n  text-align: left;\n  white-space: nowrap;\n  overflow: hidden;\n  padding: 2px 0;\n}\n.am-list-item .am-input-label.am-input-label-2 {\n  width: 34px;\n}\n.am-list-item .am-input-label.am-input-label-3 {\n  width: 51px;\n}\n.am-list-item .am-input-label.am-input-label-4 {\n  width: 68px;\n}\n.am-list-item .am-input-label.am-input-label-5 {\n  width: 85px;\n}\n.am-list-item .am-input-label.am-input-label-6 {\n  width: 102px;\n}\n.am-list-item .am-input-label.am-input-label-7 {\n  width: 119px;\n}\n.am-list-item .am-input-control {\n  font-size: 17px;\n  flex: 1;\n}\n.am-list-item .am-input-control input {\n  color: #000;\n  font-size: 17px;\n  appearance: none;\n  width: 100%;\n  padding: 2px 0;\n  border: 0;\n  background-color: transparent;\n  line-height: 1;\n  box-sizing: border-box;\n}\n.am-list-item .am-input-control input::placeholder {\n  color: #bbb;\n  line-height: 1.2;\n}\n.am-list-item .am-input-control input:disabled {\n  color: #bbb;\n  background-color: #fff;\n}\n.am-list-item .am-input-clear {\n  display: none;\n  width: 21px;\n  height: 21px;\n  border-radius: 50%;\n  overflow: hidden;\n  font-style: normal;\n  color: #fff;\n  background-color: #ccc;\n  background-repeat: no-repeat;\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20fill%3D'%23fff'%20viewBox%3D'0%200%2030%2030'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Cpath%20d%3D'M19%206.41L17.59%205%2012%2010.59%206.41%205%205%206.41%2010.59%2012%205%2017.59%206.41%2019%2012%2013.41%2017.59%2019%2019%2017.59%2013.41%2012z'%2F%3E%3Cpath%20d%3D'M0%200h24v24H0z'%20fill%3D'none'%2F%3E%3C%2Fsvg%3E\");\n  background-size: 21px auto;\n  background-position: 2px 2px;\n}\n.am-list-item .am-input-clear-active {\n  background-color: #108ee9;\n}\n.am-list-item.am-input-focus .am-input-clear {\n  display: block;\n}\n.am-list-item .am-input-extra {\n  flex: initial;\n  min-width: 0;\n  max-height: 21px;\n  overflow: hidden;\n  padding-right: 0;\n  line-height: 1;\n  color: #888;\n  font-size: 15px;\n  margin-left: 5px;\n}\n.am-list-item.am-input-error .am-input-control input {\n  color: #f50;\n}\n.am-list-item.am-input-error .am-input-error-extra {\n  height: 21px;\n  width: 21px;\n  margin-left: 6px;\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D'18'%20height%3D'18'%20viewBox%3D'0%200%2018%2018'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Cg%20stroke%3D'none'%20stroke-width%3D'1'%20fill%3D'none'%20fill-rule%3D'evenodd'%3E%3Cg%20transform%3D'translate(-300.000000%2C%20-1207.000000)'%20fill%3D'%23FF5500'%3E%3Cg%20id%3D'exclamation-circle-o'%20transform%3D'translate(300.000000%2C%201207.000000)'%3E%3Cpath%20d%3D'M9%2C16.734375%20C10.0441406%2C16.734375%2011.0566406%2C16.5304688%2012.009375%2C16.1279297%20C12.9304688%2C15.7376953%2013.7566406%2C15.1804687%2014.4685547%2C14.4703125%20C15.1787109%2C13.7601563%2015.7376953%2C12.9322266%2016.1261719%2C12.0111328%20C16.5304688%2C11.0566406%2016.734375%2C10.0441406%2016.734375%2C9%20C16.734375%2C7.95585938%2016.5304688%2C6.94335938%2016.1279297%2C5.990625%20C15.7376953%2C5.06953125%2015.1804687%2C4.24335938%2014.4703125%2C3.53144531%20C13.7601563%2C2.82128906%2012.9322266%2C2.26230469%2012.0111328%2C1.87382813%20C11.0566406%2C1.46953125%2010.0441406%2C1.265625%209%2C1.265625%20C7.95585938%2C1.265625%206.94335938%2C1.46953125%205.990625%2C1.87207031%20C5.06953125%2C2.26230469%204.24335938%2C2.81953125%203.53144531%2C3.5296875%20C2.82128906%2C4.23984375%202.26230469%2C5.06777344%201.87382813%2C5.98886719%20C1.46953125%2C6.94335938%201.265625%2C7.95585938%201.265625%2C9%20C1.265625%2C10.0441406%201.46953125%2C11.0566406%201.87207031%2C12.009375%20C2.26230469%2C12.9304688%202.81953125%2C13.7566406%203.5296875%2C14.4685547%20C4.23984375%2C15.1787109%205.06777344%2C15.7376953%205.98886719%2C16.1261719%20C6.94335938%2C16.5304688%207.95585938%2C16.734375%209%2C16.734375%20L9%2C16.734375%20Z%20M9%2C18%20C4.02890625%2C18%200%2C13.9710937%200%2C9%20C0%2C4.02890625%204.02890625%2C0%209%2C0%20C13.9710937%2C0%2018%2C4.02890625%2018%2C9%20C18%2C13.9710937%2013.9710937%2C18%209%2C18%20L9%2C18%20L9%2C18%20Z%20M9%2C6.75%20C8.61152344%2C6.75%208.296875%2C7.06464844%208.296875%2C7.453125%20L8.296875%2C13.9394531%20C8.296875%2C14.3279297%208.61152344%2C14.6425781%209%2C14.6425781%20C9.38847656%2C14.6425781%209.703125%2C14.3279297%209.703125%2C13.9394531%20L9.703125%2C7.453125%20C9.703125%2C7.06464844%209.38847656%2C6.75%209%2C6.75%20L9%2C6.75%20Z%20M8.20898438%2C4.83398438%20C8.20898438%2C5.27085024%208.56313413%2C5.625%209%2C5.625%20C9.43686587%2C5.625%209.79101562%2C5.27085024%209.79101562%2C4.83398438%20C9.79101562%2C4.39711851%209.43686587%2C4.04296875%209%2C4.04296875%20C8.56313413%2C4.04296875%208.20898438%2C4.39711851%208.20898438%2C4.83398438%20L8.20898438%2C4.83398438%20Z'%20id%3D'Shape'%20transform%3D'translate(9.000000%2C%209.000000)%20scale(1%2C%20-1)%20translate(-9.000000%2C%20-9.000000)%20'%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\");\n  background-size: 21px auto;\n}\n.am-list-item.am-input-disabled .am-input-label {\n  color: #bbb;\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/antd-mobile/lib/list/style/index.less":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--4-1!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js??postcss!./node_modules/antd-mobile/lib/list/style/index.less ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".am-list-header {\n  padding: 15px 15px 9px 15px;\n  font-size: 14px;\n  color: #888;\n  width: 100%;\n  box-sizing: border-box;\n}\n.am-list-footer {\n  padding: 9px 15px 15px 15px;\n  font-size: 14px;\n  color: #888;\n}\n.am-list-body {\n  position: relative;\n  background-color: #fff;\n  border-top: 1PX solid #ddd;\n  border-bottom: 1PX solid #ddd;\n}\n@media (min-resolution: 2dppx) {\n  html:not([data-scale]) .am-list-body {\n    border-top: none;\n  }\n  html:not([data-scale]) .am-list-body::before {\n    content: '';\n    position: absolute;\n    background-color: #ddd;\n    display: block;\n    z-index: 1;\n    top: 0;\n    right: auto;\n    bottom: auto;\n    left: 0;\n    width: 100%;\n    height: 1PX;\n    transform-origin: 50% 50%;\n    transform: scaleY(0.5);\n  }\n}\n@media (min-resolution: 2dppx) and (min-resolution: 3dppx) {\n  html:not([data-scale]) .am-list-body::before {\n    transform: scaleY(0.33);\n  }\n}\n@media (min-resolution: 2dppx) {\n  html:not([data-scale]) .am-list-body {\n    border-bottom: none;\n  }\n  html:not([data-scale]) .am-list-body::after {\n    content: '';\n    position: absolute;\n    background-color: #ddd;\n    display: block;\n    z-index: 1;\n    top: auto;\n    right: auto;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 1PX;\n    transform-origin: 50% 100%;\n    transform: scaleY(0.5);\n  }\n}\n@media (min-resolution: 2dppx) and (min-resolution: 3dppx) {\n  html:not([data-scale]) .am-list-body::after {\n    transform: scaleY(0.33);\n  }\n}\n.am-list-body div:not(:last-child) .am-list-line {\n  border-bottom: 1PX solid #ddd;\n}\n@media (min-resolution: 2dppx) {\n  html:not([data-scale]) .am-list-body div:not(:last-child) .am-list-line {\n    border-bottom: none;\n  }\n  html:not([data-scale]) .am-list-body div:not(:last-child) .am-list-line::after {\n    content: '';\n    position: absolute;\n    background-color: #ddd;\n    display: block;\n    z-index: 1;\n    top: auto;\n    right: auto;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 1PX;\n    transform-origin: 50% 100%;\n    transform: scaleY(0.5);\n  }\n}\n@media (min-resolution: 2dppx) and (min-resolution: 3dppx) {\n  html:not([data-scale]) .am-list-body div:not(:last-child) .am-list-line::after {\n    transform: scaleY(0.33);\n  }\n}\n.am-list-item {\n  position: relative;\n  display: flex;\n  padding-left: 15px;\n  min-height: 44px;\n  background-color: #fff;\n  vertical-align: middle;\n  overflow: hidden;\n  transition: background-color 200ms;\n  align-items: center;\n  /* list左图片显示*/\n}\n.am-list-item .am-list-ripple {\n  position: absolute;\n  background: transparent;\n  display: inline-block;\n  overflow: hidden;\n  will-change: box-shadow, transform;\n  transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  outline: none;\n  cursor: pointer;\n  border-radius: 100%;\n  transform: scale(0);\n}\n.am-list-item .am-list-ripple.am-list-ripple-animate {\n  background-color: hsla(0, 0%, 62%, 0.2);\n  animation: ripple 1s linear;\n}\n.am-list-item.am-list-item-top .am-list-line {\n  align-items: flex-start;\n}\n.am-list-item.am-list-item-top .am-list-line .am-list-arrow {\n  margin-top: 2px;\n}\n.am-list-item.am-list-item-middle .am-list-line {\n  align-items: center;\n}\n.am-list-item.am-list-item-bottom .am-list-line {\n  align-items: flex-end;\n}\n.am-list-item.am-list-item-error .am-list-line .am-list-extra {\n  color: #f50;\n}\n.am-list-item.am-list-item-error .am-list-line .am-list-extra .am-list-brief {\n  color: #f50;\n}\n.am-list-item.am-list-item-active {\n  background-color: #ddd;\n}\n.am-list-item.am-list-item-disabled .am-list-line .am-list-content,\n.am-list-item.am-list-item-disabled .am-list-line .am-list-extra {\n  color: #bbb;\n}\n.am-list-item img {\n  width: 22px;\n  height: 22px;\n  vertical-align: middle;\n}\n.am-list-item .am-list-thumb:first-child {\n  margin-right: 15px;\n}\n.am-list-item .am-list-thumb:last-child {\n  margin-left: 8px;\n}\n.am-list-item .am-list-line {\n  position: relative;\n  display: flex;\n  flex: 1;\n  align-self: stretch;\n  padding-right: 15px;\n  overflow: hidden;\n  /* list左侧主内容*/\n  /* list右补充内容*/\n  /* 辅助性文字*/\n  /* list右侧箭头*/\n}\n.am-list-item .am-list-line .am-list-content {\n  flex: 1;\n  color: #000;\n  font-size: 17px;\n  line-height: 1.5;\n  text-align: left;\n  width: auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding-top: 7px;\n  padding-bottom: 7px;\n}\n.am-list-item .am-list-line .am-list-extra {\n  flex-basis: 36%;\n  color: #888;\n  font-size: 16px;\n  line-height: 1.5;\n  text-align: right;\n  width: auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding-top: 7px;\n  padding-bottom: 7px;\n}\n.am-list-item .am-list-line .am-list-title {\n  width: auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.am-list-item .am-list-line .am-list-brief {\n  color: #888;\n  font-size: 15px;\n  line-height: 1.5;\n  margin-top: 6px;\n  width: auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.am-list-item .am-list-line .am-list-arrow {\n  display: block;\n  width: 15px;\n  height: 15px;\n  margin-left: 8px;\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2216%22%20height%3D%2226%22%20viewBox%3D%220%200%2016%2026%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%3Cg%20id%3D%22UI-KIT_%E5%9F%BA%E7%A1%80%E5%85%83%E4%BB%B6%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20id%3D%229.9%E5%9F%BA%E7%A1%80%E5%85%83%E4%BB%B6%22%20transform%3D%22translate(-5809.000000%2C%20-8482.000000)%22%20fill%3D%22%23C7C7CC%22%3E%3Cpolygon%20id%3D%22Disclosure-Indicator%22%20points%3D%225811%208482%205809%208484%205820.5%208495%205809%208506%205811%208508%205825%208495%22%3E%3C%2Fpolygon%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\");\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n  visibility: hidden;\n}\n.am-list-item .am-list-line .am-list-arrow-horizontal {\n  visibility: visible;\n}\n.am-list-item .am-list-line .am-list-arrow-vertical {\n  visibility: visible;\n  transform: rotate(90deg);\n}\n.am-list-item .am-list-line .am-list-arrow-vertical-up {\n  visibility: visible;\n  transform: rotate(270deg);\n}\n.am-list-item .am-list-line-multiple {\n  padding: 12.5px 15px 12.5px 0;\n}\n.am-list-item .am-list-line-multiple .am-list-content {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n.am-list-item .am-list-line-multiple .am-list-extra {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n.am-list-item .am-list-line-wrap .am-list-content {\n  white-space: normal;\n}\n.am-list-item .am-list-line-wrap .am-list-extra {\n  white-space: normal;\n}\n.am-list-item select {\n  position: relative;\n  display: block;\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  border: 0;\n  font-size: 17px;\n  appearance: none;\n  background-color: transparent;\n}\n@keyframes ripple {\n  100% {\n    opacity: 0;\n    transform: scale(2.5);\n  }\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/antd-mobile/lib/style/index.less":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--4-1!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js??postcss!./node_modules/antd-mobile/lib/style/index.less ***!
  \*****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/*do not import this file except components/style/index.less*/\n.am-fade-enter,\n.am-fade-appear {\n  opacity: 0;\n  animation-duration: 0.2s;\n  animation-fill-mode: both;\n  animation-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2);\n  animation-play-state: paused;\n}\n.am-fade-leave {\n  animation-duration: 0.2s;\n  animation-fill-mode: both;\n  animation-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2);\n  animation-play-state: paused;\n}\n.am-fade-enter.am-fade-enter-active,\n.am-fade-appear.am-fade-appear-active {\n  animation-name: amFadeIn;\n  animation-play-state: running;\n}\n.am-fade-leave.am-fade-leave-active {\n  animation-name: amFadeOut;\n  animation-play-state: running;\n}\n@keyframes amFadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes amFadeOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n.am-slide-up-enter,\n.am-slide-up-appear {\n  transform: translate(0, 100%);\n}\n.am-slide-up-enter,\n.am-slide-up-appear,\n.am-slide-up-leave {\n  animation-duration: 0.2s;\n  animation-fill-mode: both;\n  animation-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2);\n  animation-play-state: paused;\n}\n.am-slide-up-enter.am-slide-up-enter-active,\n.am-slide-up-appear.am-slide-up-appear-active {\n  animation-name: amSlideUpIn;\n  animation-play-state: running;\n}\n.am-slide-up-leave.am-slide-up-leave-active {\n  animation-name: amSlideUpOut;\n  animation-play-state: running;\n}\n@keyframes amSlideUpIn {\n  0% {\n    transform: translate(0, 100%);\n  }\n  100% {\n    transform: translate(0, 0);\n  }\n}\n@keyframes amSlideUpOut {\n  0% {\n    transform: translate(0, 0);\n  }\n  100% {\n    transform: translate(0, 100%);\n  }\n}\n.am.am-zoom-enter,\n.am.am-zoom-leave {\n  display: block;\n}\n.am-zoom-enter,\n.am-zoom-appear {\n  opacity: 0;\n  animation-duration: 0.2s;\n  animation-fill-mode: both;\n  animation-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2);\n  animation-timing-function: cubic-bezier(0.18, 0.89, 0.32, 1.28);\n  animation-play-state: paused;\n}\n.am-zoom-leave {\n  animation-duration: 0.2s;\n  animation-fill-mode: both;\n  animation-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2);\n  animation-timing-function: cubic-bezier(0.6, -0.3, 0.74, 0.05);\n  animation-play-state: paused;\n}\n.am-zoom-enter.am-zoom-enter-active,\n.am-zoom-appear.am-zoom-appear-active {\n  animation-name: amZoomIn;\n  animation-play-state: running;\n}\n.am-zoom-leave.am-zoom-leave-active {\n  animation-name: amZoomOut;\n  animation-play-state: running;\n}\n@keyframes amZoomIn {\n  0% {\n    opacity: 0;\n    transform-origin: 50% 50%;\n    transform: scale(0, 0);\n  }\n  100% {\n    opacity: 1;\n    transform-origin: 50% 50%;\n    transform: scale(1, 1);\n  }\n}\n@keyframes amZoomOut {\n  0% {\n    opacity: 1;\n    transform-origin: 50% 50%;\n    transform: scale(1, 1);\n  }\n  100% {\n    opacity: 0;\n    transform-origin: 50% 50%;\n    transform: scale(0, 0);\n  }\n}\n.am-slide-down-enter,\n.am-slide-down-appear {\n  transform: translate(0, -100%);\n}\n.am-slide-down-enter,\n.am-slide-down-appear,\n.am-slide-down-leave {\n  animation-duration: 0.2s;\n  animation-fill-mode: both;\n  animation-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2);\n  animation-play-state: paused;\n}\n.am-slide-down-enter.am-slide-down-enter-active,\n.am-slide-down-appear.am-slide-down-appear-active {\n  animation-name: amSlideDownIn;\n  animation-play-state: running;\n}\n.am-slide-down-leave.am-slide-down-leave-active {\n  animation-name: amSlideDownOut;\n  animation-play-state: running;\n}\n@keyframes amSlideDownIn {\n  0% {\n    transform: translate(0, -100%);\n  }\n  100% {\n    transform: translate(0, 0);\n  }\n}\n@keyframes amSlideDownOut {\n  0% {\n    transform: translate(0, 0);\n  }\n  100% {\n    transform: translate(0, -100%);\n  }\n}\n*,\n*:before,\n*:after {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\nbody {\n  background-color: #f5f5f9;\n  font-size: 14px;\n}\n*[contenteditable] {\n  -webkit-user-select: auto !important;\n}\n*:focus {\n  outline: none;\n}\na {\n  background: transparent;\n  text-decoration: none;\n  outline: none;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/antd-mobile/lib/toast/style/index.less":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--4-1!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js??postcss!./node_modules/antd-mobile/lib/toast/style/index.less ***!
  \***********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".am-toast {\n  position: fixed;\n  width: 100%;\n  z-index: 1999;\n  font-size: 14px;\n  text-align: center;\n}\n.am-toast > span {\n  max-width: 50%;\n}\n.am-toast.am-toast-mask {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  left: 0;\n  top: 0;\n  transform: translateZ(1px);\n}\n.am-toast.am-toast-nomask {\n  position: fixed;\n  max-width: 50%;\n  width: auto;\n  left: 50%;\n  top: 50%;\n  transform: translateZ(1px);\n}\n.am-toast.am-toast-nomask .am-toast-notice {\n  transform: translateX(-50%) translateY(-50%);\n}\n.am-toast-notice-content .am-toast-text {\n  min-width: 60px;\n  border-radius: 3px;\n  color: #fff;\n  background-color: rgba(58, 58, 58, 0.9);\n  line-height: 1.5;\n  padding: 9px 15px;\n}\n.am-toast-notice-content .am-toast-text.am-toast-text-icon {\n  border-radius: 5px;\n  padding: 15px 15px;\n}\n.am-toast-notice-content .am-toast-text.am-toast-text-icon .am-toast-text-info {\n  margin-top: 6px;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/normalize.css/normalize.css":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--4-1!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js??postcss!./node_modules/normalize.css/normalize.css ***!
  \************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n}\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers (opinionated).\n */\nbody {\n  margin: 0;\n}\n/**\n * Add the correct display in IE 9-.\n */\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n/* Grouping content\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\nfigcaption,\nfigure,\nmain {\n  /* 1 */\n  display: block;\n}\n/**\n * Add the correct margin in IE 8.\n */\nfigure {\n  margin: 1em 40px;\n}\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */\n}\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n/* Text-level semantics\n   ========================================================================== */\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\na {\n  background-color: transparent;\n  /* 1 */\n  -webkit-text-decoration-skip: objects;\n  /* 2 */\n}\n/**\n * 1. Remove the bottom border in Chrome 57- and Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */\n}\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\nb,\nstrong {\n  font-weight: inherit;\n}\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n/**\n * Add the correct font style in Android 4.3-.\n */\ndfn {\n  font-style: italic;\n}\n/**\n * Add the correct background and color in IE 9-.\n */\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsub {\n  bottom: -0.25em;\n}\nsup {\n  top: -0.5em;\n}\n/* Embedded content\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n */\naudio,\nvideo {\n  display: inline-block;\n}\n/**\n * Add the correct display in iOS 4-7.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n/**\n * Remove the border on images inside links in IE 10-.\n */\nimg {\n  border-style: none;\n}\n/**\n * Hide the overflow in IE.\n */\nsvg:not(:root) {\n  overflow: hidden;\n}\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */\n}\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\nhtml [type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */\n}\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */\n}\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */\n}\n/**\n * Remove the default vertical scrollbar in IE.\n */\ntextarea {\n  overflow: auto;\n}\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */\n}\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n}\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\ndetails,\nmenu {\n  display: block;\n}\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n/* Scripting\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n */\ncanvas {\n  display: inline-block;\n}\n/**\n * Add the correct display in IE.\n */\ntemplate {\n  display: none;\n}\n/* Hidden\n   ========================================================================== */\n/**\n * Add the correct display in IE 10-.\n */\n[hidden] {\n  display: none;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/normalize.css/normalize.css":
/*!**************************************************!*\
  !*** ./node_modules/normalize.css/normalize.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../css-loader/dist/cjs.js??ref--4-1!../postcss-loader/src!../less-loader/dist/cjs.js??postcss!./normalize.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/normalize.css/normalize.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../css-loader/dist/cjs.js??ref--4-1!../postcss-loader/src!../less-loader/dist/cjs.js??postcss!./normalize.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/normalize.css/normalize.css", function() {
		var newContent = __webpack_require__(/*! !../css-loader/dist/cjs.js??ref--4-1!../postcss-loader/src!../less-loader/dist/cjs.js??postcss!./normalize.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/normalize.css/normalize.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/rc-form/es/createBaseForm.js":
/*!***************************************************!*\
  !*** ./node_modules/rc-form/es/createBaseForm.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ "./node_modules/babel-runtime/helpers/toConsumableArray.js");
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var create_react_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! create-react-class */ "./node_modules/create-react-class/index.js");
/* harmony import */ var create_react_class__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(create_react_class__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rc_util_es_unsafeLifecyclesPolyfill__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rc-util/es/unsafeLifecyclesPolyfill */ "./node_modules/rc-util/es/unsafeLifecyclesPolyfill.js");
/* harmony import */ var async_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! async-validator */ "./node_modules/async-validator/es/index.js");
/* harmony import */ var async_validator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(async_validator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash/set */ "./node_modules/lodash/set.js");
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash_set__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash_eq__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash/eq */ "./node_modules/lodash/eq.js");
/* harmony import */ var lodash_eq__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash_eq__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _createFieldsStore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./createFieldsStore */ "./node_modules/rc-form/es/createFieldsStore.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils */ "./node_modules/rc-form/es/utils.js");




/* eslint-disable react/prefer-es6-class */
/* eslint-disable prefer-promise-reject-errors */












var DEFAULT_TRIGGER = 'onChange';

function createBaseForm() {
  var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var mixins = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var validateMessages = option.validateMessages,
      onFieldsChange = option.onFieldsChange,
      onValuesChange = option.onValuesChange,
      _option$mapProps = option.mapProps,
      mapProps = _option$mapProps === undefined ? _utils__WEBPACK_IMPORTED_MODULE_13__["identity"] : _option$mapProps,
      mapPropsToFields = option.mapPropsToFields,
      fieldNameProp = option.fieldNameProp,
      fieldMetaProp = option.fieldMetaProp,
      fieldDataProp = option.fieldDataProp,
      _option$formPropName = option.formPropName,
      formPropName = _option$formPropName === undefined ? 'form' : _option$formPropName,
      formName = option.name,
      withRef = option.withRef;


  return function decorate(WrappedComponent) {
    var Form = create_react_class__WEBPACK_IMPORTED_MODULE_5___default()({
      displayName: 'Form',

      mixins: mixins,

      getInitialState: function getInitialState() {
        var _this = this;

        var fields = mapPropsToFields && mapPropsToFields(this.props);
        this.fieldsStore = Object(_createFieldsStore__WEBPACK_IMPORTED_MODULE_12__["default"])(fields || {});

        this.instances = {};
        this.cachedBind = {};
        this.clearedFieldMetaCache = {};

        this.renderFields = {};
        this.domFields = {};

        // HACK: https://github.com/ant-design/ant-design/issues/6406
        ['getFieldsValue', 'getFieldValue', 'setFieldsInitialValue', 'getFieldsError', 'getFieldError', 'isFieldValidating', 'isFieldsValidating', 'isFieldsTouched', 'isFieldTouched'].forEach(function (key) {
          _this[key] = function () {
            var _fieldsStore;

            if (true) {
              warning__WEBPACK_IMPORTED_MODULE_8___default()(false, 'you should not use `ref` on enhanced form, please use `wrappedComponentRef`. ' + 'See: https://github.com/react-component/form#note-use-wrappedcomponentref-instead-of-withref-after-rc-form140');
            }
            return (_fieldsStore = _this.fieldsStore)[key].apply(_fieldsStore, arguments);
          };
        });

        return {
          submitting: false
        };
      },
      componentDidMount: function componentDidMount() {
        this.cleanUpUselessFields();
      },
      componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        if (mapPropsToFields) {
          this.fieldsStore.updateFields(mapPropsToFields(nextProps));
        }
      },
      componentDidUpdate: function componentDidUpdate() {
        this.cleanUpUselessFields();
      },
      onCollectCommon: function onCollectCommon(name, action, args) {
        var fieldMeta = this.fieldsStore.getFieldMeta(name);
        if (fieldMeta[action]) {
          fieldMeta[action].apply(fieldMeta, babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3___default()(args));
        } else if (fieldMeta.originalProps && fieldMeta.originalProps[action]) {
          var _fieldMeta$originalPr;

          (_fieldMeta$originalPr = fieldMeta.originalProps)[action].apply(_fieldMeta$originalPr, babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3___default()(args));
        }
        var value = fieldMeta.getValueFromEvent ? fieldMeta.getValueFromEvent.apply(fieldMeta, babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3___default()(args)) : _utils__WEBPACK_IMPORTED_MODULE_13__["getValueFromEvent"].apply(undefined, babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3___default()(args));
        if (onValuesChange && value !== this.fieldsStore.getFieldValue(name)) {
          var valuesAll = this.fieldsStore.getAllValues();
          var valuesAllSet = {};
          valuesAll[name] = value;
          Object.keys(valuesAll).forEach(function (key) {
            return lodash_set__WEBPACK_IMPORTED_MODULE_10___default()(valuesAllSet, key, valuesAll[key]);
          });
          onValuesChange(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, formPropName, this.getForm()), this.props), lodash_set__WEBPACK_IMPORTED_MODULE_10___default()({}, name, value), valuesAllSet);
        }
        var field = this.fieldsStore.getField(name);
        return { name: name, field: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, field, { value: value, touched: true }), fieldMeta: fieldMeta };
      },
      onCollect: function onCollect(name_, action) {
        for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          args[_key - 2] = arguments[_key];
        }

        var _onCollectCommon = this.onCollectCommon(name_, action, args),
            name = _onCollectCommon.name,
            field = _onCollectCommon.field,
            fieldMeta = _onCollectCommon.fieldMeta;

        var validate = fieldMeta.validate;


        this.fieldsStore.setFieldsAsDirty();

        var newField = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, field, {
          dirty: Object(_utils__WEBPACK_IMPORTED_MODULE_13__["hasRules"])(validate)
        });
        this.setFields(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, name, newField));
      },
      onCollectValidate: function onCollectValidate(name_, action) {
        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          args[_key2 - 2] = arguments[_key2];
        }

        var _onCollectCommon2 = this.onCollectCommon(name_, action, args),
            field = _onCollectCommon2.field,
            fieldMeta = _onCollectCommon2.fieldMeta;

        var newField = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, field, {
          dirty: true
        });

        this.fieldsStore.setFieldsAsDirty();

        this.validateFieldsInternal([newField], {
          action: action,
          options: {
            firstFields: !!fieldMeta.validateFirst
          }
        });
      },
      getCacheBind: function getCacheBind(name, action, fn) {
        if (!this.cachedBind[name]) {
          this.cachedBind[name] = {};
        }
        var cache = this.cachedBind[name];
        if (!cache[action] || cache[action].oriFn !== fn) {
          cache[action] = {
            fn: fn.bind(this, name, action),
            oriFn: fn
          };
        }
        return cache[action].fn;
      },
      getFieldDecorator: function getFieldDecorator(name, fieldOption) {
        var _this2 = this;

        var props = this.getFieldProps(name, fieldOption);
        return function (fieldElem) {
          // We should put field in record if it is rendered
          _this2.renderFields[name] = true;

          var fieldMeta = _this2.fieldsStore.getFieldMeta(name);
          var originalProps = fieldElem.props;
          if (true) {
            var valuePropName = fieldMeta.valuePropName;
            warning__WEBPACK_IMPORTED_MODULE_8___default()(!(valuePropName in originalProps), '`getFieldDecorator` will override `' + valuePropName + '`, ' + ('so please don\'t set `' + valuePropName + '` directly ') + 'and use `setFieldsValue` to set it.');
            var defaultValuePropName = 'default' + valuePropName[0].toUpperCase() + valuePropName.slice(1);
            warning__WEBPACK_IMPORTED_MODULE_8___default()(!(defaultValuePropName in originalProps), '`' + defaultValuePropName + '` is invalid ' + ('for `getFieldDecorator` will set `' + valuePropName + '`,') + ' please use `option.initialValue` instead.');
          }
          fieldMeta.originalProps = originalProps;
          fieldMeta.ref = fieldElem.ref;
          return react__WEBPACK_IMPORTED_MODULE_4___default.a.cloneElement(fieldElem, babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, props, _this2.fieldsStore.getFieldValuePropValue(fieldMeta)));
        };
      },
      getFieldProps: function getFieldProps(name) {
        var _this3 = this;

        var usersFieldOption = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        if (!name) {
          throw new Error('Must call `getFieldProps` with valid name string!');
        }
        if (true) {
          warning__WEBPACK_IMPORTED_MODULE_8___default()(this.fieldsStore.isValidNestedFieldName(name), 'One field name cannot be part of another, e.g. `a` and `a.b`. Check field: ' + name);
          warning__WEBPACK_IMPORTED_MODULE_8___default()(!('exclusive' in usersFieldOption), '`option.exclusive` of `getFieldProps`|`getFieldDecorator` had been remove.');
        }

        delete this.clearedFieldMetaCache[name];

        var fieldOption = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({
          name: name,
          trigger: DEFAULT_TRIGGER,
          valuePropName: 'value',
          validate: []
        }, usersFieldOption);

        var rules = fieldOption.rules,
            trigger = fieldOption.trigger,
            _fieldOption$validate = fieldOption.validateTrigger,
            validateTrigger = _fieldOption$validate === undefined ? trigger : _fieldOption$validate,
            validate = fieldOption.validate;


        var fieldMeta = this.fieldsStore.getFieldMeta(name);
        if ('initialValue' in fieldOption) {
          fieldMeta.initialValue = fieldOption.initialValue;
        }

        var inputProps = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, this.fieldsStore.getFieldValuePropValue(fieldOption), {
          ref: this.getCacheBind(name, name + '__ref', this.saveRef)
        });
        if (fieldNameProp) {
          inputProps[fieldNameProp] = formName ? formName + '_' + name : name;
        }

        var validateRules = Object(_utils__WEBPACK_IMPORTED_MODULE_13__["normalizeValidateRules"])(validate, rules, validateTrigger);
        var validateTriggers = Object(_utils__WEBPACK_IMPORTED_MODULE_13__["getValidateTriggers"])(validateRules);
        validateTriggers.forEach(function (action) {
          if (inputProps[action]) return;
          inputProps[action] = _this3.getCacheBind(name, action, _this3.onCollectValidate);
        });

        // make sure that the value will be collect
        if (trigger && validateTriggers.indexOf(trigger) === -1) {
          inputProps[trigger] = this.getCacheBind(name, trigger, this.onCollect);
        }

        var meta = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, fieldMeta, fieldOption, {
          validate: validateRules
        });
        this.fieldsStore.setFieldMeta(name, meta);
        if (fieldMetaProp) {
          inputProps[fieldMetaProp] = meta;
        }

        if (fieldDataProp) {
          inputProps[fieldDataProp] = this.fieldsStore.getField(name);
        }

        // This field is rendered, record it
        this.renderFields[name] = true;

        return inputProps;
      },
      getFieldInstance: function getFieldInstance(name) {
        return this.instances[name];
      },
      getRules: function getRules(fieldMeta, action) {
        var actionRules = fieldMeta.validate.filter(function (item) {
          return !action || item.trigger.indexOf(action) >= 0;
        }).map(function (item) {
          return item.rules;
        });
        return Object(_utils__WEBPACK_IMPORTED_MODULE_13__["flattenArray"])(actionRules);
      },
      setFields: function setFields(maybeNestedFields, callback) {
        var _this4 = this;

        var fields = this.fieldsStore.flattenRegisteredFields(maybeNestedFields);
        this.fieldsStore.setFields(fields);
        if (onFieldsChange) {
          var changedFields = Object.keys(fields).reduce(function (acc, name) {
            return lodash_set__WEBPACK_IMPORTED_MODULE_10___default()(acc, name, _this4.fieldsStore.getField(name));
          }, {});
          onFieldsChange(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, formPropName, this.getForm()), this.props), changedFields, this.fieldsStore.getNestedAllFields());
        }
        this.forceUpdate(callback);
      },
      setFieldsValue: function setFieldsValue(changedValues, callback) {
        var fieldsMeta = this.fieldsStore.fieldsMeta;

        var values = this.fieldsStore.flattenRegisteredFields(changedValues);
        var newFields = Object.keys(values).reduce(function (acc, name) {
          var isRegistered = fieldsMeta[name];
          if (true) {
            warning__WEBPACK_IMPORTED_MODULE_8___default()(isRegistered, 'Cannot use `setFieldsValue` until ' + 'you use `getFieldDecorator` or `getFieldProps` to register it.');
          }
          if (isRegistered) {
            var value = values[name];
            acc[name] = {
              value: value
            };
          }
          return acc;
        }, {});
        this.setFields(newFields, callback);
        if (onValuesChange) {
          var allValues = this.fieldsStore.getAllValues();
          onValuesChange(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, formPropName, this.getForm()), this.props), changedValues, allValues);
        }
      },
      saveRef: function saveRef(name, _, component) {
        if (!component) {
          var _fieldMeta = this.fieldsStore.getFieldMeta(name);
          if (!_fieldMeta.preserve) {
            // after destroy, delete data
            this.clearedFieldMetaCache[name] = {
              field: this.fieldsStore.getField(name),
              meta: _fieldMeta
            };
            this.clearField(name);
          }
          delete this.domFields[name];
          return;
        }
        this.domFields[name] = true;
        this.recoverClearedField(name);
        var fieldMeta = this.fieldsStore.getFieldMeta(name);
        if (fieldMeta) {
          var ref = fieldMeta.ref;
          if (ref) {
            if (typeof ref === 'string') {
              throw new Error('can not set ref string for ' + name);
            } else if (typeof ref === 'function') {
              ref(component);
            } else if (Object.prototype.hasOwnProperty.call(ref, 'current')) {
              ref.current = component;
            }
          }
        }
        this.instances[name] = component;
      },
      cleanUpUselessFields: function cleanUpUselessFields() {
        var _this5 = this;

        var fieldList = this.fieldsStore.getAllFieldsName();
        var removedList = fieldList.filter(function (field) {
          var fieldMeta = _this5.fieldsStore.getFieldMeta(field);
          return !_this5.renderFields[field] && !_this5.domFields[field] && !fieldMeta.preserve;
        });
        if (removedList.length) {
          removedList.forEach(this.clearField);
        }
        this.renderFields = {};
      },
      clearField: function clearField(name) {
        this.fieldsStore.clearField(name);
        delete this.instances[name];
        delete this.cachedBind[name];
      },
      resetFields: function resetFields(ns) {
        var _this6 = this;

        var newFields = this.fieldsStore.resetFields(ns);
        if (Object.keys(newFields).length > 0) {
          this.setFields(newFields);
        }
        if (ns) {
          var names = Array.isArray(ns) ? ns : [ns];
          names.forEach(function (name) {
            return delete _this6.clearedFieldMetaCache[name];
          });
        } else {
          this.clearedFieldMetaCache = {};
        }
      },
      recoverClearedField: function recoverClearedField(name) {
        if (this.clearedFieldMetaCache[name]) {
          this.fieldsStore.setFields(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, name, this.clearedFieldMetaCache[name].field));
          this.fieldsStore.setFieldMeta(name, this.clearedFieldMetaCache[name].meta);
          delete this.clearedFieldMetaCache[name];
        }
      },
      validateFieldsInternal: function validateFieldsInternal(fields, _ref, callback) {
        var _this7 = this;

        var fieldNames = _ref.fieldNames,
            action = _ref.action,
            _ref$options = _ref.options,
            options = _ref$options === undefined ? {} : _ref$options;

        var allRules = {};
        var allValues = {};
        var allFields = {};
        var alreadyErrors = {};
        fields.forEach(function (field) {
          var name = field.name;
          if (options.force !== true && field.dirty === false) {
            if (field.errors) {
              lodash_set__WEBPACK_IMPORTED_MODULE_10___default()(alreadyErrors, name, { errors: field.errors });
            }
            return;
          }
          var fieldMeta = _this7.fieldsStore.getFieldMeta(name);
          var newField = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, field);
          newField.errors = undefined;
          newField.validating = true;
          newField.dirty = true;
          allRules[name] = _this7.getRules(fieldMeta, action);
          allValues[name] = newField.value;
          allFields[name] = newField;
        });
        this.setFields(allFields);
        // in case normalize
        Object.keys(allValues).forEach(function (f) {
          allValues[f] = _this7.fieldsStore.getFieldValue(f);
        });
        if (callback && Object(_utils__WEBPACK_IMPORTED_MODULE_13__["isEmptyObject"])(allFields)) {
          callback(Object(_utils__WEBPACK_IMPORTED_MODULE_13__["isEmptyObject"])(alreadyErrors) ? null : alreadyErrors, this.fieldsStore.getFieldsValue(fieldNames));
          return;
        }
        var validator = new async_validator__WEBPACK_IMPORTED_MODULE_7___default.a(allRules);
        if (validateMessages) {
          validator.messages(validateMessages);
        }
        validator.validate(allValues, options, function (errors) {
          var errorsGroup = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, alreadyErrors);
          if (errors && errors.length) {
            errors.forEach(function (e) {
              var errorFieldName = e.field;
              var fieldName = errorFieldName;

              // Handle using array validation rule.
              // ref: https://github.com/ant-design/ant-design/issues/14275
              Object.keys(allRules).some(function (ruleFieldName) {
                var rules = allRules[ruleFieldName] || [];

                // Exist if match rule
                if (ruleFieldName === errorFieldName) {
                  fieldName = ruleFieldName;
                  return true;
                }

                // Skip if not match array type
                if (rules.every(function (_ref2) {
                  var type = _ref2.type;
                  return type !== 'array';
                }) || errorFieldName.indexOf(ruleFieldName + '.') !== 0) {
                  return false;
                }

                // Exist if match the field name
                var restPath = errorFieldName.slice(ruleFieldName.length + 1);
                if (/^\d+$/.test(restPath)) {
                  fieldName = ruleFieldName;
                  return true;
                }

                return false;
              });

              var field = lodash_get__WEBPACK_IMPORTED_MODULE_9___default()(errorsGroup, fieldName);
              if (typeof field !== 'object' || Array.isArray(field)) {
                lodash_set__WEBPACK_IMPORTED_MODULE_10___default()(errorsGroup, fieldName, { errors: [] });
              }
              var fieldErrors = lodash_get__WEBPACK_IMPORTED_MODULE_9___default()(errorsGroup, fieldName.concat('.errors'));
              fieldErrors.push(e);
            });
          }
          var expired = [];
          var nowAllFields = {};
          Object.keys(allRules).forEach(function (name) {
            var fieldErrors = lodash_get__WEBPACK_IMPORTED_MODULE_9___default()(errorsGroup, name);
            var nowField = _this7.fieldsStore.getField(name);
            // avoid concurrency problems
            if (!lodash_eq__WEBPACK_IMPORTED_MODULE_11___default()(nowField.value, allValues[name])) {
              expired.push({
                name: name
              });
            } else {
              nowField.errors = fieldErrors && fieldErrors.errors;
              nowField.value = allValues[name];
              nowField.validating = false;
              nowField.dirty = false;
              nowAllFields[name] = nowField;
            }
          });
          _this7.setFields(nowAllFields);
          if (callback) {
            if (expired.length) {
              expired.forEach(function (_ref3) {
                var name = _ref3.name;

                var fieldErrors = [{
                  message: name + ' need to revalidate',
                  field: name
                }];
                lodash_set__WEBPACK_IMPORTED_MODULE_10___default()(errorsGroup, name, {
                  expired: true,
                  errors: fieldErrors
                });
              });
            }

            callback(Object(_utils__WEBPACK_IMPORTED_MODULE_13__["isEmptyObject"])(errorsGroup) ? null : errorsGroup, _this7.fieldsStore.getFieldsValue(fieldNames));
          }
        });
      },
      validateFields: function validateFields(ns, opt, cb) {
        var _this8 = this;

        var pending = new Promise(function (resolve, reject) {
          var _getParams = Object(_utils__WEBPACK_IMPORTED_MODULE_13__["getParams"])(ns, opt, cb),
              names = _getParams.names,
              options = _getParams.options;

          var _getParams2 = Object(_utils__WEBPACK_IMPORTED_MODULE_13__["getParams"])(ns, opt, cb),
              callback = _getParams2.callback;

          if (!callback || typeof callback === 'function') {
            var oldCb = callback;
            callback = function callback(errors, values) {
              if (oldCb) {
                oldCb(errors, values);
              }
              if (errors) {
                reject({ errors: errors, values: values });
              } else {
                resolve(values);
              }
            };
          }
          var fieldNames = names ? _this8.fieldsStore.getValidFieldsFullName(names) : _this8.fieldsStore.getValidFieldsName();
          var fields = fieldNames.filter(function (name) {
            var fieldMeta = _this8.fieldsStore.getFieldMeta(name);
            return Object(_utils__WEBPACK_IMPORTED_MODULE_13__["hasRules"])(fieldMeta.validate);
          }).map(function (name) {
            var field = _this8.fieldsStore.getField(name);
            field.value = _this8.fieldsStore.getFieldValue(name);
            return field;
          });
          if (!fields.length) {
            callback(null, _this8.fieldsStore.getFieldsValue(fieldNames));
            return;
          }
          if (!('firstFields' in options)) {
            options.firstFields = fieldNames.filter(function (name) {
              var fieldMeta = _this8.fieldsStore.getFieldMeta(name);
              return !!fieldMeta.validateFirst;
            });
          }
          _this8.validateFieldsInternal(fields, {
            fieldNames: fieldNames,
            options: options
          }, callback);
        });
        pending['catch'](function (e) {
          // eslint-disable-next-line no-console
          if (console.error && "development" !== 'production') {
            // eslint-disable-next-line no-console
            console.error(e);
          }
          return e;
        });
        return pending;
      },
      isSubmitting: function isSubmitting() {
        if (true) {
          warning__WEBPACK_IMPORTED_MODULE_8___default()(false, '`isSubmitting` is deprecated. ' + "Actually, it's more convenient to handle submitting status by yourself.");
        }
        return this.state.submitting;
      },
      submit: function submit(callback) {
        var _this9 = this;

        if (true) {
          warning__WEBPACK_IMPORTED_MODULE_8___default()(false, '`submit` is deprecated. ' + "Actually, it's more convenient to handle submitting status by yourself.");
        }
        var fn = function fn() {
          _this9.setState({
            submitting: false
          });
        };
        this.setState({
          submitting: true
        });
        callback(fn);
      },
      render: function render() {
        var _props = this.props,
            wrappedComponentRef = _props.wrappedComponentRef,
            restProps = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_props, ['wrappedComponentRef']); // eslint-disable-line


        var formProps = babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, formPropName, this.getForm());
        if (withRef) {
          if (true) {
            warning__WEBPACK_IMPORTED_MODULE_8___default()(false, '`withRef` is deprecated, please use `wrappedComponentRef` instead. ' + 'See: https://github.com/react-component/form#note-use-wrappedcomponentref-instead-of-withref-after-rc-form140');
          }
          formProps.ref = 'wrappedComponent';
        } else if (wrappedComponentRef) {
          formProps.ref = wrappedComponentRef;
        }
        var props = mapProps.call(this, babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, formProps, restProps));
        return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(WrappedComponent, props);
      }
    });

    return Object(_utils__WEBPACK_IMPORTED_MODULE_13__["argumentContainer"])(Object(rc_util_es_unsafeLifecyclesPolyfill__WEBPACK_IMPORTED_MODULE_6__["default"])(Form), WrappedComponent);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (createBaseForm);

/***/ }),

/***/ "./node_modules/rc-form/es/createFieldsStore.js":
/*!******************************************************!*\
  !*** ./node_modules/rc-form/es/createFieldsStore.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createFieldsStore; });
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/set */ "./node_modules/lodash/set.js");
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_set__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _createFormField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createFormField */ "./node_modules/rc-form/es/createFormField.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./node_modules/rc-form/es/utils.js");








function partOf(a, b) {
  return b.indexOf(a) === 0 && ['.', '['].indexOf(b[a.length]) !== -1;
}

function internalFlattenFields(fields) {
  return Object(_utils__WEBPACK_IMPORTED_MODULE_6__["flattenFields"])(fields, function (_, node) {
    return Object(_createFormField__WEBPACK_IMPORTED_MODULE_5__["isFormField"])(node);
  }, 'You must wrap field data with `createFormField`.');
}

var FieldsStore = function () {
  function FieldsStore(fields) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, FieldsStore);

    _initialiseProps.call(this);

    this.fields = internalFlattenFields(fields);
    this.fieldsMeta = {};
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(FieldsStore, [{
    key: 'updateFields',
    value: function updateFields(fields) {
      this.fields = internalFlattenFields(fields);
    }
  }, {
    key: 'flattenRegisteredFields',
    value: function flattenRegisteredFields(fields) {
      var validFieldsName = this.getAllFieldsName();
      return Object(_utils__WEBPACK_IMPORTED_MODULE_6__["flattenFields"])(fields, function (path) {
        return validFieldsName.indexOf(path) >= 0;
      }, 'You cannot set a form field before rendering a field associated with the value.');
    }
  }, {
    key: 'setFields',
    value: function setFields(fields) {
      var _this = this;

      var fieldsMeta = this.fieldsMeta;
      var nowFields = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, this.fields, fields);
      var nowValues = {};
      Object.keys(fieldsMeta).forEach(function (f) {
        nowValues[f] = _this.getValueFromFields(f, nowFields);
      });
      Object.keys(nowValues).forEach(function (f) {
        var value = nowValues[f];
        var fieldMeta = _this.getFieldMeta(f);
        if (fieldMeta && fieldMeta.normalize) {
          var nowValue = fieldMeta.normalize(value, _this.getValueFromFields(f, _this.fields), nowValues);
          if (nowValue !== value) {
            nowFields[f] = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, nowFields[f], {
              value: nowValue
            });
          }
        }
      });
      this.fields = nowFields;
    }
  }, {
    key: 'resetFields',
    value: function resetFields(ns) {
      var fields = this.fields;

      var names = ns ? this.getValidFieldsFullName(ns) : this.getAllFieldsName();
      return names.reduce(function (acc, name) {
        var field = fields[name];
        if (field && 'value' in field) {
          acc[name] = {};
        }
        return acc;
      }, {});
    }
  }, {
    key: 'setFieldMeta',
    value: function setFieldMeta(name, meta) {
      this.fieldsMeta[name] = meta;
    }
  }, {
    key: 'setFieldsAsDirty',
    value: function setFieldsAsDirty() {
      var _this2 = this;

      Object.keys(this.fields).forEach(function (name) {
        var field = _this2.fields[name];
        var fieldMeta = _this2.fieldsMeta[name];
        if (field && fieldMeta && Object(_utils__WEBPACK_IMPORTED_MODULE_6__["hasRules"])(fieldMeta.validate)) {
          _this2.fields[name] = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, field, {
            dirty: true
          });
        }
      });
    }
  }, {
    key: 'getFieldMeta',
    value: function getFieldMeta(name) {
      this.fieldsMeta[name] = this.fieldsMeta[name] || {};
      return this.fieldsMeta[name];
    }
  }, {
    key: 'getValueFromFields',
    value: function getValueFromFields(name, fields) {
      var field = fields[name];
      if (field && 'value' in field) {
        return field.value;
      }
      var fieldMeta = this.getFieldMeta(name);
      return fieldMeta && fieldMeta.initialValue;
    }
  }, {
    key: 'getValidFieldsName',
    value: function getValidFieldsName() {
      var _this3 = this;

      var fieldsMeta = this.fieldsMeta;

      return fieldsMeta ? Object.keys(fieldsMeta).filter(function (name) {
        return !_this3.getFieldMeta(name).hidden;
      }) : [];
    }
  }, {
    key: 'getAllFieldsName',
    value: function getAllFieldsName() {
      var fieldsMeta = this.fieldsMeta;

      return fieldsMeta ? Object.keys(fieldsMeta) : [];
    }
  }, {
    key: 'getValidFieldsFullName',
    value: function getValidFieldsFullName(maybePartialName) {
      var maybePartialNames = Array.isArray(maybePartialName) ? maybePartialName : [maybePartialName];
      return this.getValidFieldsName().filter(function (fullName) {
        return maybePartialNames.some(function (partialName) {
          return fullName === partialName || Object(_utils__WEBPACK_IMPORTED_MODULE_6__["startsWith"])(fullName, partialName) && ['.', '['].indexOf(fullName[partialName.length]) >= 0;
        });
      });
    }
  }, {
    key: 'getFieldValuePropValue',
    value: function getFieldValuePropValue(fieldMeta) {
      var name = fieldMeta.name,
          getValueProps = fieldMeta.getValueProps,
          valuePropName = fieldMeta.valuePropName;

      var field = this.getField(name);
      var fieldValue = 'value' in field ? field.value : fieldMeta.initialValue;
      if (getValueProps) {
        return getValueProps(fieldValue);
      }
      return babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, valuePropName, fieldValue);
    }
  }, {
    key: 'getField',
    value: function getField(name) {
      return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, this.fields[name], {
        name: name
      });
    }
  }, {
    key: 'getNotCollectedFields',
    value: function getNotCollectedFields() {
      var _this4 = this;

      var fieldsName = this.getValidFieldsName();
      return fieldsName.filter(function (name) {
        return !_this4.fields[name];
      }).map(function (name) {
        return {
          name: name,
          dirty: false,
          value: _this4.getFieldMeta(name).initialValue
        };
      }).reduce(function (acc, field) {
        return lodash_set__WEBPACK_IMPORTED_MODULE_4___default()(acc, field.name, Object(_createFormField__WEBPACK_IMPORTED_MODULE_5__["default"])(field));
      }, {});
    }
  }, {
    key: 'getNestedAllFields',
    value: function getNestedAllFields() {
      var _this5 = this;

      return Object.keys(this.fields).reduce(function (acc, name) {
        return lodash_set__WEBPACK_IMPORTED_MODULE_4___default()(acc, name, Object(_createFormField__WEBPACK_IMPORTED_MODULE_5__["default"])(_this5.fields[name]));
      }, this.getNotCollectedFields());
    }
  }, {
    key: 'getFieldMember',
    value: function getFieldMember(name, member) {
      return this.getField(name)[member];
    }
  }, {
    key: 'getNestedFields',
    value: function getNestedFields(names, getter) {
      var fields = names || this.getValidFieldsName();
      return fields.reduce(function (acc, f) {
        return lodash_set__WEBPACK_IMPORTED_MODULE_4___default()(acc, f, getter(f));
      }, {});
    }
  }, {
    key: 'getNestedField',
    value: function getNestedField(name, getter) {
      var fullNames = this.getValidFieldsFullName(name);
      if (fullNames.length === 0 || // Not registered
      fullNames.length === 1 && fullNames[0] === name // Name already is full name.
      ) {
          return getter(name);
        }
      var isArrayValue = fullNames[0][name.length] === '[';
      var suffixNameStartIndex = isArrayValue ? name.length : name.length + 1;
      return fullNames.reduce(function (acc, fullName) {
        return lodash_set__WEBPACK_IMPORTED_MODULE_4___default()(acc, fullName.slice(suffixNameStartIndex), getter(fullName));
      }, isArrayValue ? [] : {});
    }
  }, {
    key: 'isValidNestedFieldName',


    // @private
    // BG: `a` and `a.b` cannot be use in the same form
    value: function isValidNestedFieldName(name) {
      var names = this.getAllFieldsName();
      return names.every(function (n) {
        return !partOf(n, name) && !partOf(name, n);
      });
    }
  }, {
    key: 'clearField',
    value: function clearField(name) {
      delete this.fields[name];
      delete this.fieldsMeta[name];
    }
  }]);

  return FieldsStore;
}();

var _initialiseProps = function _initialiseProps() {
  var _this6 = this;

  this.setFieldsInitialValue = function (initialValues) {
    var flattenedInitialValues = _this6.flattenRegisteredFields(initialValues);
    var fieldsMeta = _this6.fieldsMeta;
    Object.keys(flattenedInitialValues).forEach(function (name) {
      if (fieldsMeta[name]) {
        _this6.setFieldMeta(name, babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, _this6.getFieldMeta(name), {
          initialValue: flattenedInitialValues[name]
        }));
      }
    });
  };

  this.getAllValues = function () {
    var fieldsMeta = _this6.fieldsMeta,
        fields = _this6.fields;

    return Object.keys(fieldsMeta).reduce(function (acc, name) {
      return lodash_set__WEBPACK_IMPORTED_MODULE_4___default()(acc, name, _this6.getValueFromFields(name, fields));
    }, {});
  };

  this.getFieldsValue = function (names) {
    return _this6.getNestedFields(names, _this6.getFieldValue);
  };

  this.getFieldValue = function (name) {
    var fields = _this6.fields;

    return _this6.getNestedField(name, function (fullName) {
      return _this6.getValueFromFields(fullName, fields);
    });
  };

  this.getFieldsError = function (names) {
    return _this6.getNestedFields(names, _this6.getFieldError);
  };

  this.getFieldError = function (name) {
    return _this6.getNestedField(name, function (fullName) {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_6__["getErrorStrs"])(_this6.getFieldMember(fullName, 'errors'));
    });
  };

  this.isFieldValidating = function (name) {
    return _this6.getFieldMember(name, 'validating');
  };

  this.isFieldsValidating = function (ns) {
    var names = ns || _this6.getValidFieldsName();
    return names.some(function (n) {
      return _this6.isFieldValidating(n);
    });
  };

  this.isFieldTouched = function (name) {
    return _this6.getFieldMember(name, 'touched');
  };

  this.isFieldsTouched = function (ns) {
    var names = ns || _this6.getValidFieldsName();
    return names.some(function (n) {
      return _this6.isFieldTouched(n);
    });
  };
};

function createFieldsStore(fields) {
  return new FieldsStore(fields);
}

/***/ }),

/***/ "./node_modules/rc-form/es/createForm.js":
/*!***********************************************!*\
  !*** ./node_modules/rc-form/es/createForm.js ***!
  \***********************************************/
/*! exports provided: mixin, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixin", function() { return mixin; });
/* harmony import */ var _createBaseForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createBaseForm */ "./node_modules/rc-form/es/createBaseForm.js");


var mixin = {
  getForm: function getForm() {
    return {
      getFieldsValue: this.fieldsStore.getFieldsValue,
      getFieldValue: this.fieldsStore.getFieldValue,
      getFieldInstance: this.getFieldInstance,
      setFieldsValue: this.setFieldsValue,
      setFields: this.setFields,
      setFieldsInitialValue: this.fieldsStore.setFieldsInitialValue,
      getFieldDecorator: this.getFieldDecorator,
      getFieldProps: this.getFieldProps,
      getFieldsError: this.fieldsStore.getFieldsError,
      getFieldError: this.fieldsStore.getFieldError,
      isFieldValidating: this.fieldsStore.isFieldValidating,
      isFieldsValidating: this.fieldsStore.isFieldsValidating,
      isFieldsTouched: this.fieldsStore.isFieldsTouched,
      isFieldTouched: this.fieldsStore.isFieldTouched,
      isSubmitting: this.isSubmitting,
      submit: this.submit,
      validateFields: this.validateFields,
      resetFields: this.resetFields
    };
  }
};

function createForm(options) {
  return Object(_createBaseForm__WEBPACK_IMPORTED_MODULE_0__["default"])(options, [mixin]);
}

/* harmony default export */ __webpack_exports__["default"] = (createForm);

/***/ }),

/***/ "./node_modules/rc-form/es/createFormField.js":
/*!****************************************************!*\
  !*** ./node_modules/rc-form/es/createFormField.js ***!
  \****************************************************/
/*! exports provided: isFormField, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFormField", function() { return isFormField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createFormField; });
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);



var Field = function Field(fields) {
  babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Field);

  babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()(this, fields);
};

function isFormField(obj) {
  return obj instanceof Field;
}

function createFormField(field) {
  if (isFormField(field)) {
    return field;
  }
  return new Field(field);
}

/***/ }),

/***/ "./node_modules/rc-form/es/index.js":
/*!******************************************!*\
  !*** ./node_modules/rc-form/es/index.js ***!
  \******************************************/
/*! exports provided: createFormField, formShape, createForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createForm */ "./node_modules/rc-form/es/createForm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createForm", function() { return _createForm__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _createFormField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createFormField */ "./node_modules/rc-form/es/createFormField.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createFormField", function() { return _createFormField__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _propTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./propTypes */ "./node_modules/rc-form/es/propTypes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formShape", function() { return _propTypes__WEBPACK_IMPORTED_MODULE_2__["default"]; });

// export this package's api






/***/ }),

/***/ "./node_modules/rc-form/es/propTypes.js":
/*!**********************************************!*\
  !*** ./node_modules/rc-form/es/propTypes.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);


var formShape = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  getFieldsValue: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  getFieldValue: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  getFieldInstance: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  setFieldsValue: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  setFields: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  setFieldsInitialValue: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  getFieldDecorator: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  getFieldProps: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  getFieldsError: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  getFieldError: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  isFieldValidating: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  isFieldsValidating: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  isFieldsTouched: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  isFieldTouched: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  isSubmitting: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  submit: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  validateFields: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  resetFields: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func
});

/* harmony default export */ __webpack_exports__["default"] = (formShape);

/***/ }),

/***/ "./node_modules/rc-form/es/utils.js":
/*!******************************************!*\
  !*** ./node_modules/rc-form/es/utils.js ***!
  \******************************************/
/*! exports provided: argumentContainer, identity, flattenArray, treeTraverse, flattenFields, normalizeValidateRules, getValidateTriggers, getValueFromEvent, getErrorStrs, getParams, isEmptyObject, hasRules, startsWith */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "argumentContainer", function() { return argumentContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flattenArray", function() { return flattenArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "treeTraverse", function() { return treeTraverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flattenFields", function() { return flattenFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeValidateRules", function() { return normalizeValidateRules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValidateTriggers", function() { return getValidateTriggers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValueFromEvent", function() { return getValueFromEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getErrorStrs", function() { return getErrorStrs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParams", function() { return getParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmptyObject", function() { return isEmptyObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasRules", function() { return hasRules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startsWith", function() { return startsWith; });
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_2__);




function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'WrappedComponent';
}

function argumentContainer(Container, WrappedComponent) {
  /* eslint no-param-reassign:0 */
  Container.displayName = 'Form(' + getDisplayName(WrappedComponent) + ')';
  Container.WrappedComponent = WrappedComponent;
  return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1___default()(Container, WrappedComponent);
}

function identity(obj) {
  return obj;
}

function flattenArray(arr) {
  return Array.prototype.concat.apply([], arr);
}

function treeTraverse() {
  var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var tree = arguments[1];
  var isLeafNode = arguments[2];
  var errorMessage = arguments[3];
  var callback = arguments[4];

  if (isLeafNode(path, tree)) {
    callback(path, tree);
  } else if (tree === undefined || tree === null) {
    // Do nothing
  } else if (Array.isArray(tree)) {
    tree.forEach(function (subTree, index) {
      return treeTraverse(path + '[' + index + ']', subTree, isLeafNode, errorMessage, callback);
    });
  } else {
    // It's object and not a leaf node
    if (typeof tree !== 'object') {
      warning__WEBPACK_IMPORTED_MODULE_2___default()(false, errorMessage);
      return;
    }
    Object.keys(tree).forEach(function (subTreeKey) {
      var subTree = tree[subTreeKey];
      treeTraverse('' + path + (path ? '.' : '') + subTreeKey, subTree, isLeafNode, errorMessage, callback);
    });
  }
}

function flattenFields(maybeNestedFields, isLeafNode, errorMessage) {
  var fields = {};
  treeTraverse(undefined, maybeNestedFields, isLeafNode, errorMessage, function (path, node) {
    fields[path] = node;
  });
  return fields;
}

function normalizeValidateRules(validate, rules, validateTrigger) {
  var validateRules = validate.map(function (item) {
    var newItem = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, item, {
      trigger: item.trigger || []
    });
    if (typeof newItem.trigger === 'string') {
      newItem.trigger = [newItem.trigger];
    }
    return newItem;
  });
  if (rules) {
    validateRules.push({
      trigger: validateTrigger ? [].concat(validateTrigger) : [],
      rules: rules
    });
  }
  return validateRules;
}

function getValidateTriggers(validateRules) {
  return validateRules.filter(function (item) {
    return !!item.rules && item.rules.length;
  }).map(function (item) {
    return item.trigger;
  }).reduce(function (pre, curr) {
    return pre.concat(curr);
  }, []);
}

function getValueFromEvent(e) {
  // To support custom element
  if (!e || !e.target) {
    return e;
  }
  var target = e.target;

  return target.type === 'checkbox' ? target.checked : target.value;
}

function getErrorStrs(errors) {
  if (errors) {
    return errors.map(function (e) {
      if (e && e.message) {
        return e.message;
      }
      return e;
    });
  }
  return errors;
}

function getParams(ns, opt, cb) {
  var names = ns;
  var options = opt;
  var callback = cb;
  if (cb === undefined) {
    if (typeof names === 'function') {
      callback = names;
      options = {};
      names = undefined;
    } else if (Array.isArray(names)) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      } else {
        options = options || {};
      }
    } else {
      callback = options;
      options = names || {};
      names = undefined;
    }
  }
  return {
    names: names,
    options: options,
    callback: callback
  };
}

function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}

function hasRules(validate) {
  if (validate) {
    return validate.some(function (item) {
      return item.rules && item.rules.length;
    });
  }
  return false;
}

function startsWith(str, prefix) {
  return str.lastIndexOf(prefix, 0) === 0;
}

/***/ }),

/***/ "./node_modules/rmc-feedback/es/TouchFeedback.js":
/*!*******************************************************!*\
  !*** ./node_modules/rmc-feedback/es/TouchFeedback.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);








var TouchFeedback = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(TouchFeedback, _React$Component);

    function TouchFeedback() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, TouchFeedback);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (TouchFeedback.__proto__ || Object.getPrototypeOf(TouchFeedback)).apply(this, arguments));

        _this.state = {
            active: false
        };
        _this.onTouchStart = function (e) {
            _this.triggerEvent('TouchStart', true, e);
        };
        _this.onTouchMove = function (e) {
            _this.triggerEvent('TouchMove', false, e);
        };
        _this.onTouchEnd = function (e) {
            _this.triggerEvent('TouchEnd', false, e);
        };
        _this.onTouchCancel = function (e) {
            _this.triggerEvent('TouchCancel', false, e);
        };
        _this.onMouseDown = function (e) {
            // pc simulate mobile
            _this.triggerEvent('MouseDown', true, e);
        };
        _this.onMouseUp = function (e) {
            _this.triggerEvent('MouseUp', false, e);
        };
        _this.onMouseLeave = function (e) {
            _this.triggerEvent('MouseLeave', false, e);
        };
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(TouchFeedback, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            if (this.props.disabled && this.state.active) {
                this.setState({
                    active: false
                });
            }
        }
    }, {
        key: 'triggerEvent',
        value: function triggerEvent(type, isActive, ev) {
            var eventType = 'on' + type;
            var children = this.props.children;

            if (children.props[eventType]) {
                children.props[eventType](ev);
            }
            if (isActive !== this.state.active) {
                this.setState({
                    active: isActive
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                disabled = _props.disabled,
                activeClassName = _props.activeClassName,
                activeStyle = _props.activeStyle;

            var events = disabled ? undefined : {
                onTouchStart: this.onTouchStart,
                onTouchMove: this.onTouchMove,
                onTouchEnd: this.onTouchEnd,
                onTouchCancel: this.onTouchCancel,
                onMouseDown: this.onMouseDown,
                onMouseUp: this.onMouseUp,
                onMouseLeave: this.onMouseLeave
            };
            var child = react__WEBPACK_IMPORTED_MODULE_5___default.a.Children.only(children);
            if (!disabled && this.state.active) {
                var _child$props = child.props,
                    style = _child$props.style,
                    className = _child$props.className;

                if (activeStyle !== false) {
                    if (activeStyle) {
                        style = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, style, activeStyle);
                    }
                    className = classnames__WEBPACK_IMPORTED_MODULE_6___default()(className, activeClassName);
                }
                return react__WEBPACK_IMPORTED_MODULE_5___default.a.cloneElement(child, babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ className: className,
                    style: style }, events));
            }
            return react__WEBPACK_IMPORTED_MODULE_5___default.a.cloneElement(child, events);
        }
    }]);

    return TouchFeedback;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TouchFeedback);

TouchFeedback.defaultProps = {
    disabled: false
};

/***/ }),

/***/ "./node_modules/rmc-feedback/es/index.js":
/*!***********************************************!*\
  !*** ./node_modules/rmc-feedback/es/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TouchFeedback__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TouchFeedback */ "./node_modules/rmc-feedback/es/TouchFeedback.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _TouchFeedback__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/rmc-notification/es/Notice.js":
/*!****************************************************!*\
  !*** ./node_modules/rmc-notification/es/Notice.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);









var Notice = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Notice, _Component);

  function Notice() {
    var _ref;

    var _temp, _this, _ret;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Notice);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_ref = Notice.__proto__ || Object.getPrototypeOf(Notice)).call.apply(_ref, [this].concat(args))), _this), _this.close = function () {
      _this.clearCloseTimer();
      _this.props.onClose();
    }, _this.startCloseTimer = function () {
      if (_this.props.duration) {
        _this.closeTimer = setTimeout(function () {
          _this.close();
        }, _this.props.duration * 1000);
      }
    }, _this.clearCloseTimer = function () {
      if (_this.closeTimer) {
        clearTimeout(_this.closeTimer);
        _this.closeTimer = null;
      }
    }, _temp), babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(_this, _ret);
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Notice, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.startCloseTimer();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.clearCloseTimer();
    }
  }, {
    key: 'render',
    value: function render() {
      var _className;

      var props = this.props;
      var componentClass = props.prefixCls + '-notice';
      var className = (_className = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_className, '' + componentClass, 1), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_className, componentClass + '-closable', props.closable), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_className, props.className, !!props.className), _className);
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
        'div',
        { className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(className), style: props.style },
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
          'div',
          { className: componentClass + '-content' },
          props.children
        ),
        props.closable ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
          'a',
          { tabIndex: '0', onClick: this.close, className: componentClass + '-close' },
          react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('span', { className: componentClass + '-close-x' })
        ) : null
      );
    }
  }]);

  return Notice;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

Notice.propTypes = {
  duration: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.any
};
Notice.defaultProps = {
  onEnd: function onEnd() {},
  onClose: function onClose() {},

  duration: 1.5,
  style: {
    right: '50%'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Notice);

/***/ }),

/***/ "./node_modules/rmc-notification/es/Notification.js":
/*!**********************************************************!*\
  !*** ./node_modules/rmc-notification/es/Notification.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var rc_animate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rc-animate */ "./node_modules/rc-animate/es/Animate.js");
/* harmony import */ var rc_util_es_createChainedFunction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rc-util/es/createChainedFunction */ "./node_modules/rc-util/es/createChainedFunction.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Notice__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Notice */ "./node_modules/rmc-notification/es/Notice.js");















var seed = 0;
var now = Date.now();

function getUuid() {
  return 'rcNotification_' + now + '_' + seed++;
}

var Notification = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Notification, _Component);

  function Notification() {
    var _ref;

    var _temp, _this, _ret;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Notification);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (_ref = Notification.__proto__ || Object.getPrototypeOf(Notification)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      notices: []
    }, _this.add = function (notice) {
      var key = notice.key = notice.key || getUuid();
      _this.setState(function (previousState) {
        var notices = previousState.notices;
        if (!notices.filter(function (v) {
          return v.key === key;
        }).length) {
          return {
            notices: notices.concat(notice)
          };
        }
      });
    }, _this.remove = function (key) {
      _this.setState(function (previousState) {
        return {
          notices: previousState.notices.filter(function (notice) {
            return notice.key !== key;
          })
        };
      });
    }, _temp), babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(_this, _ret);
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Notification, [{
    key: 'getTransitionName',
    value: function getTransitionName() {
      var props = this.props;
      var transitionName = props.transitionName;
      if (!transitionName && props.animation) {
        transitionName = props.prefixCls + '-' + props.animation;
      }
      return transitionName;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this,
          _className;

      var props = this.props;
      var noticeNodes = this.state.notices.map(function (notice) {
        var onClose = Object(rc_util_es_createChainedFunction__WEBPACK_IMPORTED_MODULE_11__["default"])(_this2.remove.bind(_this2, notice.key), notice.onClose);
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          _Notice__WEBPACK_IMPORTED_MODULE_13__["default"],
          babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({
            prefixCls: props.prefixCls
          }, notice, {
            onClose: onClose
          }),
          notice.content
        );
      });
      var className = (_className = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_className, props.prefixCls, 1), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_className, props.className, !!props.className), _className);
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        'div',
        { className: classnames__WEBPACK_IMPORTED_MODULE_12___default()(className), style: props.style },
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          rc_animate__WEBPACK_IMPORTED_MODULE_10__["default"],
          { transitionName: this.getTransitionName() },
          noticeNodes
        )
      );
    }
  }]);

  return Notification;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

Notification.propTypes = {
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  transitionName: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  animation: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object]),
  style: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object
};
Notification.defaultProps = {
  prefixCls: 'rmc-notification',
  animation: 'fade',
  style: {
    top: 65,
    left: '50%'
  }
};


Notification.newInstance = function newNotificationInstance(properties, callback) {
  var _ref2 = properties || {},
      getContainer = _ref2.getContainer,
      props = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref2, ['getContainer']);

  var div = void 0;
  if (getContainer) {
    div = getContainer();
  } else {
    div = document.createElement('div');
    document.body.appendChild(div);
  }
  var called = false;
  function ref(notification) {
    if (called) {
      return;
    }
    called = true;
    callback({
      notice: function notice(noticeProps) {
        notification.add(noticeProps);
      },
      removeNotice: function removeNotice(key) {
        notification.remove(key);
      },

      component: notification,
      destroy: function destroy() {
        react_dom__WEBPACK_IMPORTED_MODULE_9___default.a.unmountComponentAtNode(div);
        if (!getContainer) {
          document.body.removeChild(div);
        }
      }
    });
  }
  react_dom__WEBPACK_IMPORTED_MODULE_9___default.a.render(react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Notification, babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, props, { ref: ref })), div);
};

/* harmony default export */ __webpack_exports__["default"] = (Notification);

/***/ }),

/***/ "./node_modules/rmc-notification/es/index.js":
/*!***************************************************!*\
  !*** ./node_modules/rmc-notification/es/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Notification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Notification */ "./node_modules/rmc-notification/es/Notification.js");

/* harmony default export */ __webpack_exports__["default"] = (_Notification__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC1tb2JpbGUvbGliL191dGlsL2NsYXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkLW1vYmlsZS9saWIvX3V0aWwvZXhlbnYuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQtbW9iaWxlL2xpYi9fdXRpbC9nZXRMb2NhbGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQtbW9iaWxlL2xpYi9idXR0b24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQtbW9iaWxlL2xpYi9idXR0b24vc3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQtbW9iaWxlL2xpYi9idXR0b24vc3R5bGUvaW5kZXgubGVzcz8xMmJkIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkLW1vYmlsZS9saWIvaWNvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC1tb2JpbGUvbGliL2ljb24vbG9hZFNwcml0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC1tb2JpbGUvbGliL2ljb24vc3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQtbW9iaWxlL2xpYi9pY29uL3N0eWxlL2luZGV4Lmxlc3M/NGY5ZCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC1tb2JpbGUvbGliL2lucHV0LWl0ZW0vQ3VzdG9tSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQtbW9iaWxlL2xpYi9pbnB1dC1pdGVtL0N1c3RvbUtleWJvYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkLW1vYmlsZS9saWIvaW5wdXQtaXRlbS9JbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC1tb2JpbGUvbGliL2lucHV0LWl0ZW0vUG9ydGFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkLW1vYmlsZS9saWIvaW5wdXQtaXRlbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC1tb2JpbGUvbGliL2lucHV0LWl0ZW0vbG9jYWxlL3poX0NOLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkLW1vYmlsZS9saWIvaW5wdXQtaXRlbS9zdHlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC1tb2JpbGUvbGliL2lucHV0LWl0ZW0vc3R5bGUvaW5kZXgubGVzcz83MjhmIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkLW1vYmlsZS9saWIvbGlzdC9MaXN0SXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC1tb2JpbGUvbGliL2xpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQtbW9iaWxlL2xpYi9saXN0L3N0eWxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkLW1vYmlsZS9saWIvbGlzdC9zdHlsZS9pbmRleC5sZXNzPzZhM2QiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQtbW9iaWxlL2xpYi9zdHlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC1tb2JpbGUvbGliL3N0eWxlL2luZGV4Lmxlc3M/MjY1YyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC1tb2JpbGUvbGliL3RvYXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkLW1vYmlsZS9saWIvdG9hc3Qvc3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQtbW9iaWxlL2xpYi90b2FzdC9zdHlsZS9pbmRleC5sZXNzPzE3MTEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQtbW9iaWxlL2xpYi9idXR0b24vc3R5bGUvaW5kZXgubGVzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC1tb2JpbGUvbGliL2ljb24vc3R5bGUvaW5kZXgubGVzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC1tb2JpbGUvbGliL2lucHV0LWl0ZW0vc3R5bGUvaW5kZXgubGVzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC1tb2JpbGUvbGliL2xpc3Qvc3R5bGUvaW5kZXgubGVzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC1tb2JpbGUvbGliL3N0eWxlL2luZGV4Lmxlc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQtbW9iaWxlL2xpYi90b2FzdC9zdHlsZS9pbmRleC5sZXNzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzcz8yNWQ1Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy1mb3JtL2VzL2NyZWF0ZUJhc2VGb3JtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy1mb3JtL2VzL2NyZWF0ZUZpZWxkc1N0b3JlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy1mb3JtL2VzL2NyZWF0ZUZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLWZvcm0vZXMvY3JlYXRlRm9ybUZpZWxkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy1mb3JtL2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy1mb3JtL2VzL3Byb3BUeXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtZm9ybS9lcy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcm1jLWZlZWRiYWNrL2VzL1RvdWNoRmVlZGJhY2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JtYy1mZWVkYmFjay9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcm1jLW5vdGlmaWNhdGlvbi9lcy9Ob3RpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JtYy1ub3RpZmljYXRpb24vZXMvTm90aWZpY2F0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ybWMtbm90aWZpY2F0aW9uL2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTs7QUFFYjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsZ0c7Ozs7Ozs7Ozs7OztBQ05hOztBQUViO0FBQ0E7QUFDQSxDQUFDOztBQUVELGdCQUFnQixtQkFBTyxDQUFDLHNGQUErQjs7QUFFdkQ7O0FBRUE7QUFDQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGtCQUFrQjs7QUFFL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBLDZDQUE2QztBQUM3QztBQUNBLHNEQUFzRDtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDekNhOztBQUViO0FBQ0E7QUFDQSxDQUFDOztBQUVELGdCQUFnQixtQkFBTyxDQUFDLHNGQUErQjs7QUFFdkQ7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a0MsMkVBQWU7QUFDeEcsYUFBYSw0Q0FBSztBQUNsQjtBQUNBLFNBQVMsWUFBWSxrREFBVSxpQ0FBaUM7QUFDaEUsUUFBUSw0Q0FBSztBQUNiLFVBQVUsbURBQU87QUFDakIsV0FBVywyQ0FBMkM7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQyxDQUFDLCtDQUFTOztBQUVYO0FBQ0EsYUFBYSxpREFBUztBQUN0QixrQkFBa0IsaURBQVM7QUFDM0IsYUFBYSxpREFBUyxZQUFZLGlEQUFTLFNBQVMsaURBQVM7QUFDN0QsU0FBUyxpREFBUztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0EsY0FBYyxvRkFBd0I7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBLFFBQVEsZ0RBQVE7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxFQUFFLGdEQUFRLFFBQVEsNENBQUssNkJBQTZCLG9FQUFRLEdBQUcsVUFBVSxXQUFXO0FBQ3BGOztBQUVlLDJFQUFZLEU7Ozs7Ozs7Ozs7OztBQ2hLM0I7QUFBQTtBQUEwQztBQUMzQixvSEFBWSxFIiwiZmlsZSI6InZlbmRvcnN+aHFxZnJvbnRfZmFiODYzNzU5MzM2NmIwNGQ3MTguanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuaGFzQ2xhc3MgPSBoYXNDbGFzcztcbmV4cG9ydHMuYWRkQ2xhc3MgPSBhZGRDbGFzcztcbmV4cG9ydHMucmVtb3ZlQ2xhc3MgPSByZW1vdmVDbGFzcztcbmZ1bmN0aW9uIGhhc0NsYXNzKG5vZGUsIGNsYXNzTmFtZSkge1xuICAgIGlmIChub2RlLmNsYXNzTGlzdCkge1xuICAgICAgICByZXR1cm4gbm9kZS5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTtcbiAgICB9XG4gICAgdmFyIG9yaWdpbkNsYXNzID0gbm9kZS5jbGFzc05hbWU7XG4gICAgcmV0dXJuICgnICcgKyBvcmlnaW5DbGFzcyArICcgJykuaW5kZXhPZignICcgKyBjbGFzc05hbWUgKyAnICcpID4gLTE7XG59XG5mdW5jdGlvbiBhZGRDbGFzcyhub2RlLCBjbGFzc05hbWUpIHtcbiAgICBpZiAobm9kZS5jbGFzc0xpc3QpIHtcbiAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFoYXNDbGFzcyhub2RlLCBjbGFzc05hbWUpKSB7XG4gICAgICAgICAgICBub2RlLmNsYXNzTmFtZSA9IG5vZGUuY2xhc3NOYW1lICsgJyAnICsgY2xhc3NOYW1lO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gcmVtb3ZlQ2xhc3Mobm9kZSwgY2xhc3NOYW1lKSB7XG4gICAgaWYgKG5vZGUuY2xhc3NMaXN0KSB7XG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChoYXNDbGFzcyhub2RlLCBjbGFzc05hbWUpKSB7XG4gICAgICAgICAgICB2YXIgb3JpZ2luQ2xhc3MgPSBub2RlLmNsYXNzTmFtZTtcbiAgICAgICAgICAgIG5vZGUuY2xhc3NOYW1lID0gKCcgJyArIG9yaWdpbkNsYXNzICsgJyAnKS5yZXBsYWNlKCcgJyArIGNsYXNzTmFtZSArICcgJywgJycpO1xuICAgICAgICB9XG4gICAgfVxufSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xudmFyIGNhblVzZURPTSA9IGV4cG9ydHMuY2FuVXNlRE9NID0gISEodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50ICYmIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbnZhciBJU19JT1MgPSBleHBvcnRzLklTX0lPUyA9IGNhblVzZURPTSAmJiAvaXBob25lfGlwYWR8aXBvZC9pLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKTtcblxudmFyIF9leHRlbmRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dGVuZHMyKTtcblxuZXhwb3J0cy5nZXRDb21wb25lbnRMb2NhbGUgPSBnZXRDb21wb25lbnRMb2NhbGU7XG5leHBvcnRzLmdldExvY2FsZUNvZGUgPSBnZXRMb2NhbGVDb2RlO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudExvY2FsZShwcm9wcywgY29udGV4dCwgY29tcG9uZW50TmFtZSwgZ2V0RGVmYXVsdExvY2FsZSkge1xuICAgIHZhciBsb2NhbGUgPSB7fTtcbiAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0LmFudExvY2FsZSAmJiBjb250ZXh0LmFudExvY2FsZVtjb21wb25lbnROYW1lXSkge1xuICAgICAgICBsb2NhbGUgPSBjb250ZXh0LmFudExvY2FsZVtjb21wb25lbnROYW1lXTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgZGVmYXVsdExvY2FsZSA9IGdldERlZmF1bHRMb2NhbGUoKTtcbiAgICAgICAgLy8gVE9ETzogbWFrZSBkZWZhdWx0IGxhbmcgb2YgYW50ZCBiZSBFbmdsaXNoXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzYzMzRcbiAgICAgICAgbG9jYWxlID0gZGVmYXVsdExvY2FsZVsnZGVmYXVsdCddIHx8IGRlZmF1bHRMb2NhbGU7XG4gICAgfVxuICAgIHZhciByZXN1bHQgPSAoMCwgX2V4dGVuZHMzWydkZWZhdWx0J10pKHt9LCBsb2NhbGUpO1xuICAgIGlmIChwcm9wcy5sb2NhbGUpIHtcbiAgICAgICAgcmVzdWx0ID0gKDAsIF9leHRlbmRzM1snZGVmYXVsdCddKSh7fSwgcmVzdWx0LCBwcm9wcy5sb2NhbGUpO1xuICAgICAgICBpZiAocHJvcHMubG9jYWxlLmxhbmcpIHtcbiAgICAgICAgICAgIHJlc3VsdC5sYW5nID0gKDAsIF9leHRlbmRzM1snZGVmYXVsdCddKSh7fSwgbG9jYWxlLmxhbmcsIHByb3BzLmxvY2FsZS5sYW5nKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gZ2V0TG9jYWxlQ29kZShjb250ZXh0KSB7XG4gICAgdmFyIGxvY2FsZUNvZGUgPSBjb250ZXh0LmFudExvY2FsZSAmJiBjb250ZXh0LmFudExvY2FsZS5sb2NhbGU7XG4gICAgLy8gSGFkIHVzZSBMb2NhbGVQcm92aWRlIGJ1dCBkaWRuJ3Qgc2V0IGxvY2FsZVxuICAgIGlmIChjb250ZXh0LmFudExvY2FsZSAmJiBjb250ZXh0LmFudExvY2FsZS5leGlzdCAmJiAhbG9jYWxlQ29kZSkge1xuICAgICAgICByZXR1cm4gJ3poLWNuJztcbiAgICB9XG4gICAgcmV0dXJuIGxvY2FsZUNvZGU7XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xuXG52YXIgX2V4dGVuZHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kczIpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eScpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5Mik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lczIpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3JlYWN0KTtcblxudmFyIF9ybWNGZWVkYmFjayA9IHJlcXVpcmUoJ3JtYy1mZWVkYmFjaycpO1xuXG52YXIgX3JtY0ZlZWRiYWNrMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JtY0ZlZWRiYWNrKTtcblxudmFyIF9pY29uID0gcmVxdWlyZSgnLi4vaWNvbicpO1xuXG52YXIgX2ljb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaWNvbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmpbJ2RlZmF1bHQnXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9fcmVzdCA9IHVuZGVmaW5lZCAmJiB1bmRlZmluZWQuX19yZXN0IHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKSB0W3BdID0gc1twXTtcbiAgICB9aWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKSB0W3BbaV1dID0gc1twW2ldXTtcbiAgICB9cmV0dXJuIHQ7XG59O1xuXG52YXIgcnhUd29DTkNoYXIgPSAvXltcXHU0ZTAwLVxcdTlmYTVdezJ9JC87XG52YXIgaXNUd29DTkNoYXIgPSByeFR3b0NOQ2hhci50ZXN0LmJpbmQocnhUd29DTkNoYXIpO1xuZnVuY3Rpb24gaXNTdHJpbmcoc3RyKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnO1xufVxuLy8gSW5zZXJ0IG9uZSBzcGFjZSBiZXR3ZWVuIHR3byBjaGluZXNlIGNoYXJhY3RlcnMgYXV0b21hdGljYWxseS5cbmZ1bmN0aW9uIGluc2VydFNwYWNlKGNoaWxkKSB7XG4gICAgaWYgKGlzU3RyaW5nKGNoaWxkLnR5cGUpICYmIGlzVHdvQ05DaGFyKGNoaWxkLnByb3BzLmNoaWxkcmVuKSkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7fSwgY2hpbGQucHJvcHMuY2hpbGRyZW4uc3BsaXQoJycpLmpvaW4oJyAnKSk7XG4gICAgfVxuICAgIGlmIChpc1N0cmluZyhjaGlsZCkpIHtcbiAgICAgICAgaWYgKGlzVHdvQ05DaGFyKGNoaWxkKSkge1xuICAgICAgICAgICAgY2hpbGQgPSBjaGlsZC5zcGxpdCgnJykuam9pbignICcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIGNoaWxkXG4gICAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBjaGlsZDtcbn1cblxudmFyIEJ1dHRvbiA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgKDAsIF9pbmhlcml0czNbJ2RlZmF1bHQnXSkoQnV0dG9uLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIEJ1dHRvbigpIHtcbiAgICAgICAgKDAsIF9jbGFzc0NhbGxDaGVjazNbJ2RlZmF1bHQnXSkodGhpcywgQnV0dG9uKTtcbiAgICAgICAgcmV0dXJuICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjNbJ2RlZmF1bHQnXSkodGhpcywgKEJ1dHRvbi5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEJ1dHRvbikpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIH1cblxuICAgICgwLCBfY3JlYXRlQ2xhc3MzWydkZWZhdWx0J10pKEJ1dHRvbiwgW3tcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHZhciBfY2xhc3NuYW1lcztcblxuICAgICAgICAgICAgdmFyIF9hID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbiA9IF9hLmNoaWxkcmVuLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IF9hLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICBwcmVmaXhDbHMgPSBfYS5wcmVmaXhDbHMsXG4gICAgICAgICAgICAgICAgdHlwZSA9IF9hLnR5cGUsXG4gICAgICAgICAgICAgICAgc2l6ZSA9IF9hLnNpemUsXG4gICAgICAgICAgICAgICAgaW5saW5lID0gX2EuaW5saW5lLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkID0gX2EuZGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgaWNvbiA9IF9hLmljb24sXG4gICAgICAgICAgICAgICAgbG9hZGluZyA9IF9hLmxvYWRpbmcsXG4gICAgICAgICAgICAgICAgYWN0aXZlU3R5bGUgPSBfYS5hY3RpdmVTdHlsZSxcbiAgICAgICAgICAgICAgICBhY3RpdmVDbGFzc05hbWUgPSBfYS5hY3RpdmVDbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgb25DbGljayA9IF9hLm9uQ2xpY2ssXG4gICAgICAgICAgICAgICAgcmVzdFByb3BzID0gX19yZXN0KF9hLCBbXCJjaGlsZHJlblwiLCBcImNsYXNzTmFtZVwiLCBcInByZWZpeENsc1wiLCBcInR5cGVcIiwgXCJzaXplXCIsIFwiaW5saW5lXCIsIFwiZGlzYWJsZWRcIiwgXCJpY29uXCIsIFwibG9hZGluZ1wiLCBcImFjdGl2ZVN0eWxlXCIsIFwiYWN0aXZlQ2xhc3NOYW1lXCIsIFwib25DbGlja1wiXSk7XG4gICAgICAgICAgICB2YXIgaWNvblR5cGUgPSBsb2FkaW5nID8gJ2xvYWRpbmcnIDogaWNvbjtcbiAgICAgICAgICAgIHZhciB3cmFwQ2xzID0gKDAsIF9jbGFzc25hbWVzM1snZGVmYXVsdCddKShwcmVmaXhDbHMsIGNsYXNzTmFtZSwgKF9jbGFzc25hbWVzID0ge30sICgwLCBfZGVmaW5lUHJvcGVydHkzWydkZWZhdWx0J10pKF9jbGFzc25hbWVzLCBwcmVmaXhDbHMgKyAnLXByaW1hcnknLCB0eXBlID09PSAncHJpbWFyeScpLCAoMCwgX2RlZmluZVByb3BlcnR5M1snZGVmYXVsdCddKShfY2xhc3NuYW1lcywgcHJlZml4Q2xzICsgJy1naG9zdCcsIHR5cGUgPT09ICdnaG9zdCcpLCAoMCwgX2RlZmluZVByb3BlcnR5M1snZGVmYXVsdCddKShfY2xhc3NuYW1lcywgcHJlZml4Q2xzICsgJy13YXJuaW5nJywgdHlwZSA9PT0gJ3dhcm5pbmcnKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTNbJ2RlZmF1bHQnXSkoX2NsYXNzbmFtZXMsIHByZWZpeENscyArICctc21hbGwnLCBzaXplID09PSAnc21hbGwnKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTNbJ2RlZmF1bHQnXSkoX2NsYXNzbmFtZXMsIHByZWZpeENscyArICctaW5saW5lJywgaW5saW5lKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTNbJ2RlZmF1bHQnXSkoX2NsYXNzbmFtZXMsIHByZWZpeENscyArICctZGlzYWJsZWQnLCBkaXNhYmxlZCksICgwLCBfZGVmaW5lUHJvcGVydHkzWydkZWZhdWx0J10pKF9jbGFzc25hbWVzLCBwcmVmaXhDbHMgKyAnLWxvYWRpbmcnLCBsb2FkaW5nKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTNbJ2RlZmF1bHQnXSkoX2NsYXNzbmFtZXMsIHByZWZpeENscyArICctaWNvbicsICEhaWNvblR5cGUpLCBfY2xhc3NuYW1lcykpO1xuICAgICAgICAgICAgdmFyIGtpZHMgPSBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIGluc2VydFNwYWNlKTtcbiAgICAgICAgICAgIHZhciBpY29uRWwgPSB2b2lkIDA7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGljb25UeXBlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGljb25FbCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoX2ljb24yWydkZWZhdWx0J10sIHsgJ2FyaWEtaGlkZGVuJzogJ3RydWUnLCB0eXBlOiBpY29uVHlwZSwgc2l6ZTogc2l6ZSA9PT0gJ3NtYWxsJyA/ICd4eHMnIDogJ21kJywgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWljb24nIH0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpY29uVHlwZSkge1xuICAgICAgICAgICAgICAgIHZhciByYXdDbHMgPSBpY29uVHlwZS5wcm9wcyAmJiBpY29uVHlwZS5wcm9wcy5jbGFzc05hbWU7XG4gICAgICAgICAgICAgICAgdmFyIGNscyA9ICgwLCBfY2xhc3NuYW1lczNbJ2RlZmF1bHQnXSkoJ2FtLWljb24nLCBwcmVmaXhDbHMgKyAnLWljb24nLCBzaXplID09PSAnc21hbGwnID8gJ2FtLWljb24teHhzJyA6ICdhbS1pY29uLW1kJyk7XG4gICAgICAgICAgICAgICAgaWNvbkVsID0gUmVhY3QuY2xvbmVFbGVtZW50KGljb25UeXBlLCB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogcmF3Q2xzID8gcmF3Q2xzICsgJyAnICsgY2xzIDogY2xzXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB1c2UgZGl2LCBidXR0b24gbmF0aXZlIGlzIGJ1Z2d5IEB5aW1pbmdoZVxuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgX3JtY0ZlZWRiYWNrMlsnZGVmYXVsdCddXG4gICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmpzeC1uby1tdWx0aWxpbmUtanNcbiAgICAgICAgICAgICAgICAsXG4gICAgICAgICAgICAgICAgeyBhY3RpdmVDbGFzc05hbWU6IGFjdGl2ZUNsYXNzTmFtZSB8fCAoYWN0aXZlU3R5bGUgPyBwcmVmaXhDbHMgKyAnLWFjdGl2ZScgOiB1bmRlZmluZWQpLCBkaXNhYmxlZDogZGlzYWJsZWQsIGFjdGl2ZVN0eWxlOiBhY3RpdmVTdHlsZSB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdhJyxcbiAgICAgICAgICAgICAgICAgICAgKDAsIF9leHRlbmRzM1snZGVmYXVsdCddKSh7IHJvbGU6ICdidXR0b24nLCBjbGFzc05hbWU6IHdyYXBDbHMgfSwgcmVzdFByb3BzLCB7IG9uQ2xpY2s6IGRpc2FibGVkID8gdW5kZWZpbmVkIDogb25DbGljaywgJ2FyaWEtZGlzYWJsZWQnOiBkaXNhYmxlZCB9KSxcbiAgICAgICAgICAgICAgICAgICAgaWNvbkVsLFxuICAgICAgICAgICAgICAgICAgICBraWRzXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1dKTtcbiAgICByZXR1cm4gQnV0dG9uO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5CdXR0b24uZGVmYXVsdFByb3BzID0ge1xuICAgIHByZWZpeENsczogJ2FtLWJ1dHRvbicsXG4gICAgc2l6ZTogJ2xhcmdlJyxcbiAgICBpbmxpbmU6IGZhbHNlLFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICBhY3RpdmVTdHlsZToge31cbn07XG5leHBvcnRzWydkZWZhdWx0J10gPSBCdXR0b247XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbnJlcXVpcmUoJy4uLy4uL3N0eWxlLycpO1xuXG5yZXF1aXJlKCcuLi8uLi9pY29uL3N0eWxlLycpO1xuXG5yZXF1aXJlKCcuL2luZGV4Lmxlc3MnKTsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uLy4uL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9wb3N0Y3NzIS4vaW5kZXgubGVzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vLi4vLi4vbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3Bvc3Rjc3MhLi9pbmRleC5sZXNzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uLy4uL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9wb3N0Y3NzIS4vaW5kZXgubGVzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKTtcblxudmFyIF9leHRlbmRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dGVuZHMyKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcycpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNsYXNzMik7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybicpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIpO1xuXG52YXIgX2luaGVyaXRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cycpO1xuXG52YXIgX2luaGVyaXRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luaGVyaXRzMik7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3JlYWN0KTtcblxudmFyIF9sb2FkU3ByaXRlID0gcmVxdWlyZSgnLi9sb2FkU3ByaXRlJyk7XG5cbnZhciBfbG9hZFNwcml0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2FkU3ByaXRlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09ialsnZGVmYXVsdCddID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX19yZXN0ID0gdW5kZWZpbmVkICYmIHVuZGVmaW5lZC5fX3Jlc3QgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApIHRbcF0gPSBzW3BdO1xuICAgIH1pZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgIH1yZXR1cm4gdDtcbn07XG5cbnZhciBJY29uID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICAoMCwgX2luaGVyaXRzM1snZGVmYXVsdCddKShJY29uLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIEljb24oKSB7XG4gICAgICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szWydkZWZhdWx0J10pKHRoaXMsIEljb24pO1xuICAgICAgICByZXR1cm4gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuM1snZGVmYXVsdCddKSh0aGlzLCAoSWNvbi5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEljb24pKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICB9XG5cbiAgICAoMCwgX2NyZWF0ZUNsYXNzM1snZGVmYXVsdCddKShJY29uLCBbe1xuICAgICAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgICAgICgwLCBfbG9hZFNwcml0ZTJbJ2RlZmF1bHQnXSkoKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICAgICAgdHlwZSA9IF9hLnR5cGUsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gX2EuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgIHNpemUgPSBfYS5zaXplLFxuICAgICAgICAgICAgICAgIHJlc3RQcm9wcyA9IF9fcmVzdChfYSwgW1widHlwZVwiLCBcImNsYXNzTmFtZVwiLCBcInNpemVcIl0pO1xuICAgICAgICAgICAgdmFyIGNscyA9ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkoY2xhc3NOYW1lLCAnYW0taWNvbicsICdhbS1pY29uLScgKyB0eXBlLCAnYW0taWNvbi0nICsgc2l6ZSk7XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnc3ZnJyxcbiAgICAgICAgICAgICAgICAoMCwgX2V4dGVuZHMzWydkZWZhdWx0J10pKHsgY2xhc3NOYW1lOiBjbHMgfSwgcmVzdFByb3BzKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCd1c2UnLCB7IHhsaW5rSHJlZjogJyMnICsgdHlwZSB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1dKTtcbiAgICByZXR1cm4gSWNvbjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gSWNvbjtcblxuSWNvbi5kZWZhdWx0UHJvcHMgPSB7XG4gICAgc2l6ZTogJ21kJ1xufTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXG4vLyBpbnNwcmllZCBieSBodHRwczovL2dpdGh1Yi5jb20va2lzZW5rYS9zdmctc3ByaXRlLWxvYWRlci9ibG9iL21hc3Rlci9ydW50aW1lL2Jyb3dzZXItc3ByaXRlLmpzXG4vLyBNdWNoIHNpbXBsaWZpZWQsIGRvIG1ha2Ugc3VyZSBydW4gdGhpcyBhZnRlciBkb2N1bWVudCByZWFkeVxudmFyIHN2Z1Nwcml0ZSA9IGZ1bmN0aW9uIHN2Z1Nwcml0ZShjb250ZW50cykge1xuICAgIHJldHVybiAnXFxuICA8c3ZnXFxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxcbiAgICB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIlxcbiAgICBpZD1cIl9fQU5URF9NT0JJTEVfU1ZHX1NQUklURV9OT0RFX19cIlxcbiAgICBzdHlsZT1cImRpc3BsYXk6bm9uZTtvdmVyZmxvdzpoaWRkZW47d2lkdGg6MDtoZWlnaHQ6MFwiXFxuICA+XFxuICAgIDxkZWZzPlxcbiAgICAgICcgKyBjb250ZW50cyArICdcXG4gICAgPC9kZWZzPlxcbiAgPC9zdmc+XFxuJztcbn07XG4vLyBib3RoIG1pbmlmaWVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9zdmcvc3Znb1xudmFyIGljb25zID0ge1xuICAgIGNoZWNrOiAnPHN2ZyB2aWV3Qm94PVwiMCAwIDQ0IDQ0XCI+PHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMzQuNTM4IDhMMzggMTEuNTE4IDE3LjgwOCAzMiA4IDIyLjAzM2wzLjQ2Mi0zLjUxOCA2LjM0NiA2LjQ1elwiLz48L3N2Zz4nLFxuICAgICdjaGVjay1jaXJjbGUnOiAnPHN2ZyB2aWV3Qm94PVwiMCAwIDQ4IDQ4XCI+PHBhdGggZD1cIk0yNCA0OGMxMy4yNTUgMCAyNC0xMC43NDUgMjQtMjRTMzcuMjU1IDAgMjQgMCAwIDEwLjc0NSAwIDI0czEwLjc0NSAyNCAyNCAyNHpNMTMuMSAyMy4ybC0yLjIgMi4xIDEwIDkuOUwzOC4xIDE1bC0yLjItMi0xNS4yIDE3LjgtNy42LTcuNnpcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIvPjwvc3ZnPicsXG4gICAgJ2NoZWNrLWNpcmNsZS1vJzogJzxzdmcgdmlld0JveD1cIjAgMCA0OCA0OFwiPjxnIGZpbGwtcnVsZT1cImV2ZW5vZGRcIj48cGF0aCBkPVwiTTI0IDQ4YzEzLjI1NSAwIDI0LTEwLjc0NSAyNC0yNFMzNy4yNTUgMCAyNCAwIDAgMTAuNzQ1IDAgMjRzMTAuNzQ1IDI0IDI0IDI0em0wLTNjMTEuNTk4IDAgMjEtOS40MDIgMjEtMjFTMzUuNTk4IDMgMjQgMyAzIDEyLjQwMiAzIDI0czkuNDAyIDIxIDIxIDIxelwiLz48cGF0aCBkPVwiTTEyLjIgMjMuMkwxMCAyNS4zbDEwIDkuOUwzNy4yIDE1IDM1IDEzIDE5LjggMzAuOHpcIi8+PC9nPjwvc3ZnPicsXG4gICAgY3Jvc3M6ICc8c3ZnIHZpZXdCb3g9XCIwIDAgNDQgNDRcIj48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0yNC4wMDggMjEuODUybDguOTctOC45NjhMMzEuMDkyIDExbC04Ljk3IDguOTY4TDEzLjE1NyAxMWwtMS44ODQgMS44ODQgOC45NjggOC45NjgtOS4yNCA5LjI0IDEuODg0IDEuODg1IDkuMjQtOS4yNCA5LjI0IDkuMjQgMS44ODUtMS44ODQtOS4yNC05LjI0elwiLz48L3N2Zz4nLFxuICAgICdjcm9zcy1jaXJjbGUnOiAnPHN2ZyB2aWV3Qm94PVwiMCAwIDQ4IDQ4XCI+PGcgZmlsbC1ydWxlPVwiZXZlbm9kZFwiPjxwYXRoIGQ9XCJNMjQgNDhjMTMuMjU1IDAgMjQtMTAuNzQ1IDI0LTI0UzM3LjI1NSAwIDI0IDAgMCAxMC43NDUgMCAyNHMxMC43NDUgMjQgMjQgMjR6bTAtM2MxMS41OTggMCAyMS05LjQwMiAyMS0yMVMzNS41OTggMyAyNCAzIDMgMTIuNDAyIDMgMjRzOS40MDIgMjEgMjEgMjF6XCIvPjxwYXRoIGQ9XCJNMjQuMzQgMjIuMjJsLTcuNzc1LTcuNzc1YTEuNSAxLjUgMCAxIDAtMi4xMiAyLjEybDcuNzczIDcuNzc1LTcuNzc0IDcuNzc1YTEuNSAxLjUgMCAxIDAgMi4xMiAyLjEybDcuNzc1LTcuNzczIDcuNzc0IDcuNzc0YTEuNSAxLjUgMCAxIDAgMi4xMi0yLjEyTDI2LjQ2IDI0LjM0bDcuNzc0LTcuNzc0YTEuNSAxLjUgMCAxIDAtMi4xMi0yLjEybC03Ljc3NiA3Ljc3M3pcIi8+PC9nPjwvc3ZnPicsXG4gICAgJ2Nyb3NzLWNpcmNsZS1vJzogJzxzdmcgdmlld0JveD1cIjAgMCA0OCA0OFwiPjxwYXRoIGQ9XCJNMjQgNDhjMTMuMjU1IDAgMjQtMTAuNzQ1IDI0LTI0UzM3LjI1NSAwIDI0IDAgMCAxMC43NDUgMCAyNHMxMC43NDUgMjQgMjQgMjR6bS4zNTMtMjUuNzdsLTcuNTkzLTcuNTkzYy0uNzk3LS44LTEuNTM4LS44MjItMi4yNjMtLjIwNy0uNzI0LjYxNC0uNTYgMS42MTctLjEyNCAyLjA2N2w3Ljg1MiA3Ljg0Ny03LjcyIDcuNzIzYy0uNzI3LjcyOC0uNTYgMS42NDYtLjA2NiAyLjE3Ny40OTMuNTMyIDEuNTUzLjY4MyAyLjMxLS4xNzRsNy41ODgtNy41ODQgNy42NDQgNy42MjNjLjc5Ni43OTggMS42MDguNzI0IDIuMjEuMTQ1LjYwNS0uNTguNzItMS40NDItLjA3NC0yLjI0bC03LjY1Ny03LjY3IDcuNTQ1LTcuNTJjLjgxLS42OTcuOS0xLjc2LjI5Ny0yLjM0LS45Mi0uODg1LTEuODUtLjMzOC0yLjI2NC4wNzhsLTcuNjg1IDcuNjY3elwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIi8+PC9zdmc+JyxcbiAgICAvLyBUb2RvOiBzaW1wbGlmeSBkaXJlY3Rpb24gdG8gMiwgdXNlIGNzcyB0cmFuc2Zvcm1cbiAgICBsZWZ0OiAnPHN2ZyB2aWV3Qm94PVwiMCAwIDQ0IDQ0XCI+PGRlZnM+PHBhdGggaWQ9XCJhXCIgZD1cIk0tMTI5LTg0NWgyNHYyNGgtMjR6XCIvPjwvZGVmcz48Y2xpcFBhdGggaWQ9XCJiXCI+PHVzZSB4bGluazpocmVmPVwiI2FcIiBvdmVyZmxvdz1cInZpc2libGVcIi8+PC9jbGlwUGF0aD48ZyBjbGlwLXBhdGg9XCJ1cmwoI2IpXCI+PGRlZnM+PHBhdGggaWQ9XCJjXCIgZD1cIk0tOTAzLTk0OUg5NDdWOTk2SC05MDN6XCIvPjwvZGVmcz48L2c+PHBhdGggZD1cIk0xNi4yNDcgMjEuNEwyOC40OCA5LjE2NWwyLjEyIDIuMTItMTAuMTE3IDEwLjEyTDMwLjYgMzEuNTI0bC0yLjEyIDIuMTItMTIuMjMzLTEyLjIzMi4wMDctLjAwNnpcIi8+PC9zdmc+JyxcbiAgICByaWdodDogJzxzdmcgdmlld0JveD1cIjAgMCA0NCA0NFwiPjxkZWZzPjxwYXRoIGlkPVwiYVwiIGQ9XCJNLTEyOS04NDVoMjR2MjRoLTI0elwiLz48L2RlZnM+PGNsaXBQYXRoIGlkPVwiYlwiPjx1c2UgeGxpbms6aHJlZj1cIiNhXCIgb3ZlcmZsb3c9XCJ2aXNpYmxlXCIvPjwvY2xpcFBhdGg+PGcgY2xpcC1wYXRoPVwidXJsKCNiKVwiPjxkZWZzPjxwYXRoIGlkPVwiY1wiIGQ9XCJNLTkwMy05NDlIOTQ3Vjk5NkgtOTAzelwiLz48L2RlZnM+PC9nPjxwYXRoIGQ9XCJNMzAuNiAyMS40TDE4LjM3IDkuMTY1bC0yLjEyIDIuMTIgMTAuMTE3IDEwLjEyLTEwLjExOCAxMC4xMTggMi4xMiAyLjEyIDEyLjIzNC0xMi4yMzItLjAwNS0uMDA2elwiLz48L3N2Zz4nLFxuICAgIGRvd246ICc8c3ZnIHZpZXdCb3g9XCIwIDAgNDQgNDRcIj48cGF0aCBkPVwiTTIyLjM1NSAyOC4yMzdsLTExLjQ4My0xMC45Yy0uNjA3LS41NzYtMS43MTQtLjM5Ni0yLjQ4LjQxbC42NzQtLjcxYy0uNzYzLjgwMi0uNzMgMi4wNy0uMjgyIDIuNDk2bDExLjM3IDEwLjc5My0uMDQuMDQgMi4wODggMi4xOTVMMjMuMyAzMS41MmwxMi4zMDgtMTEuNjgyYy40NDctLjQyNS40OC0xLjY5NC0uMjgyLTIuNDk2bC42NzQuNzFjLS43NjYtLjgwNi0xLjg3My0uOTg2LTIuNDgtLjQxTDIyLjM1NSAyOC4yMzd6XCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiLz48L3N2Zz4nLFxuICAgIHVwOiAnPHN2ZyB2aWV3Qm94PVwiMCAwIDQ0IDQ0XCI+PHBhdGggZmlsbD1cIm5vbmVcIiBkPVwiTS0xLTFoNDZ2NDZILTF6XCIvPjxkZWZzPjxwYXRoIGlkPVwiYVwiIGQ9XCJNLTEyOS04NDVoMjR2MjRoLTI0elwiLz48L2RlZnM+PGNsaXBQYXRoIGlkPVwiYlwiPjx1c2UgeGxpbms6aHJlZj1cIiNhXCIvPjwvY2xpcFBhdGg+PGcgY2xpcC1wYXRoPVwidXJsKCNiKVwiPjxkZWZzPjxwYXRoIGlkPVwiY1wiIGQ9XCJNLTkwMy05NDlIOTQ3Vjk5NkgtOTAzelwiLz48L2RlZnM+PC9nPjxwYXRoIGQ9XCJNMjMuNDE3IDE0LjIzTDExLjE4NCAyNi40NmwyLjEyIDIuMTIgMTAuMTItMTAuMTE3IDEwLjExOCAxMC4xMTggMi4xMi0yLjEyTDIzLjQzIDE0LjIyOGwtLjAwNi4wMDV6XCIvPjwvc3ZnPicsXG4gICAgbG9hZGluZzogJzxzdmcgdmlld0JveD1cIjAgLTIgNTkuNzUgNjAuMjVcIj48cGF0aCBmaWxsPVwiI2NjY1wiIGQ9XCJNMjkuNjktLjUyN0MxNC4wNDQtLjUyNyAxLjM2IDEyLjE1OCAxLjM2IDI3LjgwNlMxNC4wNDMgNTYuMTQgMjkuNjkgNTYuMTRjMTUuNjUgMCAyOC4zMzQtMTIuNjg2IDI4LjMzNC0yOC4zMzRTNDUuMzQtLjUyNyAyOS42OS0uNTI3em0uMTg1IDUzLjc1Yy0xNC4wMzcgMC0yNS40MTctMTEuMzgtMjUuNDE3LTI1LjQxN1MxNS44MzggMi4zOSAyOS44NzUgMi4zOXMyNS40MTcgMTEuMzggMjUuNDE3IDI1LjQxNy0xMS4zOCAyNS40MTYtMjUuNDE3IDI1LjQxNnpcIi8+PHBhdGggZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjMTA4ZWU5XCIgc3Ryb2tlLXdpZHRoPVwiM1wiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbWl0ZXJsaW1pdD1cIjEwXCIgZD1cIk01Ni41ODcgMjkuNzY2Yy4zNy03LjQzOC0xLjY1OC0xNC43LTYuMzkzLTE5LjU1MlwiLz48L3N2Zz4nLFxuICAgIHNlYXJjaDogJzxzdmcgdmlld0JveD1cIjAgMCA0NCA0NFwiPjxwYXRoIGQ9XCJNMzIuOTggMjkuMjU1bDguOTE1IDguMjkzTDM5LjYwMyA0MGwtOC44Ni04LjI0MmExNS45NTIgMTUuOTUyIDAgMCAxLTEwLjc1MyA0LjE0N0MxMS4xNiAzNS45MDUgNCAyOC43NjMgNCAxOS45NTIgNCAxMS4xNDIgMTEuMTYgNCAxOS45OSA0czE1Ljk5IDcuMTQyIDE1Ljk5IDE1Ljk1MmMwIDMuNDcyLTEuMTEyIDYuNjg1LTMgOS4zMDN6bS4wNS05LjIxYzAgNy4xMjMtNS43IDEyLjkxOC0xMi44OCAxMi45MTgtNy4xNzYgMC0xMy4wMTUtNS43OTUtMTMuMDE1LTEyLjkxOCAwLTcuMTIgNS44NC0xMi45MTcgMTMuMDE3LTEyLjkxNyA3LjE3OCAwIDEyLjg4IDUuNzk3IDEyLjg4IDEyLjkxN3pcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIvPjwvc3ZnPicsXG4gICAgZWxsaXBzaXM6ICc8c3ZnIHZpZXdCb3g9XCIwIDAgNDQgNDRcIj48Y2lyY2xlIGN4PVwiMjEuODg4XCIgY3k9XCIyMlwiIHI9XCI0LjA0NVwiLz48Y2lyY2xlIGN4PVwiNS45MTNcIiBjeT1cIjIyXCIgcj1cIjQuMDQ1XCIvPjxjaXJjbGUgY3g9XCIzNy44NjNcIiBjeT1cIjIyXCIgcj1cIjQuMDQ1XCIvPjwvc3ZnPicsXG4gICAgJ2VsbGlwc2lzLWNpcmNsZSc6ICc8c3ZnIHZpZXdCb3g9XCIwIDAgNDQgNDRcIj48ZyBmaWxsLXJ1bGU9XCJldmVub2RkXCI+PHBhdGggZD1cIk0yMi4xMy4xMUMxMC4wNS4xMS4yNTUgOS45MDIuMjU1IDIxLjk4M1MxMC4wNSA0My44NiAyMi4xMyA0My44NnMyMS44NzUtOS43OTUgMjEuODc1LTIxLjg3NlMzNC4yMS4xMSAyMi4xMy4xMXptMCA0MC43Yy0xMC4zOTYgMC0xOC44MjUtOC40My0xOC44MjUtMTguODI2UzExLjczNSAzLjE2IDIyLjEzIDMuMTZjMTAuMzk2IDAgMTguODI1IDguNDI4IDE4LjgyNSAxOC44MjRTMzIuNTI1IDQwLjgxIDIyLjEzIDQwLjgxelwiLz48Y2lyY2xlIGN4PVwiMjEuODg4XCIgY3k9XCIyMi43MDFcIiByPVwiMi40NDVcIi8+PGNpcmNsZSBjeD1cIjEyLjIzXCIgY3k9XCIyMi43MDFcIiByPVwiMi40NDVcIi8+PGNpcmNsZSBjeD1cIjMxLjU0NlwiIGN5PVwiMjIuNzAxXCIgcj1cIjIuNDQ1XCIvPjwvZz48L3N2Zz4nLFxuICAgICdleGNsYW1hdGlvbi1jaXJjbGUnOiAnPHN2ZyB2aWV3Qm94PVwiMCAwIDY0IDY0XCI+PHBhdGggZD1cIk01OS41OCA0MC44OUw0MS4xOTMgOS4xMUMzOS4xMzUgNS4zODIgMzUuNzIzIDMgMzEuMzg3IDNjLTMuMTEgMC02LjUyIDIuMzgyLTguNTggNi4xMUw0LjQyIDQwLjg5Yy0yLjc4OCA0LjYzNS0zLjEyNiA4LjgxLTEuMjI1IDEyLjIyQzUuMDE1IDU2LjIwOCA3LjU3MiA1OCAxMyA1OGgzNi43NzNjNS40MjggMCA5LjIxLTEuNzkyIDExLjAzLTQuODkgMS45LTMuNDEgMS41NjUtNy41ODMtMS4yMjQtMTIuMjJ6bS0yLjQ1MiAxMWMtLjYzNSAxLjY5NC0zLjgwMiAyLjQ0My03LjM1NCAyLjQ0M0gxM2MtMy41OSAwLTUuNDkzLS43NS02LjEzLTIuNDQ0LTEuNzEtMi40MS0xLjM3NC01LjI2MyAwLTguNTU3bDE4LjM4Ny0zMS43NzdjMi4xMTYtMy4xNjggNC4zOTQtNC44OSA2LjEzLTQuODkgMi45NiAwIDUuMjM4IDEuNzIyIDcuMzU0IDQuODlsMTguMzg3IDMxLjc3N2MxLjM3NCAzLjI5NCAxLjcxMyA2LjE0NiAwIDguNTU2em0tMjUuNzQtMzNjLS40MDUgMC0xLjIyNy44MzUtMS4yMjcgMi40NDN2MTUuODljMCAxLjYwOC44MjMgMi40NDQgMS4yMjcgMi40NDQgMS42MjggMCAyLjQ1Mi0uODM2IDIuNDUyLTIuNDQ1di0xNS44OWMwLTEuNjA3LS44MjUtMi40NDMtMi40NTMtMi40NDN6bTAgMjMuMjJjLS40MDUgMC0xLjIyNy43OS0xLjIyNyAxLjIyM3YyLjQ0NWMwIC40MzQuODIzIDEuMjIyIDEuMjI3IDEuMjIyIDEuNjI4IDAgMi40NTItLjc4OCAyLjQ1Mi0xLjIyMnYtMi40NDVjMC0uNDM0LS44MjUtMS4yMjItMi40NTMtMS4yMjJ6XCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiLz48L3N2Zz4nLFxuICAgICdpbmZvLWNpcmNsZSc6ICc8c3ZnIHZpZXdCb3g9XCIwIDAgNDQgNDRcIj48Y2lyY2xlIGN4PVwiMTMuODI4XCIgY3k9XCIxOS42M1wiIHI9XCIxLjkzOFwiLz48Y2lyY2xlIGN4PVwiMjEuNzY3XCIgY3k9XCIxOS42M1wiIHI9XCIxLjkzOFwiLz48Y2lyY2xlIGN4PVwiMjkuNzY3XCIgY3k9XCIxOS42M1wiIHI9XCIxLjkzOFwiLz48cGF0aCBkPVwiTTIyLjEwMiA0LjE2Yy05LjkxOCAwLTE3Ljk1OCA3LjE0Ny0xNy45NTggMTUuOTYyIDAgNC45MzUgMi41MjIgOS4zNDUgNi40OCAxMi4yNzN2NS42NjdsLjA0LjAxMmEyLjYyNyAyLjYyNyAwIDEgMCA0LjUgMS40NTVoLjAwMmw1LjAyNi0zLjU0Yy42MjguMDYgMS4yNjUuMDk0IDEuOTEuMDk0IDkuOTIgMCAxNy45Ni03LjE0NiAxNy45Ni0xNS45NkM0MC4wNiAxMS4zMDYgMzIuMDIgNC4xNiAyMi4xIDQuMTZ6bS0uMDQgMjkuOTAyYy0uOTAyIDAtMS43OC0uMDgtMi42NDItLjIwN2wtNS44ODIgNC4yMzRjLS4wMjQuMDI0LS4wNTUuMDQtLjA4My4wNmwtLjAwOC4wMDVhLjUxLjUxIDAgMCAxLS4yODQuMDk1LjUyNS41MjUgMCAwIDEtLjUyNS0uNTI1bC4wMDUtNi4zNzVjLTMuOTEtMi41MTYtNi40NTYtNi41NDQtNi40NTYtMTEuMSAwLTcuNjI4IDcuMTA3LTEzLjgxMiAxNS44NzUtMTMuODEyczE1Ljg3NSA2LjE4NCAxNS44NzUgMTMuODEyLTcuMTA3IDEzLjgxMi0xNS44NzUgMTMuODEyelwiLz48L3N2Zz4nLFxuICAgICdxdWVzdGlvbi1jaXJjbGUnOiAnPHN2ZyB2aWV3Qm94PVwiMCAwIDQ0IDQ0XCI+PGcgZmlsbC1ydWxlPVwiZXZlbm9kZFwiPjxwYXRoIGQ9XCJNMjEuMTg2IDNjLTEwLjg1MyAwLTE5LjM2IDguNTA2LTE5LjM2IDE5LjM1OEMxLjgyNyAzMi40OTQgMTAuMzM0IDQxIDIxLjE4NyA0MWMxMC4xMzMgMCAxOC42NC04LjUwNiAxOC42NC0xOC42NDJDMzkuODI3IDExLjUwNiAzMS4zMiAzIDIxLjE4NyAzbTE1LjY0IDE5YzAgOC44MjMtNy4xNzggMTYtMTYgMTZzLTE2LTcuMTc3LTE2LTE2IDcuMTc4LTE2IDE2LTE2IDE2IDcuMTc3IDE2IDE2elwiLz48cGF0aCBkPVwiTTIyLjgyNyAzMS41YTEuNSAxLjUgMCAxIDEtMyAwIDEuNSAxLjUgMCAwIDEgMyAwbTQtMTUuNDhjMCAuOTU3LS4yMDMgMS44MjItLjYxIDIuNTkzLS40MjcuNzkyLTEuMTE3IDEuNjEyLTIuMDczIDIuNDU3LS44NjcuNzM0LTEuNDUzIDEuNDM1LTEuNzU0IDIuMDk2LS4zMDIuNy0uNDUzIDEuNjkzLS40NTMgMi45OGEuODI4LjgyOCAwIDAgMS0uODIzLjg1NC44MjguODI4IDAgMCAxLS41ODQtLjIyLjg3Ny44NzcgMCAwIDEtLjI0LS42MzVjMC0xLjMwNS4xNjgtMi4zOC41MDYtMy4yMjcuMzM2LS44ODMuOTMtMS42ODIgMS43OC0yLjQgMS4wMS0uODgzIDEuNzEtMS42OTIgMi4xLTIuNDI4LjMzNi0uNjQ1LjUwMy0xLjM4LjUwMy0yLjIxLS4wMi0uOTM1LS4zLTEuNy0uODUtMi4yODgtLjY1NS0uNzE3LTEuNjItMS4wNzUtMi44OTctMS4wNzUtMS41MDYgMC0yLjU5Ni41MzUtMy4yNyAxLjYtLjQ2Ljc1NC0uNjg4IDEuNjQ1LS42ODggMi42NzdhLjkyLjkyIDAgMCAxLS4yNjYuNjYuNzQ3Ljc0NyAwIDAgMS0uNTYuMjUuNzMuNzMgMCAwIDEtLjU4NC0uMTk0Yy0uMTYtLjE2NC0uMjQtLjM5My0uMjQtLjY5IDAtMS44Mi41ODUtMy4yNzIgMS43NTUtNC4zNTdDMTguNjQ1IDExLjQ4NiAxOS45MjggMTEgMjEuNDM0IDExaC4yOTNjMS40NTIgMCAyLjYzOC40MTQgMy41NiAxLjI0IDEuMDI4LjkwMyAxLjU0IDIuMTYzIDEuNTQgMy43OHpcIi8+PC9nPjwvc3ZnPicsXG4gICAgdm9pY2U6ICc8c3ZnIHZpZXdCb3g9XCIwIDAgMzggMzNcIj48ZyBmaWxsLXJ1bGU9XCJldmVub2RkXCI+PHBhdGggZD1cIk0xNy44MzggMjguOGMtLjU2NC0uNDY4LTEuMTkyLS45ODMtMS44MzYtMS40OTYtNC4yNDQtMy4zODUtNS4yOTQtMy42Ny02LjAwNi0zLjY3LS4wMTQgMC0uMDI3LjAwNS0uMDQuMDA1LS4wMTUgMC0uMDI4LS4wMDYtLjA0Mi0uMDA2SDMuNTYyYy0uNzM0IDAtLjkwMy0uMjAzLS45MDMtLjkyOHYtMTIuNjJjMC0uNDkuMDU3LS44LjY2LS44SDkuMWMuNjk0IDAgMS43Ni0uMjggNi40LTMuNjMuODMtLjU5NiAxLjYzOC0xLjE5NiAyLjMzNy0xLjcyMlYyOC44ek0xOS42ODIuMTljLS40NjMtLjIyLTEuMDE0LS4xNTgtMS40MTcuMTU3LS4wMi4wMTYtMS45ODMgMS41NTItNC4xNTIgMy4xMjVDMTAuMzQgNi4yMSA5LjI0MyA2LjY2NCA5LjAyIDYuNzM3SDMuNjc2Yy0uMDI3IDAtLjA1My4wMDMtLjA4LjAwNEgxLjE4M2MtLjYwOCAwLTEuMS40ODctMS4xIDEuMDg2VjI1LjE0YzAgLjU5OC40OTIgMS4wODQgMS4xIDEuMDg0aDguNzFjLjIyLjA4IDEuMjU3LjU1IDQuNjA1IDMuMjQgMS45NDcgMS41NjIgMy42OTQgMy4wODggMy43MTIgMy4xMDMuMjUuMjIuNTY4LjMzMy44OS4zMzMuMTg2IDAgLjM3My0uMDM4LjU1LS4xMTYuNDgtLjIxMy43OS0uNjg0Ljc5LTEuMjA0VjEuMzhjMC0uNTA2LS4yOTQtLjk2OC0uNzU4LTEuMTl6XCIgbWFzaz1cInVybCgjbWFzay0yKVwiLz48cGF0aCBkPVwiTTMxLjQyIDE2LjQ3NWMwLTMuMzYzLTEuODU0LTYuMjk3LTQuNjA2LTcuODc2LS4xMjUtLjA2Ny0uNDItLjE5My0uNjI1LS4xOTMtLjYxMyAwLTEuMTEuNDg4LTEuMTEgMS4wOSAwIC40MDQuMjIuNzY0LjU1Ljk1MiAyLjEzIDEuMTkgMy41NjYgMy40NCAzLjU2NiA2LjAyNCAwIDIuNjI3LTEuNDg2IDQuOTEzLTMuNjc3IDYuMDg3LS4zMi4xOS0uNTMuNTQtLjUzLjkzNSAwIC42MDIuNDk1IDEuMDkgMS4xMDYgMS4wOS4yNi4wMDIuNTY4LS4xNS41NjgtLjE1IDIuODM1LTEuNTU2IDQuNzU0LTQuNTM4IDQuNzU0LTcuOTZcIiBtYXNrPVwidXJsKCNtYXNrLTQpXCIvPjxwYXRoIGQ9XCJNMzAuMTQgMy4wNTdjLS4yMDUtLjEyMi0uNDEtLjIyLS42NTgtLjIyLS42MDggMC0xLjEuNDg1LTEuMSAxLjA4NCAwIC40MzQuMjYuNzguNjI3Ljk3OCA0LjA0MiAyLjMyMyA2Ljc2IDYuNjM2IDYuNzYgMTEuNTc4IDAgNC45MzgtMi43MTUgOS4yNDgtNi43NTQgMTEuNTcyLS4zNTQuMTktLjY2LjU1LS42Ni45OTMgMCAuNi40OTQgMS4wODUgMS4xMDIgMS4wODUuMjQzIDAgLjQzOC0uMDkyLjY1LS4yMTMgNC42OTItMi42OTUgNy44NDgtNy43IDcuODQ4LTEzLjQzNSAwLTUuNzIzLTMuMTQyLTEwLjcxOC03LjgxNy0xMy40MThcIiBtYXNrPVwidXJsKCNtYXNrLTYpXCIvPjwvZz48L3N2Zz4nLFxuICAgIHBsdXM6ICc8c3ZnIHZpZXdCb3g9XCIwIDAgMzAgMzBcIj48cGF0aCBkPVwiTTE0IDE0SDB2MmgxNHYxNGgyVjE2aDE0di0ySDE2VjBoLTJ2MTR6XCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiLz48L3N2Zz4nLFxuICAgIG1pbnVzOiAnPHN2ZyB2aWV3Qm94PVwiMCAwIDMwIDJcIj48cGF0aCBkPVwiTTAgMGgzMHYySDB6XCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiLz48L3N2Zz4nLFxuICAgIGRpc2xpa2U6ICc8c3ZnIHZpZXdCb3g9XCIwIDAgNzIgNzJcIj48ZyBmaWxsPVwibm9uZVwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIj48cGF0aCBkPVwiTTM2IDcyYzE5Ljg4MiAwIDM2LTE2LjExOCAzNi0zNlM1NS44ODIgMCAzNiAwIDAgMTYuMTE4IDAgMzZzMTYuMTE4IDM2IDM2IDM2em0wLTJjMTguNzc4IDAgMzQtMTUuMjIyIDM0LTM0UzU0Ljc3OCAyIDM2IDIgMiAxNy4yMjIgMiAzNnMxNS4yMjIgMzQgMzQgMzR6XCIgZmlsbD1cIiNGRkZcIi8+PHBhdGggZmlsbD1cIiNGRkZcIiBkPVwiTTQ3IDIyaDJ2NmgtMnptLTI0IDBoMnY2aC0yelwiLz48cGF0aCBkPVwiTTIxIDUxczQuNi03IDE1LTcgMTUgNyAxNSA3XCIgc3Ryb2tlPVwiI0ZGRlwiIHN0cm9rZS13aWR0aD1cIjJcIi8+PC9nPjwvc3ZnPicsXG4gICAgZmFpbDogJzxzdmcgdmlld0JveD1cIjAgMCA3MiA3MlwiPjxnIGZpbGw9XCJub25lXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiPjxwYXRoIGQ9XCJNMzYgNzJjMTkuODgyIDAgMzYtMTYuMTE4IDM2LTM2UzU1Ljg4MiAwIDM2IDAgMCAxNi4xMTggMCAzNnMxNi4xMTggMzYgMzYgMzZ6bTAtMmMxOC43NzggMCAzNC0xNS4yMjIgMzQtMzRTNTQuNzc4IDIgMzYgMiAyIDE3LjIyMiAyIDM2czE1LjIyMiAzNCAzNCAzNHpcIiBmaWxsPVwiI0ZGRlwiLz48cGF0aCBkPVwiTTIyIDIybDI4LjMwNCAyOC4zMDRtLTI4LjMwNCAwTDUwLjMwNCAyMlwiIHN0cm9rZT1cIiNGRkZcIiBzdHJva2Utd2lkdGg9XCIyXCIvPjwvZz48L3N2Zz4nLFxuICAgIHN1Y2Nlc3M6ICc8c3ZnIHZpZXdCb3g9XCIwIDAgNzIgNzJcIj48ZyBmaWxsPVwibm9uZVwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIj48cGF0aCBkPVwiTTM2IDcyYzE5Ljg4MiAwIDM2LTE2LjExOCAzNi0zNlM1NS44ODIgMCAzNiAwIDAgMTYuMTE4IDAgMzZzMTYuMTE4IDM2IDM2IDM2em0wLTJjMTguNzc4IDAgMzQtMTUuMjIyIDM0LTM0UzU0Ljc3OCAyIDM2IDIgMiAxNy4yMjIgMiAzNnMxNS4yMjIgMzQgMzQgMzR6XCIgZmlsbD1cIiNGRkZcIi8+PHBhdGggc3Ryb2tlPVwiI0ZGRlwiIHN0cm9rZS13aWR0aD1cIjJcIiBkPVwiTTE5IDM0LjU0bDExLjU0NSAxMS45MjNMNTIuODE1IDI0XCIvPjwvZz48L3N2Zz4nXG59O1xudmFyIHJlbmRlclN2Z1Nwcml0ZSA9IGZ1bmN0aW9uIHJlbmRlclN2Z1Nwcml0ZSgpIHtcbiAgICB2YXIgc3ltYm9scyA9IE9iamVjdC5rZXlzKGljb25zKS5tYXAoZnVuY3Rpb24gKGljb25OYW1lKSB7XG4gICAgICAgIHZhciBzdmdDb250ZW50ID0gaWNvbnNbaWNvbk5hbWVdLnNwbGl0KCdzdmcnKVsxXTtcbiAgICAgICAgcmV0dXJuICc8c3ltYm9sIGlkPScgKyBpY29uTmFtZSArIHN2Z0NvbnRlbnQgKyAnc3ltYm9sPic7XG4gICAgfSkuam9pbignJyk7XG4gICAgcmV0dXJuIHN2Z1Nwcml0ZShzeW1ib2xzKTtcbn07XG52YXIgbG9hZFNwcml0ZSA9IGZ1bmN0aW9uIGxvYWRTcHJpdGUoKSB7XG4gICAgaWYgKCFkb2N1bWVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBleGlzdGluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdfX0FOVERfTU9CSUxFX1NWR19TUFJJVEVfTk9ERV9fJyk7XG4gICAgdmFyIG1vdW50Tm9kZSA9IGRvY3VtZW50LmJvZHk7XG4gICAgaWYgKCFleGlzdGluZykge1xuICAgICAgICBtb3VudE5vZGUuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgcmVuZGVyU3ZnU3ByaXRlKCkpO1xuICAgIH1cbn07XG5leHBvcnRzWydkZWZhdWx0J10gPSBsb2FkU3ByaXRlO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5yZXF1aXJlKCcuL2luZGV4Lmxlc3MnKTsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uLy4uL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9wb3N0Y3NzIS4vaW5kZXgubGVzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vLi4vLi4vbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3Bvc3Rjc3MhLi9pbmRleC5sZXNzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uLy4uL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9wb3N0Y3NzIS4vaW5kZXgubGVzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjaycpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzQ2FsbENoZWNrMik7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJyk7XG5cbnZhciBfY3JlYXRlQ2xhc3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQ2xhc3MyKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJyk7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMik7XG5cbnZhciBfaW5oZXJpdHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJyk7XG5cbnZhciBfaW5oZXJpdHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5oZXJpdHMyKTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfcmVhY3QpO1xuXG52YXIgX3JlYWN0RG9tID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbnZhciBSZWFjdERPTSA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9yZWFjdERvbSk7XG5cbnZhciBfY2xhc3MgPSByZXF1aXJlKCcuLi9fdXRpbC9jbGFzcycpO1xuXG52YXIgX0N1c3RvbUtleWJvYXJkID0gcmVxdWlyZSgnLi9DdXN0b21LZXlib2FyZCcpO1xuXG52YXIgX0N1c3RvbUtleWJvYXJkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0N1c3RvbUtleWJvYXJkKTtcblxudmFyIF9Qb3J0YWwgPSByZXF1aXJlKCcuL1BvcnRhbCcpO1xuXG52YXIgX1BvcnRhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Qb3J0YWwpO1xuXG52YXIgX2V4ZW52ID0gcmVxdWlyZSgnLi4vX3V0aWwvZXhlbnYnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09ialsnZGVmYXVsdCddID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgY3VzdG9tTnVtYmVyS2V5Ym9hcmQgPSBudWxsO1xudmFyIElTX1JFQUNUXzE2ID0gISFSZWFjdERPTS5jcmVhdGVQb3J0YWw7XG5mdW5jdGlvbiBnZXRCb2R5U2Nyb2xsVG9wKCkge1xuICAgIHZhciBlbCA9IGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgIHJldHVybiBlbCAmJiBlbC5zY3JvbGxUb3AgfHwgMDtcbn1cbmZ1bmN0aW9uIHNldEJvZHlTY3JvbGxUb3Aoc2Nyb2xsVG9wKSB7XG4gICAgdmFyIGVsID0gZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgZWwuc2Nyb2xsVG9wID0gc2Nyb2xsVG9wO1xufVxuXG52YXIgTnVtYmVySW5wdXQgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgICgwLCBfaW5oZXJpdHMzWydkZWZhdWx0J10pKE51bWJlcklucHV0LCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIE51bWJlcklucHV0KHByb3BzKSB7XG4gICAgICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szWydkZWZhdWx0J10pKHRoaXMsIE51bWJlcklucHV0KTtcblxuICAgICAgICB2YXIgX3RoaXMgPSAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zWydkZWZhdWx0J10pKHRoaXMsIChOdW1iZXJJbnB1dC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKE51bWJlcklucHV0KSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgICAgIF90aGlzLm9uQ2hhbmdlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoISgndmFsdWUnIGluIF90aGlzLnByb3BzKSkge1xuICAgICAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgdmFsdWU6IHZhbHVlLnRhcmdldC52YWx1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF90aGlzLnByb3BzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMub25Db25maXJtID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBfdGhpcy5wcm9wcy5vblZpcnR1YWxLZXlib2FyZENvbmZpcm0odmFsdWUpO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5hZGRCbHVyTGlzdGVuZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF90aGlzLmRvQmx1ciwgZmFsc2UpO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5yZW1vdmVCbHVyTGlzdGVuZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIF90aGlzLmRvQmx1ciwgZmFsc2UpO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5zYXZlUmVmID0gZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICBpZiAoSVNfUkVBQ1RfMTYgJiYgZWwpIHtcbiAgICAgICAgICAgICAgICBjdXN0b21OdW1iZXJLZXlib2FyZCA9IGVsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5kb0JsdXIgPSBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IF90aGlzLnN0YXRlLnZhbHVlO1xuXG4gICAgICAgICAgICBpZiAoZXYudGFyZ2V0ICE9PSBfdGhpcy5pbnB1dFJlZikge1xuICAgICAgICAgICAgICAgIF90aGlzLm9uSW5wdXRCbHVyKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMudW5MaW5rSW5wdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoY3VzdG9tTnVtYmVyS2V5Ym9hcmQgJiYgY3VzdG9tTnVtYmVyS2V5Ym9hcmQuYW50bUtleWJvYXJkICYmIGN1c3RvbU51bWJlcktleWJvYXJkLmxpbmtlZElucHV0ICYmIGN1c3RvbU51bWJlcktleWJvYXJkLmxpbmtlZElucHV0ID09PSBfdGhpcykge1xuICAgICAgICAgICAgICAgIGN1c3RvbU51bWJlcktleWJvYXJkLmxpbmtlZElucHV0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMucHJvcHMuYXV0b0FkanVzdEhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5nZXRDb250YWluZXIoKS5zdHlsZS5oZWlnaHQgPSAnMCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICgwLCBfY2xhc3MuYWRkQ2xhc3MpKGN1c3RvbU51bWJlcktleWJvYXJkLmFudG1LZXlib2FyZCwgX3RoaXMucHJvcHMua2V5Ym9hcmRQcmVmaXhDbHMgKyAnLXdyYXBwZXItaGlkZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZm9yIHVubW91bnRcbiAgICAgICAgICAgIF90aGlzLnJlbW92ZUJsdXJMaXN0ZW5lcigpO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5vbklucHV0Qmx1ciA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKElTX1JFQUNUXzE2KSB7XG4gICAgICAgICAgICAgICAgX3RoaXMua2V5Qm9hcmQgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGZvY3VzID0gX3RoaXMuc3RhdGUuZm9jdXM7XG5cbiAgICAgICAgICAgIGlmIChmb2N1cykge1xuICAgICAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgZm9jdXM6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgX3RoaXMucHJvcHMub25CbHVyKHZhbHVlKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMudW5MaW5rSW5wdXQoKTtcbiAgICAgICAgICAgICAgICB9LCA1MCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLm9uSW5wdXRGb2N1cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IF90aGlzLnN0YXRlLnZhbHVlO1xuXG4gICAgICAgICAgICBfdGhpcy5wcm9wcy5vbkZvY3VzKHZhbHVlKTtcbiAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBmb2N1czogdHJ1ZVxuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChjdXN0b21OdW1iZXJLZXlib2FyZCkge1xuICAgICAgICAgICAgICAgICAgICBjdXN0b21OdW1iZXJLZXlib2FyZC5saW5rZWRJbnB1dCA9IF90aGlzO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VzdG9tTnVtYmVyS2V5Ym9hcmQuYW50bUtleWJvYXJkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMucHJvcHMuYXV0b0FkanVzdEhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBrZXlCb2FyZEhlaWdodCA9IGN1c3RvbU51bWJlcktleWJvYXJkLmFudG1LZXlib2FyZC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZ2V0Q29udGFpbmVyKCkuc3R5bGUuaGVpZ2h0ID0ga2V5Qm9hcmRIZWlnaHQgKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5pbnB1dFJlZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX3RoaXMkaW5wdXRSZWYkZ2V0Qm91ID0gX3RoaXMuaW5wdXRSZWYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b20gPSBfdGhpcyRpbnB1dFJlZiRnZXRCb3UuYm90dG9tO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjbGllbnRIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOiuoeeul+i+k+WFpeahhui3neemu+inhueql+eahOW6lemDqOi3neemu1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGlzdGFuY2UgPSBjbGllbnRIZWlnaHQgLSBib3R0b207XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkaXN0YW5jZSA8IGtleUJvYXJkSGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRCb2R5U2Nyb2xsVG9wKGdldEJvZHlTY3JvbGxUb3AoKSArIGtleUJvYXJkSGVpZ2h0IC0gZGlzdGFuY2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgKDAsIF9jbGFzcy5yZW1vdmVDbGFzcykoY3VzdG9tTnVtYmVyS2V5Ym9hcmQuYW50bUtleWJvYXJkLCBfdGhpcy5wcm9wcy5rZXlib2FyZFByZWZpeENscyArICctd3JhcHBlci1oaWRlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tTnVtYmVyS2V5Ym9hcmQuY29uZmlybURpc2FibGVkID0gdmFsdWUgPT09ICcnO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VzdG9tTnVtYmVyS2V5Ym9hcmQuY29uZmlybUtleWJvYXJkSXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICgwLCBfY2xhc3MuYWRkQ2xhc3MpKGN1c3RvbU51bWJlcktleWJvYXJkLmNvbmZpcm1LZXlib2FyZEl0ZW0sIF90aGlzLnByb3BzLmtleWJvYXJkUHJlZml4Q2xzICsgJy1pdGVtLWRpc2FibGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICgwLCBfY2xhc3MucmVtb3ZlQ2xhc3MpKGN1c3RvbU51bWJlcktleWJvYXJkLmNvbmZpcm1LZXlib2FyZEl0ZW0sIF90aGlzLnByb3BzLmtleWJvYXJkUHJlZml4Q2xzICsgJy1pdGVtLWRpc2FibGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMub25LZXlib2FyZENsaWNrID0gZnVuY3Rpb24gKEtleWJvYXJkSXRlbVZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgbWF4TGVuZ3RoID0gX3RoaXMucHJvcHMubWF4TGVuZ3RoO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gX3RoaXMuc3RhdGUudmFsdWU7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tdGhpcy1hc3NpZ25tZW50XG5cbiAgICAgICAgICAgIHZhciBvbkNoYW5nZSA9IF90aGlzLm9uQ2hhbmdlO1xuXG4gICAgICAgICAgICB2YXIgdmFsdWVBZnRlckNoYW5nZSA9IHZvaWQgMDtcbiAgICAgICAgICAgIC8vIOWIoOmZpOmUrlxuICAgICAgICAgICAgaWYgKEtleWJvYXJkSXRlbVZhbHVlID09PSAnZGVsZXRlJykge1xuICAgICAgICAgICAgICAgIHZhbHVlQWZ0ZXJDaGFuZ2UgPSB2YWx1ZS5zdWJzdHJpbmcoMCwgdmFsdWUubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgICAgb25DaGFuZ2UoeyB0YXJnZXQ6IHsgdmFsdWU6IHZhbHVlQWZ0ZXJDaGFuZ2UgfSB9KTtcbiAgICAgICAgICAgICAgICAvLyDnoa7orqTplK5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoS2V5Ym9hcmRJdGVtVmFsdWUgPT09ICdjb25maXJtJykge1xuICAgICAgICAgICAgICAgIHZhbHVlQWZ0ZXJDaGFuZ2UgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICBvbkNoYW5nZSh7IHRhcmdldDogeyB2YWx1ZTogdmFsdWVBZnRlckNoYW5nZSB9IH0pO1xuICAgICAgICAgICAgICAgIF90aGlzLm9uSW5wdXRCbHVyKHZhbHVlKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5vbkNvbmZpcm0odmFsdWUpO1xuICAgICAgICAgICAgICAgIC8vIOaUtui1t+mUrlxuICAgICAgICAgICAgfSBlbHNlIGlmIChLZXlib2FyZEl0ZW1WYWx1ZSA9PT0gJ2hpZGUnKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVBZnRlckNoYW5nZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIF90aGlzLm9uSW5wdXRCbHVyKHZhbHVlQWZ0ZXJDaGFuZ2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAobWF4TGVuZ3RoICE9PSB1bmRlZmluZWQgJiYgK21heExlbmd0aCA+PSAwICYmICh2YWx1ZSArIEtleWJvYXJkSXRlbVZhbHVlKS5sZW5ndGggPiBtYXhMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVBZnRlckNoYW5nZSA9ICh2YWx1ZSArIEtleWJvYXJkSXRlbVZhbHVlKS5zdWJzdHIoMCwgbWF4TGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UoeyB0YXJnZXQ6IHsgdmFsdWU6IHZhbHVlQWZ0ZXJDaGFuZ2UgfSB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZUFmdGVyQ2hhbmdlID0gdmFsdWUgKyBLZXlib2FyZEl0ZW1WYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UoeyB0YXJnZXQ6IHsgdmFsdWU6IHZhbHVlQWZ0ZXJDaGFuZ2UgfSB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY3VzdG9tTnVtYmVyS2V5Ym9hcmQpIHtcbiAgICAgICAgICAgICAgICBjdXN0b21OdW1iZXJLZXlib2FyZC5jb25maXJtRGlzYWJsZWQgPSB2YWx1ZUFmdGVyQ2hhbmdlID09PSAnJztcbiAgICAgICAgICAgICAgICBpZiAoY3VzdG9tTnVtYmVyS2V5Ym9hcmQuY29uZmlybUtleWJvYXJkSXRlbSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWVBZnRlckNoYW5nZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICgwLCBfY2xhc3MuYWRkQ2xhc3MpKGN1c3RvbU51bWJlcktleWJvYXJkLmNvbmZpcm1LZXlib2FyZEl0ZW0sIF90aGlzLnByb3BzLmtleWJvYXJkUHJlZml4Q2xzICsgJy1pdGVtLWRpc2FibGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAoMCwgX2NsYXNzLnJlbW92ZUNsYXNzKShjdXN0b21OdW1iZXJLZXlib2FyZC5jb25maXJtS2V5Ym9hcmRJdGVtLCBfdGhpcy5wcm9wcy5rZXlib2FyZFByZWZpeENscyArICctaXRlbS1kaXNhYmxlZCcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5vbkZha2VJbnB1dENsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuZm9jdXMoKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuZm9jdXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyB0aGlzIGZvY3VzIG1heSBpbnZvY2tlZCBieSB1c2VycyBwYWdlIGJ1dHRvbiBjbGljaywgc28gdGhpcyBjbGljayBtYXkgdHJpZ2dlciBibHVyRXZlbnRMaXN0ZW5lciBhdCB0aGUgc2FtZSB0aW1lXG4gICAgICAgICAgICBfdGhpcy5yZW5kZXJDdXN0b21LZXlib2FyZCgpO1xuICAgICAgICAgICAgX3RoaXMucmVtb3ZlQmx1ckxpc3RlbmVyKCk7XG4gICAgICAgICAgICB2YXIgZm9jdXMgPSBfdGhpcy5zdGF0ZS5mb2N1cztcblxuICAgICAgICAgICAgaWYgKCFmb2N1cykge1xuICAgICAgICAgICAgICAgIF90aGlzLm9uSW5wdXRGb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRkQmx1ckxpc3RlbmVyKCk7XG4gICAgICAgICAgICB9LCA1MCk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZm9jdXM6IGZhbHNlLFxuICAgICAgICAgICAgdmFsdWU6IHByb3BzLnZhbHVlIHx8ICcnXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICAoMCwgX2NyZWF0ZUNsYXNzM1snZGVmYXVsdCddKShOdW1iZXJJbnB1dCwgW3tcbiAgICAgICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICAgICAgaWYgKCd2YWx1ZScgaW4gbmV4dFByb3BzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBuZXh0UHJvcHMudmFsdWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgICAgICAvLyBmb2N1czp0cnVlIHVubW91bnQg5LiN6IO96Kem5Y+RIGJsdXJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmZvY3VzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkJsdXIodGhpcy5zdGF0ZS52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnVuTGlua0lucHV0KCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldENvbXBvbmVudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDb21wb25lbnQoKSB7XG4gICAgICAgICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBjb25maXJtTGFiZWwgPSBfcHJvcHMuY29uZmlybUxhYmVsLFxuICAgICAgICAgICAgICAgIGJhY2tzcGFjZUxhYmVsID0gX3Byb3BzLmJhY2tzcGFjZUxhYmVsLFxuICAgICAgICAgICAgICAgIGNhbmNlbEtleWJvYXJkTGFiZWwgPSBfcHJvcHMuY2FuY2VsS2V5Ym9hcmRMYWJlbCxcbiAgICAgICAgICAgICAgICBrZXlib2FyZFByZWZpeENscyA9IF9wcm9wcy5rZXlib2FyZFByZWZpeENscyxcbiAgICAgICAgICAgICAgICBtb25leUtleWJvYXJkV3JhcFByb3BzID0gX3Byb3BzLm1vbmV5S2V5Ym9hcmRXcmFwUHJvcHMsXG4gICAgICAgICAgICAgICAgbW9uZXlLZXlib2FyZEhlYWRlciA9IF9wcm9wcy5tb25leUtleWJvYXJkSGVhZGVyLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkS2V5cyA9IF9wcm9wcy5kaXNhYmxlZEtleXM7XG5cbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KF9DdXN0b21LZXlib2FyZDJbJ2RlZmF1bHQnXSwgeyByZWY6IHRoaXMuc2F2ZVJlZiwgb25DbGljazogdGhpcy5vbktleWJvYXJkQ2xpY2ssIHByZWZpeENsczoga2V5Ym9hcmRQcmVmaXhDbHMsIGNvbmZpcm1MYWJlbDogY29uZmlybUxhYmVsLCBiYWNrc3BhY2VMYWJlbDogYmFja3NwYWNlTGFiZWwsIGNhbmNlbEtleWJvYXJkTGFiZWw6IGNhbmNlbEtleWJvYXJkTGFiZWwsIHdyYXBQcm9wczogbW9uZXlLZXlib2FyZFdyYXBQcm9wcywgaGVhZGVyOiBtb25leUtleWJvYXJkSGVhZGVyLCBkaXNhYmxlZEtleXM6IGRpc2FibGVkS2V5cyB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0Q29udGFpbmVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldENvbnRhaW5lcigpIHtcbiAgICAgICAgICAgIHZhciBrZXlib2FyZFByZWZpeENscyA9IHRoaXMucHJvcHMua2V5Ym9hcmRQcmVmaXhDbHM7XG5cbiAgICAgICAgICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIGtleWJvYXJkUHJlZml4Q2xzICsgJy1jb250YWluZXInKTtcbiAgICAgICAgICAgIGlmICghY29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCBrZXlib2FyZFByZWZpeENscyArICctY29udGFpbmVyJyk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlckN1c3RvbUtleWJvYXJkJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckN1c3RvbUtleWJvYXJkKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICAgIGlmIChJU19SRUFDVF8xNikge1xuICAgICAgICAgICAgICAgIHRoaXMua2V5Qm9hcmQgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICBfUG9ydGFsMlsnZGVmYXVsdCddLFxuICAgICAgICAgICAgICAgICAgICB7IGdldENvbnRhaW5lcjogZnVuY3Rpb24gZ2V0Q29udGFpbmVyKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczIuZ2V0Q29udGFpbmVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IH0sXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjdXN0b21OdW1iZXJLZXlib2FyZCA9IFJlYWN0RE9NLnVuc3RhYmxlX3JlbmRlclN1YnRyZWVJbnRvQ29udGFpbmVyKHRoaXMsIHRoaXMuZ2V0Q29tcG9uZW50KCksIHRoaXMuZ2V0Q29udGFpbmVyKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXJQb3J0YWwnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyUG9ydGFsKCkge1xuICAgICAgICAgICAgaWYgKCFJU19SRUFDVF8xNiB8fCAhX2V4ZW52LmNhblVzZURPTSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMua2V5Qm9hcmQ7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICAgICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyID0gX3Byb3BzMi5wbGFjZWhvbGRlcixcbiAgICAgICAgICAgICAgICBkaXNhYmxlZCA9IF9wcm9wczIuZGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgZWRpdGFibGUgPSBfcHJvcHMyLmVkaXRhYmxlLFxuICAgICAgICAgICAgICAgIG1vbmV5S2V5Ym9hcmRBbGlnbiA9IF9wcm9wczIubW9uZXlLZXlib2FyZEFsaWduO1xuICAgICAgICAgICAgdmFyIF9zdGF0ZSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgICAgICAgZm9jdXMgPSBfc3RhdGUuZm9jdXMsXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBfc3RhdGUudmFsdWU7XG5cbiAgICAgICAgICAgIHZhciBwcmV2ZW50S2V5Ym9hcmQgPSBkaXNhYmxlZCB8fCAhZWRpdGFibGU7XG4gICAgICAgICAgICB2YXIgZmFrZUlucHV0Q2xzID0gKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSgnZmFrZS1pbnB1dCcsIHtcbiAgICAgICAgICAgICAgICBmb2N1czogZm9jdXMsXG4gICAgICAgICAgICAgICAgJ2Zha2UtaW5wdXQtZGlzYWJsZWQnOiBkaXNhYmxlZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgZmFrZUlucHV0Q29udGFpbmVyQ2xzID0gKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSgnZmFrZS1pbnB1dC1jb250YWluZXInLCB7XG4gICAgICAgICAgICAgICAgJ2Zha2UtaW5wdXQtY29udGFpbmVyLWxlZnQnOiBtb25leUtleWJvYXJkQWxpZ24gPT09ICdsZWZ0J1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogZmFrZUlucHV0Q29udGFpbmVyQ2xzIH0sXG4gICAgICAgICAgICAgICAgdmFsdWUgPT09ICcnICYmXG4gICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmpzeC1uby1tdWx0aWxpbmUtanNcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdmYWtlLWlucHV0LXBsYWNlaG9sZGVyJyB9LFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlclxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIHsgcm9sZTogJ3RleHRib3gnLCAnYXJpYS1sYWJlbCc6IHZhbHVlIHx8IHBsYWNlaG9sZGVyLCBjbGFzc05hbWU6IGZha2VJbnB1dENscywgcmVmOiBmdW5jdGlvbiByZWYoZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMzLmlucHV0UmVmID0gZWw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBvbkNsaWNrOiBwcmV2ZW50S2V5Ym9hcmQgPyBmdW5jdGlvbiAoKSB7fSA6IHRoaXMub25GYWtlSW5wdXRDbGljayB9LFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJQb3J0YWwoKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1dKTtcbiAgICByZXR1cm4gTnVtYmVySW5wdXQ7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbk51bWJlcklucHV0LmRlZmF1bHRQcm9wcyA9IHtcbiAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UoKSB7fSxcbiAgICBvbkZvY3VzOiBmdW5jdGlvbiBvbkZvY3VzKCkge30sXG4gICAgb25CbHVyOiBmdW5jdGlvbiBvbkJsdXIoKSB7fSxcbiAgICBvblZpcnR1YWxLZXlib2FyZENvbmZpcm06IGZ1bmN0aW9uIG9uVmlydHVhbEtleWJvYXJkQ29uZmlybSgpIHt9LFxuICAgIHBsYWNlaG9sZGVyOiAnJyxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgZWRpdGFibGU6IHRydWUsXG4gICAgcHJlZml4Q2xzOiAnYW0taW5wdXQnLFxuICAgIGtleWJvYXJkUHJlZml4Q2xzOiAnYW0tbnVtYmVyLWtleWJvYXJkJyxcbiAgICBhdXRvQWRqdXN0SGVpZ2h0OiBmYWxzZVxufTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IE51bWJlcklucHV0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLktleWJvYXJkSXRlbSA9IHVuZGVmaW5lZDtcblxudmFyIF9leHRlbmRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJyk7XG5cbnZhciBfZXh0ZW5kczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHRlbmRzMik7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5Jyk7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmaW5lUHJvcGVydHkyKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcycpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNsYXNzMik7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybicpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIpO1xuXG52YXIgX2luaGVyaXRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cycpO1xuXG52YXIgX2luaGVyaXRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luaGVyaXRzMik7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3JlYWN0KTtcblxudmFyIF9ybWNGZWVkYmFjayA9IHJlcXVpcmUoJ3JtYy1mZWVkYmFjaycpO1xuXG52YXIgX3JtY0ZlZWRiYWNrMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JtY0ZlZWRiYWNrKTtcblxudmFyIF9leGVudiA9IHJlcXVpcmUoJy4uL191dGlsL2V4ZW52Jyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmpbJ2RlZmF1bHQnXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9fcmVzdCA9IHVuZGVmaW5lZCAmJiB1bmRlZmluZWQuX19yZXN0IHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKSB0W3BdID0gc1twXTtcbiAgICB9aWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKSB0W3BbaV1dID0gc1twW2ldXTtcbiAgICB9cmV0dXJuIHQ7XG59O1xuXG4vKipcbiAqIGRldGVybWluZXMgd2hldGhlciBhbiBhcnJheSBpbmNsdWRlcyBhIGNlcnRhaW4gdmFsdWUgYW1vbmcgaXRzIGVudHJpZXMsIHJldHVybmluZyB0cnVlIG9yIGZhbHNlIGFzIGFwcHJvcHJpYXRlLlxuICogQHBhcmFtIHthcnJheX0gYXJyIFRoZSBhcnJheSB0byBzZWFyY2ggaW5cbiAqIEBwYXJhbSB7YW55fSBpdGVtICBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvclxuICovXG5mdW5jdGlvbiBpbmNsdWRlcyhhcnIsIGl0ZW0pIHtcbiAgICBpZiAoIWFyciB8fCAhYXJyLmxlbmd0aCB8fCAhaXRlbSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhcnIubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaWYgKGFycltpXSA9PT0gaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG52YXIgS2V5Ym9hcmRJdGVtID0gZXhwb3J0cy5LZXlib2FyZEl0ZW0gPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgICgwLCBfaW5oZXJpdHMzWydkZWZhdWx0J10pKEtleWJvYXJkSXRlbSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBLZXlib2FyZEl0ZW0oKSB7XG4gICAgICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szWydkZWZhdWx0J10pKHRoaXMsIEtleWJvYXJkSXRlbSk7XG4gICAgICAgIHJldHVybiAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zWydkZWZhdWx0J10pKHRoaXMsIChLZXlib2FyZEl0ZW0uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihLZXlib2FyZEl0ZW0pKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICB9XG5cbiAgICAoMCwgX2NyZWF0ZUNsYXNzM1snZGVmYXVsdCddKShLZXlib2FyZEl0ZW0sIFt7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIHByZWZpeENscyA9IF9hLnByZWZpeENscyxcbiAgICAgICAgICAgICAgICBfb25DbGljayA9IF9hLm9uQ2xpY2ssXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gX2EuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkID0gX2EuZGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW4gPSBfYS5jaGlsZHJlbixcbiAgICAgICAgICAgICAgICB0ZFJlZiA9IF9hLnRkUmVmLFxuICAgICAgICAgICAgICAgIGxhYmVsID0gX2EubGFiZWwsXG4gICAgICAgICAgICAgICAgaWNvbk9ubHkgPSBfYS5pY29uT25seSxcbiAgICAgICAgICAgICAgICByZXN0UHJvcHMgPSBfX3Jlc3QoX2EsIFtcInByZWZpeENsc1wiLCBcIm9uQ2xpY2tcIiwgXCJjbGFzc05hbWVcIiwgXCJkaXNhYmxlZFwiLCBcImNoaWxkcmVuXCIsIFwidGRSZWZcIiwgXCJsYWJlbFwiLCBcImljb25Pbmx5XCJdKTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGNoaWxkcmVuO1xuICAgICAgICAgICAgaWYgKGNsYXNzTmFtZSA9PT0gJ2tleWJvYXJkLWRlbGV0ZScpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9ICdkZWxldGUnO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjbGFzc05hbWUgPT09ICdrZXlib2FyZC1oaWRlJykge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gJ2hpZGUnO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjbGFzc05hbWUgPT09ICdrZXlib2FyZC1jb25maXJtJykge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gJ2NvbmZpcm0nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGV4dHJhQ2xzID0gKDAsIF9kZWZpbmVQcm9wZXJ0eTNbJ2RlZmF1bHQnXSkoe30sIHByZWZpeENscyArICctaXRlbS1kaXNhYmxlZCcsIGRpc2FibGVkKTtcbiAgICAgICAgICAgIHZhciB3cmFwQ2xzID0gKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKShwcmVmaXhDbHMgKyAnLWl0ZW0nLCBjbGFzc05hbWUsIGV4dHJhQ2xzKTtcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgIF9ybWNGZWVkYmFjazJbJ2RlZmF1bHQnXSxcbiAgICAgICAgICAgICAgICB7IGRpc2FibGVkOiBkaXNhYmxlZCwgYWN0aXZlQ2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWl0ZW0tYWN0aXZlJyB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICd0ZCcsXG4gICAgICAgICAgICAgICAgICAgICgwLCBfZXh0ZW5kczNbJ2RlZmF1bHQnXSkoeyByZWY6IHRkUmVmXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6anN4LW5vLW11bHRpbGluZS1qc1xuICAgICAgICAgICAgICAgICAgICAgICAgLCBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfb25DbGljayhlLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBjbGFzc05hbWU6IHdyYXBDbHMgfSwgcmVzdFByb3BzKSxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgICAgICAgICAgICAgIGljb25Pbmx5ICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAnaScsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ3NyLW9ubHknIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1dKTtcbiAgICByZXR1cm4gS2V5Ym9hcmRJdGVtO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5LZXlib2FyZEl0ZW0uZGVmYXVsdFByb3BzID0ge1xuICAgIHByZWZpeENsczogJ2FtLW51bWJlci1rZXlib2FyZCcsXG4gICAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHt9LFxuICAgIGRpc2FibGVkOiBmYWxzZVxufTtcblxudmFyIEN1c3RvbUtleWJvYXJkID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQyKSB7XG4gICAgKDAsIF9pbmhlcml0czNbJ2RlZmF1bHQnXSkoQ3VzdG9tS2V5Ym9hcmQsIF9SZWFjdCRDb21wb25lbnQyKTtcblxuICAgIGZ1bmN0aW9uIEN1c3RvbUtleWJvYXJkKCkge1xuICAgICAgICAoMCwgX2NsYXNzQ2FsbENoZWNrM1snZGVmYXVsdCddKSh0aGlzLCBDdXN0b21LZXlib2FyZCk7XG5cbiAgICAgICAgdmFyIF90aGlzMiA9ICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjNbJ2RlZmF1bHQnXSkodGhpcywgKEN1c3RvbUtleWJvYXJkLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ3VzdG9tS2V5Ym9hcmQpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcblxuICAgICAgICBfdGhpczIub25LZXlib2FyZENsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogJyc7XG5cbiAgICAgICAgICAgIGUubmF0aXZlRXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBpZiAoX3RoaXMyLnByb3BzLmRpc2FibGVkS2V5cyAmJiBpbmNsdWRlcyhfdGhpczIucHJvcHMuZGlzYWJsZWRLZXlzLCB2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gJ2NvbmZpcm0nICYmIF90aGlzMi5jb25maXJtRGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzMi5saW5rZWRJbnB1dCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpczIubGlua2VkSW5wdXQub25LZXlib2FyZENsaWNrKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzMi5yZW5kZXJLZXlib2FyZEl0ZW0gPSBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgIHZhciBkaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKF90aGlzMi5wcm9wcy5kaXNhYmxlZEtleXMgJiYgaW5jbHVkZXMoX3RoaXMyLnByb3BzLmRpc2FibGVkS2V5cywgaXRlbSkpIHtcbiAgICAgICAgICAgICAgICBkaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICBLZXlib2FyZEl0ZW0sXG4gICAgICAgICAgICAgICAgeyBvbkNsaWNrOiBfdGhpczIub25LZXlib2FyZENsaWNrLCBrZXk6ICdpdGVtLScgKyBpdGVtICsgJy0nICsgaW5kZXgsIGRpc2FibGVkOiBkaXNhYmxlZCB9LFxuICAgICAgICAgICAgICAgIGl0ZW1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfdGhpczI7XG4gICAgfVxuXG4gICAgKDAsIF9jcmVhdGVDbGFzczNbJ2RlZmF1bHQnXSkoQ3VzdG9tS2V5Ym9hcmQsIFt7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICAgICAgcHJlZml4Q2xzID0gX3Byb3BzLnByZWZpeENscyxcbiAgICAgICAgICAgICAgICBjb25maXJtTGFiZWwgPSBfcHJvcHMuY29uZmlybUxhYmVsLFxuICAgICAgICAgICAgICAgIGJhY2tzcGFjZUxhYmVsID0gX3Byb3BzLmJhY2tzcGFjZUxhYmVsLFxuICAgICAgICAgICAgICAgIGNhbmNlbEtleWJvYXJkTGFiZWwgPSBfcHJvcHMuY2FuY2VsS2V5Ym9hcmRMYWJlbCxcbiAgICAgICAgICAgICAgICB3cmFwUHJvcHMgPSBfcHJvcHMud3JhcFByb3BzLFxuICAgICAgICAgICAgICAgIGhlYWRlciA9IF9wcm9wcy5oZWFkZXI7XG5cbiAgICAgICAgICAgIHZhciB3cmFwcGVyQ2xzID0gKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKShwcmVmaXhDbHMgKyAnLXdyYXBwZXInLCBwcmVmaXhDbHMgKyAnLXdyYXBwZXItaGlkZScpO1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgKDAsIF9leHRlbmRzM1snZGVmYXVsdCddKSh7IGNsYXNzTmFtZTogd3JhcHBlckNscywgcmVmOiBmdW5jdGlvbiByZWYoZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczMuYW50bUtleWJvYXJkID0gZWw7XG4gICAgICAgICAgICAgICAgICAgIH0gfSwgd3JhcFByb3BzKSxcbiAgICAgICAgICAgICAgICBoZWFkZXIgJiYgUmVhY3QuY2xvbmVFbGVtZW50KGhlYWRlciwgeyBvbkNsaWNrOiB0aGlzLm9uS2V5Ym9hcmRDbGljayB9KSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAndGFibGUnLFxuICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3Rib2R5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0cicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbJzEnLCAnMicsICczJ10ubWFwKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmpzeC1uby1tdWx0aWxpbmUtanNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzMy5yZW5kZXJLZXlib2FyZEl0ZW0oaXRlbSwgaW5kZXgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChLZXlib2FyZEl0ZW0sICgwLCBfZXh0ZW5kczNbJ2RlZmF1bHQnXSkoeyBjbGFzc05hbWU6ICdrZXlib2FyZC1kZWxldGUnLCByb3dTcGFuOiAyLCBvbkNsaWNrOiB0aGlzLm9uS2V5Ym9hcmRDbGljayB9LCB0aGlzLmdldEFyaWFBdHRyKGJhY2tzcGFjZUxhYmVsKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndHInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWyc0JywgJzUnLCAnNiddLm1hcChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpqc3gtbm8tbXVsdGlsaW5lLWpzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpczMucmVuZGVyS2V5Ym9hcmRJdGVtKGl0ZW0sIGluZGV4KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndHInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWyc3JywgJzgnLCAnOSddLm1hcChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpqc3gtbm8tbXVsdGlsaW5lLWpzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpczMucmVuZGVyS2V5Ym9hcmRJdGVtKGl0ZW0sIGluZGV4KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEtleWJvYXJkSXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdrZXlib2FyZC1jb25maXJtJywgcm93U3BhbjogMiwgb25DbGljazogdGhpcy5vbktleWJvYXJkQ2xpY2ssIHRkUmVmOiBmdW5jdGlvbiB0ZFJlZihlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczMuY29uZmlybUtleWJvYXJkSXRlbSA9IGVsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtTGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndHInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWycuJywgJzAnXS5tYXAoZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6anN4LW5vLW11bHRpbGluZS1qc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMzLnJlbmRlcktleWJvYXJkSXRlbShpdGVtLCBpbmRleClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEtleWJvYXJkSXRlbSwgKDAsIF9leHRlbmRzM1snZGVmYXVsdCddKSh7IGNsYXNzTmFtZTogJ2tleWJvYXJkLWhpZGUnLCBvbkNsaWNrOiB0aGlzLm9uS2V5Ym9hcmRDbGljayB9LCB0aGlzLmdldEFyaWFBdHRyKGNhbmNlbEtleWJvYXJkTGFiZWwpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldEFyaWFBdHRyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEFyaWFBdHRyKGxhYmVsKSB7XG4gICAgICAgICAgICBpZiAoX2V4ZW52LklTX0lPUykge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IGxhYmVsOiBsYWJlbCwgaWNvbk9ubHk6IHRydWUgfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgcm9sZTogJ2J1dHRvbicsICdhcmlhLWxhYmVsJzogbGFiZWwgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1dKTtcbiAgICByZXR1cm4gQ3VzdG9tS2V5Ym9hcmQ7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbkN1c3RvbUtleWJvYXJkLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBwcmVmaXhDbHM6ICdhbS1udW1iZXIta2V5Ym9hcmQnLFxuICAgIGRpc2FibGVkS2V5czogbnVsbFxufTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IEN1c3RvbUtleWJvYXJkOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kczIgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIik7XG5cbnZhciBfZXh0ZW5kczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHRlbmRzMik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVja1wiKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3NcIik7XG5cbnZhciBfY3JlYXRlQ2xhc3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQ2xhc3MyKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVyblwiKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzXCIpO1xuXG52YXIgX2luaGVyaXRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luaGVyaXRzMik7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9yZWFjdCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbnZhciBfX3Jlc3QgPSB1bmRlZmluZWQgJiYgdW5kZWZpbmVkLl9fcmVzdCB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMCkgdFtwXSA9IHNbcF07XG4gICAgfWlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCkgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgfXJldHVybiB0O1xufTtcblxudmFyIElucHV0ID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICAoMCwgX2luaGVyaXRzM1tcImRlZmF1bHRcIl0pKElucHV0LCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIElucHV0KCkge1xuICAgICAgICAoMCwgX2NsYXNzQ2FsbENoZWNrM1tcImRlZmF1bHRcIl0pKHRoaXMsIElucHV0KTtcblxuICAgICAgICB2YXIgX3RoaXMgPSAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zW1wiZGVmYXVsdFwiXSkodGhpcywgKElucHV0Ll9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoSW5wdXQpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcblxuICAgICAgICBfdGhpcy5vbklucHV0Qmx1ciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkJsdXIpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5wcm9wcy5vbkJsdXIodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5vbklucHV0Rm9jdXMgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgLy8gaGVyZSBzaG91bGQgaGF2ZSBhIHZhbHVlIGRlZmluaXRpb24gYnV0IG5vbmUuXG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkZvY3VzKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMucHJvcHMub25Gb2N1cyh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmZvY3VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKF90aGlzLmlucHV0UmVmKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuaW5wdXRSZWYuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgICgwLCBfY3JlYXRlQ2xhc3MzW1wiZGVmYXVsdFwiXSkoSW5wdXQsIFt7XG4gICAgICAgIGtleTogXCJyZW5kZXJcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIG9uQmx1ciA9IF9hLm9uQmx1cixcbiAgICAgICAgICAgICAgICBvbkZvY3VzID0gX2Eub25Gb2N1cyxcbiAgICAgICAgICAgICAgICByZXN0UHJvcHMgPSBfX3Jlc3QoX2EsIFtcIm9uQmx1clwiLCBcIm9uRm9jdXNcIl0pO1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCAoMCwgX2V4dGVuZHMzW1wiZGVmYXVsdFwiXSkoeyByZWY6IGZ1bmN0aW9uIHJlZihlbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMyLmlucHV0UmVmID0gZWw7XG4gICAgICAgICAgICAgICAgfSwgb25CbHVyOiB0aGlzLm9uSW5wdXRCbHVyLCBvbkZvY3VzOiB0aGlzLm9uSW5wdXRGb2N1cyB9LCByZXN0UHJvcHMpKTtcbiAgICAgICAgfVxuICAgIH1dKTtcbiAgICByZXR1cm4gSW5wdXQ7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gSW5wdXQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjaycpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzQ2FsbENoZWNrMik7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJyk7XG5cbnZhciBfY3JlYXRlQ2xhc3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQ2xhc3MyKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJyk7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMik7XG5cbnZhciBfaW5oZXJpdHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJyk7XG5cbnZhciBfaW5oZXJpdHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5oZXJpdHMyKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9yZWFjdCk7XG5cbnZhciBfcmVhY3REb20gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIFJlYWN0RE9NID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3JlYWN0RG9tKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09ialsnZGVmYXVsdCddID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgY3JlYXRlUG9ydGFsID0gUmVhY3RET00uY3JlYXRlUG9ydGFsO1xuXG52YXIgUG9ydGFsID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICAoMCwgX2luaGVyaXRzM1snZGVmYXVsdCddKShQb3J0YWwsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gUG9ydGFsKHByb3BzKSB7XG4gICAgICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szWydkZWZhdWx0J10pKHRoaXMsIFBvcnRhbCk7XG5cbiAgICAgICAgdmFyIF90aGlzID0gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuM1snZGVmYXVsdCddKSh0aGlzLCAoUG9ydGFsLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoUG9ydGFsKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgICAgIF90aGlzLmNvbnRhaW5lciA9IF90aGlzLnByb3BzLmdldENvbnRhaW5lcigpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgKDAsIF9jcmVhdGVDbGFzczNbJ2RlZmF1bHQnXSkoUG9ydGFsLCBbe1xuICAgICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlUG9ydGFsKHRoaXMucHJvcHMuY2hpbGRyZW4sIHRoaXMuY29udGFpbmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfV0pO1xuICAgIHJldHVybiBQb3J0YWw7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFBvcnRhbDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eScpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5Mik7XG5cbnZhciBfZXh0ZW5kczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xuXG52YXIgX2V4dGVuZHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kczIpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjaycpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzQ2FsbENoZWNrMik7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJyk7XG5cbnZhciBfY3JlYXRlQ2xhc3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQ2xhc3MyKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJyk7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMik7XG5cbnZhciBfaW5oZXJpdHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJyk7XG5cbnZhciBfaW5oZXJpdHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5oZXJpdHMyKTtcblxudmFyIF9jbGFzc25hbWVzMyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzNCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMzKTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBQcm9wVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfcHJvcFR5cGVzKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9yZWFjdCk7XG5cbnZhciBfcm1jRmVlZGJhY2sgPSByZXF1aXJlKCdybWMtZmVlZGJhY2snKTtcblxudmFyIF9ybWNGZWVkYmFjazIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ybWNGZWVkYmFjayk7XG5cbnZhciBfZ2V0TG9jYWxlID0gcmVxdWlyZSgnLi4vX3V0aWwvZ2V0TG9jYWxlJyk7XG5cbnZhciBfQ3VzdG9tSW5wdXQgPSByZXF1aXJlKCcuL0N1c3RvbUlucHV0Jyk7XG5cbnZhciBfQ3VzdG9tSW5wdXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ3VzdG9tSW5wdXQpO1xuXG52YXIgX0lucHV0ID0gcmVxdWlyZSgnLi9JbnB1dCcpO1xuXG52YXIgX0lucHV0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0lucHV0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09ialsnZGVmYXVsdCddID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX19yZXN0ID0gdW5kZWZpbmVkICYmIHVuZGVmaW5lZC5fX3Jlc3QgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApIHRbcF0gPSBzW3BdO1xuICAgIH1pZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgIH1yZXR1cm4gdDtcbn07XG4vKiB0c2xpbnQ6ZGlzYWJsZTpqc3gtbm8tbXVsdGlsaW5lLWpzICovXG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuZnVuY3Rpb24gbm9ybWFsaXplVmFsdWUodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJyB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZSArICcnO1xufVxuXG52YXIgSW5wdXRJdGVtID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICAoMCwgX2luaGVyaXRzM1snZGVmYXVsdCddKShJbnB1dEl0ZW0sIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gSW5wdXRJdGVtKHByb3BzKSB7XG4gICAgICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szWydkZWZhdWx0J10pKHRoaXMsIElucHV0SXRlbSk7XG5cbiAgICAgICAgdmFyIF90aGlzID0gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuM1snZGVmYXVsdCddKSh0aGlzLCAoSW5wdXRJdGVtLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoSW5wdXRJdGVtKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgICAgIF90aGlzLm9uSW5wdXRDaGFuZ2UgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIGVsID0gZS50YXJnZXQ7XG4gICAgICAgICAgICB2YXIgcmF3VmFsID0gZWwudmFsdWU7XG5cbiAgICAgICAgICAgIHZhciBwcmVQb3MgPSAwO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAvLyBzb21lIGlucHV0IHR5cGUgZG8gbm90IHN1cHBvcnQgc2VsZWN0aW9uLCBzZWUgaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvaW5wdXQuaHRtbCNkby1ub3QtYXBwbHlcbiAgICAgICAgICAgICAgICBwcmVQb3MgPSBlbC5zZWxlY3Rpb25FbmQgfHwgMDtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdHZXQgc2VsZWN0aW9uIGVycm9yOicsIGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBfdGhpcyRzdGF0ZSR2YWx1ZSA9IF90aGlzLnN0YXRlLnZhbHVlLFxuICAgICAgICAgICAgICAgIHByZUN0cmxWYWwgPSBfdGhpcyRzdGF0ZSR2YWx1ZSA9PT0gdW5kZWZpbmVkID8gJycgOiBfdGhpcyRzdGF0ZSR2YWx1ZTtcbiAgICAgICAgICAgIHZhciB0eXBlID0gX3RoaXMucHJvcHMudHlwZTtcblxuICAgICAgICAgICAgdmFyIGN0cmxWYWx1ZSA9IHJhd1ZhbDtcbiAgICAgICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2JhbmtDYXJkJzpcbiAgICAgICAgICAgICAgICAgICAgY3RybFZhbHVlID0gcmF3VmFsLnJlcGxhY2UoL1xcRC9nLCAnJykucmVwbGFjZSgvKC4uLi4pKD89LikvZywgJyQxICcpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdwaG9uZSc6XG4gICAgICAgICAgICAgICAgICAgIGN0cmxWYWx1ZSA9IHJhd1ZhbC5yZXBsYWNlKC9cXEQvZywgJycpLnN1YnN0cmluZygwLCAxMSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZUxlbiA9IGN0cmxWYWx1ZS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZUxlbiA+IDMgJiYgdmFsdWVMZW4gPCA4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdHJsVmFsdWUgPSBjdHJsVmFsdWUuc3Vic3RyKDAsIDMpICsgJyAnICsgY3RybFZhbHVlLnN1YnN0cigzKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZUxlbiA+PSA4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdHJsVmFsdWUgPSBjdHJsVmFsdWUuc3Vic3RyKDAsIDMpICsgJyAnICsgY3RybFZhbHVlLnN1YnN0cigzLCA0KSArICcgJyArIGN0cmxWYWx1ZS5zdWJzdHIoNyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgICAgICAgICAgY3RybFZhbHVlID0gcmF3VmFsLnJlcGxhY2UoL1xcRC9nLCAnJyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3RleHQnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ3Bhc3N3b3JkJzpcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF90aGlzLmhhbmRsZU9uQ2hhbmdlKGN0cmxWYWx1ZSwgY3RybFZhbHVlICE9PSByYXdWYWwsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYmFua0NhcmQnOlxuICAgICAgICAgICAgICAgICAgICBjYXNlICdwaG9uZSc6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb250cm9sbGVkIGlucHV0IHR5cGUgbmVlZHMgdG8gYWRqdXN0IHRoZSBwb3NpdGlvbiBvZiB0aGUgY2FyZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc29tZSBpbnB1dCB0eXBlIGRvIG5vdCBzdXBwb3J0IHNlbGVjdGlvbiwgc2VlIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2lucHV0Lmh0bWwjZG8tbm90LWFwcGx5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvcyA9IF90aGlzLmNhbGNQb3MocHJlUG9zLCBwcmVDdHJsVmFsLCByYXdWYWwsIGN0cmxWYWx1ZSwgWycgJ10sIC9cXEQvZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdwaG9uZScgJiYgKHBvcyA9PT0gNCB8fCBwb3MgPT09IDkpIHx8IHR5cGUgPT09ICdiYW5rQ2FyZCcgJiYgcG9zID4gMCAmJiBwb3MgJSA1ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcyAtPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5zZWxlY3Rpb25TdGFydCA9IGVsLnNlbGVjdGlvbkVuZCA9IHBvcztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdTZXQgc2VsZWN0aW9uIGVycm9yOicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmhhbmRsZU9uQ2hhbmdlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgaXNNdXRhdGVkID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcbiAgICAgICAgICAgIHZhciBhZGp1c3RQb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IG5vb3A7XG4gICAgICAgICAgICB2YXIgb25DaGFuZ2UgPSBfdGhpcy5wcm9wcy5vbkNoYW5nZTtcblxuICAgICAgICAgICAgaWYgKCEoJ3ZhbHVlJyBpbiBfdGhpcy5wcm9wcykpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiB2YWx1ZSB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyB2YWx1ZTogX3RoaXMucHJvcHMudmFsdWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNNdXRhdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRqdXN0UG9zKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgYWRqdXN0UG9zKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhZGp1c3RQb3MoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMub25JbnB1dEZvY3VzID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMuZGVib3VuY2VUaW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KF90aGlzLmRlYm91bmNlVGltZW91dCk7XG4gICAgICAgICAgICAgICAgX3RoaXMuZGVib3VuY2VUaW1lb3V0ID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBmb2N1czogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoX3RoaXMucHJvcHMub25Gb2N1cykge1xuICAgICAgICAgICAgICAgIF90aGlzLnByb3BzLm9uRm9jdXModmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5vbklucHV0Qmx1ciA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKF90aGlzLmlucHV0UmVmKSB7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5pbnB1dFJlZiBtYXkgYmUgbnVsbCBpZiBjdXN0b21LZXlib2FyZCB1bm1vdW50XG4gICAgICAgICAgICAgICAgX3RoaXMuZGVib3VuY2VUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPT0gKF90aGlzLmlucHV0UmVmICYmIF90aGlzLmlucHV0UmVmLmlucHV0UmVmKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKF90aGlzLnByb3BzLm9uQmx1cikge1xuICAgICAgICAgICAgICAgIC8vIGZpeCBhdXRvRm9jdXMgaXRlbSBibHVyIHdpdGggZmxhc2hcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZml4IGlvczEyIHdlY2hhdCBicm93c2VyIGNsaWNrIGZhaWx1cmUgYWZ0ZXIgaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgICAgICAgIF90aGlzLnByb3BzLm9uQmx1cih2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmNsZWFySW5wdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMucHJvcHMudHlwZSAhPT0gJ3Bhc3N3b3JkJyAmJiBfdGhpcy5wcm9wcy51cGRhdGVQbGFjZWhvbGRlcikge1xuICAgICAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IF90aGlzLnByb3BzLnZhbHVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgdmFsdWU6ICcnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgICAgICAgICAgICAgIF90aGlzLnByb3BzLm9uQ2hhbmdlKCcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF90aGlzLmZvY3VzKCk7XG4gICAgICAgIH07XG4gICAgICAgIC8vIHRoaXMgaXMgaW5zdGFuY2UgbWV0aG9kIGZvciB1c2VyIHRvIHVzZVxuICAgICAgICBfdGhpcy5mb2N1cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy5pbnB1dFJlZikge1xuICAgICAgICAgICAgICAgIF90aGlzLmlucHV0UmVmLmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8vIGNhbGN1bGF0ZSB0aGUgcG9zaXRpb24gb2YgdGhlIGNhcmV0XG4gICAgICAgIF90aGlzLmNhbGNQb3MgPSBmdW5jdGlvbiAocHJlUG9zLCBwcmVDdHJsVmFsLCByYXdWYWwsIGN0cmxWYWwsIHBsYWNlaG9sZGVyQ2hhcnMsIG1hc2tSZWcpIHtcbiAgICAgICAgICAgIHZhciBlZGl0TGVuZ3RoID0gcmF3VmFsLmxlbmd0aCAtIHByZUN0cmxWYWwubGVuZ3RoO1xuICAgICAgICAgICAgdmFyIGlzQWRkaXRpb24gPSBlZGl0TGVuZ3RoID4gMDtcbiAgICAgICAgICAgIHZhciBwb3MgPSBwcmVQb3M7XG4gICAgICAgICAgICBpZiAoaXNBZGRpdGlvbikge1xuICAgICAgICAgICAgICAgIHZhciBhZGRpdGlvblN0ciA9IHJhd1ZhbC5zdWJzdHIocG9zIC0gZWRpdExlbmd0aCwgZWRpdExlbmd0aCk7XG4gICAgICAgICAgICAgICAgdmFyIGN0cmxDaGFyQ291bnQgPSBhZGRpdGlvblN0ci5yZXBsYWNlKG1hc2tSZWcsICcnKS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgcG9zIC09IGVkaXRMZW5ndGggLSBjdHJsQ2hhckNvdW50O1xuICAgICAgICAgICAgICAgIHZhciBwbGFjZWhvbGRlckNoYXJDb3VudCA9IDA7XG4gICAgICAgICAgICAgICAgd2hpbGUgKGN0cmxDaGFyQ291bnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwbGFjZWhvbGRlckNoYXJzLmluZGV4T2YoY3RybFZhbC5jaGFyQXQocG9zIC0gY3RybENoYXJDb3VudCArIHBsYWNlaG9sZGVyQ2hhckNvdW50KSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdHJsQ2hhckNvdW50LS07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlckNoYXJDb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBvcyArPSBwbGFjZWhvbGRlckNoYXJDb3VudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwb3M7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IHByb3BzLnBsYWNlaG9sZGVyLFxuICAgICAgICAgICAgdmFsdWU6IG5vcm1hbGl6ZVZhbHVlKHByb3BzLnZhbHVlIHx8IHByb3BzLmRlZmF1bHRWYWx1ZSlcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgICgwLCBfY3JlYXRlQ2xhc3MzWydkZWZhdWx0J10pKElucHV0SXRlbSwgW3tcbiAgICAgICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICAgICAgaWYgKCdwbGFjZWhvbGRlcicgaW4gbmV4dFByb3BzICYmICFuZXh0UHJvcHMudXBkYXRlUGxhY2Vob2xkZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IG5leHRQcm9wcy5wbGFjZWhvbGRlclxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCd2YWx1ZScgaW4gbmV4dFByb3BzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBuZXh0UHJvcHMudmFsdWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kZWJvdW5jZVRpbWVvdXQpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMuZGVib3VuY2VUaW1lb3V0KTtcbiAgICAgICAgICAgICAgICB0aGlzLmRlYm91bmNlVGltZW91dCA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgICB2YXIgX2NsYXNzbmFtZXMsXG4gICAgICAgICAgICAgICAgX2NsYXNzbmFtZXMyLFxuICAgICAgICAgICAgICAgIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICAgIHZhciBwcm9wcyA9ICgwLCBfZXh0ZW5kczNbJ2RlZmF1bHQnXSkoe30sIHRoaXMucHJvcHMpO1xuICAgICAgICAgICAgZGVsZXRlIHByb3BzLnVwZGF0ZVBsYWNlaG9sZGVyO1xuXG4gICAgICAgICAgICB2YXIgcHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzLFxuICAgICAgICAgICAgICAgIHByZWZpeExpc3RDbHMgPSBwcm9wcy5wcmVmaXhMaXN0Q2xzLFxuICAgICAgICAgICAgICAgIGVkaXRhYmxlID0gcHJvcHMuZWRpdGFibGUsXG4gICAgICAgICAgICAgICAgc3R5bGUgPSBwcm9wcy5zdHlsZSxcbiAgICAgICAgICAgICAgICBjbGVhciA9IHByb3BzLmNsZWFyLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgICAgICAgICAgZXJyb3IgPSBwcm9wcy5lcnJvcixcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgZXh0cmEgPSBwcm9wcy5leHRyYSxcbiAgICAgICAgICAgICAgICBsYWJlbE51bWJlciA9IHByb3BzLmxhYmVsTnVtYmVyLFxuICAgICAgICAgICAgICAgIHR5cGUgPSBwcm9wcy50eXBlLFxuICAgICAgICAgICAgICAgIG9uRXh0cmFDbGljayA9IHByb3BzLm9uRXh0cmFDbGljayxcbiAgICAgICAgICAgICAgICBvbkVycm9yQ2xpY2sgPSBwcm9wcy5vbkVycm9yQ2xpY2ssXG4gICAgICAgICAgICAgICAgbW9uZXlLZXlib2FyZEFsaWduID0gcHJvcHMubW9uZXlLZXlib2FyZEFsaWduLFxuICAgICAgICAgICAgICAgIG1vbmV5S2V5Ym9hcmRXcmFwUHJvcHMgPSBwcm9wcy5tb25leUtleWJvYXJkV3JhcFByb3BzLFxuICAgICAgICAgICAgICAgIG1vbmV5S2V5Ym9hcmRIZWFkZXIgPSBwcm9wcy5tb25leUtleWJvYXJkSGVhZGVyLFxuICAgICAgICAgICAgICAgIG9uVmlydHVhbEtleWJvYXJkQ29uZmlybSA9IHByb3BzLm9uVmlydHVhbEtleWJvYXJkQ29uZmlybSxcbiAgICAgICAgICAgICAgICBhdXRvQWRqdXN0SGVpZ2h0ID0gcHJvcHMuYXV0b0FkanVzdEhlaWdodCxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZEtleXMgPSBwcm9wcy5kaXNhYmxlZEtleXMsXG4gICAgICAgICAgICAgICAgcmVzdFByb3BzID0gX19yZXN0KHByb3BzLCBbXCJwcmVmaXhDbHNcIiwgXCJwcmVmaXhMaXN0Q2xzXCIsIFwiZWRpdGFibGVcIiwgXCJzdHlsZVwiLCBcImNsZWFyXCIsIFwiY2hpbGRyZW5cIiwgXCJlcnJvclwiLCBcImNsYXNzTmFtZVwiLCBcImV4dHJhXCIsIFwibGFiZWxOdW1iZXJcIiwgXCJ0eXBlXCIsIFwib25FeHRyYUNsaWNrXCIsIFwib25FcnJvckNsaWNrXCIsIFwibW9uZXlLZXlib2FyZEFsaWduXCIsIFwibW9uZXlLZXlib2FyZFdyYXBQcm9wc1wiLCBcIm1vbmV5S2V5Ym9hcmRIZWFkZXJcIiwgXCJvblZpcnR1YWxLZXlib2FyZENvbmZpcm1cIiwgXCJhdXRvQWRqdXN0SGVpZ2h0XCIsIFwiZGlzYWJsZWRLZXlzXCJdKTtcblxuICAgICAgICAgICAgdmFyIG5hbWUgPSByZXN0UHJvcHMubmFtZSxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZCA9IHJlc3RQcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgICAgICAgICBtYXhMZW5ndGggPSByZXN0UHJvcHMubWF4TGVuZ3RoO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZTtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp2YXJpYWJsZS1uYW1lXG5cbiAgICAgICAgICAgIHZhciBfbG9jYWxlID0gKDAsIF9nZXRMb2NhbGUuZ2V0Q29tcG9uZW50TG9jYWxlKSh0aGlzLnByb3BzLCB0aGlzLmNvbnRleHQsICdJbnB1dEl0ZW0nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcXVpcmUoJy4vbG9jYWxlL3poX0NOJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBjb25maXJtTGFiZWwgPSBfbG9jYWxlLmNvbmZpcm1MYWJlbCxcbiAgICAgICAgICAgICAgICBiYWNrc3BhY2VMYWJlbCA9IF9sb2NhbGUuYmFja3NwYWNlTGFiZWwsXG4gICAgICAgICAgICAgICAgY2FuY2VsS2V5Ym9hcmRMYWJlbCA9IF9sb2NhbGUuY2FuY2VsS2V5Ym9hcmRMYWJlbDtcbiAgICAgICAgICAgIHZhciBfc3RhdGUgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgICAgICAgIGZvY3VzID0gX3N0YXRlLmZvY3VzLFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyID0gX3N0YXRlLnBsYWNlaG9sZGVyO1xuXG4gICAgICAgICAgICB2YXIgd3JhcENscyA9ICgwLCBfY2xhc3NuYW1lczRbJ2RlZmF1bHQnXSkocHJlZml4TGlzdENscyArICctaXRlbScsIHByZWZpeENscyArICctaXRlbScsIHByZWZpeExpc3RDbHMgKyAnLWl0ZW0tbWlkZGxlJywgY2xhc3NOYW1lLCAoX2NsYXNzbmFtZXMgPSB7fSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTNbJ2RlZmF1bHQnXSkoX2NsYXNzbmFtZXMsIHByZWZpeENscyArICctZGlzYWJsZWQnLCBkaXNhYmxlZCksICgwLCBfZGVmaW5lUHJvcGVydHkzWydkZWZhdWx0J10pKF9jbGFzc25hbWVzLCBwcmVmaXhDbHMgKyAnLWVycm9yJywgZXJyb3IpLCAoMCwgX2RlZmluZVByb3BlcnR5M1snZGVmYXVsdCddKShfY2xhc3NuYW1lcywgcHJlZml4Q2xzICsgJy1mb2N1cycsIGZvY3VzKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTNbJ2RlZmF1bHQnXSkoX2NsYXNzbmFtZXMsIHByZWZpeENscyArICctYW5kcm9pZCcsIGZvY3VzKSwgX2NsYXNzbmFtZXMpKTtcbiAgICAgICAgICAgIHZhciBsYWJlbENscyA9ICgwLCBfY2xhc3NuYW1lczRbJ2RlZmF1bHQnXSkocHJlZml4Q2xzICsgJy1sYWJlbCcsIChfY2xhc3NuYW1lczIgPSB7fSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTNbJ2RlZmF1bHQnXSkoX2NsYXNzbmFtZXMyLCBwcmVmaXhDbHMgKyAnLWxhYmVsLTInLCBsYWJlbE51bWJlciA9PT0gMiksICgwLCBfZGVmaW5lUHJvcGVydHkzWydkZWZhdWx0J10pKF9jbGFzc25hbWVzMiwgcHJlZml4Q2xzICsgJy1sYWJlbC0zJywgbGFiZWxOdW1iZXIgPT09IDMpLCAoMCwgX2RlZmluZVByb3BlcnR5M1snZGVmYXVsdCddKShfY2xhc3NuYW1lczIsIHByZWZpeENscyArICctbGFiZWwtNCcsIGxhYmVsTnVtYmVyID09PSA0KSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTNbJ2RlZmF1bHQnXSkoX2NsYXNzbmFtZXMyLCBwcmVmaXhDbHMgKyAnLWxhYmVsLTUnLCBsYWJlbE51bWJlciA9PT0gNSksICgwLCBfZGVmaW5lUHJvcGVydHkzWydkZWZhdWx0J10pKF9jbGFzc25hbWVzMiwgcHJlZml4Q2xzICsgJy1sYWJlbC02JywgbGFiZWxOdW1iZXIgPT09IDYpLCAoMCwgX2RlZmluZVByb3BlcnR5M1snZGVmYXVsdCddKShfY2xhc3NuYW1lczIsIHByZWZpeENscyArICctbGFiZWwtNycsIGxhYmVsTnVtYmVyID09PSA3KSwgX2NsYXNzbmFtZXMyKSk7XG4gICAgICAgICAgICB2YXIgY29udHJvbENscyA9IHByZWZpeENscyArICctY29udHJvbCc7XG4gICAgICAgICAgICB2YXIgaW5wdXRUeXBlID0gJ3RleHQnO1xuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdiYW5rQ2FyZCcgfHwgdHlwZSA9PT0gJ3Bob25lJykge1xuICAgICAgICAgICAgICAgIGlucHV0VHlwZSA9ICd0ZWwnO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAncGFzc3dvcmQnKSB7XG4gICAgICAgICAgICAgICAgaW5wdXRUeXBlID0gJ3Bhc3N3b3JkJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2RpZ2l0Jykge1xuICAgICAgICAgICAgICAgIGlucHV0VHlwZSA9ICdudW1iZXInO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlICE9PSAndGV4dCcgJiYgdHlwZSAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICBpbnB1dFR5cGUgPSB0eXBlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHBhdHRlcm5Qcm9wcyA9IHZvaWQgMDtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgIHBhdHRlcm5Qcm9wcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybjogJ1swLTldKidcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGNsYXNzTmFtZVByb3BzID0gdm9pZCAwO1xuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdkaWdpdCcpIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWVQcm9wcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnaDVudW1JbnB1dCdcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IHdyYXBDbHMgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IHByZWZpeExpc3RDbHMgKyAnLWxpbmUnIH0sXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuID8gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IGxhYmVsQ2xzIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlblxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IGNvbnRyb2xDbHMgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPT09ICdtb25leScgPyBSZWFjdC5jcmVhdGVFbGVtZW50KF9DdXN0b21JbnB1dDJbJ2RlZmF1bHQnXSwgeyB2YWx1ZTogbm9ybWFsaXplVmFsdWUodmFsdWUpLCB0eXBlOiB0eXBlLCByZWY6IGZ1bmN0aW9uIHJlZihlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMyLmlucHV0UmVmID0gZWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgbWF4TGVuZ3RoOiBtYXhMZW5ndGgsIHBsYWNlaG9sZGVyOiBwbGFjZWhvbGRlciwgb25DaGFuZ2U6IHRoaXMub25JbnB1dENoYW5nZSwgb25Gb2N1czogdGhpcy5vbklucHV0Rm9jdXMsIG9uQmx1cjogdGhpcy5vbklucHV0Qmx1ciwgb25WaXJ0dWFsS2V5Ym9hcmRDb25maXJtOiBvblZpcnR1YWxLZXlib2FyZENvbmZpcm0sIGRpc2FibGVkOiBkaXNhYmxlZCwgZWRpdGFibGU6IGVkaXRhYmxlLCBwcmVmaXhDbHM6IHByZWZpeENscywgc3R5bGU6IHN0eWxlLCBjb25maXJtTGFiZWw6IGNvbmZpcm1MYWJlbCwgYmFja3NwYWNlTGFiZWw6IGJhY2tzcGFjZUxhYmVsLCBjYW5jZWxLZXlib2FyZExhYmVsOiBjYW5jZWxLZXlib2FyZExhYmVsLCBtb25leUtleWJvYXJkQWxpZ246IG1vbmV5S2V5Ym9hcmRBbGlnbiwgbW9uZXlLZXlib2FyZFdyYXBQcm9wczogbW9uZXlLZXlib2FyZFdyYXBQcm9wcywgbW9uZXlLZXlib2FyZEhlYWRlcjogbW9uZXlLZXlib2FyZEhlYWRlciwgYXV0b0FkanVzdEhlaWdodDogYXV0b0FkanVzdEhlaWdodCwgZGlzYWJsZWRLZXlzOiBkaXNhYmxlZEtleXMgfSkgOiBSZWFjdC5jcmVhdGVFbGVtZW50KF9JbnB1dDJbJ2RlZmF1bHQnXSwgKDAsIF9leHRlbmRzM1snZGVmYXVsdCddKSh7fSwgcGF0dGVyblByb3BzLCByZXN0UHJvcHMsIGNsYXNzTmFtZVByb3BzLCB7IHZhbHVlOiBub3JtYWxpemVWYWx1ZSh2YWx1ZSksIGRlZmF1bHRWYWx1ZTogdW5kZWZpbmVkLCByZWY6IGZ1bmN0aW9uIHJlZihlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMyLmlucHV0UmVmID0gZWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgc3R5bGU6IHN0eWxlLCB0eXBlOiBpbnB1dFR5cGUsIG1heExlbmd0aDogbWF4TGVuZ3RoLCBuYW1lOiBuYW1lLCBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXIsIG9uQ2hhbmdlOiB0aGlzLm9uSW5wdXRDaGFuZ2UsIG9uRm9jdXM6IHRoaXMub25JbnB1dEZvY3VzLCBvbkJsdXI6IHRoaXMub25JbnB1dEJsdXIsIHJlYWRPbmx5OiAhZWRpdGFibGUsIGRpc2FibGVkOiBkaXNhYmxlZCB9KSlcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgY2xlYXIgJiYgZWRpdGFibGUgJiYgIWRpc2FibGVkICYmIHZhbHVlICYmICgnJyArIHZhbHVlKS5sZW5ndGggPiAwID8gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgIF9ybWNGZWVkYmFjazJbJ2RlZmF1bHQnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYWN0aXZlQ2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWNsZWFyLWFjdGl2ZScgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWNsZWFyJywgb25DbGljazogdGhpcy5jbGVhcklucHV0IH0pXG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBlcnJvciA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWVycm9yLWV4dHJhJywgb25DbGljazogb25FcnJvckNsaWNrIH0pIDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgZXh0cmEgIT09ICcnID8gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IHByZWZpeENscyArICctZXh0cmEnLCBvbkNsaWNrOiBvbkV4dHJhQ2xpY2sgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4dHJhXG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1dKTtcbiAgICByZXR1cm4gSW5wdXRJdGVtO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5JbnB1dEl0ZW0uZGVmYXVsdFByb3BzID0ge1xuICAgIHByZWZpeENsczogJ2FtLWlucHV0JyxcbiAgICBwcmVmaXhMaXN0Q2xzOiAnYW0tbGlzdCcsXG4gICAgdHlwZTogJ3RleHQnLFxuICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICBwbGFjZWhvbGRlcjogJycsXG4gICAgY2xlYXI6IGZhbHNlLFxuICAgIG9uQ2hhbmdlOiBub29wLFxuICAgIG9uQmx1cjogbm9vcCxcbiAgICBvbkZvY3VzOiBub29wLFxuICAgIGV4dHJhOiAnJyxcbiAgICBvbkV4dHJhQ2xpY2s6IG5vb3AsXG4gICAgZXJyb3I6IGZhbHNlLFxuICAgIG9uRXJyb3JDbGljazogbm9vcCxcbiAgICBvblZpcnR1YWxLZXlib2FyZENvbmZpcm06IG5vb3AsXG4gICAgbGFiZWxOdW1iZXI6IDUsXG4gICAgdXBkYXRlUGxhY2Vob2xkZXI6IGZhbHNlLFxuICAgIG1vbmV5S2V5Ym9hcmRBbGlnbjogJ3JpZ2h0JyxcbiAgICBtb25leUtleWJvYXJkV3JhcFByb3BzOiB7fSxcbiAgICBtb25leUtleWJvYXJkSGVhZGVyOiBudWxsLFxuICAgIGRpc2FibGVkS2V5czogbnVsbFxufTtcbklucHV0SXRlbS5jb250ZXh0VHlwZXMgPSB7XG4gICAgYW50TG9jYWxlOiBQcm9wVHlwZXMub2JqZWN0XG59O1xuZXhwb3J0c1snZGVmYXVsdCddID0gSW5wdXRJdGVtO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzWydkZWZhdWx0J10gPSB7XG4gICAgY29uZmlybUxhYmVsOiAn56Gu5a6aJyxcbiAgICBiYWNrc3BhY2VMYWJlbDogJ+mAgOagvCcsXG4gICAgY2FuY2VsS2V5Ym9hcmRMYWJlbDogJ+aUtui1t+mUruebmCdcbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbnJlcXVpcmUoJy4uLy4uL3N0eWxlLycpO1xuXG5yZXF1aXJlKCcuLi8uLi9saXN0L3N0eWxlLycpO1xuXG5yZXF1aXJlKCcuL2luZGV4Lmxlc3MnKTsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uLy4uL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9wb3N0Y3NzIS4vaW5kZXgubGVzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vLi4vLi4vbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3Bvc3Rjc3MhLi9pbmRleC5sZXNzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uLy4uL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9wb3N0Y3NzIS4vaW5kZXgubGVzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5CcmllZiA9IHVuZGVmaW5lZDtcblxudmFyIF9leHRlbmRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJyk7XG5cbnZhciBfZXh0ZW5kczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHRlbmRzMik7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5Jyk7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmaW5lUHJvcGVydHkyKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcycpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNsYXNzMik7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybicpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIpO1xuXG52YXIgX2luaGVyaXRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cycpO1xuXG52YXIgX2luaGVyaXRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luaGVyaXRzMik7XG5cbnZhciBfY2xhc3NuYW1lczUgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczYgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzNSk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfcmVhY3QpO1xuXG52YXIgX3JtY0ZlZWRiYWNrID0gcmVxdWlyZSgncm1jLWZlZWRiYWNrJyk7XG5cbnZhciBfcm1jRmVlZGJhY2syID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcm1jRmVlZGJhY2spO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqWydkZWZhdWx0J10gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfX3Jlc3QgPSB1bmRlZmluZWQgJiYgdW5kZWZpbmVkLl9fcmVzdCB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMCkgdFtwXSA9IHNbcF07XG4gICAgfWlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCkgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgfXJldHVybiB0O1xufTtcbi8qIHRzbGludDpkaXNhYmxlOmpzeC1uby1tdWx0aWxpbmUtanMgKi9cblxudmFyIEJyaWVmID0gZXhwb3J0cy5CcmllZiA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgKDAsIF9pbmhlcml0czNbJ2RlZmF1bHQnXSkoQnJpZWYsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gQnJpZWYoKSB7XG4gICAgICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szWydkZWZhdWx0J10pKHRoaXMsIEJyaWVmKTtcbiAgICAgICAgcmV0dXJuICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjNbJ2RlZmF1bHQnXSkodGhpcywgKEJyaWVmLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQnJpZWYpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICB9XG5cbiAgICAoMCwgX2NyZWF0ZUNsYXNzM1snZGVmYXVsdCddKShCcmllZiwgW3tcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAnYW0tbGlzdC1icmllZicsIHN0eWxlOiB0aGlzLnByb3BzLnN0eWxlIH0sXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1dKTtcbiAgICByZXR1cm4gQnJpZWY7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbnZhciBMaXN0SXRlbSA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50Mikge1xuICAgICgwLCBfaW5oZXJpdHMzWydkZWZhdWx0J10pKExpc3RJdGVtLCBfUmVhY3QkQ29tcG9uZW50Mik7XG5cbiAgICBmdW5jdGlvbiBMaXN0SXRlbShwcm9wcykge1xuICAgICAgICAoMCwgX2NsYXNzQ2FsbENoZWNrM1snZGVmYXVsdCddKSh0aGlzLCBMaXN0SXRlbSk7XG5cbiAgICAgICAgdmFyIF90aGlzMiA9ICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjNbJ2RlZmF1bHQnXSkodGhpcywgKExpc3RJdGVtLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTGlzdEl0ZW0pKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICAgICAgX3RoaXMyLm9uQ2xpY2sgPSBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczIkcHJvcHMgPSBfdGhpczIucHJvcHMsXG4gICAgICAgICAgICAgICAgb25DbGljayA9IF90aGlzMiRwcm9wcy5vbkNsaWNrLFxuICAgICAgICAgICAgICAgIHBsYXRmb3JtID0gX3RoaXMyJHByb3BzLnBsYXRmb3JtO1xuXG4gICAgICAgICAgICB2YXIgaXNBbmRyb2lkID0gcGxhdGZvcm0gPT09ICdhbmRyb2lkJztcbiAgICAgICAgICAgIGlmICghIW9uQ2xpY2sgJiYgaXNBbmRyb2lkKSB7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzMi5kZWJvdW5jZVRpbWVvdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KF90aGlzMi5kZWJvdW5jZVRpbWVvdXQpO1xuICAgICAgICAgICAgICAgICAgICBfdGhpczIuZGVib3VuY2VUaW1lb3V0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIEl0ZW0gPSBldi5jdXJyZW50VGFyZ2V0O1xuICAgICAgICAgICAgICAgIHZhciBSaXBwbGVXaWR0aCA9IE1hdGgubWF4KEl0ZW0ub2Zmc2V0SGVpZ2h0LCBJdGVtLm9mZnNldFdpZHRoKTtcbiAgICAgICAgICAgICAgICB2YXIgQ2xpZW50UmVjdCA9IGV2LmN1cnJlbnRUYXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgICAgdmFyIHBvaW50WCA9IGV2LmNsaWVudFggLSBDbGllbnRSZWN0LmxlZnQgLSBJdGVtLm9mZnNldFdpZHRoIC8gMjtcbiAgICAgICAgICAgICAgICB2YXIgcG9pbnRZID0gZXYuY2xpZW50WSAtIENsaWVudFJlY3QudG9wIC0gSXRlbS5vZmZzZXRXaWR0aCAvIDI7XG4gICAgICAgICAgICAgICAgdmFyIGNvdmVyUmlwcGxlU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBSaXBwbGVXaWR0aCArICdweCcsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogUmlwcGxlV2lkdGggKyAncHgnLFxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiBwb2ludFggKyAncHgnLFxuICAgICAgICAgICAgICAgICAgICB0b3A6IHBvaW50WSArICdweCdcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIF90aGlzMi5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGNvdmVyUmlwcGxlU3R5bGU6IGNvdmVyUmlwcGxlU3R5bGUsXG4gICAgICAgICAgICAgICAgICAgIFJpcHBsZUNsaWNrZWQ6IHRydWVcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzMi5kZWJvdW5jZVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzMi5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY292ZXJSaXBwbGVTdHlsZTogeyBkaXNwbGF5OiAnbm9uZScgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSaXBwbGVDbGlja2VkOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9uQ2xpY2spIHtcbiAgICAgICAgICAgICAgICBvbkNsaWNrKGV2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMyLnN0YXRlID0ge1xuICAgICAgICAgICAgY292ZXJSaXBwbGVTdHlsZTogeyBkaXNwbGF5OiAnbm9uZScgfSxcbiAgICAgICAgICAgIFJpcHBsZUNsaWNrZWQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfdGhpczI7XG4gICAgfVxuXG4gICAgKDAsIF9jcmVhdGVDbGFzczNbJ2RlZmF1bHQnXSkoTGlzdEl0ZW0sIFt7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZGVib3VuY2VUaW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZGVib3VuY2VUaW1lb3V0KTtcbiAgICAgICAgICAgICAgICB0aGlzLmRlYm91bmNlVGltZW91dCA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgICB2YXIgX2NsYXNzbmFtZXMsXG4gICAgICAgICAgICAgICAgX2NsYXNzbmFtZXMzLFxuICAgICAgICAgICAgICAgIF9jbGFzc25hbWVzNCxcbiAgICAgICAgICAgICAgICBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIHByZWZpeENscyA9IF9hLnByZWZpeENscyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSBfYS5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgYWN0aXZlU3R5bGUgPSBfYS5hY3RpdmVTdHlsZSxcbiAgICAgICAgICAgICAgICBlcnJvciA9IF9hLmVycm9yLFxuICAgICAgICAgICAgICAgIGFsaWduID0gX2EuYWxpZ24sXG4gICAgICAgICAgICAgICAgd3JhcCA9IF9hLndyYXAsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQgPSBfYS5kaXNhYmxlZCxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbiA9IF9hLmNoaWxkcmVuLFxuICAgICAgICAgICAgICAgIG11bHRpcGxlTGluZSA9IF9hLm11bHRpcGxlTGluZSxcbiAgICAgICAgICAgICAgICB0aHVtYiA9IF9hLnRodW1iLFxuICAgICAgICAgICAgICAgIGV4dHJhID0gX2EuZXh0cmEsXG4gICAgICAgICAgICAgICAgYXJyb3cgPSBfYS5hcnJvdyxcbiAgICAgICAgICAgICAgICBvbkNsaWNrID0gX2Eub25DbGljayxcbiAgICAgICAgICAgICAgICByZXN0UHJvcHMgPSBfX3Jlc3QoX2EsIFtcInByZWZpeENsc1wiLCBcImNsYXNzTmFtZVwiLCBcImFjdGl2ZVN0eWxlXCIsIFwiZXJyb3JcIiwgXCJhbGlnblwiLCBcIndyYXBcIiwgXCJkaXNhYmxlZFwiLCBcImNoaWxkcmVuXCIsIFwibXVsdGlwbGVMaW5lXCIsIFwidGh1bWJcIiwgXCJleHRyYVwiLCBcImFycm93XCIsIFwib25DbGlja1wiXSk7dmFyIHBsYXRmb3JtID0gcmVzdFByb3BzLnBsYXRmb3JtLFxuICAgICAgICAgICAgICAgIG90aGVyUHJvcHMgPSBfX3Jlc3QocmVzdFByb3BzLCBbXCJwbGF0Zm9ybVwiXSk7dmFyIF9zdGF0ZSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgICAgICAgY292ZXJSaXBwbGVTdHlsZSA9IF9zdGF0ZS5jb3ZlclJpcHBsZVN0eWxlLFxuICAgICAgICAgICAgICAgIFJpcHBsZUNsaWNrZWQgPSBfc3RhdGUuUmlwcGxlQ2xpY2tlZDtcblxuICAgICAgICAgICAgdmFyIHdyYXBDbHMgPSAoMCwgX2NsYXNzbmFtZXM2WydkZWZhdWx0J10pKHByZWZpeENscyArICctaXRlbScsIGNsYXNzTmFtZSwgKF9jbGFzc25hbWVzID0ge30sICgwLCBfZGVmaW5lUHJvcGVydHkzWydkZWZhdWx0J10pKF9jbGFzc25hbWVzLCBwcmVmaXhDbHMgKyAnLWl0ZW0tZGlzYWJsZWQnLCBkaXNhYmxlZCksICgwLCBfZGVmaW5lUHJvcGVydHkzWydkZWZhdWx0J10pKF9jbGFzc25hbWVzLCBwcmVmaXhDbHMgKyAnLWl0ZW0tZXJyb3InLCBlcnJvciksICgwLCBfZGVmaW5lUHJvcGVydHkzWydkZWZhdWx0J10pKF9jbGFzc25hbWVzLCBwcmVmaXhDbHMgKyAnLWl0ZW0tdG9wJywgYWxpZ24gPT09ICd0b3AnKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTNbJ2RlZmF1bHQnXSkoX2NsYXNzbmFtZXMsIHByZWZpeENscyArICctaXRlbS1taWRkbGUnLCBhbGlnbiA9PT0gJ21pZGRsZScpLCAoMCwgX2RlZmluZVByb3BlcnR5M1snZGVmYXVsdCddKShfY2xhc3NuYW1lcywgcHJlZml4Q2xzICsgJy1pdGVtLWJvdHRvbScsIGFsaWduID09PSAnYm90dG9tJyksIF9jbGFzc25hbWVzKSk7XG4gICAgICAgICAgICB2YXIgcmlwcGxlQ2xzID0gKDAsIF9jbGFzc25hbWVzNlsnZGVmYXVsdCddKShwcmVmaXhDbHMgKyAnLXJpcHBsZScsICgwLCBfZGVmaW5lUHJvcGVydHkzWydkZWZhdWx0J10pKHt9LCBwcmVmaXhDbHMgKyAnLXJpcHBsZS1hbmltYXRlJywgUmlwcGxlQ2xpY2tlZCkpO1xuICAgICAgICAgICAgdmFyIGxpbmVDbHMgPSAoMCwgX2NsYXNzbmFtZXM2WydkZWZhdWx0J10pKHByZWZpeENscyArICctbGluZScsIChfY2xhc3NuYW1lczMgPSB7fSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTNbJ2RlZmF1bHQnXSkoX2NsYXNzbmFtZXMzLCBwcmVmaXhDbHMgKyAnLWxpbmUtbXVsdGlwbGUnLCBtdWx0aXBsZUxpbmUpLCAoMCwgX2RlZmluZVByb3BlcnR5M1snZGVmYXVsdCddKShfY2xhc3NuYW1lczMsIHByZWZpeENscyArICctbGluZS13cmFwJywgd3JhcCksIF9jbGFzc25hbWVzMykpO1xuICAgICAgICAgICAgdmFyIGFycm93Q2xzID0gKDAsIF9jbGFzc25hbWVzNlsnZGVmYXVsdCddKShwcmVmaXhDbHMgKyAnLWFycm93JywgKF9jbGFzc25hbWVzNCA9IHt9LCAoMCwgX2RlZmluZVByb3BlcnR5M1snZGVmYXVsdCddKShfY2xhc3NuYW1lczQsIHByZWZpeENscyArICctYXJyb3ctaG9yaXpvbnRhbCcsIGFycm93ID09PSAnaG9yaXpvbnRhbCcpLCAoMCwgX2RlZmluZVByb3BlcnR5M1snZGVmYXVsdCddKShfY2xhc3NuYW1lczQsIHByZWZpeENscyArICctYXJyb3ctdmVydGljYWwnLCBhcnJvdyA9PT0gJ2Rvd24nIHx8IGFycm93ID09PSAndXAnKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTNbJ2RlZmF1bHQnXSkoX2NsYXNzbmFtZXM0LCBwcmVmaXhDbHMgKyAnLWFycm93LXZlcnRpY2FsLXVwJywgYXJyb3cgPT09ICd1cCcpLCBfY2xhc3NuYW1lczQpKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAoMCwgX2V4dGVuZHMzWydkZWZhdWx0J10pKHt9LCBvdGhlclByb3BzLCB7IG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soZXYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzMy5vbkNsaWNrKGV2KTtcbiAgICAgICAgICAgICAgICAgICAgfSwgY2xhc3NOYW1lOiB3cmFwQ2xzIH0pLFxuICAgICAgICAgICAgICAgIHRodW1iID8gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLXRodW1iJyB9LFxuICAgICAgICAgICAgICAgICAgICB0eXBlb2YgdGh1bWIgPT09ICdzdHJpbmcnID8gUmVhY3QuY3JlYXRlRWxlbWVudCgnaW1nJywgeyBzcmM6IHRodW1iIH0pIDogdGh1bWJcbiAgICAgICAgICAgICAgICApIDogbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IGxpbmVDbHMgfSxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW4gIT09IHVuZGVmaW5lZCAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1jb250ZW50JyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW5cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgZXh0cmEgIT09IHVuZGVmaW5lZCAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1leHRyYScgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4dHJhXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIGFycm93ICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3NOYW1lOiBhcnJvd0NscywgJ2FyaWEtaGlkZGVuJzogJ3RydWUnIH0pXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IHN0eWxlOiBjb3ZlclJpcHBsZVN0eWxlLCBjbGFzc05hbWU6IHJpcHBsZUNscyB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHZhciB0b3VjaFByb3BzID0ge307XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhvdGhlclByb3BzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICBpZiAoL29uVG91Y2gvaS50ZXN0KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdG91Y2hQcm9wc1trZXldID0gb3RoZXJQcm9wc1trZXldO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgb3RoZXJQcm9wc1trZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgX3JtY0ZlZWRiYWNrMlsnZGVmYXVsdCddLFxuICAgICAgICAgICAgICAgICgwLCBfZXh0ZW5kczNbJ2RlZmF1bHQnXSkoe30sIHRvdWNoUHJvcHMsIHsgZGlzYWJsZWQ6IGRpc2FibGVkIHx8ICFvbkNsaWNrLCBhY3RpdmVTdHlsZTogYWN0aXZlU3R5bGUsIGFjdGl2ZUNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1pdGVtLWFjdGl2ZScgfSksXG4gICAgICAgICAgICAgICAgY29udGVudFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1dKTtcbiAgICByZXR1cm4gTGlzdEl0ZW07XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbkxpc3RJdGVtLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBwcmVmaXhDbHM6ICdhbS1saXN0JyxcbiAgICBhbGlnbjogJ21pZGRsZScsXG4gICAgZXJyb3I6IGZhbHNlLFxuICAgIG11bHRpcGxlTGluZTogZmFsc2UsXG4gICAgd3JhcDogZmFsc2UsXG4gICAgcGxhdGZvcm06ICdpb3MnXG59O1xuTGlzdEl0ZW0uQnJpZWYgPSBCcmllZjtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IExpc3RJdGVtOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKTtcblxudmFyIF9leHRlbmRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dGVuZHMyKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcycpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNsYXNzMik7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybicpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIpO1xuXG52YXIgX2luaGVyaXRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cycpO1xuXG52YXIgX2luaGVyaXRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luaGVyaXRzMik7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3JlYWN0KTtcblxudmFyIF9MaXN0SXRlbSA9IHJlcXVpcmUoJy4vTGlzdEl0ZW0nKTtcblxudmFyIF9MaXN0SXRlbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9MaXN0SXRlbSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmpbJ2RlZmF1bHQnXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9fcmVzdCA9IHVuZGVmaW5lZCAmJiB1bmRlZmluZWQuX19yZXN0IHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKSB0W3BdID0gc1twXTtcbiAgICB9aWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKSB0W3BbaV1dID0gc1twW2ldXTtcbiAgICB9cmV0dXJuIHQ7XG59O1xuLyogdHNsaW50OmRpc2FibGU6anN4LW5vLW11bHRpbGluZS1qcyAqL1xuXG52YXIgTGlzdCA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgKDAsIF9pbmhlcml0czNbJ2RlZmF1bHQnXSkoTGlzdCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBMaXN0KCkge1xuICAgICAgICAoMCwgX2NsYXNzQ2FsbENoZWNrM1snZGVmYXVsdCddKSh0aGlzLCBMaXN0KTtcbiAgICAgICAgcmV0dXJuICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjNbJ2RlZmF1bHQnXSkodGhpcywgKExpc3QuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihMaXN0KSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfVxuXG4gICAgKDAsIF9jcmVhdGVDbGFzczNbJ2RlZmF1bHQnXSkoTGlzdCwgW3tcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICAgICAgcHJlZml4Q2xzID0gX2EucHJlZml4Q2xzLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuID0gX2EuY2hpbGRyZW4sXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gX2EuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgIHN0eWxlID0gX2Euc3R5bGUsXG4gICAgICAgICAgICAgICAgcmVuZGVySGVhZGVyID0gX2EucmVuZGVySGVhZGVyLFxuICAgICAgICAgICAgICAgIHJlbmRlckZvb3RlciA9IF9hLnJlbmRlckZvb3RlcixcbiAgICAgICAgICAgICAgICByZXN0UHJvcHMgPSBfX3Jlc3QoX2EsIFtcInByZWZpeENsc1wiLCBcImNoaWxkcmVuXCIsIFwiY2xhc3NOYW1lXCIsIFwic3R5bGVcIiwgXCJyZW5kZXJIZWFkZXJcIiwgXCJyZW5kZXJGb290ZXJcIl0pO1xuICAgICAgICAgICAgdmFyIHdyYXBDbHMgPSAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHByZWZpeENscywgY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICgwLCBfZXh0ZW5kczNbJ2RlZmF1bHQnXSkoeyBjbGFzc05hbWU6IHdyYXBDbHMsIHN0eWxlOiBzdHlsZSB9LCByZXN0UHJvcHMpLFxuICAgICAgICAgICAgICAgIHJlbmRlckhlYWRlciA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1oZWFkZXInIH0sXG4gICAgICAgICAgICAgICAgICAgIHR5cGVvZiByZW5kZXJIZWFkZXIgPT09ICdmdW5jdGlvbicgPyByZW5kZXJIZWFkZXIoKSA6IHJlbmRlckhlYWRlclxuICAgICAgICAgICAgICAgICkgOiBudWxsLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuID8gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWJvZHknIH0sXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuXG4gICAgICAgICAgICAgICAgKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgcmVuZGVyRm9vdGVyID8gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWZvb3RlcicgfSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZW9mIHJlbmRlckZvb3RlciA9PT0gJ2Z1bmN0aW9uJyA/IHJlbmRlckZvb3RlcigpIDogcmVuZGVyRm9vdGVyXG4gICAgICAgICAgICAgICAgKSA6IG51bGxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XSk7XG4gICAgcmV0dXJuIExpc3Q7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IExpc3Q7XG5cbkxpc3QuSXRlbSA9IF9MaXN0SXRlbTJbJ2RlZmF1bHQnXTtcbkxpc3QuZGVmYXVsdFByb3BzID0ge1xuICAgIHByZWZpeENsczogJ2FtLWxpc3QnXG59O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5yZXF1aXJlKCcuLi8uLi9zdHlsZS8nKTtcblxucmVxdWlyZSgnLi9pbmRleC5sZXNzJyk7IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi8uLi9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cG9zdGNzcyEuL2luZGV4Lmxlc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uLy4uL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9wb3N0Y3NzIS4vaW5kZXgubGVzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi8uLi9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cG9zdGNzcyEuL2luZGV4Lmxlc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIndXNlIHN0cmljdCc7XG5cbnJlcXVpcmUoJ25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzcycpO1xuXG5yZXF1aXJlKCcuL2luZGV4Lmxlc3MnKTsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS00LTEhLi4vLi4vLi4vcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9wb3N0Y3NzIS4vaW5kZXgubGVzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTQtMSEuLi8uLi8uLi9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vLi4vbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3Bvc3Rjc3MhLi9pbmRleC5sZXNzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS00LTEhLi4vLi4vLi4vcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9wb3N0Y3NzIS4vaW5kZXgubGVzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eScpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5Mik7XG5cbnZhciBfY2xhc3NuYW1lczIgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzMik7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfcmVhY3QpO1xuXG52YXIgX3JtY05vdGlmaWNhdGlvbiA9IHJlcXVpcmUoJ3JtYy1ub3RpZmljYXRpb24nKTtcblxudmFyIF9ybWNOb3RpZmljYXRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcm1jTm90aWZpY2F0aW9uKTtcblxudmFyIF9pY29uID0gcmVxdWlyZSgnLi4vaWNvbicpO1xuXG52YXIgX2ljb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaWNvbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmpbJ2RlZmF1bHQnXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIFNIT1JUID0gMztcbnZhciBfY29uZmlnID0ge1xuICAgIGR1cmF0aW9uOiBTSE9SVCxcbiAgICBtYXNrOiB0cnVlXG59O1xudmFyIG1lc3NhZ2VJbnN0YW5jZSA9IHZvaWQgMDtcbnZhciBwcmVmaXhDbHMgPSAnYW0tdG9hc3QnO1xuZnVuY3Rpb24gZ2V0TWVzc2FnZUluc3RhbmNlKG1hc2ssIGNhbGxiYWNrKSB7XG4gICAgdmFyIF9jbGFzc25hbWVzO1xuXG4gICAgaWYgKG1lc3NhZ2VJbnN0YW5jZSkge1xuICAgICAgICBtZXNzYWdlSW5zdGFuY2UuZGVzdHJveSgpO1xuICAgICAgICBtZXNzYWdlSW5zdGFuY2UgPSBudWxsO1xuICAgIH1cbiAgICBfcm1jTm90aWZpY2F0aW9uMlsnZGVmYXVsdCddLm5ld0luc3RhbmNlKHtcbiAgICAgICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgICAgIHN0eWxlOiB7fSxcbiAgICAgICAgdHJhbnNpdGlvbk5hbWU6ICdhbS1mYWRlJyxcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMzWydkZWZhdWx0J10pKChfY2xhc3NuYW1lcyA9IHt9LCAoMCwgX2RlZmluZVByb3BlcnR5M1snZGVmYXVsdCddKShfY2xhc3NuYW1lcywgcHJlZml4Q2xzICsgJy1tYXNrJywgbWFzayksICgwLCBfZGVmaW5lUHJvcGVydHkzWydkZWZhdWx0J10pKF9jbGFzc25hbWVzLCBwcmVmaXhDbHMgKyAnLW5vbWFzaycsICFtYXNrKSwgX2NsYXNzbmFtZXMpKVxuICAgIH0sIGZ1bmN0aW9uIChub3RpZmljYXRpb24pIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrICYmIGNhbGxiYWNrKG5vdGlmaWNhdGlvbik7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBub3RpY2UoY29udGVudCwgdHlwZSkge1xuICAgIHZhciBkdXJhdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogX2NvbmZpZy5kdXJhdGlvbjtcbiAgICB2YXIgX29uQ2xvc2UgPSBhcmd1bWVudHNbM107XG4gICAgdmFyIG1hc2sgPSBhcmd1bWVudHMubGVuZ3RoID4gNCAmJiBhcmd1bWVudHNbNF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1s0XSA6IF9jb25maWcubWFzaztcblxuICAgIHZhciBpY29uVHlwZXMgPSB7XG4gICAgICAgIGluZm86ICcnLFxuICAgICAgICBzdWNjZXNzOiAnc3VjY2VzcycsXG4gICAgICAgIGZhaWw6ICdmYWlsJyxcbiAgICAgICAgb2ZmbGluZTogJ2Rpc2xpa2UnLFxuICAgICAgICBsb2FkaW5nOiAnbG9hZGluZydcbiAgICB9O1xuICAgIHZhciBpY29uVHlwZSA9IGljb25UeXBlc1t0eXBlXTtcbiAgICBnZXRNZXNzYWdlSW5zdGFuY2UobWFzaywgZnVuY3Rpb24gKG5vdGlmaWNhdGlvbikge1xuICAgICAgICBtZXNzYWdlSW5zdGFuY2UgPSBub3RpZmljYXRpb247XG4gICAgICAgIG5vdGlmaWNhdGlvbi5ub3RpY2Uoe1xuICAgICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgICAgICAgc3R5bGU6IHt9LFxuICAgICAgICAgICAgY29udGVudDogISFpY29uVHlwZSA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IHByZWZpeENscyArICctdGV4dCAnICsgcHJlZml4Q2xzICsgJy10ZXh0LWljb24nLCByb2xlOiAnYWxlcnQnLCAnYXJpYS1saXZlJzogJ2Fzc2VydGl2ZScgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KF9pY29uMlsnZGVmYXVsdCddLCB7IHR5cGU6IGljb25UeXBlLCBzaXplOiAnbGcnIH0pLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy10ZXh0LWluZm8nIH0sXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApIDogUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy10ZXh0Jywgcm9sZTogJ2FsZXJ0JywgJ2FyaWEtbGl2ZSc6ICdhc3NlcnRpdmUnIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgY2xvc2FibGU6IHRydWUsXG4gICAgICAgICAgICBvbkNsb3NlOiBmdW5jdGlvbiBvbkNsb3NlKCkge1xuICAgICAgICAgICAgICAgIGlmIChfb25DbG9zZSkge1xuICAgICAgICAgICAgICAgICAgICBfb25DbG9zZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBub3RpZmljYXRpb24uZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgbWVzc2FnZUluc3RhbmNlID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5leHBvcnRzWydkZWZhdWx0J10gPSB7XG4gICAgU0hPUlQ6IFNIT1JULFxuICAgIExPTkc6IDgsXG4gICAgc2hvdzogZnVuY3Rpb24gc2hvdyhjb250ZW50LCBkdXJhdGlvbiwgbWFzaykge1xuICAgICAgICByZXR1cm4gbm90aWNlKGNvbnRlbnQsICdpbmZvJywgZHVyYXRpb24sIGZ1bmN0aW9uICgpIHt9LCBtYXNrKTtcbiAgICB9LFxuICAgIGluZm86IGZ1bmN0aW9uIGluZm8oY29udGVudCwgZHVyYXRpb24sIG9uQ2xvc2UsIG1hc2spIHtcbiAgICAgICAgcmV0dXJuIG5vdGljZShjb250ZW50LCAnaW5mbycsIGR1cmF0aW9uLCBvbkNsb3NlLCBtYXNrKTtcbiAgICB9LFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MoY29udGVudCwgZHVyYXRpb24sIG9uQ2xvc2UsIG1hc2spIHtcbiAgICAgICAgcmV0dXJuIG5vdGljZShjb250ZW50LCAnc3VjY2VzcycsIGR1cmF0aW9uLCBvbkNsb3NlLCBtYXNrKTtcbiAgICB9LFxuICAgIGZhaWw6IGZ1bmN0aW9uIGZhaWwoY29udGVudCwgZHVyYXRpb24sIG9uQ2xvc2UsIG1hc2spIHtcbiAgICAgICAgcmV0dXJuIG5vdGljZShjb250ZW50LCAnZmFpbCcsIGR1cmF0aW9uLCBvbkNsb3NlLCBtYXNrKTtcbiAgICB9LFxuICAgIG9mZmxpbmU6IGZ1bmN0aW9uIG9mZmxpbmUoY29udGVudCwgZHVyYXRpb24sIG9uQ2xvc2UsIG1hc2spIHtcbiAgICAgICAgcmV0dXJuIG5vdGljZShjb250ZW50LCAnb2ZmbGluZScsIGR1cmF0aW9uLCBvbkNsb3NlLCBtYXNrKTtcbiAgICB9LFxuICAgIGxvYWRpbmc6IGZ1bmN0aW9uIGxvYWRpbmcoY29udGVudCwgZHVyYXRpb24sIG9uQ2xvc2UsIG1hc2spIHtcbiAgICAgICAgcmV0dXJuIG5vdGljZShjb250ZW50LCAnbG9hZGluZycsIGR1cmF0aW9uLCBvbkNsb3NlLCBtYXNrKTtcbiAgICB9LFxuICAgIGhpZGU6IGZ1bmN0aW9uIGhpZGUoKSB7XG4gICAgICAgIGlmIChtZXNzYWdlSW5zdGFuY2UpIHtcbiAgICAgICAgICAgIG1lc3NhZ2VJbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgICAgICAgICBtZXNzYWdlSW5zdGFuY2UgPSBudWxsO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjb25maWc6IGZ1bmN0aW9uIGNvbmZpZygpIHtcbiAgICAgICAgdmFyIGNvbmYgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgICAgICB2YXIgX2NvbmYkZHVyYXRpb24gPSBjb25mLmR1cmF0aW9uLFxuICAgICAgICAgICAgZHVyYXRpb24gPSBfY29uZiRkdXJhdGlvbiA9PT0gdW5kZWZpbmVkID8gU0hPUlQgOiBfY29uZiRkdXJhdGlvbixcbiAgICAgICAgICAgIG1hc2sgPSBjb25mLm1hc2s7XG5cbiAgICAgICAgX2NvbmZpZy5kdXJhdGlvbiA9IGR1cmF0aW9uO1xuICAgICAgICBpZiAobWFzayA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF9jb25maWcubWFzayA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxufTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxucmVxdWlyZSgnLi4vLi4vc3R5bGUvJyk7XG5cbnJlcXVpcmUoJy4uLy4uL2ljb24vc3R5bGUvJyk7XG5cbnJlcXVpcmUoJy4vaW5kZXgubGVzcycpOyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vLi4vLi4vbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3Bvc3Rjc3MhLi9pbmRleC5sZXNzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi8uLi9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cG9zdGNzcyEuL2luZGV4Lmxlc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vLi4vLi4vbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3Bvc3Rjc3MhLi9pbmRleC5sZXNzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5hbS1idXR0b24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBvdXRsaW5lOiAwIG5vbmU7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGhlaWdodDogNDdweDtcXG4gIGxpbmUtaGVpZ2h0OiA0N3B4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBjb2xvcjogIzAwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IDFQWCBzb2xpZCAjZGRkO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5AbWVkaWEgKG1pbi1yZXNvbHV0aW9uOiAyZHBweCkge1xcbiAgaHRtbDpub3QoW2RhdGEtc2NhbGVdKSAuYW0tYnV0dG9uIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICB9XFxuICBodG1sOm5vdChbZGF0YS1zY2FsZV0pIC5hbS1idXR0b246OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDIwMCU7XFxuICAgIGhlaWdodDogMjAwJTtcXG4gICAgYm9yZGVyOiAxUFggc29saWQgI2RkZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgfVxcbn1cXG4uYW0tYnV0dG9uLWJvcmRlcmZpeDpiZWZvcmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjQ5KSAhaW1wb3J0YW50O1xcbn1cXG4uYW0tYnV0dG9uLmFtLWJ1dHRvbi1hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcXG59XFxuLmFtLWJ1dHRvbi5hbS1idXR0b24tZGlzYWJsZWQge1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIG9wYWNpdHk6IDAuNjtcXG59XFxuLmFtLWJ1dHRvbi1wcmltYXJ5IHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEwOGVlOTtcXG4gIGJvcmRlcjogMVBYIHNvbGlkICMxMDhlZTk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbkBtZWRpYSAobWluLXJlc29sdXRpb246IDJkcHB4KSB7XFxuICBodG1sOm5vdChbZGF0YS1zY2FsZV0pIC5hbS1idXR0b24tcHJpbWFyeSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgfVxcbiAgaHRtbDpub3QoW2RhdGEtc2NhbGVdKSAuYW0tYnV0dG9uLXByaW1hcnk6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDIwMCU7XFxuICAgIGhlaWdodDogMjAwJTtcXG4gICAgYm9yZGVyOiAxUFggc29saWQgIzEwOGVlOTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgfVxcbn1cXG4uYW0tYnV0dG9uLXByaW1hcnkuYW0tYnV0dG9uLWFjdGl2ZSB7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBlODBkMjtcXG59XFxuLmFtLWJ1dHRvbi1wcmltYXJ5LmFtLWJ1dHRvbi1kaXNhYmxlZCB7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xcbiAgb3BhY2l0eTogMC40O1xcbn1cXG4uYW0tYnV0dG9uLWdob3N0IHtcXG4gIGNvbG9yOiAjMTA4ZWU5O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDFQWCBzb2xpZCAjMTA4ZWU5O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5AbWVkaWEgKG1pbi1yZXNvbHV0aW9uOiAyZHBweCkge1xcbiAgaHRtbDpub3QoW2RhdGEtc2NhbGVdKSAuYW0tYnV0dG9uLWdob3N0IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICB9XFxuICBodG1sOm5vdChbZGF0YS1zY2FsZV0pIC5hbS1idXR0b24tZ2hvc3Q6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDIwMCU7XFxuICAgIGhlaWdodDogMjAwJTtcXG4gICAgYm9yZGVyOiAxUFggc29saWQgIzEwOGVlOTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgfVxcbn1cXG4uYW0tYnV0dG9uLWdob3N0LmFtLWJ1dHRvbi1hY3RpdmUge1xcbiAgY29sb3I6IHJnYmEoMTYsIDE0MiwgMjMzLCAwLjYpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDFQWCBzb2xpZCByZ2JhKDE2LCAxNDIsIDIzMywgMC42KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuQG1lZGlhIChtaW4tcmVzb2x1dGlvbjogMmRwcHgpIHtcXG4gIGh0bWw6bm90KFtkYXRhLXNjYWxlXSkgLmFtLWJ1dHRvbi1naG9zdC5hbS1idXR0b24tYWN0aXZlIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICB9XFxuICBodG1sOm5vdChbZGF0YS1zY2FsZV0pIC5hbS1idXR0b24tZ2hvc3QuYW0tYnV0dG9uLWFjdGl2ZTo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMjAwJTtcXG4gICAgaGVpZ2h0OiAyMDAlO1xcbiAgICBib3JkZXI6IDFQWCBzb2xpZCByZ2JhKDE2LCAxNDIsIDIzMywgMC42KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgfVxcbn1cXG4uYW0tYnV0dG9uLWdob3N0LmFtLWJ1dHRvbi1kaXNhYmxlZCB7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgYm9yZGVyOiAxUFggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgb3BhY2l0eTogMTtcXG59XFxuQG1lZGlhIChtaW4tcmVzb2x1dGlvbjogMmRwcHgpIHtcXG4gIGh0bWw6bm90KFtkYXRhLXNjYWxlXSkgLmFtLWJ1dHRvbi1naG9zdC5hbS1idXR0b24tZGlzYWJsZWQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gIH1cXG4gIGh0bWw6bm90KFtkYXRhLXNjYWxlXSkgLmFtLWJ1dHRvbi1naG9zdC5hbS1idXR0b24tZGlzYWJsZWQ6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDIwMCU7XFxuICAgIGhlaWdodDogMjAwJTtcXG4gICAgYm9yZGVyOiAxUFggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB9XFxufVxcbi5hbS1idXR0b24td2FybmluZyB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOTRmNGY7XFxufVxcbi5hbS1idXR0b24td2FybmluZy5hbS1idXR0b24tYWN0aXZlIHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDI0NzQ3O1xcbn1cXG4uYW0tYnV0dG9uLXdhcm5pbmcuYW0tYnV0dG9uLWRpc2FibGVkIHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XFxuICBvcGFjaXR5OiAwLjQ7XFxufVxcbi5hbS1idXR0b24taW5saW5lIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDAgMTVweDtcXG59XFxuLmFtLWJ1dHRvbi1pbmxpbmUuYW0tYnV0dG9uLWljb24ge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxufVxcbi5hbS1idXR0b24tc21hbGwge1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XFxuICBwYWRkaW5nOiAwIDE1cHg7XFxufVxcbi5hbS1idXR0b24taWNvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uYW0tYnV0dG9uID4gLmFtLWJ1dHRvbi1pY29uIHtcXG4gIG1hcmdpbi1yaWdodDogMC41ZW07XFxufVxcblwiLCBcIlwiXSk7XG5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuYW0taWNvbiB7XFxuICBmaWxsOiBjdXJyZW50Q29sb3I7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgd2lkdGg6IDIycHg7XFxuICBoZWlnaHQ6IDIycHg7XFxufVxcbi5hbS1pY29uLXh4cyB7XFxuICB3aWR0aDogMTVweDtcXG4gIGhlaWdodDogMTVweDtcXG59XFxuLmFtLWljb24teHMge1xcbiAgd2lkdGg6IDE4cHg7XFxuICBoZWlnaHQ6IDE4cHg7XFxufVxcbi5hbS1pY29uLXNtIHtcXG4gIHdpZHRoOiAyMXB4O1xcbiAgaGVpZ2h0OiAyMXB4O1xcbn1cXG4uYW0taWNvbi1tZCB7XFxuICB3aWR0aDogMjJweDtcXG4gIGhlaWdodDogMjJweDtcXG59XFxuLmFtLWljb24tbGcge1xcbiAgd2lkdGg6IDM2cHg7XFxuICBoZWlnaHQ6IDM2cHg7XFxufVxcbi5hbS1pY29uLWxvYWRpbmcge1xcbiAgYW5pbWF0aW9uOiBjaXJsZS1hbmltIDFzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuQGtleWZyYW1lcyBjaXJsZS1hbmltIHtcXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5cIiwgXCJcIl0pO1xuXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmFtLWxpc3QtaXRlbSAuYW0taW5wdXQtY29udHJvbCAuZmFrZS1pbnB1dC1jb250YWluZXIge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5hbS1saXN0LWl0ZW0gLmFtLWlucHV0LWNvbnRyb2wgLmZha2UtaW5wdXQtY29udGFpbmVyIC5mYWtlLWlucHV0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBydGw7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgZm9udC1zaXplOiAxN3B4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuLmFtLWxpc3QtaXRlbSAuYW0taW5wdXQtY29udHJvbCAuZmFrZS1pbnB1dC1jb250YWluZXIgLmZha2UtaW5wdXQuZmFrZS1pbnB1dC1kaXNhYmxlZCB7XFxuICBjb2xvcjogI2JiYjtcXG59XFxuLmFtLWxpc3QtaXRlbSAuYW0taW5wdXQtY29udHJvbCAuZmFrZS1pbnB1dC1jb250YWluZXIgLmZha2UtaW5wdXQuZm9jdXMge1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4ycztcXG59XFxuLmFtLWxpc3QtaXRlbSAuYW0taW5wdXQtY29udHJvbCAuZmFrZS1pbnB1dC1jb250YWluZXIgLmZha2UtaW5wdXQuZm9jdXM6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIHRvcDogMTAlO1xcbiAgaGVpZ2h0OiA4MCU7XFxuICBib3JkZXItcmlnaHQ6IDEuNXB4IHNvbGlkICMxMDhlZTk7XFxuICBhbmltYXRpb246IGtleWJvYXJkLWN1cnNvciBpbmZpbml0ZSAxcyBzdGVwLXN0YXJ0O1xcbn1cXG4uYW0tbGlzdC1pdGVtIC5hbS1pbnB1dC1jb250cm9sIC5mYWtlLWlucHV0LWNvbnRhaW5lciAuZmFrZS1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBjb2xvcjogI2JiYjtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG4uYW0tbGlzdC1pdGVtIC5hbS1pbnB1dC1jb250cm9sIC5mYWtlLWlucHV0LWNvbnRhaW5lci1sZWZ0IC5mYWtlLWlucHV0IHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcbi5hbS1saXN0LWl0ZW0gLmFtLWlucHV0LWNvbnRyb2wgLmZha2UtaW5wdXQtY29udGFpbmVyLWxlZnQgLmZha2UtaW5wdXQuZm9jdXM6YWZ0ZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uYW0tbGlzdC1pdGVtIC5hbS1pbnB1dC1jb250cm9sIC5mYWtlLWlucHV0LWNvbnRhaW5lci1sZWZ0IC5mYWtlLWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcbi5hbS1udW1iZXIta2V5Ym9hcmQtd3JhcHBlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDEwMDAwO1xcbiAgZm9udC1mYW1pbHk6ICdQaW5nRmFuZyBTQyc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY3O1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSBkaXNwbGF5O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xcbiAgcGFkZGluZy1ib3R0b206IGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKTtcXG59XFxuLmFtLW51bWJlci1rZXlib2FyZC13cmFwcGVyLmFtLW51bWJlci1rZXlib2FyZC13cmFwcGVyLWhpZGUge1xcbiAgYm90dG9tOiAtNTAwcHg7XFxufVxcbi5hbS1udW1iZXIta2V5Ym9hcmQtd3JhcHBlciB0YWJsZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXRvcDogMVBYIHNvbGlkICNkZGQ7XFxufVxcbkBtZWRpYSAobWluLXJlc29sdXRpb246IDJkcHB4KSB7XFxuICBodG1sOm5vdChbZGF0YS1zY2FsZV0pIC5hbS1udW1iZXIta2V5Ym9hcmQtd3JhcHBlciB0YWJsZSB7XFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICB9XFxuICBodG1sOm5vdChbZGF0YS1zY2FsZV0pIC5hbS1udW1iZXIta2V5Ym9hcmQtd3JhcHBlciB0YWJsZTo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IGF1dG87XFxuICAgIGJvdHRvbTogYXV0bztcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMVBYO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgwLjUpO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi1yZXNvbHV0aW9uOiAyZHBweCkgYW5kIChtaW4tcmVzb2x1dGlvbjogM2RwcHgpIHtcXG4gIGh0bWw6bm90KFtkYXRhLXNjYWxlXSkgLmFtLW51bWJlci1rZXlib2FyZC13cmFwcGVyIHRhYmxlOjpiZWZvcmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgwLjMzKTtcXG4gIH1cXG59XFxuLmFtLW51bWJlci1rZXlib2FyZC13cmFwcGVyIHRhYmxlIHRyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuLmFtLW51bWJlci1rZXlib2FyZC13cmFwcGVyIHRhYmxlIHRyIC5hbS1udW1iZXIta2V5Ym9hcmQtaXRlbSB7XFxuICB3aWR0aDogMjUlO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGhlaWdodDogNTBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjUuNXB4O1xcbiAgY29sb3I6ICMyYTJiMmM7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5hbS1udW1iZXIta2V5Ym9hcmQtd3JhcHBlciB0YWJsZSB0ciAuYW0tbnVtYmVyLWtleWJvYXJkLWl0ZW06bm90KC5rZXlib2FyZC1jb25maXJtKSB7XFxuICBib3JkZXItbGVmdDogMVBYIHNvbGlkICNkZGQ7XFxuICBib3JkZXItYm90dG9tOiAxUFggc29saWQgI2RkZDtcXG59XFxuQG1lZGlhIChtaW4tcmVzb2x1dGlvbjogMmRwcHgpIHtcXG4gIGh0bWw6bm90KFtkYXRhLXNjYWxlXSkgLmFtLW51bWJlci1rZXlib2FyZC13cmFwcGVyIHRhYmxlIHRyIC5hbS1udW1iZXIta2V5Ym9hcmQtaXRlbTpub3QoLmtleWJvYXJkLWNvbmZpcm0pIHtcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICB9XFxuICBodG1sOm5vdChbZGF0YS1zY2FsZV0pIC5hbS1udW1iZXIta2V5Ym9hcmQtd3JhcHBlciB0YWJsZSB0ciAuYW0tbnVtYmVyLWtleWJvYXJkLWl0ZW06bm90KC5rZXlib2FyZC1jb25maXJtKTo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IGF1dG87XFxuICAgIGJvdHRvbTogYXV0bztcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDFQWDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDUwJTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMC41KTtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4tcmVzb2x1dGlvbjogMmRwcHgpIGFuZCAobWluLXJlc29sdXRpb246IDNkcHB4KSB7XFxuICBodG1sOm5vdChbZGF0YS1zY2FsZV0pIC5hbS1udW1iZXIta2V5Ym9hcmQtd3JhcHBlciB0YWJsZSB0ciAuYW0tbnVtYmVyLWtleWJvYXJkLWl0ZW06bm90KC5rZXlib2FyZC1jb25maXJtKTo6YmVmb3JlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMC4zMyk7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXJlc29sdXRpb246IDJkcHB4KSB7XFxuICBodG1sOm5vdChbZGF0YS1zY2FsZV0pIC5hbS1udW1iZXIta2V5Ym9hcmQtd3JhcHBlciB0YWJsZSB0ciAuYW0tbnVtYmVyLWtleWJvYXJkLWl0ZW06bm90KC5rZXlib2FyZC1jb25maXJtKSB7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICB9XFxuICBodG1sOm5vdChbZGF0YS1zY2FsZV0pIC5hbS1udW1iZXIta2V5Ym9hcmQtd3JhcHBlciB0YWJsZSB0ciAuYW0tbnVtYmVyLWtleWJvYXJkLWl0ZW06bm90KC5rZXlib2FyZC1jb25maXJtKTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgei1pbmRleDogMTtcXG4gICAgdG9wOiBhdXRvO1xcbiAgICByaWdodDogYXV0bztcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxUFg7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgwLjUpO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi1yZXNvbHV0aW9uOiAyZHBweCkgYW5kIChtaW4tcmVzb2x1dGlvbjogM2RwcHgpIHtcXG4gIGh0bWw6bm90KFtkYXRhLXNjYWxlXSkgLmFtLW51bWJlci1rZXlib2FyZC13cmFwcGVyIHRhYmxlIHRyIC5hbS1udW1iZXIta2V5Ym9hcmQtaXRlbTpub3QoLmtleWJvYXJkLWNvbmZpcm0pOjphZnRlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDAuMzMpO1xcbiAgfVxcbn1cXG4uYW0tbnVtYmVyLWtleWJvYXJkLXdyYXBwZXIgdGFibGUgdHIgLmFtLW51bWJlci1rZXlib2FyZC1pdGVtLmFtLW51bWJlci1rZXlib2FyZC1pdGVtLWFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xcbn1cXG4uYW0tbnVtYmVyLWtleWJvYXJkLXdyYXBwZXIgdGFibGUgdHIgLmFtLW51bWJlci1rZXlib2FyZC1pdGVtLmtleWJvYXJkLWNvbmZpcm0ge1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXNpemU6IDIxcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTA4ZWU5O1xcbiAgYm9yZGVyLWJvdHRvbTogMVBYIHNvbGlkICNkZGQ7XFxufVxcbkBtZWRpYSAobWluLXJlc29sdXRpb246IDJkcHB4KSB7XFxuICBodG1sOm5vdChbZGF0YS1zY2FsZV0pIC5hbS1udW1iZXIta2V5Ym9hcmQtd3JhcHBlciB0YWJsZSB0ciAuYW0tbnVtYmVyLWtleWJvYXJkLWl0ZW0ua2V5Ym9hcmQtY29uZmlybSB7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICB9XFxuICBodG1sOm5vdChbZGF0YS1zY2FsZV0pIC5hbS1udW1iZXIta2V5Ym9hcmQtd3JhcHBlciB0YWJsZSB0ciAuYW0tbnVtYmVyLWtleWJvYXJkLWl0ZW0ua2V5Ym9hcmQtY29uZmlybTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgei1pbmRleDogMTtcXG4gICAgdG9wOiBhdXRvO1xcbiAgICByaWdodDogYXV0bztcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxUFg7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgwLjUpO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi1yZXNvbHV0aW9uOiAyZHBweCkgYW5kIChtaW4tcmVzb2x1dGlvbjogM2RwcHgpIHtcXG4gIGh0bWw6bm90KFtkYXRhLXNjYWxlXSkgLmFtLW51bWJlci1rZXlib2FyZC13cmFwcGVyIHRhYmxlIHRyIC5hbS1udW1iZXIta2V5Ym9hcmQtaXRlbS5rZXlib2FyZC1jb25maXJtOjphZnRlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDAuMzMpO1xcbiAgfVxcbn1cXG4uYW0tbnVtYmVyLWtleWJvYXJkLXdyYXBwZXIgdGFibGUgdHIgLmFtLW51bWJlci1rZXlib2FyZC1pdGVtLmtleWJvYXJkLWNvbmZpcm0uYW0tbnVtYmVyLWtleWJvYXJkLWl0ZW0tYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwZTgwZDI7XFxufVxcbi5hbS1udW1iZXIta2V5Ym9hcmQtd3JhcHBlciB0YWJsZSB0ciAuYW0tbnVtYmVyLWtleWJvYXJkLWl0ZW0ua2V5Ym9hcmQtY29uZmlybS5hbS1udW1iZXIta2V5Ym9hcmQtaXRlbS1kaXNhYmxlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGU4MGQyO1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSk7XFxufVxcbi5hbS1udW1iZXIta2V5Ym9hcmQtd3JhcHBlciB0YWJsZSB0ciAuYW0tbnVtYmVyLWtleWJvYXJkLWl0ZW0ua2V5Ym9hcmQtZGVsZXRlIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsJTNDc3ZnJTIwdmVyc2lvbiUzRCUyMjElMjIlMjB4bWxucyUzRCUyMmh0dHAlM0ElMkYlMkZ3d3cudzMub3JnJTJGMjAwMCUyRnN2ZyUyMiUyMHdpZHRoJTNEJTIyMjA0JTIyJTIwaGVpZ2h0JTNEJTIyMTQ4JTIyJTIwdmlld0JveCUzRCUyMjAlMjAwJTIwMTUzLjAwMDAwMCUyMDExMS4wMDAwMDAlMjIlM0UlM0NwYXRoJTIwZCUzRCUyMk00Ni45JTIwNC43Yy0yLjUlMjAyLjYtMTQuMSUyMDE1LjUtMjUuOCUyMDI4LjZMLS4xJTIwNTdsMjUuNiUyMDI3JTIwMjUuNyUyMDI3LjElMjA0Ny40LS4zJTIwNDcuNC0uMyUyMDMuMi0zLjMlMjAzLjMtMy4yVjdsLTMuMy0zLjJMMTQ2JTIwLjUlMjA5OC43LjIlMjA1MS41LS4xbC00LjYlMjA0Ljh6bTk3LjklMjAzLjVjMS43JTIwMS43JTIwMS43JTIwOTIuOSUyMDAlMjA5NC42LS45LjktMTIuNiUyMDEuMi00Ni4zJTIwMS4ySDUzLjRMMzEuMiUyMDgwLjQlMjA5JTIwNTYuOWw1LjEtNS43YzIuOC0zLjElMjAxMi44LTE0LjQlMjAyMi4yLTI0LjlMNTMuNSUyMDdoNDVjMzMuOCUyMDAlMjA0NS40LjMlMjA0Ni4zJTIwMS4yeiUyMiUyRiUzRSUzQ3BhdGglMjBkJTNEJTIyTTY5LjUlMjAzMWMtMS45JTIwMi4xLTEuNyUyMDIuMiUyMDkuMyUyMDEzLjNMOTAlMjA1NS41JTIwNzguOCUyMDY2LjclMjA2Ny41JTIwNzhsMi4zJTIwMi4yJTIwMi4yJTIwMi4zJTIwMTEuMy0xMS4zTDk0LjUlMjA2MGwxMS4yJTIwMTEuMkwxMTclMjA4Mi41bDIuMi0yLjMlMjAyLjMtMi4yLTExLjMtMTEuM0w5OSUyMDU1LjVsMTEuMi0xMS4yTDEyMS41JTIwMzNsLTIuMy0yLjItMi4yLTIuMy0xMS4zJTIwMTEuM0w5NC41JTIwNTFsLTExLTExYy02LTYtMTEuMi0xMS0xMS42LTExLS4zJTIwMC0xLjQuOS0yLjQlMjAyeiUyMiUyRiUzRSUzQyUyRnN2ZyUzRVxcXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAyNS41cHggMTguNXB4O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcbi5hbS1udW1iZXIta2V5Ym9hcmQtd3JhcHBlciB0YWJsZSB0ciAuYW0tbnVtYmVyLWtleWJvYXJkLWl0ZW0ua2V5Ym9hcmQtaGlkZSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCUzQ3N2ZyUyMHZlcnNpb24lM0QlMjIxJTIyJTIweG1sbnMlM0QlMjJodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjIwMDAlMkZzdmclMjIlMjB3aWR0aCUzRCUyMjI2MCUyMiUyMGhlaWdodCUzRCUyMjE4OCUyMiUyMHZpZXdCb3glM0QlMjIwJTIwMCUyMDE5NS4wMDAwMDAlMjAxNDEuMDAwMDAwJTIyJTNFJTNDcGF0aCUyMGQlM0QlMjJNMCUyMDU3djU3aDE5NVYwSDB2NTd6bTE4MyUyMDB2NDVIMTJWMTJoMTcxdjQ1eiUyMiUyRiUzRSUzQ3BhdGglMjBkJTNEJTIyTTIxJTIwMzEuNVYzOWgxNVYyNEgyMXY3LjV6TTQ4JTIwMzEuNVYzOWgxNVYyNEg0OHY3LjV6TTc1JTIwMzEuNVYzOWgxNVYyNEg3NXY3LjV6TTEwMiUyMDMxLjVWMzloMTVWMjRoLTE1djcuNXpNMTI5JTIwMzEuNVYzOWgxNVYyNGgtMTV2Ny41ek0xNTYlMjAzMS41VjM5aDE1VjI0aC0xNXY3LjV6TTM2JTIwNTUuNVY2M2gxNVY0OEgzNnY3LjV6TTYzJTIwNTUuNVY2M2gxNVY0OEg2M3Y3LjV6TTkwJTIwNTUuNVY2M2gxNVY0OEg5MHY3LjV6TTExNyUyMDU1LjVWNjNoMTVWNDhoLTE1djcuNXpNMTQ0JTIwNTUuNVY2M2gxNVY0OGgtMTV2Ny41ek0yNyUyMDc5LjVWODdoMTVWNzJIMjd2Ny41ek00OCUyMDc5LjVWODdoOTZWNzJINDh2Ny41ek0xNTAlMjA3OS41Vjg3aDE1VjcyaC0xNXY3LjV6TTgxJTIwMTI0LjVjMCUyMC44LjclMjAxLjUlMjAxLjUlMjAxLjVzMS41LjclMjAxLjUlMjAxLjUuNyUyMDEuNSUyMDEuNSUyMDEuNSUyMDEuNS43JTIwMS41JTIwMS41LjclMjAxLjUlMjAxLjUlMjAxLjUlMjAxLjUuNyUyMDEuNSUyMDEuNS43JTIwMS41JTIwMS41JTIwMS41JTIwMS41LjclMjAxLjUlMjAxLjUuNyUyMDEuNSUyMDEuNSUyMDEuNSUyMDEuNS43JTIwMS41JTIwMS41LjclMjAxLjUlMjAxLjUlMjAxLjUlMjAxLjUtLjclMjAxLjUtMS41LjctMS41JTIwMS41LTEuNSUyMDEuNS0uNyUyMDEuNS0xLjUuNy0xLjUlMjAxLjUtMS41JTIwMS41LS43JTIwMS41LTEuNS43LTEuNSUyMDEuNS0xLjUlMjAxLjUtLjclMjAxLjUtMS41LjctMS41JTIwMS41LTEuNSUyMDEuNS0uNyUyMDEuNS0xLjUuNy0xLjUlMjAxLjUtMS41JTIwMS41LS43JTIwMS41LTEuNWMwLTEuMy0yLjUtMS41LTE2LjUtMS41cy0xNi41LjItMTYuNSUyMDEuNXolMjIlMkYlM0UlM0MlMkZzdmclM0VcXFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMzIuNXB4IDIzLjVweDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG4uYW0tbnVtYmVyLWtleWJvYXJkLXdyYXBwZXIgdGFibGUgdHIgLmFtLW51bWJlci1rZXlib2FyZC1pdGVtLWRpc2FibGVkIHtcXG4gIGNvbG9yOiAjYmJiO1xcbn1cXG5Aa2V5ZnJhbWVzIGtleWJvYXJkLWN1cnNvciB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuICA1MCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG4uYW0tbGlzdC1pdGVtLmFtLWlucHV0LWl0ZW0ge1xcbiAgaGVpZ2h0OiA0NHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbn1cXG4uYW0tbGlzdC1pdGVtOm5vdCg6bGFzdC1jaGlsZCkgLmFtLWxpc3QtbGluZSB7XFxuICBib3JkZXItYm90dG9tOiAxUFggc29saWQgI2RkZDtcXG59XFxuQG1lZGlhIChtaW4tcmVzb2x1dGlvbjogMmRwcHgpIHtcXG4gIGh0bWw6bm90KFtkYXRhLXNjYWxlXSkgLmFtLWxpc3QtaXRlbTpub3QoOmxhc3QtY2hpbGQpIC5hbS1saXN0LWxpbmUge1xcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgfVxcbiAgaHRtbDpub3QoW2RhdGEtc2NhbGVdKSAuYW0tbGlzdC1pdGVtOm5vdCg6bGFzdC1jaGlsZCkgLmFtLWxpc3QtbGluZTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgei1pbmRleDogMTtcXG4gICAgdG9wOiBhdXRvO1xcbiAgICByaWdodDogYXV0bztcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxUFg7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgwLjUpO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi1yZXNvbHV0aW9uOiAyZHBweCkgYW5kIChtaW4tcmVzb2x1dGlvbjogM2RwcHgpIHtcXG4gIGh0bWw6bm90KFtkYXRhLXNjYWxlXSkgLmFtLWxpc3QtaXRlbTpub3QoOmxhc3QtY2hpbGQpIC5hbS1saXN0LWxpbmU6OmFmdGVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMC4zMyk7XFxuICB9XFxufVxcbi5hbS1saXN0LWl0ZW0gLmFtLWlucHV0LWxhYmVsIHtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgZm9udC1zaXplOiAxN3B4O1xcbiAgbWFyZ2luLWxlZnQ6IDA7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBhZGRpbmc6IDJweCAwO1xcbn1cXG4uYW0tbGlzdC1pdGVtIC5hbS1pbnB1dC1sYWJlbC5hbS1pbnB1dC1sYWJlbC0yIHtcXG4gIHdpZHRoOiAzNHB4O1xcbn1cXG4uYW0tbGlzdC1pdGVtIC5hbS1pbnB1dC1sYWJlbC5hbS1pbnB1dC1sYWJlbC0zIHtcXG4gIHdpZHRoOiA1MXB4O1xcbn1cXG4uYW0tbGlzdC1pdGVtIC5hbS1pbnB1dC1sYWJlbC5hbS1pbnB1dC1sYWJlbC00IHtcXG4gIHdpZHRoOiA2OHB4O1xcbn1cXG4uYW0tbGlzdC1pdGVtIC5hbS1pbnB1dC1sYWJlbC5hbS1pbnB1dC1sYWJlbC01IHtcXG4gIHdpZHRoOiA4NXB4O1xcbn1cXG4uYW0tbGlzdC1pdGVtIC5hbS1pbnB1dC1sYWJlbC5hbS1pbnB1dC1sYWJlbC02IHtcXG4gIHdpZHRoOiAxMDJweDtcXG59XFxuLmFtLWxpc3QtaXRlbSAuYW0taW5wdXQtbGFiZWwuYW0taW5wdXQtbGFiZWwtNyB7XFxuICB3aWR0aDogMTE5cHg7XFxufVxcbi5hbS1saXN0LWl0ZW0gLmFtLWlucHV0LWNvbnRyb2wge1xcbiAgZm9udC1zaXplOiAxN3B4O1xcbiAgZmxleDogMTtcXG59XFxuLmFtLWxpc3QtaXRlbSAuYW0taW5wdXQtY29udHJvbCBpbnB1dCB7XFxuICBjb2xvcjogIzAwMDtcXG4gIGZvbnQtc2l6ZTogMTdweDtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDJweCAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi5hbS1saXN0LWl0ZW0gLmFtLWlucHV0LWNvbnRyb2wgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiAjYmJiO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjtcXG59XFxuLmFtLWxpc3QtaXRlbSAuYW0taW5wdXQtY29udHJvbCBpbnB1dDpkaXNhYmxlZCB7XFxuICBjb2xvcjogI2JiYjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcbi5hbS1saXN0LWl0ZW0gLmFtLWlucHV0LWNsZWFyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB3aWR0aDogMjFweDtcXG4gIGhlaWdodDogMjFweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwlM0NzdmclMjBmaWxsJTNEJyUyM2ZmZiclMjB2aWV3Qm94JTNEJzAlMjAwJTIwMzAlMjAzMCclMjB4bWxucyUzRCdodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjIwMDAlMkZzdmcnJTNFJTNDcGF0aCUyMGQlM0QnTTE5JTIwNi40MUwxNy41OSUyMDUlMjAxMiUyMDEwLjU5JTIwNi40MSUyMDUlMjA1JTIwNi40MSUyMDEwLjU5JTIwMTIlMjA1JTIwMTcuNTklMjA2LjQxJTIwMTklMjAxMiUyMDEzLjQxJTIwMTcuNTklMjAxOSUyMDE5JTIwMTcuNTklMjAxMy40MSUyMDEyeiclMkYlM0UlM0NwYXRoJTIwZCUzRCdNMCUyMDBoMjR2MjRIMHonJTIwZmlsbCUzRCdub25lJyUyRiUzRSUzQyUyRnN2ZyUzRVxcXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAyMXB4IGF1dG87XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAycHggMnB4O1xcbn1cXG4uYW0tbGlzdC1pdGVtIC5hbS1pbnB1dC1jbGVhci1hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEwOGVlOTtcXG59XFxuLmFtLWxpc3QtaXRlbS5hbS1pbnB1dC1mb2N1cyAuYW0taW5wdXQtY2xlYXIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5hbS1saXN0LWl0ZW0gLmFtLWlucHV0LWV4dHJhIHtcXG4gIGZsZXg6IGluaXRpYWw7XFxuICBtaW4td2lkdGg6IDA7XFxuICBtYXgtaGVpZ2h0OiAyMXB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBhZGRpbmctcmlnaHQ6IDA7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIGNvbG9yOiAjODg4O1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXG59XFxuLmFtLWxpc3QtaXRlbS5hbS1pbnB1dC1lcnJvciAuYW0taW5wdXQtY29udHJvbCBpbnB1dCB7XFxuICBjb2xvcjogI2Y1MDtcXG59XFxuLmFtLWxpc3QtaXRlbS5hbS1pbnB1dC1lcnJvciAuYW0taW5wdXQtZXJyb3ItZXh0cmEge1xcbiAgaGVpZ2h0OiAyMXB4O1xcbiAgd2lkdGg6IDIxcHg7XFxuICBtYXJnaW4tbGVmdDogNnB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwlM0NzdmclMjB3aWR0aCUzRCcxOCclMjBoZWlnaHQlM0QnMTgnJTIwdmlld0JveCUzRCcwJTIwMCUyMDE4JTIwMTgnJTIweG1sbnMlM0QnaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYyMDAwJTJGc3ZnJyUzRSUzQ2clMjBzdHJva2UlM0Qnbm9uZSclMjBzdHJva2Utd2lkdGglM0QnMSclMjBmaWxsJTNEJ25vbmUnJTIwZmlsbC1ydWxlJTNEJ2V2ZW5vZGQnJTNFJTNDZyUyMHRyYW5zZm9ybSUzRCd0cmFuc2xhdGUoLTMwMC4wMDAwMDAlMkMlMjAtMTIwNy4wMDAwMDApJyUyMGZpbGwlM0QnJTIzRkY1NTAwJyUzRSUzQ2clMjBpZCUzRCdleGNsYW1hdGlvbi1jaXJjbGUtbyclMjB0cmFuc2Zvcm0lM0QndHJhbnNsYXRlKDMwMC4wMDAwMDAlMkMlMjAxMjA3LjAwMDAwMCknJTNFJTNDcGF0aCUyMGQlM0QnTTklMkMxNi43MzQzNzUlMjBDMTAuMDQ0MTQwNiUyQzE2LjczNDM3NSUyMDExLjA1NjY0MDYlMkMxNi41MzA0Njg4JTIwMTIuMDA5Mzc1JTJDMTYuMTI3OTI5NyUyMEMxMi45MzA0Njg4JTJDMTUuNzM3Njk1MyUyMDEzLjc1NjY0MDYlMkMxNS4xODA0Njg3JTIwMTQuNDY4NTU0NyUyQzE0LjQ3MDMxMjUlMjBDMTUuMTc4NzEwOSUyQzEzLjc2MDE1NjMlMjAxNS43Mzc2OTUzJTJDMTIuOTMyMjI2NiUyMDE2LjEyNjE3MTklMkMxMi4wMTExMzI4JTIwQzE2LjUzMDQ2ODglMkMxMS4wNTY2NDA2JTIwMTYuNzM0Mzc1JTJDMTAuMDQ0MTQwNiUyMDE2LjczNDM3NSUyQzklMjBDMTYuNzM0Mzc1JTJDNy45NTU4NTkzOCUyMDE2LjUzMDQ2ODglMkM2Ljk0MzM1OTM4JTIwMTYuMTI3OTI5NyUyQzUuOTkwNjI1JTIwQzE1LjczNzY5NTMlMkM1LjA2OTUzMTI1JTIwMTUuMTgwNDY4NyUyQzQuMjQzMzU5MzglMjAxNC40NzAzMTI1JTJDMy41MzE0NDUzMSUyMEMxMy43NjAxNTYzJTJDMi44MjEyODkwNiUyMDEyLjkzMjIyNjYlMkMyLjI2MjMwNDY5JTIwMTIuMDExMTMyOCUyQzEuODczODI4MTMlMjBDMTEuMDU2NjQwNiUyQzEuNDY5NTMxMjUlMjAxMC4wNDQxNDA2JTJDMS4yNjU2MjUlMjA5JTJDMS4yNjU2MjUlMjBDNy45NTU4NTkzOCUyQzEuMjY1NjI1JTIwNi45NDMzNTkzOCUyQzEuNDY5NTMxMjUlMjA1Ljk5MDYyNSUyQzEuODcyMDcwMzElMjBDNS4wNjk1MzEyNSUyQzIuMjYyMzA0NjklMjA0LjI0MzM1OTM4JTJDMi44MTk1MzEyNSUyMDMuNTMxNDQ1MzElMkMzLjUyOTY4NzUlMjBDMi44MjEyODkwNiUyQzQuMjM5ODQzNzUlMjAyLjI2MjMwNDY5JTJDNS4wNjc3NzM0NCUyMDEuODczODI4MTMlMkM1Ljk4ODg2NzE5JTIwQzEuNDY5NTMxMjUlMkM2Ljk0MzM1OTM4JTIwMS4yNjU2MjUlMkM3Ljk1NTg1OTM4JTIwMS4yNjU2MjUlMkM5JTIwQzEuMjY1NjI1JTJDMTAuMDQ0MTQwNiUyMDEuNDY5NTMxMjUlMkMxMS4wNTY2NDA2JTIwMS44NzIwNzAzMSUyQzEyLjAwOTM3NSUyMEMyLjI2MjMwNDY5JTJDMTIuOTMwNDY4OCUyMDIuODE5NTMxMjUlMkMxMy43NTY2NDA2JTIwMy41Mjk2ODc1JTJDMTQuNDY4NTU0NyUyMEM0LjIzOTg0Mzc1JTJDMTUuMTc4NzEwOSUyMDUuMDY3NzczNDQlMkMxNS43Mzc2OTUzJTIwNS45ODg4NjcxOSUyQzE2LjEyNjE3MTklMjBDNi45NDMzNTkzOCUyQzE2LjUzMDQ2ODglMjA3Ljk1NTg1OTM4JTJDMTYuNzM0Mzc1JTIwOSUyQzE2LjczNDM3NSUyMEw5JTJDMTYuNzM0Mzc1JTIwWiUyME05JTJDMTglMjBDNC4wMjg5MDYyNSUyQzE4JTIwMCUyQzEzLjk3MTA5MzclMjAwJTJDOSUyMEMwJTJDNC4wMjg5MDYyNSUyMDQuMDI4OTA2MjUlMkMwJTIwOSUyQzAlMjBDMTMuOTcxMDkzNyUyQzAlMjAxOCUyQzQuMDI4OTA2MjUlMjAxOCUyQzklMjBDMTglMkMxMy45NzEwOTM3JTIwMTMuOTcxMDkzNyUyQzE4JTIwOSUyQzE4JTIwTDklMkMxOCUyMEw5JTJDMTglMjBaJTIwTTklMkM2Ljc1JTIwQzguNjExNTIzNDQlMkM2Ljc1JTIwOC4yOTY4NzUlMkM3LjA2NDY0ODQ0JTIwOC4yOTY4NzUlMkM3LjQ1MzEyNSUyMEw4LjI5Njg3NSUyQzEzLjkzOTQ1MzElMjBDOC4yOTY4NzUlMkMxNC4zMjc5Mjk3JTIwOC42MTE1MjM0NCUyQzE0LjY0MjU3ODElMjA5JTJDMTQuNjQyNTc4MSUyMEM5LjM4ODQ3NjU2JTJDMTQuNjQyNTc4MSUyMDkuNzAzMTI1JTJDMTQuMzI3OTI5NyUyMDkuNzAzMTI1JTJDMTMuOTM5NDUzMSUyMEw5LjcwMzEyNSUyQzcuNDUzMTI1JTIwQzkuNzAzMTI1JTJDNy4wNjQ2NDg0NCUyMDkuMzg4NDc2NTYlMkM2Ljc1JTIwOSUyQzYuNzUlMjBMOSUyQzYuNzUlMjBaJTIwTTguMjA4OTg0MzglMkM0LjgzMzk4NDM4JTIwQzguMjA4OTg0MzglMkM1LjI3MDg1MDI0JTIwOC41NjMxMzQxMyUyQzUuNjI1JTIwOSUyQzUuNjI1JTIwQzkuNDM2ODY1ODclMkM1LjYyNSUyMDkuNzkxMDE1NjIlMkM1LjI3MDg1MDI0JTIwOS43OTEwMTU2MiUyQzQuODMzOTg0MzglMjBDOS43OTEwMTU2MiUyQzQuMzk3MTE4NTElMjA5LjQzNjg2NTg3JTJDNC4wNDI5Njg3NSUyMDklMkM0LjA0Mjk2ODc1JTIwQzguNTYzMTM0MTMlMkM0LjA0Mjk2ODc1JTIwOC4yMDg5ODQzOCUyQzQuMzk3MTE4NTElMjA4LjIwODk4NDM4JTJDNC44MzM5ODQzOCUyMEw4LjIwODk4NDM4JTJDNC44MzM5ODQzOCUyMFonJTIwaWQlM0QnU2hhcGUnJTIwdHJhbnNmb3JtJTNEJ3RyYW5zbGF0ZSg5LjAwMDAwMCUyQyUyMDkuMDAwMDAwKSUyMHNjYWxlKDElMkMlMjAtMSklMjB0cmFuc2xhdGUoLTkuMDAwMDAwJTJDJTIwLTkuMDAwMDAwKSUyMCclM0UlM0MlMkZwYXRoJTNFJTNDJTJGZyUzRSUzQyUyRmclM0UlM0MlMkZnJTNFJTNDJTJGc3ZnJTNFXFxcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDIxcHggYXV0bztcXG59XFxuLmFtLWxpc3QtaXRlbS5hbS1pbnB1dC1kaXNhYmxlZCAuYW0taW5wdXQtbGFiZWwge1xcbiAgY29sb3I6ICNiYmI7XFxufVxcbi5zci1vbmx5IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxcHg7XFxuICBoZWlnaHQ6IDFweDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IC0xcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBib3JkZXI6IDA7XFxufVxcblwiLCBcIlwiXSk7XG5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuYW0tbGlzdC1oZWFkZXIge1xcbiAgcGFkZGluZzogMTVweCAxNXB4IDlweCAxNXB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgY29sb3I6ICM4ODg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi5hbS1saXN0LWZvb3RlciB7XFxuICBwYWRkaW5nOiA5cHggMTVweCAxNXB4IDE1cHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjb2xvcjogIzg4ODtcXG59XFxuLmFtLWxpc3QtYm9keSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLXRvcDogMVBYIHNvbGlkICNkZGQ7XFxuICBib3JkZXItYm90dG9tOiAxUFggc29saWQgI2RkZDtcXG59XFxuQG1lZGlhIChtaW4tcmVzb2x1dGlvbjogMmRwcHgpIHtcXG4gIGh0bWw6bm90KFtkYXRhLXNjYWxlXSkgLmFtLWxpc3QtYm9keSB7XFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICB9XFxuICBodG1sOm5vdChbZGF0YS1zY2FsZV0pIC5hbS1saXN0LWJvZHk6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiBhdXRvO1xcbiAgICBib3R0b206IGF1dG87XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDFQWDtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMC41KTtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4tcmVzb2x1dGlvbjogMmRwcHgpIGFuZCAobWluLXJlc29sdXRpb246IDNkcHB4KSB7XFxuICBodG1sOm5vdChbZGF0YS1zY2FsZV0pIC5hbS1saXN0LWJvZHk6OmJlZm9yZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDAuMzMpO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi1yZXNvbHV0aW9uOiAyZHBweCkge1xcbiAgaHRtbDpub3QoW2RhdGEtc2NhbGVdKSAuYW0tbGlzdC1ib2R5IHtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gIH1cXG4gIGh0bWw6bm90KFtkYXRhLXNjYWxlXSkgLmFtLWxpc3QtYm9keTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgei1pbmRleDogMTtcXG4gICAgdG9wOiBhdXRvO1xcbiAgICByaWdodDogYXV0bztcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxUFg7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgwLjUpO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi1yZXNvbHV0aW9uOiAyZHBweCkgYW5kIChtaW4tcmVzb2x1dGlvbjogM2RwcHgpIHtcXG4gIGh0bWw6bm90KFtkYXRhLXNjYWxlXSkgLmFtLWxpc3QtYm9keTo6YWZ0ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgwLjMzKTtcXG4gIH1cXG59XFxuLmFtLWxpc3QtYm9keSBkaXY6bm90KDpsYXN0LWNoaWxkKSAuYW0tbGlzdC1saW5lIHtcXG4gIGJvcmRlci1ib3R0b206IDFQWCBzb2xpZCAjZGRkO1xcbn1cXG5AbWVkaWEgKG1pbi1yZXNvbHV0aW9uOiAyZHBweCkge1xcbiAgaHRtbDpub3QoW2RhdGEtc2NhbGVdKSAuYW0tbGlzdC1ib2R5IGRpdjpub3QoOmxhc3QtY2hpbGQpIC5hbS1saXN0LWxpbmUge1xcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgfVxcbiAgaHRtbDpub3QoW2RhdGEtc2NhbGVdKSAuYW0tbGlzdC1ib2R5IGRpdjpub3QoOmxhc3QtY2hpbGQpIC5hbS1saXN0LWxpbmU6OmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHRvcDogYXV0bztcXG4gICAgcmlnaHQ6IGF1dG87XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMVBYO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMC41KTtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4tcmVzb2x1dGlvbjogMmRwcHgpIGFuZCAobWluLXJlc29sdXRpb246IDNkcHB4KSB7XFxuICBodG1sOm5vdChbZGF0YS1zY2FsZV0pIC5hbS1saXN0LWJvZHkgZGl2Om5vdCg6bGFzdC1jaGlsZCkgLmFtLWxpc3QtbGluZTo6YWZ0ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgwLjMzKTtcXG4gIH1cXG59XFxuLmFtLWxpc3QtaXRlbSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgbWluLWhlaWdodDogNDRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXM7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLyogbGlzdOW3puWbvueJh+aYvuekuiovXFxufVxcbi5hbS1saXN0LWl0ZW0gLmFtLWxpc3QtcmlwcGxlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHdpbGwtY2hhbmdlOiBib3gtc2hhZG93LCB0cmFuc2Zvcm07XFxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMSwgMSksIGJhY2tncm91bmQtY29sb3IgMC4ycyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpLCBjb2xvciAwLjJzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxufVxcbi5hbS1saXN0LWl0ZW0gLmFtLWxpc3QtcmlwcGxlLmFtLWxpc3QtcmlwcGxlLWFuaW1hdGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAwJSwgNjIlLCAwLjIpO1xcbiAgYW5pbWF0aW9uOiByaXBwbGUgMXMgbGluZWFyO1xcbn1cXG4uYW0tbGlzdC1pdGVtLmFtLWxpc3QtaXRlbS10b3AgLmFtLWxpc3QtbGluZSB7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuLmFtLWxpc3QtaXRlbS5hbS1saXN0LWl0ZW0tdG9wIC5hbS1saXN0LWxpbmUgLmFtLWxpc3QtYXJyb3cge1xcbiAgbWFyZ2luLXRvcDogMnB4O1xcbn1cXG4uYW0tbGlzdC1pdGVtLmFtLWxpc3QtaXRlbS1taWRkbGUgLmFtLWxpc3QtbGluZSB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uYW0tbGlzdC1pdGVtLmFtLWxpc3QtaXRlbS1ib3R0b20gLmFtLWxpc3QtbGluZSB7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxufVxcbi5hbS1saXN0LWl0ZW0uYW0tbGlzdC1pdGVtLWVycm9yIC5hbS1saXN0LWxpbmUgLmFtLWxpc3QtZXh0cmEge1xcbiAgY29sb3I6ICNmNTA7XFxufVxcbi5hbS1saXN0LWl0ZW0uYW0tbGlzdC1pdGVtLWVycm9yIC5hbS1saXN0LWxpbmUgLmFtLWxpc3QtZXh0cmEgLmFtLWxpc3QtYnJpZWYge1xcbiAgY29sb3I6ICNmNTA7XFxufVxcbi5hbS1saXN0LWl0ZW0uYW0tbGlzdC1pdGVtLWFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xcbn1cXG4uYW0tbGlzdC1pdGVtLmFtLWxpc3QtaXRlbS1kaXNhYmxlZCAuYW0tbGlzdC1saW5lIC5hbS1saXN0LWNvbnRlbnQsXFxuLmFtLWxpc3QtaXRlbS5hbS1saXN0LWl0ZW0tZGlzYWJsZWQgLmFtLWxpc3QtbGluZSAuYW0tbGlzdC1leHRyYSB7XFxuICBjb2xvcjogI2JiYjtcXG59XFxuLmFtLWxpc3QtaXRlbSBpbWcge1xcbiAgd2lkdGg6IDIycHg7XFxuICBoZWlnaHQ6IDIycHg7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4uYW0tbGlzdC1pdGVtIC5hbS1saXN0LXRodW1iOmZpcnN0LWNoaWxkIHtcXG4gIG1hcmdpbi1yaWdodDogMTVweDtcXG59XFxuLmFtLWxpc3QtaXRlbSAuYW0tbGlzdC10aHVtYjpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XFxufVxcbi5hbS1saXN0LWl0ZW0gLmFtLWxpc3QtbGluZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMTtcXG4gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIC8qIGxpc3Tlt6bkvqfkuLvlhoXlrrkqL1xcbiAgLyogbGlzdOWPs+ihpeWFheWGheWuuSovXFxuICAvKiDovoXliqnmgKfmloflrZcqL1xcbiAgLyogbGlzdOWPs+S+p+eureWktCovXFxufVxcbi5hbS1saXN0LWl0ZW0gLmFtLWxpc3QtbGluZSAuYW0tbGlzdC1jb250ZW50IHtcXG4gIGZsZXg6IDE7XFxuICBjb2xvcjogIzAwMDtcXG4gIGZvbnQtc2l6ZTogMTdweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgd2lkdGg6IGF1dG87XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgcGFkZGluZy10b3A6IDdweDtcXG4gIHBhZGRpbmctYm90dG9tOiA3cHg7XFxufVxcbi5hbS1saXN0LWl0ZW0gLmFtLWxpc3QtbGluZSAuYW0tbGlzdC1leHRyYSB7XFxuICBmbGV4LWJhc2lzOiAzNiU7XFxuICBjb2xvcjogIzg4ODtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHBhZGRpbmctdG9wOiA3cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogN3B4O1xcbn1cXG4uYW0tbGlzdC1pdGVtIC5hbS1saXN0LWxpbmUgLmFtLWxpc3QtdGl0bGUge1xcbiAgd2lkdGg6IGF1dG87XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG4uYW0tbGlzdC1pdGVtIC5hbS1saXN0LWxpbmUgLmFtLWxpc3QtYnJpZWYge1xcbiAgY29sb3I6ICM4ODg7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgbWFyZ2luLXRvcDogNnB4O1xcbiAgd2lkdGg6IGF1dG87XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG4uYW0tbGlzdC1pdGVtIC5hbS1saXN0LWxpbmUgLmFtLWxpc3QtYXJyb3cge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTVweDtcXG4gIGhlaWdodDogMTVweDtcXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCUzQ3N2ZyUyMHdpZHRoJTNEJTIyMTYlMjIlMjBoZWlnaHQlM0QlMjIyNiUyMiUyMHZpZXdCb3glM0QlMjIwJTIwMCUyMDE2JTIwMjYlMjIlMjB2ZXJzaW9uJTNEJTIyMS4xJTIyJTIweG1sbnMlM0QlMjJodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjIwMDAlMkZzdmclMjIlMjB4bWxucyUzQXhsaW5rJTNEJTIyaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYxOTk5JTJGeGxpbmslMjIlM0UlM0NnJTIwaWQlM0QlMjJVSS1LSVRfJUU1JTlGJUJBJUU3JUExJTgwJUU1JTg1JTgzJUU0JUJCJUI2JTIyJTIwc3Ryb2tlJTNEJTIybm9uZSUyMiUyMHN0cm9rZS13aWR0aCUzRCUyMjElMjIlMjBmaWxsJTNEJTIybm9uZSUyMiUyMGZpbGwtcnVsZSUzRCUyMmV2ZW5vZGQlMjIlM0UlM0NnJTIwaWQlM0QlMjI5LjklRTUlOUYlQkElRTclQTElODAlRTUlODUlODMlRTQlQkIlQjYlMjIlMjB0cmFuc2Zvcm0lM0QlMjJ0cmFuc2xhdGUoLTU4MDkuMDAwMDAwJTJDJTIwLTg0ODIuMDAwMDAwKSUyMiUyMGZpbGwlM0QlMjIlMjNDN0M3Q0MlMjIlM0UlM0Nwb2x5Z29uJTIwaWQlM0QlMjJEaXNjbG9zdXJlLUluZGljYXRvciUyMiUyMHBvaW50cyUzRCUyMjU4MTElMjA4NDgyJTIwNTgwOSUyMDg0ODQlMjA1ODIwLjUlMjA4NDk1JTIwNTgwOSUyMDg1MDYlMjA1ODExJTIwODUwOCUyMDU4MjUlMjA4NDk1JTIyJTNFJTNDJTJGcG9seWdvbiUzRSUzQyUyRmclM0UlM0MlMkZnJTNFJTNDJTJGc3ZnJTNFXFxcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuLmFtLWxpc3QtaXRlbSAuYW0tbGlzdC1saW5lIC5hbS1saXN0LWFycm93LWhvcml6b250YWwge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuLmFtLWxpc3QtaXRlbSAuYW0tbGlzdC1saW5lIC5hbS1saXN0LWFycm93LXZlcnRpY2FsIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcbi5hbS1saXN0LWl0ZW0gLmFtLWxpc3QtbGluZSAuYW0tbGlzdC1hcnJvdy12ZXJ0aWNhbC11cCB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcXG59XFxuLmFtLWxpc3QtaXRlbSAuYW0tbGlzdC1saW5lLW11bHRpcGxlIHtcXG4gIHBhZGRpbmc6IDEyLjVweCAxNXB4IDEyLjVweCAwO1xcbn1cXG4uYW0tbGlzdC1pdGVtIC5hbS1saXN0LWxpbmUtbXVsdGlwbGUgLmFtLWxpc3QtY29udGVudCB7XFxuICBwYWRkaW5nLXRvcDogMDtcXG4gIHBhZGRpbmctYm90dG9tOiAwO1xcbn1cXG4uYW0tbGlzdC1pdGVtIC5hbS1saXN0LWxpbmUtbXVsdGlwbGUgLmFtLWxpc3QtZXh0cmEge1xcbiAgcGFkZGluZy10b3A6IDA7XFxuICBwYWRkaW5nLWJvdHRvbTogMDtcXG59XFxuLmFtLWxpc3QtaXRlbSAuYW0tbGlzdC1saW5lLXdyYXAgLmFtLWxpc3QtY29udGVudCB7XFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbn1cXG4uYW0tbGlzdC1pdGVtIC5hbS1saXN0LWxpbmUtd3JhcCAuYW0tbGlzdC1leHRyYSB7XFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbn1cXG4uYW0tbGlzdC1pdGVtIHNlbGVjdCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTdweDtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuQGtleWZyYW1lcyByaXBwbGUge1xcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMi41KTtcXG4gIH1cXG59XFxuXCIsIFwiXCJdKTtcblxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qZG8gbm90IGltcG9ydCB0aGlzIGZpbGUgZXhjZXB0IGNvbXBvbmVudHMvc3R5bGUvaW5kZXgubGVzcyovXFxuLmFtLWZhZGUtZW50ZXIsXFxuLmFtLWZhZGUtYXBwZWFyIHtcXG4gIG9wYWNpdHk6IDA7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuMnM7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUsIDAsIDAuNTUsIDAuMik7XFxuICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xcbn1cXG4uYW0tZmFkZS1sZWF2ZSB7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuMnM7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUsIDAsIDAuNTUsIDAuMik7XFxuICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xcbn1cXG4uYW0tZmFkZS1lbnRlci5hbS1mYWRlLWVudGVyLWFjdGl2ZSxcXG4uYW0tZmFkZS1hcHBlYXIuYW0tZmFkZS1hcHBlYXItYWN0aXZlIHtcXG4gIGFuaW1hdGlvbi1uYW1lOiBhbUZhZGVJbjtcXG4gIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBydW5uaW5nO1xcbn1cXG4uYW0tZmFkZS1sZWF2ZS5hbS1mYWRlLWxlYXZlLWFjdGl2ZSB7XFxuICBhbmltYXRpb24tbmFtZTogYW1GYWRlT3V0O1xcbiAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHJ1bm5pbmc7XFxufVxcbkBrZXlmcmFtZXMgYW1GYWRlSW4ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgYW1GYWRlT3V0IHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG4uYW0tc2xpZGUtdXAtZW50ZXIsXFxuLmFtLXNsaWRlLXVwLWFwcGVhciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxMDAlKTtcXG59XFxuLmFtLXNsaWRlLXVwLWVudGVyLFxcbi5hbS1zbGlkZS11cC1hcHBlYXIsXFxuLmFtLXNsaWRlLXVwLWxlYXZlIHtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4ycztcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NSwgMCwgMC41NSwgMC4yKTtcXG4gIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XFxufVxcbi5hbS1zbGlkZS11cC1lbnRlci5hbS1zbGlkZS11cC1lbnRlci1hY3RpdmUsXFxuLmFtLXNsaWRlLXVwLWFwcGVhci5hbS1zbGlkZS11cC1hcHBlYXItYWN0aXZlIHtcXG4gIGFuaW1hdGlvbi1uYW1lOiBhbVNsaWRlVXBJbjtcXG4gIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBydW5uaW5nO1xcbn1cXG4uYW0tc2xpZGUtdXAtbGVhdmUuYW0tc2xpZGUtdXAtbGVhdmUtYWN0aXZlIHtcXG4gIGFuaW1hdGlvbi1uYW1lOiBhbVNsaWRlVXBPdXQ7XFxuICBhbmltYXRpb24tcGxheS1zdGF0ZTogcnVubmluZztcXG59XFxuQGtleWZyYW1lcyBhbVNsaWRlVXBJbiB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDEwMCUpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGFtU2xpZGVVcE91dCB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDEwMCUpO1xcbiAgfVxcbn1cXG4uYW0uYW0tem9vbS1lbnRlcixcXG4uYW0uYW0tem9vbS1sZWF2ZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLmFtLXpvb20tZW50ZXIsXFxuLmFtLXpvb20tYXBwZWFyIHtcXG4gIG9wYWNpdHk6IDA7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuMnM7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUsIDAsIDAuNTUsIDAuMik7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xOCwgMC44OSwgMC4zMiwgMS4yOCk7XFxuICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xcbn1cXG4uYW0tem9vbS1sZWF2ZSB7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuMnM7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUsIDAsIDAuNTUsIDAuMik7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC42LCAtMC4zLCAwLjc0LCAwLjA1KTtcXG4gIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XFxufVxcbi5hbS16b29tLWVudGVyLmFtLXpvb20tZW50ZXItYWN0aXZlLFxcbi5hbS16b29tLWFwcGVhci5hbS16b29tLWFwcGVhci1hY3RpdmUge1xcbiAgYW5pbWF0aW9uLW5hbWU6IGFtWm9vbUluO1xcbiAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHJ1bm5pbmc7XFxufVxcbi5hbS16b29tLWxlYXZlLmFtLXpvb20tbGVhdmUtYWN0aXZlIHtcXG4gIGFuaW1hdGlvbi1uYW1lOiBhbVpvb21PdXQ7XFxuICBhbmltYXRpb24tcGxheS1zdGF0ZTogcnVubmluZztcXG59XFxuQGtleWZyYW1lcyBhbVpvb21JbiB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCwgMCk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBhbVpvb21PdXQge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCwgMCk7XFxuICB9XFxufVxcbi5hbS1zbGlkZS1kb3duLWVudGVyLFxcbi5hbS1zbGlkZS1kb3duLWFwcGVhciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMTAwJSk7XFxufVxcbi5hbS1zbGlkZS1kb3duLWVudGVyLFxcbi5hbS1zbGlkZS1kb3duLWFwcGVhcixcXG4uYW0tc2xpZGUtZG93bi1sZWF2ZSB7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuMnM7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUsIDAsIDAuNTUsIDAuMik7XFxuICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xcbn1cXG4uYW0tc2xpZGUtZG93bi1lbnRlci5hbS1zbGlkZS1kb3duLWVudGVyLWFjdGl2ZSxcXG4uYW0tc2xpZGUtZG93bi1hcHBlYXIuYW0tc2xpZGUtZG93bi1hcHBlYXItYWN0aXZlIHtcXG4gIGFuaW1hdGlvbi1uYW1lOiBhbVNsaWRlRG93bkluO1xcbiAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHJ1bm5pbmc7XFxufVxcbi5hbS1zbGlkZS1kb3duLWxlYXZlLmFtLXNsaWRlLWRvd24tbGVhdmUtYWN0aXZlIHtcXG4gIGFuaW1hdGlvbi1uYW1lOiBhbVNsaWRlRG93bk91dDtcXG4gIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBydW5uaW5nO1xcbn1cXG5Aa2V5ZnJhbWVzIGFtU2xpZGVEb3duSW4ge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMTAwJSk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgYW1TbGlkZURvd25PdXQge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMTAwJSk7XFxuICB9XFxufVxcbiosXFxuKjpiZWZvcmUsXFxuKjphZnRlciB7XFxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxufVxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmOTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuKltjb250ZW50ZWRpdGFibGVdIHtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IGF1dG8gIWltcG9ydGFudDtcXG59XFxuKjpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5hIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXCIsIFwiXCJdKTtcblxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5hbS10b2FzdCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDE5OTk7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5hbS10b2FzdCA+IHNwYW4ge1xcbiAgbWF4LXdpZHRoOiA1MCU7XFxufVxcbi5hbS10b2FzdC5hbS10b2FzdC1tYXNrIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDFweCk7XFxufVxcbi5hbS10b2FzdC5hbS10b2FzdC1ub21hc2sge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbWF4LXdpZHRoOiA1MCU7XFxuICB3aWR0aDogYXV0bztcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDFweCk7XFxufVxcbi5hbS10b2FzdC5hbS10b2FzdC1ub21hc2sgLmFtLXRvYXN0LW5vdGljZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcXG59XFxuLmFtLXRvYXN0LW5vdGljZS1jb250ZW50IC5hbS10b2FzdC10ZXh0IHtcXG4gIG1pbi13aWR0aDogNjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1OCwgNTgsIDU4LCAwLjkpO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIHBhZGRpbmc6IDlweCAxNXB4O1xcbn1cXG4uYW0tdG9hc3Qtbm90aWNlLWNvbnRlbnQgLmFtLXRvYXN0LXRleHQuYW0tdG9hc3QtdGV4dC1pY29uIHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDE1cHggMTVweDtcXG59XFxuLmFtLXRvYXN0LW5vdGljZS1jb250ZW50IC5hbS10b2FzdC10ZXh0LmFtLXRvYXN0LXRleHQtaWNvbiAuYW0tdG9hc3QtdGV4dC1pbmZvIHtcXG4gIG1hcmdpbi10b3A6IDZweDtcXG59XFxuXCIsIFwiXCJdKTtcblxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qISBub3JtYWxpemUuY3NzIHY3LjAuMCB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXG4vKiBEb2N1bWVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW5cXG4gKiAgICBJRSBvbiBXaW5kb3dzIFBob25lIGFuZCBpbiBpT1MuXFxuICovXFxuaHRtbCB7XFxuICBsaW5lLWhlaWdodDogMS4xNTtcXG4gIC8qIDEgKi9cXG4gIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcbiAgLyogMiAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcbiAgLyogMiAqL1xcbn1cXG4vKiBTZWN0aW9uc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICovXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDktLlxcbiAqL1xcbmFydGljbGUsXFxuYXNpZGUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLyoqXFxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcbiAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxuICovXFxuaDEge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW46IDAuNjdlbSAwO1xcbn1cXG4vKiBHcm91cGluZyBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSA5LS5cXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRS5cXG4gKi9cXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5tYWluIHtcXG4gIC8qIDEgKi9cXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgbWFyZ2luIGluIElFIDguXFxuICovXFxuZmlndXJlIHtcXG4gIG1hcmdpbjogMWVtIDQwcHg7XFxufVxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxuICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxuICovXFxuaHIge1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAvKiAxICovXFxuICBoZWlnaHQ6IDA7XFxuICAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gIC8qIDIgKi9cXG59XFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcXG4gIC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgLyogMiAqL1xcbn1cXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogMS4gUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAqIDIuIFJlbW92ZSBnYXBzIGluIGxpbmtzIHVuZGVybGluZSBpbiBpT1MgOCsgYW5kIFNhZmFyaSA4Ky5cXG4gKi9cXG5hIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgLyogMSAqL1xcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb24tc2tpcDogb2JqZWN0cztcXG4gIC8qIDIgKi9cXG59XFxuLyoqXFxuICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny0gYW5kIEZpcmVmb3ggMzktLlxcbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXFxuICovXFxuYWJiclt0aXRsZV0ge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gIC8qIDEgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgLyogMiAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcbiAgLyogMiAqL1xcbn1cXG4vKipcXG4gKiBQcmV2ZW50IHRoZSBkdXBsaWNhdGUgYXBwbGljYXRpb24gb2YgYGJvbGRlcmAgYnkgdGhlIG5leHQgcnVsZSBpbiBTYWZhcmkgNi5cXG4gKi9cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogaW5oZXJpdDtcXG59XFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5jb2RlLFxcbmtiZCxcXG5zYW1wIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcXG4gIC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgLyogMiAqL1xcbn1cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzdHlsZSBpbiBBbmRyb2lkIDQuMy0uXFxuICovXFxuZGZuIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGJhY2tncm91bmQgYW5kIGNvbG9yIGluIElFIDktLlxcbiAqL1xcbm1hcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuLyoqXFxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxuICogYWxsIGJyb3dzZXJzLlxcbiAqL1xcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtO1xcbn1cXG4vKiBFbWJlZGRlZCBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSA5LS5cXG4gKi9cXG5hdWRpbyxcXG52aWRlbyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGlPUyA0LTcuXFxuICovXFxuYXVkaW86bm90KFtjb250cm9sc10pIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBoZWlnaHQ6IDA7XFxufVxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAtLlxcbiAqL1xcbmltZyB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcbi8qKlxcbiAqIEhpZGUgdGhlIG92ZXJmbG93IGluIElFLlxcbiAqL1xcbnN2Zzpub3QoOnJvb3QpIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi8qIEZvcm1zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4gKi9cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7XFxuICAvKiAxICovXFxuICBtYXJnaW46IDA7XFxuICAvKiAyICovXFxufVxcbi8qKlxcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcbiAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxuICovXFxuYnV0dG9uLFxcbmlucHV0IHtcXG4gIC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cXG4gKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxuICovXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICAvKiAxICovXFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuLyoqXFxuICogMS4gUHJldmVudCBhIFdlYktpdCBidWcgd2hlcmUgKDIpIGRlc3Ryb3lzIG5hdGl2ZSBgYXVkaW9gIGFuZCBgdmlkZW9gXFxuICogICAgY29udHJvbHMgaW4gQW5kcm9pZCA0LlxcbiAqIDIuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICovXFxuYnV0dG9uLFxcbmh0bWwgW3R5cGU9XFxcImJ1dHRvblxcXCJdLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG4gIC8qIDIgKi9cXG59XFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG4vKipcXG4gKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxuICovXFxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06LW1vei1mb2N1c3Jpbmcge1xcbiAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbn1cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuZmllbGRzZXQge1xcbiAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xcbn1cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxcbiAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cXG4gKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XFxuICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxubGVnZW5kIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIC8qIDIgKi9cXG4gIGRpc3BsYXk6IHRhYmxlO1xcbiAgLyogMSAqL1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgLyogMSAqL1xcbiAgcGFkZGluZzogMDtcXG4gIC8qIDMgKi9cXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxuICAvKiAxICovXFxufVxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDktLlxcbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxuICovXFxucHJvZ3Jlc3Mge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgLyogMSAqL1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbiAgLyogMiAqL1xcbn1cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFLlxcbiAqL1xcbnRleHRhcmVhIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC0uXFxuICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLS5cXG4gKi9cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG5bdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLyogMSAqL1xcbiAgcGFkZGluZzogMDtcXG4gIC8qIDIgKi9cXG59XFxuLyoqXFxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcbiAqL1xcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4gKi9cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XFxuICAvKiAxICovXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDtcXG4gIC8qIDIgKi9cXG59XFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGFuZCBjYW5jZWwgYnV0dG9ucyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4gKi9cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICovXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG4gIC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICAvKiAyICovXFxufVxcbi8qIEludGVyYWN0aXZlXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDktLlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFLCBhbmQgRmlyZWZveC5cXG4gKi9cXG5kZXRhaWxzLFxcbm1lbnUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG4vKiBTY3JpcHRpbmdcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDktLlxcbiAqL1xcbmNhbnZhcyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFLlxcbiAqL1xcbnRlbXBsYXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi8qIEhpZGRlblxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAtLlxcbiAqL1xcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiLCBcIlwiXSk7XG5cbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTQtMSEuLi9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3Bvc3Rjc3MhLi9ub3JtYWxpemUuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNC0xIS4uL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cG9zdGNzcyEuL25vcm1hbGl6ZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTQtMSEuLi9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3Bvc3Rjc3MhLi9ub3JtYWxpemUuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHknO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmltcG9ydCBfdG9Db25zdW1hYmxlQXJyYXkgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5Jztcbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L3ByZWZlci1lczYtY2xhc3MgKi9cbi8qIGVzbGludC1kaXNhYmxlIHByZWZlci1wcm9taXNlLXJlamVjdC1lcnJvcnMgKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjcmVhdGVSZWFjdENsYXNzIGZyb20gJ2NyZWF0ZS1yZWFjdC1jbGFzcyc7XG5pbXBvcnQgdW5zYWZlTGlmZWN5Y2xlc1BvbHlmaWxsIGZyb20gJ3JjLXV0aWwvZXMvdW5zYWZlTGlmZWN5Y2xlc1BvbHlmaWxsJztcbmltcG9ydCBBc3luY1ZhbGlkYXRvciBmcm9tICdhc3luYy12YWxpZGF0b3InO1xuaW1wb3J0IHdhcm5pbmcgZnJvbSAnd2FybmluZyc7XG5pbXBvcnQgZ2V0IGZyb20gJ2xvZGFzaC9nZXQnO1xuaW1wb3J0IHNldCBmcm9tICdsb2Rhc2gvc2V0JztcbmltcG9ydCBlcSBmcm9tICdsb2Rhc2gvZXEnO1xuaW1wb3J0IGNyZWF0ZUZpZWxkc1N0b3JlIGZyb20gJy4vY3JlYXRlRmllbGRzU3RvcmUnO1xuaW1wb3J0IHsgYXJndW1lbnRDb250YWluZXIsIGlkZW50aXR5LCBub3JtYWxpemVWYWxpZGF0ZVJ1bGVzLCBnZXRWYWxpZGF0ZVRyaWdnZXJzLCBnZXRWYWx1ZUZyb21FdmVudCwgaGFzUnVsZXMsIGdldFBhcmFtcywgaXNFbXB0eU9iamVjdCwgZmxhdHRlbkFycmF5IH0gZnJvbSAnLi91dGlscyc7XG5cbnZhciBERUZBVUxUX1RSSUdHRVIgPSAnb25DaGFuZ2UnO1xuXG5mdW5jdGlvbiBjcmVhdGVCYXNlRm9ybSgpIHtcbiAgdmFyIG9wdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gIHZhciBtaXhpbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IFtdO1xuICB2YXIgdmFsaWRhdGVNZXNzYWdlcyA9IG9wdGlvbi52YWxpZGF0ZU1lc3NhZ2VzLFxuICAgICAgb25GaWVsZHNDaGFuZ2UgPSBvcHRpb24ub25GaWVsZHNDaGFuZ2UsXG4gICAgICBvblZhbHVlc0NoYW5nZSA9IG9wdGlvbi5vblZhbHVlc0NoYW5nZSxcbiAgICAgIF9vcHRpb24kbWFwUHJvcHMgPSBvcHRpb24ubWFwUHJvcHMsXG4gICAgICBtYXBQcm9wcyA9IF9vcHRpb24kbWFwUHJvcHMgPT09IHVuZGVmaW5lZCA/IGlkZW50aXR5IDogX29wdGlvbiRtYXBQcm9wcyxcbiAgICAgIG1hcFByb3BzVG9GaWVsZHMgPSBvcHRpb24ubWFwUHJvcHNUb0ZpZWxkcyxcbiAgICAgIGZpZWxkTmFtZVByb3AgPSBvcHRpb24uZmllbGROYW1lUHJvcCxcbiAgICAgIGZpZWxkTWV0YVByb3AgPSBvcHRpb24uZmllbGRNZXRhUHJvcCxcbiAgICAgIGZpZWxkRGF0YVByb3AgPSBvcHRpb24uZmllbGREYXRhUHJvcCxcbiAgICAgIF9vcHRpb24kZm9ybVByb3BOYW1lID0gb3B0aW9uLmZvcm1Qcm9wTmFtZSxcbiAgICAgIGZvcm1Qcm9wTmFtZSA9IF9vcHRpb24kZm9ybVByb3BOYW1lID09PSB1bmRlZmluZWQgPyAnZm9ybScgOiBfb3B0aW9uJGZvcm1Qcm9wTmFtZSxcbiAgICAgIGZvcm1OYW1lID0gb3B0aW9uLm5hbWUsXG4gICAgICB3aXRoUmVmID0gb3B0aW9uLndpdGhSZWY7XG5cblxuICByZXR1cm4gZnVuY3Rpb24gZGVjb3JhdGUoV3JhcHBlZENvbXBvbmVudCkge1xuICAgIHZhciBGb3JtID0gY3JlYXRlUmVhY3RDbGFzcyh7XG4gICAgICBkaXNwbGF5TmFtZTogJ0Zvcm0nLFxuXG4gICAgICBtaXhpbnM6IG1peGlucyxcblxuICAgICAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgdmFyIGZpZWxkcyA9IG1hcFByb3BzVG9GaWVsZHMgJiYgbWFwUHJvcHNUb0ZpZWxkcyh0aGlzLnByb3BzKTtcbiAgICAgICAgdGhpcy5maWVsZHNTdG9yZSA9IGNyZWF0ZUZpZWxkc1N0b3JlKGZpZWxkcyB8fCB7fSk7XG5cbiAgICAgICAgdGhpcy5pbnN0YW5jZXMgPSB7fTtcbiAgICAgICAgdGhpcy5jYWNoZWRCaW5kID0ge307XG4gICAgICAgIHRoaXMuY2xlYXJlZEZpZWxkTWV0YUNhY2hlID0ge307XG5cbiAgICAgICAgdGhpcy5yZW5kZXJGaWVsZHMgPSB7fTtcbiAgICAgICAgdGhpcy5kb21GaWVsZHMgPSB7fTtcblxuICAgICAgICAvLyBIQUNLOiBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL2lzc3Vlcy82NDA2XG4gICAgICAgIFsnZ2V0RmllbGRzVmFsdWUnLCAnZ2V0RmllbGRWYWx1ZScsICdzZXRGaWVsZHNJbml0aWFsVmFsdWUnLCAnZ2V0RmllbGRzRXJyb3InLCAnZ2V0RmllbGRFcnJvcicsICdpc0ZpZWxkVmFsaWRhdGluZycsICdpc0ZpZWxkc1ZhbGlkYXRpbmcnLCAnaXNGaWVsZHNUb3VjaGVkJywgJ2lzRmllbGRUb3VjaGVkJ10uZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgX3RoaXNba2V5XSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfZmllbGRzU3RvcmU7XG5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgIHdhcm5pbmcoZmFsc2UsICd5b3Ugc2hvdWxkIG5vdCB1c2UgYHJlZmAgb24gZW5oYW5jZWQgZm9ybSwgcGxlYXNlIHVzZSBgd3JhcHBlZENvbXBvbmVudFJlZmAuICcgKyAnU2VlOiBodHRwczovL2dpdGh1Yi5jb20vcmVhY3QtY29tcG9uZW50L2Zvcm0jbm90ZS11c2Utd3JhcHBlZGNvbXBvbmVudHJlZi1pbnN0ZWFkLW9mLXdpdGhyZWYtYWZ0ZXItcmMtZm9ybTE0MCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIChfZmllbGRzU3RvcmUgPSBfdGhpcy5maWVsZHNTdG9yZSlba2V5XS5hcHBseShfZmllbGRzU3RvcmUsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzdWJtaXR0aW5nOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5jbGVhblVwVXNlbGVzc0ZpZWxkcygpO1xuICAgICAgfSxcbiAgICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIGlmIChtYXBQcm9wc1RvRmllbGRzKSB7XG4gICAgICAgICAgdGhpcy5maWVsZHNTdG9yZS51cGRhdGVGaWVsZHMobWFwUHJvcHNUb0ZpZWxkcyhuZXh0UHJvcHMpKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGNvbXBvbmVudERpZFVwZGF0ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgICB0aGlzLmNsZWFuVXBVc2VsZXNzRmllbGRzKCk7XG4gICAgICB9LFxuICAgICAgb25Db2xsZWN0Q29tbW9uOiBmdW5jdGlvbiBvbkNvbGxlY3RDb21tb24obmFtZSwgYWN0aW9uLCBhcmdzKSB7XG4gICAgICAgIHZhciBmaWVsZE1ldGEgPSB0aGlzLmZpZWxkc1N0b3JlLmdldEZpZWxkTWV0YShuYW1lKTtcbiAgICAgICAgaWYgKGZpZWxkTWV0YVthY3Rpb25dKSB7XG4gICAgICAgICAgZmllbGRNZXRhW2FjdGlvbl0uYXBwbHkoZmllbGRNZXRhLCBfdG9Db25zdW1hYmxlQXJyYXkoYXJncykpO1xuICAgICAgICB9IGVsc2UgaWYgKGZpZWxkTWV0YS5vcmlnaW5hbFByb3BzICYmIGZpZWxkTWV0YS5vcmlnaW5hbFByb3BzW2FjdGlvbl0pIHtcbiAgICAgICAgICB2YXIgX2ZpZWxkTWV0YSRvcmlnaW5hbFByO1xuXG4gICAgICAgICAgKF9maWVsZE1ldGEkb3JpZ2luYWxQciA9IGZpZWxkTWV0YS5vcmlnaW5hbFByb3BzKVthY3Rpb25dLmFwcGx5KF9maWVsZE1ldGEkb3JpZ2luYWxQciwgX3RvQ29uc3VtYWJsZUFycmF5KGFyZ3MpKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWUgPSBmaWVsZE1ldGEuZ2V0VmFsdWVGcm9tRXZlbnQgPyBmaWVsZE1ldGEuZ2V0VmFsdWVGcm9tRXZlbnQuYXBwbHkoZmllbGRNZXRhLCBfdG9Db25zdW1hYmxlQXJyYXkoYXJncykpIDogZ2V0VmFsdWVGcm9tRXZlbnQuYXBwbHkodW5kZWZpbmVkLCBfdG9Db25zdW1hYmxlQXJyYXkoYXJncykpO1xuICAgICAgICBpZiAob25WYWx1ZXNDaGFuZ2UgJiYgdmFsdWUgIT09IHRoaXMuZmllbGRzU3RvcmUuZ2V0RmllbGRWYWx1ZShuYW1lKSkge1xuICAgICAgICAgIHZhciB2YWx1ZXNBbGwgPSB0aGlzLmZpZWxkc1N0b3JlLmdldEFsbFZhbHVlcygpO1xuICAgICAgICAgIHZhciB2YWx1ZXNBbGxTZXQgPSB7fTtcbiAgICAgICAgICB2YWx1ZXNBbGxbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgICBPYmplY3Qua2V5cyh2YWx1ZXNBbGwpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIHNldCh2YWx1ZXNBbGxTZXQsIGtleSwgdmFsdWVzQWxsW2tleV0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIG9uVmFsdWVzQ2hhbmdlKF9leHRlbmRzKF9kZWZpbmVQcm9wZXJ0eSh7fSwgZm9ybVByb3BOYW1lLCB0aGlzLmdldEZvcm0oKSksIHRoaXMucHJvcHMpLCBzZXQoe30sIG5hbWUsIHZhbHVlKSwgdmFsdWVzQWxsU2V0KTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZmllbGQgPSB0aGlzLmZpZWxkc1N0b3JlLmdldEZpZWxkKG5hbWUpO1xuICAgICAgICByZXR1cm4geyBuYW1lOiBuYW1lLCBmaWVsZDogX2V4dGVuZHMoe30sIGZpZWxkLCB7IHZhbHVlOiB2YWx1ZSwgdG91Y2hlZDogdHJ1ZSB9KSwgZmllbGRNZXRhOiBmaWVsZE1ldGEgfTtcbiAgICAgIH0sXG4gICAgICBvbkNvbGxlY3Q6IGZ1bmN0aW9uIG9uQ29sbGVjdChuYW1lXywgYWN0aW9uKSB7XG4gICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDIgPyBfbGVuIC0gMiA6IDApLCBfa2V5ID0gMjsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgIGFyZ3NbX2tleSAtIDJdID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIF9vbkNvbGxlY3RDb21tb24gPSB0aGlzLm9uQ29sbGVjdENvbW1vbihuYW1lXywgYWN0aW9uLCBhcmdzKSxcbiAgICAgICAgICAgIG5hbWUgPSBfb25Db2xsZWN0Q29tbW9uLm5hbWUsXG4gICAgICAgICAgICBmaWVsZCA9IF9vbkNvbGxlY3RDb21tb24uZmllbGQsXG4gICAgICAgICAgICBmaWVsZE1ldGEgPSBfb25Db2xsZWN0Q29tbW9uLmZpZWxkTWV0YTtcblxuICAgICAgICB2YXIgdmFsaWRhdGUgPSBmaWVsZE1ldGEudmFsaWRhdGU7XG5cblxuICAgICAgICB0aGlzLmZpZWxkc1N0b3JlLnNldEZpZWxkc0FzRGlydHkoKTtcblxuICAgICAgICB2YXIgbmV3RmllbGQgPSBfZXh0ZW5kcyh7fSwgZmllbGQsIHtcbiAgICAgICAgICBkaXJ0eTogaGFzUnVsZXModmFsaWRhdGUpXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNldEZpZWxkcyhfZGVmaW5lUHJvcGVydHkoe30sIG5hbWUsIG5ld0ZpZWxkKSk7XG4gICAgICB9LFxuICAgICAgb25Db2xsZWN0VmFsaWRhdGU6IGZ1bmN0aW9uIG9uQ29sbGVjdFZhbGlkYXRlKG5hbWVfLCBhY3Rpb24pIHtcbiAgICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIgPiAyID8gX2xlbjIgLSAyIDogMCksIF9rZXkyID0gMjsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICAgIGFyZ3NbX2tleTIgLSAyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgX29uQ29sbGVjdENvbW1vbjIgPSB0aGlzLm9uQ29sbGVjdENvbW1vbihuYW1lXywgYWN0aW9uLCBhcmdzKSxcbiAgICAgICAgICAgIGZpZWxkID0gX29uQ29sbGVjdENvbW1vbjIuZmllbGQsXG4gICAgICAgICAgICBmaWVsZE1ldGEgPSBfb25Db2xsZWN0Q29tbW9uMi5maWVsZE1ldGE7XG5cbiAgICAgICAgdmFyIG5ld0ZpZWxkID0gX2V4dGVuZHMoe30sIGZpZWxkLCB7XG4gICAgICAgICAgZGlydHk6IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5maWVsZHNTdG9yZS5zZXRGaWVsZHNBc0RpcnR5KCk7XG5cbiAgICAgICAgdGhpcy52YWxpZGF0ZUZpZWxkc0ludGVybmFsKFtuZXdGaWVsZF0sIHtcbiAgICAgICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBmaXJzdEZpZWxkczogISFmaWVsZE1ldGEudmFsaWRhdGVGaXJzdFxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgZ2V0Q2FjaGVCaW5kOiBmdW5jdGlvbiBnZXRDYWNoZUJpbmQobmFtZSwgYWN0aW9uLCBmbikge1xuICAgICAgICBpZiAoIXRoaXMuY2FjaGVkQmluZFtuYW1lXSkge1xuICAgICAgICAgIHRoaXMuY2FjaGVkQmluZFtuYW1lXSA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIHZhciBjYWNoZSA9IHRoaXMuY2FjaGVkQmluZFtuYW1lXTtcbiAgICAgICAgaWYgKCFjYWNoZVthY3Rpb25dIHx8IGNhY2hlW2FjdGlvbl0ub3JpRm4gIT09IGZuKSB7XG4gICAgICAgICAgY2FjaGVbYWN0aW9uXSA9IHtcbiAgICAgICAgICAgIGZuOiBmbi5iaW5kKHRoaXMsIG5hbWUsIGFjdGlvbiksXG4gICAgICAgICAgICBvcmlGbjogZm5cbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYWNoZVthY3Rpb25dLmZuO1xuICAgICAgfSxcbiAgICAgIGdldEZpZWxkRGVjb3JhdG9yOiBmdW5jdGlvbiBnZXRGaWVsZERlY29yYXRvcihuYW1lLCBmaWVsZE9wdGlvbikge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICB2YXIgcHJvcHMgPSB0aGlzLmdldEZpZWxkUHJvcHMobmFtZSwgZmllbGRPcHRpb24pO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGZpZWxkRWxlbSkge1xuICAgICAgICAgIC8vIFdlIHNob3VsZCBwdXQgZmllbGQgaW4gcmVjb3JkIGlmIGl0IGlzIHJlbmRlcmVkXG4gICAgICAgICAgX3RoaXMyLnJlbmRlckZpZWxkc1tuYW1lXSA9IHRydWU7XG5cbiAgICAgICAgICB2YXIgZmllbGRNZXRhID0gX3RoaXMyLmZpZWxkc1N0b3JlLmdldEZpZWxkTWV0YShuYW1lKTtcbiAgICAgICAgICB2YXIgb3JpZ2luYWxQcm9wcyA9IGZpZWxkRWxlbS5wcm9wcztcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgdmFyIHZhbHVlUHJvcE5hbWUgPSBmaWVsZE1ldGEudmFsdWVQcm9wTmFtZTtcbiAgICAgICAgICAgIHdhcm5pbmcoISh2YWx1ZVByb3BOYW1lIGluIG9yaWdpbmFsUHJvcHMpLCAnYGdldEZpZWxkRGVjb3JhdG9yYCB3aWxsIG92ZXJyaWRlIGAnICsgdmFsdWVQcm9wTmFtZSArICdgLCAnICsgKCdzbyBwbGVhc2UgZG9uXFwndCBzZXQgYCcgKyB2YWx1ZVByb3BOYW1lICsgJ2AgZGlyZWN0bHkgJykgKyAnYW5kIHVzZSBgc2V0RmllbGRzVmFsdWVgIHRvIHNldCBpdC4nKTtcbiAgICAgICAgICAgIHZhciBkZWZhdWx0VmFsdWVQcm9wTmFtZSA9ICdkZWZhdWx0JyArIHZhbHVlUHJvcE5hbWVbMF0udG9VcHBlckNhc2UoKSArIHZhbHVlUHJvcE5hbWUuc2xpY2UoMSk7XG4gICAgICAgICAgICB3YXJuaW5nKCEoZGVmYXVsdFZhbHVlUHJvcE5hbWUgaW4gb3JpZ2luYWxQcm9wcyksICdgJyArIGRlZmF1bHRWYWx1ZVByb3BOYW1lICsgJ2AgaXMgaW52YWxpZCAnICsgKCdmb3IgYGdldEZpZWxkRGVjb3JhdG9yYCB3aWxsIHNldCBgJyArIHZhbHVlUHJvcE5hbWUgKyAnYCwnKSArICcgcGxlYXNlIHVzZSBgb3B0aW9uLmluaXRpYWxWYWx1ZWAgaW5zdGVhZC4nKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZmllbGRNZXRhLm9yaWdpbmFsUHJvcHMgPSBvcmlnaW5hbFByb3BzO1xuICAgICAgICAgIGZpZWxkTWV0YS5yZWYgPSBmaWVsZEVsZW0ucmVmO1xuICAgICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoZmllbGRFbGVtLCBfZXh0ZW5kcyh7fSwgcHJvcHMsIF90aGlzMi5maWVsZHNTdG9yZS5nZXRGaWVsZFZhbHVlUHJvcFZhbHVlKGZpZWxkTWV0YSkpKTtcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICBnZXRGaWVsZFByb3BzOiBmdW5jdGlvbiBnZXRGaWVsZFByb3BzKG5hbWUpIHtcbiAgICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgICAgdmFyIHVzZXJzRmllbGRPcHRpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gICAgICAgIGlmICghbmFtZSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTXVzdCBjYWxsIGBnZXRGaWVsZFByb3BzYCB3aXRoIHZhbGlkIG5hbWUgc3RyaW5nIScpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgd2FybmluZyh0aGlzLmZpZWxkc1N0b3JlLmlzVmFsaWROZXN0ZWRGaWVsZE5hbWUobmFtZSksICdPbmUgZmllbGQgbmFtZSBjYW5ub3QgYmUgcGFydCBvZiBhbm90aGVyLCBlLmcuIGBhYCBhbmQgYGEuYmAuIENoZWNrIGZpZWxkOiAnICsgbmFtZSk7XG4gICAgICAgICAgd2FybmluZyghKCdleGNsdXNpdmUnIGluIHVzZXJzRmllbGRPcHRpb24pLCAnYG9wdGlvbi5leGNsdXNpdmVgIG9mIGBnZXRGaWVsZFByb3BzYHxgZ2V0RmllbGREZWNvcmF0b3JgIGhhZCBiZWVuIHJlbW92ZS4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlbGV0ZSB0aGlzLmNsZWFyZWRGaWVsZE1ldGFDYWNoZVtuYW1lXTtcblxuICAgICAgICB2YXIgZmllbGRPcHRpb24gPSBfZXh0ZW5kcyh7XG4gICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICB0cmlnZ2VyOiBERUZBVUxUX1RSSUdHRVIsXG4gICAgICAgICAgdmFsdWVQcm9wTmFtZTogJ3ZhbHVlJyxcbiAgICAgICAgICB2YWxpZGF0ZTogW11cbiAgICAgICAgfSwgdXNlcnNGaWVsZE9wdGlvbik7XG5cbiAgICAgICAgdmFyIHJ1bGVzID0gZmllbGRPcHRpb24ucnVsZXMsXG4gICAgICAgICAgICB0cmlnZ2VyID0gZmllbGRPcHRpb24udHJpZ2dlcixcbiAgICAgICAgICAgIF9maWVsZE9wdGlvbiR2YWxpZGF0ZSA9IGZpZWxkT3B0aW9uLnZhbGlkYXRlVHJpZ2dlcixcbiAgICAgICAgICAgIHZhbGlkYXRlVHJpZ2dlciA9IF9maWVsZE9wdGlvbiR2YWxpZGF0ZSA9PT0gdW5kZWZpbmVkID8gdHJpZ2dlciA6IF9maWVsZE9wdGlvbiR2YWxpZGF0ZSxcbiAgICAgICAgICAgIHZhbGlkYXRlID0gZmllbGRPcHRpb24udmFsaWRhdGU7XG5cblxuICAgICAgICB2YXIgZmllbGRNZXRhID0gdGhpcy5maWVsZHNTdG9yZS5nZXRGaWVsZE1ldGEobmFtZSk7XG4gICAgICAgIGlmICgnaW5pdGlhbFZhbHVlJyBpbiBmaWVsZE9wdGlvbikge1xuICAgICAgICAgIGZpZWxkTWV0YS5pbml0aWFsVmFsdWUgPSBmaWVsZE9wdGlvbi5pbml0aWFsVmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaW5wdXRQcm9wcyA9IF9leHRlbmRzKHt9LCB0aGlzLmZpZWxkc1N0b3JlLmdldEZpZWxkVmFsdWVQcm9wVmFsdWUoZmllbGRPcHRpb24pLCB7XG4gICAgICAgICAgcmVmOiB0aGlzLmdldENhY2hlQmluZChuYW1lLCBuYW1lICsgJ19fcmVmJywgdGhpcy5zYXZlUmVmKVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGZpZWxkTmFtZVByb3ApIHtcbiAgICAgICAgICBpbnB1dFByb3BzW2ZpZWxkTmFtZVByb3BdID0gZm9ybU5hbWUgPyBmb3JtTmFtZSArICdfJyArIG5hbWUgOiBuYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHZhbGlkYXRlUnVsZXMgPSBub3JtYWxpemVWYWxpZGF0ZVJ1bGVzKHZhbGlkYXRlLCBydWxlcywgdmFsaWRhdGVUcmlnZ2VyKTtcbiAgICAgICAgdmFyIHZhbGlkYXRlVHJpZ2dlcnMgPSBnZXRWYWxpZGF0ZVRyaWdnZXJzKHZhbGlkYXRlUnVsZXMpO1xuICAgICAgICB2YWxpZGF0ZVRyaWdnZXJzLmZvckVhY2goZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICAgIGlmIChpbnB1dFByb3BzW2FjdGlvbl0pIHJldHVybjtcbiAgICAgICAgICBpbnB1dFByb3BzW2FjdGlvbl0gPSBfdGhpczMuZ2V0Q2FjaGVCaW5kKG5hbWUsIGFjdGlvbiwgX3RoaXMzLm9uQ29sbGVjdFZhbGlkYXRlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gbWFrZSBzdXJlIHRoYXQgdGhlIHZhbHVlIHdpbGwgYmUgY29sbGVjdFxuICAgICAgICBpZiAodHJpZ2dlciAmJiB2YWxpZGF0ZVRyaWdnZXJzLmluZGV4T2YodHJpZ2dlcikgPT09IC0xKSB7XG4gICAgICAgICAgaW5wdXRQcm9wc1t0cmlnZ2VyXSA9IHRoaXMuZ2V0Q2FjaGVCaW5kKG5hbWUsIHRyaWdnZXIsIHRoaXMub25Db2xsZWN0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBtZXRhID0gX2V4dGVuZHMoe30sIGZpZWxkTWV0YSwgZmllbGRPcHRpb24sIHtcbiAgICAgICAgICB2YWxpZGF0ZTogdmFsaWRhdGVSdWxlc1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5maWVsZHNTdG9yZS5zZXRGaWVsZE1ldGEobmFtZSwgbWV0YSk7XG4gICAgICAgIGlmIChmaWVsZE1ldGFQcm9wKSB7XG4gICAgICAgICAgaW5wdXRQcm9wc1tmaWVsZE1ldGFQcm9wXSA9IG1ldGE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZmllbGREYXRhUHJvcCkge1xuICAgICAgICAgIGlucHV0UHJvcHNbZmllbGREYXRhUHJvcF0gPSB0aGlzLmZpZWxkc1N0b3JlLmdldEZpZWxkKG5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGhpcyBmaWVsZCBpcyByZW5kZXJlZCwgcmVjb3JkIGl0XG4gICAgICAgIHRoaXMucmVuZGVyRmllbGRzW25hbWVdID0gdHJ1ZTtcblxuICAgICAgICByZXR1cm4gaW5wdXRQcm9wcztcbiAgICAgIH0sXG4gICAgICBnZXRGaWVsZEluc3RhbmNlOiBmdW5jdGlvbiBnZXRGaWVsZEluc3RhbmNlKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VzW25hbWVdO1xuICAgICAgfSxcbiAgICAgIGdldFJ1bGVzOiBmdW5jdGlvbiBnZXRSdWxlcyhmaWVsZE1ldGEsIGFjdGlvbikge1xuICAgICAgICB2YXIgYWN0aW9uUnVsZXMgPSBmaWVsZE1ldGEudmFsaWRhdGUuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgcmV0dXJuICFhY3Rpb24gfHwgaXRlbS50cmlnZ2VyLmluZGV4T2YoYWN0aW9uKSA+PSAwO1xuICAgICAgICB9KS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICByZXR1cm4gaXRlbS5ydWxlcztcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBmbGF0dGVuQXJyYXkoYWN0aW9uUnVsZXMpO1xuICAgICAgfSxcbiAgICAgIHNldEZpZWxkczogZnVuY3Rpb24gc2V0RmllbGRzKG1heWJlTmVzdGVkRmllbGRzLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgICB2YXIgZmllbGRzID0gdGhpcy5maWVsZHNTdG9yZS5mbGF0dGVuUmVnaXN0ZXJlZEZpZWxkcyhtYXliZU5lc3RlZEZpZWxkcyk7XG4gICAgICAgIHRoaXMuZmllbGRzU3RvcmUuc2V0RmllbGRzKGZpZWxkcyk7XG4gICAgICAgIGlmIChvbkZpZWxkc0NoYW5nZSkge1xuICAgICAgICAgIHZhciBjaGFuZ2VkRmllbGRzID0gT2JqZWN0LmtleXMoZmllbGRzKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgbmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHNldChhY2MsIG5hbWUsIF90aGlzNC5maWVsZHNTdG9yZS5nZXRGaWVsZChuYW1lKSk7XG4gICAgICAgICAgfSwge30pO1xuICAgICAgICAgIG9uRmllbGRzQ2hhbmdlKF9leHRlbmRzKF9kZWZpbmVQcm9wZXJ0eSh7fSwgZm9ybVByb3BOYW1lLCB0aGlzLmdldEZvcm0oKSksIHRoaXMucHJvcHMpLCBjaGFuZ2VkRmllbGRzLCB0aGlzLmZpZWxkc1N0b3JlLmdldE5lc3RlZEFsbEZpZWxkcygpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKGNhbGxiYWNrKTtcbiAgICAgIH0sXG4gICAgICBzZXRGaWVsZHNWYWx1ZTogZnVuY3Rpb24gc2V0RmllbGRzVmFsdWUoY2hhbmdlZFZhbHVlcywgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIGZpZWxkc01ldGEgPSB0aGlzLmZpZWxkc1N0b3JlLmZpZWxkc01ldGE7XG5cbiAgICAgICAgdmFyIHZhbHVlcyA9IHRoaXMuZmllbGRzU3RvcmUuZmxhdHRlblJlZ2lzdGVyZWRGaWVsZHMoY2hhbmdlZFZhbHVlcyk7XG4gICAgICAgIHZhciBuZXdGaWVsZHMgPSBPYmplY3Qua2V5cyh2YWx1ZXMpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBuYW1lKSB7XG4gICAgICAgICAgdmFyIGlzUmVnaXN0ZXJlZCA9IGZpZWxkc01ldGFbbmFtZV07XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHdhcm5pbmcoaXNSZWdpc3RlcmVkLCAnQ2Fubm90IHVzZSBgc2V0RmllbGRzVmFsdWVgIHVudGlsICcgKyAneW91IHVzZSBgZ2V0RmllbGREZWNvcmF0b3JgIG9yIGBnZXRGaWVsZFByb3BzYCB0byByZWdpc3RlciBpdC4nKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGlzUmVnaXN0ZXJlZCkge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdmFsdWVzW25hbWVdO1xuICAgICAgICAgICAgYWNjW25hbWVdID0ge1xuICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgIH0sIHt9KTtcbiAgICAgICAgdGhpcy5zZXRGaWVsZHMobmV3RmllbGRzLCBjYWxsYmFjayk7XG4gICAgICAgIGlmIChvblZhbHVlc0NoYW5nZSkge1xuICAgICAgICAgIHZhciBhbGxWYWx1ZXMgPSB0aGlzLmZpZWxkc1N0b3JlLmdldEFsbFZhbHVlcygpO1xuICAgICAgICAgIG9uVmFsdWVzQ2hhbmdlKF9leHRlbmRzKF9kZWZpbmVQcm9wZXJ0eSh7fSwgZm9ybVByb3BOYW1lLCB0aGlzLmdldEZvcm0oKSksIHRoaXMucHJvcHMpLCBjaGFuZ2VkVmFsdWVzLCBhbGxWYWx1ZXMpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc2F2ZVJlZjogZnVuY3Rpb24gc2F2ZVJlZihuYW1lLCBfLCBjb21wb25lbnQpIHtcbiAgICAgICAgaWYgKCFjb21wb25lbnQpIHtcbiAgICAgICAgICB2YXIgX2ZpZWxkTWV0YSA9IHRoaXMuZmllbGRzU3RvcmUuZ2V0RmllbGRNZXRhKG5hbWUpO1xuICAgICAgICAgIGlmICghX2ZpZWxkTWV0YS5wcmVzZXJ2ZSkge1xuICAgICAgICAgICAgLy8gYWZ0ZXIgZGVzdHJveSwgZGVsZXRlIGRhdGFcbiAgICAgICAgICAgIHRoaXMuY2xlYXJlZEZpZWxkTWV0YUNhY2hlW25hbWVdID0ge1xuICAgICAgICAgICAgICBmaWVsZDogdGhpcy5maWVsZHNTdG9yZS5nZXRGaWVsZChuYW1lKSxcbiAgICAgICAgICAgICAgbWV0YTogX2ZpZWxkTWV0YVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJGaWVsZChuYW1lKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZGVsZXRlIHRoaXMuZG9tRmllbGRzW25hbWVdO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRvbUZpZWxkc1tuYW1lXSA9IHRydWU7XG4gICAgICAgIHRoaXMucmVjb3ZlckNsZWFyZWRGaWVsZChuYW1lKTtcbiAgICAgICAgdmFyIGZpZWxkTWV0YSA9IHRoaXMuZmllbGRzU3RvcmUuZ2V0RmllbGRNZXRhKG5hbWUpO1xuICAgICAgICBpZiAoZmllbGRNZXRhKSB7XG4gICAgICAgICAgdmFyIHJlZiA9IGZpZWxkTWV0YS5yZWY7XG4gICAgICAgICAgaWYgKHJlZikge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiByZWYgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY2FuIG5vdCBzZXQgcmVmIHN0cmluZyBmb3IgJyArIG5hbWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcmVmID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgIHJlZihjb21wb25lbnQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocmVmLCAnY3VycmVudCcpKSB7XG4gICAgICAgICAgICAgIHJlZi5jdXJyZW50ID0gY29tcG9uZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluc3RhbmNlc1tuYW1lXSA9IGNvbXBvbmVudDtcbiAgICAgIH0sXG4gICAgICBjbGVhblVwVXNlbGVzc0ZpZWxkczogZnVuY3Rpb24gY2xlYW5VcFVzZWxlc3NGaWVsZHMoKSB7XG4gICAgICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gICAgICAgIHZhciBmaWVsZExpc3QgPSB0aGlzLmZpZWxkc1N0b3JlLmdldEFsbEZpZWxkc05hbWUoKTtcbiAgICAgICAgdmFyIHJlbW92ZWRMaXN0ID0gZmllbGRMaXN0LmZpbHRlcihmdW5jdGlvbiAoZmllbGQpIHtcbiAgICAgICAgICB2YXIgZmllbGRNZXRhID0gX3RoaXM1LmZpZWxkc1N0b3JlLmdldEZpZWxkTWV0YShmaWVsZCk7XG4gICAgICAgICAgcmV0dXJuICFfdGhpczUucmVuZGVyRmllbGRzW2ZpZWxkXSAmJiAhX3RoaXM1LmRvbUZpZWxkc1tmaWVsZF0gJiYgIWZpZWxkTWV0YS5wcmVzZXJ2ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChyZW1vdmVkTGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICByZW1vdmVkTGlzdC5mb3JFYWNoKHRoaXMuY2xlYXJGaWVsZCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW5kZXJGaWVsZHMgPSB7fTtcbiAgICAgIH0sXG4gICAgICBjbGVhckZpZWxkOiBmdW5jdGlvbiBjbGVhckZpZWxkKG5hbWUpIHtcbiAgICAgICAgdGhpcy5maWVsZHNTdG9yZS5jbGVhckZpZWxkKG5hbWUpO1xuICAgICAgICBkZWxldGUgdGhpcy5pbnN0YW5jZXNbbmFtZV07XG4gICAgICAgIGRlbGV0ZSB0aGlzLmNhY2hlZEJpbmRbbmFtZV07XG4gICAgICB9LFxuICAgICAgcmVzZXRGaWVsZHM6IGZ1bmN0aW9uIHJlc2V0RmllbGRzKG5zKSB7XG4gICAgICAgIHZhciBfdGhpczYgPSB0aGlzO1xuXG4gICAgICAgIHZhciBuZXdGaWVsZHMgPSB0aGlzLmZpZWxkc1N0b3JlLnJlc2V0RmllbGRzKG5zKTtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKG5ld0ZpZWxkcykubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHRoaXMuc2V0RmllbGRzKG5ld0ZpZWxkcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5zKSB7XG4gICAgICAgICAgdmFyIG5hbWVzID0gQXJyYXkuaXNBcnJheShucykgPyBucyA6IFtuc107XG4gICAgICAgICAgbmFtZXMuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIGRlbGV0ZSBfdGhpczYuY2xlYXJlZEZpZWxkTWV0YUNhY2hlW25hbWVdO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY2xlYXJlZEZpZWxkTWV0YUNhY2hlID0ge307XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICByZWNvdmVyQ2xlYXJlZEZpZWxkOiBmdW5jdGlvbiByZWNvdmVyQ2xlYXJlZEZpZWxkKG5hbWUpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xlYXJlZEZpZWxkTWV0YUNhY2hlW25hbWVdKSB7XG4gICAgICAgICAgdGhpcy5maWVsZHNTdG9yZS5zZXRGaWVsZHMoX2RlZmluZVByb3BlcnR5KHt9LCBuYW1lLCB0aGlzLmNsZWFyZWRGaWVsZE1ldGFDYWNoZVtuYW1lXS5maWVsZCkpO1xuICAgICAgICAgIHRoaXMuZmllbGRzU3RvcmUuc2V0RmllbGRNZXRhKG5hbWUsIHRoaXMuY2xlYXJlZEZpZWxkTWV0YUNhY2hlW25hbWVdLm1ldGEpO1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLmNsZWFyZWRGaWVsZE1ldGFDYWNoZVtuYW1lXTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHZhbGlkYXRlRmllbGRzSW50ZXJuYWw6IGZ1bmN0aW9uIHZhbGlkYXRlRmllbGRzSW50ZXJuYWwoZmllbGRzLCBfcmVmLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgX3RoaXM3ID0gdGhpcztcblxuICAgICAgICB2YXIgZmllbGROYW1lcyA9IF9yZWYuZmllbGROYW1lcyxcbiAgICAgICAgICAgIGFjdGlvbiA9IF9yZWYuYWN0aW9uLFxuICAgICAgICAgICAgX3JlZiRvcHRpb25zID0gX3JlZi5vcHRpb25zLFxuICAgICAgICAgICAgb3B0aW9ucyA9IF9yZWYkb3B0aW9ucyA9PT0gdW5kZWZpbmVkID8ge30gOiBfcmVmJG9wdGlvbnM7XG5cbiAgICAgICAgdmFyIGFsbFJ1bGVzID0ge307XG4gICAgICAgIHZhciBhbGxWYWx1ZXMgPSB7fTtcbiAgICAgICAgdmFyIGFsbEZpZWxkcyA9IHt9O1xuICAgICAgICB2YXIgYWxyZWFkeUVycm9ycyA9IHt9O1xuICAgICAgICBmaWVsZHMuZm9yRWFjaChmdW5jdGlvbiAoZmllbGQpIHtcbiAgICAgICAgICB2YXIgbmFtZSA9IGZpZWxkLm5hbWU7XG4gICAgICAgICAgaWYgKG9wdGlvbnMuZm9yY2UgIT09IHRydWUgJiYgZmllbGQuZGlydHkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBpZiAoZmllbGQuZXJyb3JzKSB7XG4gICAgICAgICAgICAgIHNldChhbHJlYWR5RXJyb3JzLCBuYW1lLCB7IGVycm9yczogZmllbGQuZXJyb3JzIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgZmllbGRNZXRhID0gX3RoaXM3LmZpZWxkc1N0b3JlLmdldEZpZWxkTWV0YShuYW1lKTtcbiAgICAgICAgICB2YXIgbmV3RmllbGQgPSBfZXh0ZW5kcyh7fSwgZmllbGQpO1xuICAgICAgICAgIG5ld0ZpZWxkLmVycm9ycyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXdGaWVsZC52YWxpZGF0aW5nID0gdHJ1ZTtcbiAgICAgICAgICBuZXdGaWVsZC5kaXJ0eSA9IHRydWU7XG4gICAgICAgICAgYWxsUnVsZXNbbmFtZV0gPSBfdGhpczcuZ2V0UnVsZXMoZmllbGRNZXRhLCBhY3Rpb24pO1xuICAgICAgICAgIGFsbFZhbHVlc1tuYW1lXSA9IG5ld0ZpZWxkLnZhbHVlO1xuICAgICAgICAgIGFsbEZpZWxkc1tuYW1lXSA9IG5ld0ZpZWxkO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXRGaWVsZHMoYWxsRmllbGRzKTtcbiAgICAgICAgLy8gaW4gY2FzZSBub3JtYWxpemVcbiAgICAgICAgT2JqZWN0LmtleXMoYWxsVmFsdWVzKS5mb3JFYWNoKGZ1bmN0aW9uIChmKSB7XG4gICAgICAgICAgYWxsVmFsdWVzW2ZdID0gX3RoaXM3LmZpZWxkc1N0b3JlLmdldEZpZWxkVmFsdWUoZik7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoY2FsbGJhY2sgJiYgaXNFbXB0eU9iamVjdChhbGxGaWVsZHMpKSB7XG4gICAgICAgICAgY2FsbGJhY2soaXNFbXB0eU9iamVjdChhbHJlYWR5RXJyb3JzKSA/IG51bGwgOiBhbHJlYWR5RXJyb3JzLCB0aGlzLmZpZWxkc1N0b3JlLmdldEZpZWxkc1ZhbHVlKGZpZWxkTmFtZXMpKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZhbGlkYXRvciA9IG5ldyBBc3luY1ZhbGlkYXRvcihhbGxSdWxlcyk7XG4gICAgICAgIGlmICh2YWxpZGF0ZU1lc3NhZ2VzKSB7XG4gICAgICAgICAgdmFsaWRhdG9yLm1lc3NhZ2VzKHZhbGlkYXRlTWVzc2FnZXMpO1xuICAgICAgICB9XG4gICAgICAgIHZhbGlkYXRvci52YWxpZGF0ZShhbGxWYWx1ZXMsIG9wdGlvbnMsIGZ1bmN0aW9uIChlcnJvcnMpIHtcbiAgICAgICAgICB2YXIgZXJyb3JzR3JvdXAgPSBfZXh0ZW5kcyh7fSwgYWxyZWFkeUVycm9ycyk7XG4gICAgICAgICAgaWYgKGVycm9ycyAmJiBlcnJvcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICBlcnJvcnMuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICB2YXIgZXJyb3JGaWVsZE5hbWUgPSBlLmZpZWxkO1xuICAgICAgICAgICAgICB2YXIgZmllbGROYW1lID0gZXJyb3JGaWVsZE5hbWU7XG5cbiAgICAgICAgICAgICAgLy8gSGFuZGxlIHVzaW5nIGFycmF5IHZhbGlkYXRpb24gcnVsZS5cbiAgICAgICAgICAgICAgLy8gcmVmOiBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL2lzc3Vlcy8xNDI3NVxuICAgICAgICAgICAgICBPYmplY3Qua2V5cyhhbGxSdWxlcykuc29tZShmdW5jdGlvbiAocnVsZUZpZWxkTmFtZSkge1xuICAgICAgICAgICAgICAgIHZhciBydWxlcyA9IGFsbFJ1bGVzW3J1bGVGaWVsZE5hbWVdIHx8IFtdO1xuXG4gICAgICAgICAgICAgICAgLy8gRXhpc3QgaWYgbWF0Y2ggcnVsZVxuICAgICAgICAgICAgICAgIGlmIChydWxlRmllbGROYW1lID09PSBlcnJvckZpZWxkTmFtZSkge1xuICAgICAgICAgICAgICAgICAgZmllbGROYW1lID0gcnVsZUZpZWxkTmFtZTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFNraXAgaWYgbm90IG1hdGNoIGFycmF5IHR5cGVcbiAgICAgICAgICAgICAgICBpZiAocnVsZXMuZXZlcnkoZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgdHlwZSA9IF9yZWYyLnR5cGU7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdHlwZSAhPT0gJ2FycmF5JztcbiAgICAgICAgICAgICAgICB9KSB8fCBlcnJvckZpZWxkTmFtZS5pbmRleE9mKHJ1bGVGaWVsZE5hbWUgKyAnLicpICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gRXhpc3QgaWYgbWF0Y2ggdGhlIGZpZWxkIG5hbWVcbiAgICAgICAgICAgICAgICB2YXIgcmVzdFBhdGggPSBlcnJvckZpZWxkTmFtZS5zbGljZShydWxlRmllbGROYW1lLmxlbmd0aCArIDEpO1xuICAgICAgICAgICAgICAgIGlmICgvXlxcZCskLy50ZXN0KHJlc3RQYXRoKSkge1xuICAgICAgICAgICAgICAgICAgZmllbGROYW1lID0gcnVsZUZpZWxkTmFtZTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgdmFyIGZpZWxkID0gZ2V0KGVycm9yc0dyb3VwLCBmaWVsZE5hbWUpO1xuICAgICAgICAgICAgICBpZiAodHlwZW9mIGZpZWxkICE9PSAnb2JqZWN0JyB8fCBBcnJheS5pc0FycmF5KGZpZWxkKSkge1xuICAgICAgICAgICAgICAgIHNldChlcnJvcnNHcm91cCwgZmllbGROYW1lLCB7IGVycm9yczogW10gfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdmFyIGZpZWxkRXJyb3JzID0gZ2V0KGVycm9yc0dyb3VwLCBmaWVsZE5hbWUuY29uY2F0KCcuZXJyb3JzJykpO1xuICAgICAgICAgICAgICBmaWVsZEVycm9ycy5wdXNoKGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBleHBpcmVkID0gW107XG4gICAgICAgICAgdmFyIG5vd0FsbEZpZWxkcyA9IHt9O1xuICAgICAgICAgIE9iamVjdC5rZXlzKGFsbFJ1bGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICB2YXIgZmllbGRFcnJvcnMgPSBnZXQoZXJyb3JzR3JvdXAsIG5hbWUpO1xuICAgICAgICAgICAgdmFyIG5vd0ZpZWxkID0gX3RoaXM3LmZpZWxkc1N0b3JlLmdldEZpZWxkKG5hbWUpO1xuICAgICAgICAgICAgLy8gYXZvaWQgY29uY3VycmVuY3kgcHJvYmxlbXNcbiAgICAgICAgICAgIGlmICghZXEobm93RmllbGQudmFsdWUsIGFsbFZhbHVlc1tuYW1lXSkpIHtcbiAgICAgICAgICAgICAgZXhwaXJlZC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbm93RmllbGQuZXJyb3JzID0gZmllbGRFcnJvcnMgJiYgZmllbGRFcnJvcnMuZXJyb3JzO1xuICAgICAgICAgICAgICBub3dGaWVsZC52YWx1ZSA9IGFsbFZhbHVlc1tuYW1lXTtcbiAgICAgICAgICAgICAgbm93RmllbGQudmFsaWRhdGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICBub3dGaWVsZC5kaXJ0eSA9IGZhbHNlO1xuICAgICAgICAgICAgICBub3dBbGxGaWVsZHNbbmFtZV0gPSBub3dGaWVsZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBfdGhpczcuc2V0RmllbGRzKG5vd0FsbEZpZWxkcyk7XG4gICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBpZiAoZXhwaXJlZC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgZXhwaXJlZC5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmMykge1xuICAgICAgICAgICAgICAgIHZhciBuYW1lID0gX3JlZjMubmFtZTtcblxuICAgICAgICAgICAgICAgIHZhciBmaWVsZEVycm9ycyA9IFt7XG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiBuYW1lICsgJyBuZWVkIHRvIHJldmFsaWRhdGUnLFxuICAgICAgICAgICAgICAgICAgZmllbGQ6IG5hbWVcbiAgICAgICAgICAgICAgICB9XTtcbiAgICAgICAgICAgICAgICBzZXQoZXJyb3JzR3JvdXAsIG5hbWUsIHtcbiAgICAgICAgICAgICAgICAgIGV4cGlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICBlcnJvcnM6IGZpZWxkRXJyb3JzXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYWxsYmFjayhpc0VtcHR5T2JqZWN0KGVycm9yc0dyb3VwKSA/IG51bGwgOiBlcnJvcnNHcm91cCwgX3RoaXM3LmZpZWxkc1N0b3JlLmdldEZpZWxkc1ZhbHVlKGZpZWxkTmFtZXMpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIHZhbGlkYXRlRmllbGRzOiBmdW5jdGlvbiB2YWxpZGF0ZUZpZWxkcyhucywgb3B0LCBjYikge1xuICAgICAgICB2YXIgX3RoaXM4ID0gdGhpcztcblxuICAgICAgICB2YXIgcGVuZGluZyA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICB2YXIgX2dldFBhcmFtcyA9IGdldFBhcmFtcyhucywgb3B0LCBjYiksXG4gICAgICAgICAgICAgIG5hbWVzID0gX2dldFBhcmFtcy5uYW1lcyxcbiAgICAgICAgICAgICAgb3B0aW9ucyA9IF9nZXRQYXJhbXMub3B0aW9ucztcblxuICAgICAgICAgIHZhciBfZ2V0UGFyYW1zMiA9IGdldFBhcmFtcyhucywgb3B0LCBjYiksXG4gICAgICAgICAgICAgIGNhbGxiYWNrID0gX2dldFBhcmFtczIuY2FsbGJhY2s7XG5cbiAgICAgICAgICBpZiAoIWNhbGxiYWNrIHx8IHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFyIG9sZENiID0gY2FsbGJhY2s7XG4gICAgICAgICAgICBjYWxsYmFjayA9IGZ1bmN0aW9uIGNhbGxiYWNrKGVycm9ycywgdmFsdWVzKSB7XG4gICAgICAgICAgICAgIGlmIChvbGRDYikge1xuICAgICAgICAgICAgICAgIG9sZENiKGVycm9ycywgdmFsdWVzKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoZXJyb3JzKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KHsgZXJyb3JzOiBlcnJvcnMsIHZhbHVlczogdmFsdWVzIH0pO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc29sdmUodmFsdWVzKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIGZpZWxkTmFtZXMgPSBuYW1lcyA/IF90aGlzOC5maWVsZHNTdG9yZS5nZXRWYWxpZEZpZWxkc0Z1bGxOYW1lKG5hbWVzKSA6IF90aGlzOC5maWVsZHNTdG9yZS5nZXRWYWxpZEZpZWxkc05hbWUoKTtcbiAgICAgICAgICB2YXIgZmllbGRzID0gZmllbGROYW1lcy5maWx0ZXIoZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIHZhciBmaWVsZE1ldGEgPSBfdGhpczguZmllbGRzU3RvcmUuZ2V0RmllbGRNZXRhKG5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuIGhhc1J1bGVzKGZpZWxkTWV0YS52YWxpZGF0ZSk7XG4gICAgICAgICAgfSkubWFwKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICB2YXIgZmllbGQgPSBfdGhpczguZmllbGRzU3RvcmUuZ2V0RmllbGQobmFtZSk7XG4gICAgICAgICAgICBmaWVsZC52YWx1ZSA9IF90aGlzOC5maWVsZHNTdG9yZS5nZXRGaWVsZFZhbHVlKG5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuIGZpZWxkO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmICghZmllbGRzLmxlbmd0aCkge1xuICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgX3RoaXM4LmZpZWxkc1N0b3JlLmdldEZpZWxkc1ZhbHVlKGZpZWxkTmFtZXMpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCEoJ2ZpcnN0RmllbGRzJyBpbiBvcHRpb25zKSkge1xuICAgICAgICAgICAgb3B0aW9ucy5maXJzdEZpZWxkcyA9IGZpZWxkTmFtZXMuZmlsdGVyKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAgIHZhciBmaWVsZE1ldGEgPSBfdGhpczguZmllbGRzU3RvcmUuZ2V0RmllbGRNZXRhKG5hbWUpO1xuICAgICAgICAgICAgICByZXR1cm4gISFmaWVsZE1ldGEudmFsaWRhdGVGaXJzdDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBfdGhpczgudmFsaWRhdGVGaWVsZHNJbnRlcm5hbChmaWVsZHMsIHtcbiAgICAgICAgICAgIGZpZWxkTmFtZXM6IGZpZWxkTmFtZXMsXG4gICAgICAgICAgICBvcHRpb25zOiBvcHRpb25zXG4gICAgICAgICAgfSwgY2FsbGJhY2spO1xuICAgICAgICB9KTtcbiAgICAgICAgcGVuZGluZ1snY2F0Y2gnXShmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgICAgaWYgKGNvbnNvbGUuZXJyb3IgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBlO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHBlbmRpbmc7XG4gICAgICB9LFxuICAgICAgaXNTdWJtaXR0aW5nOiBmdW5jdGlvbiBpc1N1Ym1pdHRpbmcoKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAndGVzdCcpIHtcbiAgICAgICAgICB3YXJuaW5nKGZhbHNlLCAnYGlzU3VibWl0dGluZ2AgaXMgZGVwcmVjYXRlZC4gJyArIFwiQWN0dWFsbHksIGl0J3MgbW9yZSBjb252ZW5pZW50IHRvIGhhbmRsZSBzdWJtaXR0aW5nIHN0YXR1cyBieSB5b3Vyc2VsZi5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuc3VibWl0dGluZztcbiAgICAgIH0sXG4gICAgICBzdWJtaXQ6IGZ1bmN0aW9uIHN1Ym1pdChjYWxsYmFjaykge1xuICAgICAgICB2YXIgX3RoaXM5ID0gdGhpcztcblxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Rlc3QnKSB7XG4gICAgICAgICAgd2FybmluZyhmYWxzZSwgJ2BzdWJtaXRgIGlzIGRlcHJlY2F0ZWQuICcgKyBcIkFjdHVhbGx5LCBpdCdzIG1vcmUgY29udmVuaWVudCB0byBoYW5kbGUgc3VibWl0dGluZyBzdGF0dXMgYnkgeW91cnNlbGYuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBmbiA9IGZ1bmN0aW9uIGZuKCkge1xuICAgICAgICAgIF90aGlzOS5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzdWJtaXR0aW5nOiBmYWxzZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBzdWJtaXR0aW5nOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBjYWxsYmFjayhmbik7XG4gICAgICB9LFxuICAgICAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgd3JhcHBlZENvbXBvbmVudFJlZiA9IF9wcm9wcy53cmFwcGVkQ29tcG9uZW50UmVmLFxuICAgICAgICAgICAgcmVzdFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wcywgWyd3cmFwcGVkQ29tcG9uZW50UmVmJ10pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cblxuICAgICAgICB2YXIgZm9ybVByb3BzID0gX2RlZmluZVByb3BlcnR5KHt9LCBmb3JtUHJvcE5hbWUsIHRoaXMuZ2V0Rm9ybSgpKTtcbiAgICAgICAgaWYgKHdpdGhSZWYpIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Rlc3QnKSB7XG4gICAgICAgICAgICB3YXJuaW5nKGZhbHNlLCAnYHdpdGhSZWZgIGlzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgYHdyYXBwZWRDb21wb25lbnRSZWZgIGluc3RlYWQuICcgKyAnU2VlOiBodHRwczovL2dpdGh1Yi5jb20vcmVhY3QtY29tcG9uZW50L2Zvcm0jbm90ZS11c2Utd3JhcHBlZGNvbXBvbmVudHJlZi1pbnN0ZWFkLW9mLXdpdGhyZWYtYWZ0ZXItcmMtZm9ybTE0MCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmb3JtUHJvcHMucmVmID0gJ3dyYXBwZWRDb21wb25lbnQnO1xuICAgICAgICB9IGVsc2UgaWYgKHdyYXBwZWRDb21wb25lbnRSZWYpIHtcbiAgICAgICAgICBmb3JtUHJvcHMucmVmID0gd3JhcHBlZENvbXBvbmVudFJlZjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcHJvcHMgPSBtYXBQcm9wcy5jYWxsKHRoaXMsIF9leHRlbmRzKHt9LCBmb3JtUHJvcHMsIHJlc3RQcm9wcykpO1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChXcmFwcGVkQ29tcG9uZW50LCBwcm9wcyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gYXJndW1lbnRDb250YWluZXIodW5zYWZlTGlmZWN5Y2xlc1BvbHlmaWxsKEZvcm0pLCBXcmFwcGVkQ29tcG9uZW50KTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQmFzZUZvcm07IiwiaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHknO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBzZXQgZnJvbSAnbG9kYXNoL3NldCc7XG5pbXBvcnQgY3JlYXRlRm9ybUZpZWxkLCB7IGlzRm9ybUZpZWxkIH0gZnJvbSAnLi9jcmVhdGVGb3JtRmllbGQnO1xuaW1wb3J0IHsgaGFzUnVsZXMsIGZsYXR0ZW5GaWVsZHMsIGdldEVycm9yU3Rycywgc3RhcnRzV2l0aCB9IGZyb20gJy4vdXRpbHMnO1xuXG5mdW5jdGlvbiBwYXJ0T2YoYSwgYikge1xuICByZXR1cm4gYi5pbmRleE9mKGEpID09PSAwICYmIFsnLicsICdbJ10uaW5kZXhPZihiW2EubGVuZ3RoXSkgIT09IC0xO1xufVxuXG5mdW5jdGlvbiBpbnRlcm5hbEZsYXR0ZW5GaWVsZHMoZmllbGRzKSB7XG4gIHJldHVybiBmbGF0dGVuRmllbGRzKGZpZWxkcywgZnVuY3Rpb24gKF8sIG5vZGUpIHtcbiAgICByZXR1cm4gaXNGb3JtRmllbGQobm9kZSk7XG4gIH0sICdZb3UgbXVzdCB3cmFwIGZpZWxkIGRhdGEgd2l0aCBgY3JlYXRlRm9ybUZpZWxkYC4nKTtcbn1cblxudmFyIEZpZWxkc1N0b3JlID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBGaWVsZHNTdG9yZShmaWVsZHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRmllbGRzU3RvcmUpO1xuXG4gICAgX2luaXRpYWxpc2VQcm9wcy5jYWxsKHRoaXMpO1xuXG4gICAgdGhpcy5maWVsZHMgPSBpbnRlcm5hbEZsYXR0ZW5GaWVsZHMoZmllbGRzKTtcbiAgICB0aGlzLmZpZWxkc01ldGEgPSB7fTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhGaWVsZHNTdG9yZSwgW3tcbiAgICBrZXk6ICd1cGRhdGVGaWVsZHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVGaWVsZHMoZmllbGRzKSB7XG4gICAgICB0aGlzLmZpZWxkcyA9IGludGVybmFsRmxhdHRlbkZpZWxkcyhmaWVsZHMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2ZsYXR0ZW5SZWdpc3RlcmVkRmllbGRzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZmxhdHRlblJlZ2lzdGVyZWRGaWVsZHMoZmllbGRzKSB7XG4gICAgICB2YXIgdmFsaWRGaWVsZHNOYW1lID0gdGhpcy5nZXRBbGxGaWVsZHNOYW1lKCk7XG4gICAgICByZXR1cm4gZmxhdHRlbkZpZWxkcyhmaWVsZHMsIGZ1bmN0aW9uIChwYXRoKSB7XG4gICAgICAgIHJldHVybiB2YWxpZEZpZWxkc05hbWUuaW5kZXhPZihwYXRoKSA+PSAwO1xuICAgICAgfSwgJ1lvdSBjYW5ub3Qgc2V0IGEgZm9ybSBmaWVsZCBiZWZvcmUgcmVuZGVyaW5nIGEgZmllbGQgYXNzb2NpYXRlZCB3aXRoIHRoZSB2YWx1ZS4nKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzZXRGaWVsZHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRGaWVsZHMoZmllbGRzKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB2YXIgZmllbGRzTWV0YSA9IHRoaXMuZmllbGRzTWV0YTtcbiAgICAgIHZhciBub3dGaWVsZHMgPSBfZXh0ZW5kcyh7fSwgdGhpcy5maWVsZHMsIGZpZWxkcyk7XG4gICAgICB2YXIgbm93VmFsdWVzID0ge307XG4gICAgICBPYmplY3Qua2V5cyhmaWVsZHNNZXRhKS5mb3JFYWNoKGZ1bmN0aW9uIChmKSB7XG4gICAgICAgIG5vd1ZhbHVlc1tmXSA9IF90aGlzLmdldFZhbHVlRnJvbUZpZWxkcyhmLCBub3dGaWVsZHMpO1xuICAgICAgfSk7XG4gICAgICBPYmplY3Qua2V5cyhub3dWYWx1ZXMpLmZvckVhY2goZnVuY3Rpb24gKGYpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gbm93VmFsdWVzW2ZdO1xuICAgICAgICB2YXIgZmllbGRNZXRhID0gX3RoaXMuZ2V0RmllbGRNZXRhKGYpO1xuICAgICAgICBpZiAoZmllbGRNZXRhICYmIGZpZWxkTWV0YS5ub3JtYWxpemUpIHtcbiAgICAgICAgICB2YXIgbm93VmFsdWUgPSBmaWVsZE1ldGEubm9ybWFsaXplKHZhbHVlLCBfdGhpcy5nZXRWYWx1ZUZyb21GaWVsZHMoZiwgX3RoaXMuZmllbGRzKSwgbm93VmFsdWVzKTtcbiAgICAgICAgICBpZiAobm93VmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICBub3dGaWVsZHNbZl0gPSBfZXh0ZW5kcyh7fSwgbm93RmllbGRzW2ZdLCB7XG4gICAgICAgICAgICAgIHZhbHVlOiBub3dWYWx1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuZmllbGRzID0gbm93RmllbGRzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3Jlc2V0RmllbGRzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVzZXRGaWVsZHMobnMpIHtcbiAgICAgIHZhciBmaWVsZHMgPSB0aGlzLmZpZWxkcztcblxuICAgICAgdmFyIG5hbWVzID0gbnMgPyB0aGlzLmdldFZhbGlkRmllbGRzRnVsbE5hbWUobnMpIDogdGhpcy5nZXRBbGxGaWVsZHNOYW1lKCk7XG4gICAgICByZXR1cm4gbmFtZXMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIG5hbWUpIHtcbiAgICAgICAgdmFyIGZpZWxkID0gZmllbGRzW25hbWVdO1xuICAgICAgICBpZiAoZmllbGQgJiYgJ3ZhbHVlJyBpbiBmaWVsZCkge1xuICAgICAgICAgIGFjY1tuYW1lXSA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9LCB7fSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2V0RmllbGRNZXRhJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0RmllbGRNZXRhKG5hbWUsIG1ldGEpIHtcbiAgICAgIHRoaXMuZmllbGRzTWV0YVtuYW1lXSA9IG1ldGE7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2V0RmllbGRzQXNEaXJ0eScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldEZpZWxkc0FzRGlydHkoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgT2JqZWN0LmtleXModGhpcy5maWVsZHMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgdmFyIGZpZWxkID0gX3RoaXMyLmZpZWxkc1tuYW1lXTtcbiAgICAgICAgdmFyIGZpZWxkTWV0YSA9IF90aGlzMi5maWVsZHNNZXRhW25hbWVdO1xuICAgICAgICBpZiAoZmllbGQgJiYgZmllbGRNZXRhICYmIGhhc1J1bGVzKGZpZWxkTWV0YS52YWxpZGF0ZSkpIHtcbiAgICAgICAgICBfdGhpczIuZmllbGRzW25hbWVdID0gX2V4dGVuZHMoe30sIGZpZWxkLCB7XG4gICAgICAgICAgICBkaXJ0eTogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRGaWVsZE1ldGEnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRGaWVsZE1ldGEobmFtZSkge1xuICAgICAgdGhpcy5maWVsZHNNZXRhW25hbWVdID0gdGhpcy5maWVsZHNNZXRhW25hbWVdIHx8IHt9O1xuICAgICAgcmV0dXJuIHRoaXMuZmllbGRzTWV0YVtuYW1lXTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRWYWx1ZUZyb21GaWVsZHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRWYWx1ZUZyb21GaWVsZHMobmFtZSwgZmllbGRzKSB7XG4gICAgICB2YXIgZmllbGQgPSBmaWVsZHNbbmFtZV07XG4gICAgICBpZiAoZmllbGQgJiYgJ3ZhbHVlJyBpbiBmaWVsZCkge1xuICAgICAgICByZXR1cm4gZmllbGQudmFsdWU7XG4gICAgICB9XG4gICAgICB2YXIgZmllbGRNZXRhID0gdGhpcy5nZXRGaWVsZE1ldGEobmFtZSk7XG4gICAgICByZXR1cm4gZmllbGRNZXRhICYmIGZpZWxkTWV0YS5pbml0aWFsVmFsdWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0VmFsaWRGaWVsZHNOYW1lJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VmFsaWRGaWVsZHNOYW1lKCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIHZhciBmaWVsZHNNZXRhID0gdGhpcy5maWVsZHNNZXRhO1xuXG4gICAgICByZXR1cm4gZmllbGRzTWV0YSA/IE9iamVjdC5rZXlzKGZpZWxkc01ldGEpLmZpbHRlcihmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICByZXR1cm4gIV90aGlzMy5nZXRGaWVsZE1ldGEobmFtZSkuaGlkZGVuO1xuICAgICAgfSkgOiBbXTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRBbGxGaWVsZHNOYW1lJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0QWxsRmllbGRzTmFtZSgpIHtcbiAgICAgIHZhciBmaWVsZHNNZXRhID0gdGhpcy5maWVsZHNNZXRhO1xuXG4gICAgICByZXR1cm4gZmllbGRzTWV0YSA/IE9iamVjdC5rZXlzKGZpZWxkc01ldGEpIDogW107XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0VmFsaWRGaWVsZHNGdWxsTmFtZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFZhbGlkRmllbGRzRnVsbE5hbWUobWF5YmVQYXJ0aWFsTmFtZSkge1xuICAgICAgdmFyIG1heWJlUGFydGlhbE5hbWVzID0gQXJyYXkuaXNBcnJheShtYXliZVBhcnRpYWxOYW1lKSA/IG1heWJlUGFydGlhbE5hbWUgOiBbbWF5YmVQYXJ0aWFsTmFtZV07XG4gICAgICByZXR1cm4gdGhpcy5nZXRWYWxpZEZpZWxkc05hbWUoKS5maWx0ZXIoZnVuY3Rpb24gKGZ1bGxOYW1lKSB7XG4gICAgICAgIHJldHVybiBtYXliZVBhcnRpYWxOYW1lcy5zb21lKGZ1bmN0aW9uIChwYXJ0aWFsTmFtZSkge1xuICAgICAgICAgIHJldHVybiBmdWxsTmFtZSA9PT0gcGFydGlhbE5hbWUgfHwgc3RhcnRzV2l0aChmdWxsTmFtZSwgcGFydGlhbE5hbWUpICYmIFsnLicsICdbJ10uaW5kZXhPZihmdWxsTmFtZVtwYXJ0aWFsTmFtZS5sZW5ndGhdKSA+PSAwO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldEZpZWxkVmFsdWVQcm9wVmFsdWUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRGaWVsZFZhbHVlUHJvcFZhbHVlKGZpZWxkTWV0YSkge1xuICAgICAgdmFyIG5hbWUgPSBmaWVsZE1ldGEubmFtZSxcbiAgICAgICAgICBnZXRWYWx1ZVByb3BzID0gZmllbGRNZXRhLmdldFZhbHVlUHJvcHMsXG4gICAgICAgICAgdmFsdWVQcm9wTmFtZSA9IGZpZWxkTWV0YS52YWx1ZVByb3BOYW1lO1xuXG4gICAgICB2YXIgZmllbGQgPSB0aGlzLmdldEZpZWxkKG5hbWUpO1xuICAgICAgdmFyIGZpZWxkVmFsdWUgPSAndmFsdWUnIGluIGZpZWxkID8gZmllbGQudmFsdWUgOiBmaWVsZE1ldGEuaW5pdGlhbFZhbHVlO1xuICAgICAgaWYgKGdldFZhbHVlUHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIGdldFZhbHVlUHJvcHMoZmllbGRWYWx1ZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gX2RlZmluZVByb3BlcnR5KHt9LCB2YWx1ZVByb3BOYW1lLCBmaWVsZFZhbHVlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRGaWVsZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEZpZWxkKG5hbWUpIHtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgdGhpcy5maWVsZHNbbmFtZV0sIHtcbiAgICAgICAgbmFtZTogbmFtZVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0Tm90Q29sbGVjdGVkRmllbGRzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Tm90Q29sbGVjdGVkRmllbGRzKCkge1xuICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgIHZhciBmaWVsZHNOYW1lID0gdGhpcy5nZXRWYWxpZEZpZWxkc05hbWUoKTtcbiAgICAgIHJldHVybiBmaWVsZHNOYW1lLmZpbHRlcihmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICByZXR1cm4gIV90aGlzNC5maWVsZHNbbmFtZV07XG4gICAgICB9KS5tYXAoZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgIGRpcnR5OiBmYWxzZSxcbiAgICAgICAgICB2YWx1ZTogX3RoaXM0LmdldEZpZWxkTWV0YShuYW1lKS5pbml0aWFsVmFsdWVcbiAgICAgICAgfTtcbiAgICAgIH0pLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBmaWVsZCkge1xuICAgICAgICByZXR1cm4gc2V0KGFjYywgZmllbGQubmFtZSwgY3JlYXRlRm9ybUZpZWxkKGZpZWxkKSk7XG4gICAgICB9LCB7fSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0TmVzdGVkQWxsRmllbGRzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0TmVzdGVkQWxsRmllbGRzKCkge1xuICAgICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmZpZWxkcykucmVkdWNlKGZ1bmN0aW9uIChhY2MsIG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHNldChhY2MsIG5hbWUsIGNyZWF0ZUZvcm1GaWVsZChfdGhpczUuZmllbGRzW25hbWVdKSk7XG4gICAgICB9LCB0aGlzLmdldE5vdENvbGxlY3RlZEZpZWxkcygpKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRGaWVsZE1lbWJlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEZpZWxkTWVtYmVyKG5hbWUsIG1lbWJlcikge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0RmllbGQobmFtZSlbbWVtYmVyXTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXROZXN0ZWRGaWVsZHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXROZXN0ZWRGaWVsZHMobmFtZXMsIGdldHRlcikge1xuICAgICAgdmFyIGZpZWxkcyA9IG5hbWVzIHx8IHRoaXMuZ2V0VmFsaWRGaWVsZHNOYW1lKCk7XG4gICAgICByZXR1cm4gZmllbGRzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBmKSB7XG4gICAgICAgIHJldHVybiBzZXQoYWNjLCBmLCBnZXR0ZXIoZikpO1xuICAgICAgfSwge30pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldE5lc3RlZEZpZWxkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0TmVzdGVkRmllbGQobmFtZSwgZ2V0dGVyKSB7XG4gICAgICB2YXIgZnVsbE5hbWVzID0gdGhpcy5nZXRWYWxpZEZpZWxkc0Z1bGxOYW1lKG5hbWUpO1xuICAgICAgaWYgKGZ1bGxOYW1lcy5sZW5ndGggPT09IDAgfHwgLy8gTm90IHJlZ2lzdGVyZWRcbiAgICAgIGZ1bGxOYW1lcy5sZW5ndGggPT09IDEgJiYgZnVsbE5hbWVzWzBdID09PSBuYW1lIC8vIE5hbWUgYWxyZWFkeSBpcyBmdWxsIG5hbWUuXG4gICAgICApIHtcbiAgICAgICAgICByZXR1cm4gZ2V0dGVyKG5hbWUpO1xuICAgICAgICB9XG4gICAgICB2YXIgaXNBcnJheVZhbHVlID0gZnVsbE5hbWVzWzBdW25hbWUubGVuZ3RoXSA9PT0gJ1snO1xuICAgICAgdmFyIHN1ZmZpeE5hbWVTdGFydEluZGV4ID0gaXNBcnJheVZhbHVlID8gbmFtZS5sZW5ndGggOiBuYW1lLmxlbmd0aCArIDE7XG4gICAgICByZXR1cm4gZnVsbE5hbWVzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBmdWxsTmFtZSkge1xuICAgICAgICByZXR1cm4gc2V0KGFjYywgZnVsbE5hbWUuc2xpY2Uoc3VmZml4TmFtZVN0YXJ0SW5kZXgpLCBnZXR0ZXIoZnVsbE5hbWUpKTtcbiAgICAgIH0sIGlzQXJyYXlWYWx1ZSA/IFtdIDoge30pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2lzVmFsaWROZXN0ZWRGaWVsZE5hbWUnLFxuXG5cbiAgICAvLyBAcHJpdmF0ZVxuICAgIC8vIEJHOiBgYWAgYW5kIGBhLmJgIGNhbm5vdCBiZSB1c2UgaW4gdGhlIHNhbWUgZm9ybVxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc1ZhbGlkTmVzdGVkRmllbGROYW1lKG5hbWUpIHtcbiAgICAgIHZhciBuYW1lcyA9IHRoaXMuZ2V0QWxsRmllbGRzTmFtZSgpO1xuICAgICAgcmV0dXJuIG5hbWVzLmV2ZXJ5KGZ1bmN0aW9uIChuKSB7XG4gICAgICAgIHJldHVybiAhcGFydE9mKG4sIG5hbWUpICYmICFwYXJ0T2YobmFtZSwgbik7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjbGVhckZpZWxkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2xlYXJGaWVsZChuYW1lKSB7XG4gICAgICBkZWxldGUgdGhpcy5maWVsZHNbbmFtZV07XG4gICAgICBkZWxldGUgdGhpcy5maWVsZHNNZXRhW25hbWVdO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBGaWVsZHNTdG9yZTtcbn0oKTtcblxudmFyIF9pbml0aWFsaXNlUHJvcHMgPSBmdW5jdGlvbiBfaW5pdGlhbGlzZVByb3BzKCkge1xuICB2YXIgX3RoaXM2ID0gdGhpcztcblxuICB0aGlzLnNldEZpZWxkc0luaXRpYWxWYWx1ZSA9IGZ1bmN0aW9uIChpbml0aWFsVmFsdWVzKSB7XG4gICAgdmFyIGZsYXR0ZW5lZEluaXRpYWxWYWx1ZXMgPSBfdGhpczYuZmxhdHRlblJlZ2lzdGVyZWRGaWVsZHMoaW5pdGlhbFZhbHVlcyk7XG4gICAgdmFyIGZpZWxkc01ldGEgPSBfdGhpczYuZmllbGRzTWV0YTtcbiAgICBPYmplY3Qua2V5cyhmbGF0dGVuZWRJbml0aWFsVmFsdWVzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICBpZiAoZmllbGRzTWV0YVtuYW1lXSkge1xuICAgICAgICBfdGhpczYuc2V0RmllbGRNZXRhKG5hbWUsIF9leHRlbmRzKHt9LCBfdGhpczYuZ2V0RmllbGRNZXRhKG5hbWUpLCB7XG4gICAgICAgICAgaW5pdGlhbFZhbHVlOiBmbGF0dGVuZWRJbml0aWFsVmFsdWVzW25hbWVdXG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICB0aGlzLmdldEFsbFZhbHVlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZmllbGRzTWV0YSA9IF90aGlzNi5maWVsZHNNZXRhLFxuICAgICAgICBmaWVsZHMgPSBfdGhpczYuZmllbGRzO1xuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGZpZWxkc01ldGEpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBuYW1lKSB7XG4gICAgICByZXR1cm4gc2V0KGFjYywgbmFtZSwgX3RoaXM2LmdldFZhbHVlRnJvbUZpZWxkcyhuYW1lLCBmaWVsZHMpKTtcbiAgICB9LCB7fSk7XG4gIH07XG5cbiAgdGhpcy5nZXRGaWVsZHNWYWx1ZSA9IGZ1bmN0aW9uIChuYW1lcykge1xuICAgIHJldHVybiBfdGhpczYuZ2V0TmVzdGVkRmllbGRzKG5hbWVzLCBfdGhpczYuZ2V0RmllbGRWYWx1ZSk7XG4gIH07XG5cbiAgdGhpcy5nZXRGaWVsZFZhbHVlID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB2YXIgZmllbGRzID0gX3RoaXM2LmZpZWxkcztcblxuICAgIHJldHVybiBfdGhpczYuZ2V0TmVzdGVkRmllbGQobmFtZSwgZnVuY3Rpb24gKGZ1bGxOYW1lKSB7XG4gICAgICByZXR1cm4gX3RoaXM2LmdldFZhbHVlRnJvbUZpZWxkcyhmdWxsTmFtZSwgZmllbGRzKTtcbiAgICB9KTtcbiAgfTtcblxuICB0aGlzLmdldEZpZWxkc0Vycm9yID0gZnVuY3Rpb24gKG5hbWVzKSB7XG4gICAgcmV0dXJuIF90aGlzNi5nZXROZXN0ZWRGaWVsZHMobmFtZXMsIF90aGlzNi5nZXRGaWVsZEVycm9yKTtcbiAgfTtcblxuICB0aGlzLmdldEZpZWxkRXJyb3IgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiBfdGhpczYuZ2V0TmVzdGVkRmllbGQobmFtZSwgZnVuY3Rpb24gKGZ1bGxOYW1lKSB7XG4gICAgICByZXR1cm4gZ2V0RXJyb3JTdHJzKF90aGlzNi5nZXRGaWVsZE1lbWJlcihmdWxsTmFtZSwgJ2Vycm9ycycpKTtcbiAgICB9KTtcbiAgfTtcblxuICB0aGlzLmlzRmllbGRWYWxpZGF0aW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gX3RoaXM2LmdldEZpZWxkTWVtYmVyKG5hbWUsICd2YWxpZGF0aW5nJyk7XG4gIH07XG5cbiAgdGhpcy5pc0ZpZWxkc1ZhbGlkYXRpbmcgPSBmdW5jdGlvbiAobnMpIHtcbiAgICB2YXIgbmFtZXMgPSBucyB8fCBfdGhpczYuZ2V0VmFsaWRGaWVsZHNOYW1lKCk7XG4gICAgcmV0dXJuIG5hbWVzLnNvbWUoZnVuY3Rpb24gKG4pIHtcbiAgICAgIHJldHVybiBfdGhpczYuaXNGaWVsZFZhbGlkYXRpbmcobik7XG4gICAgfSk7XG4gIH07XG5cbiAgdGhpcy5pc0ZpZWxkVG91Y2hlZCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgcmV0dXJuIF90aGlzNi5nZXRGaWVsZE1lbWJlcihuYW1lLCAndG91Y2hlZCcpO1xuICB9O1xuXG4gIHRoaXMuaXNGaWVsZHNUb3VjaGVkID0gZnVuY3Rpb24gKG5zKSB7XG4gICAgdmFyIG5hbWVzID0gbnMgfHwgX3RoaXM2LmdldFZhbGlkRmllbGRzTmFtZSgpO1xuICAgIHJldHVybiBuYW1lcy5zb21lKGZ1bmN0aW9uIChuKSB7XG4gICAgICByZXR1cm4gX3RoaXM2LmlzRmllbGRUb3VjaGVkKG4pO1xuICAgIH0pO1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRmllbGRzU3RvcmUoZmllbGRzKSB7XG4gIHJldHVybiBuZXcgRmllbGRzU3RvcmUoZmllbGRzKTtcbn0iLCJpbXBvcnQgY3JlYXRlQmFzZUZvcm0gZnJvbSAnLi9jcmVhdGVCYXNlRm9ybSc7XG5cbmV4cG9ydCB2YXIgbWl4aW4gPSB7XG4gIGdldEZvcm06IGZ1bmN0aW9uIGdldEZvcm0oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGdldEZpZWxkc1ZhbHVlOiB0aGlzLmZpZWxkc1N0b3JlLmdldEZpZWxkc1ZhbHVlLFxuICAgICAgZ2V0RmllbGRWYWx1ZTogdGhpcy5maWVsZHNTdG9yZS5nZXRGaWVsZFZhbHVlLFxuICAgICAgZ2V0RmllbGRJbnN0YW5jZTogdGhpcy5nZXRGaWVsZEluc3RhbmNlLFxuICAgICAgc2V0RmllbGRzVmFsdWU6IHRoaXMuc2V0RmllbGRzVmFsdWUsXG4gICAgICBzZXRGaWVsZHM6IHRoaXMuc2V0RmllbGRzLFxuICAgICAgc2V0RmllbGRzSW5pdGlhbFZhbHVlOiB0aGlzLmZpZWxkc1N0b3JlLnNldEZpZWxkc0luaXRpYWxWYWx1ZSxcbiAgICAgIGdldEZpZWxkRGVjb3JhdG9yOiB0aGlzLmdldEZpZWxkRGVjb3JhdG9yLFxuICAgICAgZ2V0RmllbGRQcm9wczogdGhpcy5nZXRGaWVsZFByb3BzLFxuICAgICAgZ2V0RmllbGRzRXJyb3I6IHRoaXMuZmllbGRzU3RvcmUuZ2V0RmllbGRzRXJyb3IsXG4gICAgICBnZXRGaWVsZEVycm9yOiB0aGlzLmZpZWxkc1N0b3JlLmdldEZpZWxkRXJyb3IsXG4gICAgICBpc0ZpZWxkVmFsaWRhdGluZzogdGhpcy5maWVsZHNTdG9yZS5pc0ZpZWxkVmFsaWRhdGluZyxcbiAgICAgIGlzRmllbGRzVmFsaWRhdGluZzogdGhpcy5maWVsZHNTdG9yZS5pc0ZpZWxkc1ZhbGlkYXRpbmcsXG4gICAgICBpc0ZpZWxkc1RvdWNoZWQ6IHRoaXMuZmllbGRzU3RvcmUuaXNGaWVsZHNUb3VjaGVkLFxuICAgICAgaXNGaWVsZFRvdWNoZWQ6IHRoaXMuZmllbGRzU3RvcmUuaXNGaWVsZFRvdWNoZWQsXG4gICAgICBpc1N1Ym1pdHRpbmc6IHRoaXMuaXNTdWJtaXR0aW5nLFxuICAgICAgc3VibWl0OiB0aGlzLnN1Ym1pdCxcbiAgICAgIHZhbGlkYXRlRmllbGRzOiB0aGlzLnZhbGlkYXRlRmllbGRzLFxuICAgICAgcmVzZXRGaWVsZHM6IHRoaXMucmVzZXRGaWVsZHNcbiAgICB9O1xuICB9XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVGb3JtKG9wdGlvbnMpIHtcbiAgcmV0dXJuIGNyZWF0ZUJhc2VGb3JtKG9wdGlvbnMsIFttaXhpbl0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVGb3JtOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIjtcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSBcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVja1wiO1xuXG52YXIgRmllbGQgPSBmdW5jdGlvbiBGaWVsZChmaWVsZHMpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEZpZWxkKTtcblxuICBfZXh0ZW5kcyh0aGlzLCBmaWVsZHMpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzRm9ybUZpZWxkKG9iaikge1xuICByZXR1cm4gb2JqIGluc3RhbmNlb2YgRmllbGQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUZvcm1GaWVsZChmaWVsZCkge1xuICBpZiAoaXNGb3JtRmllbGQoZmllbGQpKSB7XG4gICAgcmV0dXJuIGZpZWxkO1xuICB9XG4gIHJldHVybiBuZXcgRmllbGQoZmllbGQpO1xufSIsIi8vIGV4cG9ydCB0aGlzIHBhY2thZ2UncyBhcGlcbmltcG9ydCBjcmVhdGVGb3JtIGZyb20gJy4vY3JlYXRlRm9ybSc7XG5pbXBvcnQgY3JlYXRlRm9ybUZpZWxkIGZyb20gJy4vY3JlYXRlRm9ybUZpZWxkJztcbmltcG9ydCBmb3JtU2hhcGUgZnJvbSAnLi9wcm9wVHlwZXMnO1xuXG5leHBvcnQgeyBjcmVhdGVGb3JtRmllbGQsIGZvcm1TaGFwZSwgY3JlYXRlRm9ybSB9OyIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbnZhciBmb3JtU2hhcGUgPSBQcm9wVHlwZXMuc2hhcGUoe1xuICBnZXRGaWVsZHNWYWx1ZTogUHJvcFR5cGVzLmZ1bmMsXG4gIGdldEZpZWxkVmFsdWU6IFByb3BUeXBlcy5mdW5jLFxuICBnZXRGaWVsZEluc3RhbmNlOiBQcm9wVHlwZXMuZnVuYyxcbiAgc2V0RmllbGRzVmFsdWU6IFByb3BUeXBlcy5mdW5jLFxuICBzZXRGaWVsZHM6IFByb3BUeXBlcy5mdW5jLFxuICBzZXRGaWVsZHNJbml0aWFsVmFsdWU6IFByb3BUeXBlcy5mdW5jLFxuICBnZXRGaWVsZERlY29yYXRvcjogUHJvcFR5cGVzLmZ1bmMsXG4gIGdldEZpZWxkUHJvcHM6IFByb3BUeXBlcy5mdW5jLFxuICBnZXRGaWVsZHNFcnJvcjogUHJvcFR5cGVzLmZ1bmMsXG4gIGdldEZpZWxkRXJyb3I6IFByb3BUeXBlcy5mdW5jLFxuICBpc0ZpZWxkVmFsaWRhdGluZzogUHJvcFR5cGVzLmZ1bmMsXG4gIGlzRmllbGRzVmFsaWRhdGluZzogUHJvcFR5cGVzLmZ1bmMsXG4gIGlzRmllbGRzVG91Y2hlZDogUHJvcFR5cGVzLmZ1bmMsXG4gIGlzRmllbGRUb3VjaGVkOiBQcm9wVHlwZXMuZnVuYyxcbiAgaXNTdWJtaXR0aW5nOiBQcm9wVHlwZXMuZnVuYyxcbiAgc3VibWl0OiBQcm9wVHlwZXMuZnVuYyxcbiAgdmFsaWRhdGVGaWVsZHM6IFByb3BUeXBlcy5mdW5jLFxuICByZXNldEZpZWxkczogUHJvcFR5cGVzLmZ1bmNcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtU2hhcGU7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmltcG9ydCBob2lzdFN0YXRpY3MgZnJvbSAnaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MnO1xuaW1wb3J0IHdhcm5pbmcgZnJvbSAnd2FybmluZyc7XG5cbmZ1bmN0aW9uIGdldERpc3BsYXlOYW1lKFdyYXBwZWRDb21wb25lbnQpIHtcbiAgcmV0dXJuIFdyYXBwZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgV3JhcHBlZENvbXBvbmVudC5uYW1lIHx8ICdXcmFwcGVkQ29tcG9uZW50Jztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFyZ3VtZW50Q29udGFpbmVyKENvbnRhaW5lciwgV3JhcHBlZENvbXBvbmVudCkge1xuICAvKiBlc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCAqL1xuICBDb250YWluZXIuZGlzcGxheU5hbWUgPSAnRm9ybSgnICsgZ2V0RGlzcGxheU5hbWUoV3JhcHBlZENvbXBvbmVudCkgKyAnKSc7XG4gIENvbnRhaW5lci5XcmFwcGVkQ29tcG9uZW50ID0gV3JhcHBlZENvbXBvbmVudDtcbiAgcmV0dXJuIGhvaXN0U3RhdGljcyhDb250YWluZXIsIFdyYXBwZWRDb21wb25lbnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpdHkob2JqKSB7XG4gIHJldHVybiBvYmo7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmbGF0dGVuQXJyYXkoYXJyKSB7XG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuY29uY2F0LmFwcGx5KFtdLCBhcnIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJlZVRyYXZlcnNlKCkge1xuICB2YXIgcGF0aCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogJyc7XG4gIHZhciB0cmVlID0gYXJndW1lbnRzWzFdO1xuICB2YXIgaXNMZWFmTm9kZSA9IGFyZ3VtZW50c1syXTtcbiAgdmFyIGVycm9yTWVzc2FnZSA9IGFyZ3VtZW50c1szXTtcbiAgdmFyIGNhbGxiYWNrID0gYXJndW1lbnRzWzRdO1xuXG4gIGlmIChpc0xlYWZOb2RlKHBhdGgsIHRyZWUpKSB7XG4gICAgY2FsbGJhY2socGF0aCwgdHJlZSk7XG4gIH0gZWxzZSBpZiAodHJlZSA9PT0gdW5kZWZpbmVkIHx8IHRyZWUgPT09IG51bGwpIHtcbiAgICAvLyBEbyBub3RoaW5nXG4gIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0cmVlKSkge1xuICAgIHRyZWUuZm9yRWFjaChmdW5jdGlvbiAoc3ViVHJlZSwgaW5kZXgpIHtcbiAgICAgIHJldHVybiB0cmVlVHJhdmVyc2UocGF0aCArICdbJyArIGluZGV4ICsgJ10nLCBzdWJUcmVlLCBpc0xlYWZOb2RlLCBlcnJvck1lc3NhZ2UsIGNhbGxiYWNrKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBJdCdzIG9iamVjdCBhbmQgbm90IGEgbGVhZiBub2RlXG4gICAgaWYgKHR5cGVvZiB0cmVlICE9PSAnb2JqZWN0Jykge1xuICAgICAgd2FybmluZyhmYWxzZSwgZXJyb3JNZXNzYWdlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgT2JqZWN0LmtleXModHJlZSkuZm9yRWFjaChmdW5jdGlvbiAoc3ViVHJlZUtleSkge1xuICAgICAgdmFyIHN1YlRyZWUgPSB0cmVlW3N1YlRyZWVLZXldO1xuICAgICAgdHJlZVRyYXZlcnNlKCcnICsgcGF0aCArIChwYXRoID8gJy4nIDogJycpICsgc3ViVHJlZUtleSwgc3ViVHJlZSwgaXNMZWFmTm9kZSwgZXJyb3JNZXNzYWdlLCBjYWxsYmFjayk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZsYXR0ZW5GaWVsZHMobWF5YmVOZXN0ZWRGaWVsZHMsIGlzTGVhZk5vZGUsIGVycm9yTWVzc2FnZSkge1xuICB2YXIgZmllbGRzID0ge307XG4gIHRyZWVUcmF2ZXJzZSh1bmRlZmluZWQsIG1heWJlTmVzdGVkRmllbGRzLCBpc0xlYWZOb2RlLCBlcnJvck1lc3NhZ2UsIGZ1bmN0aW9uIChwYXRoLCBub2RlKSB7XG4gICAgZmllbGRzW3BhdGhdID0gbm9kZTtcbiAgfSk7XG4gIHJldHVybiBmaWVsZHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVWYWxpZGF0ZVJ1bGVzKHZhbGlkYXRlLCBydWxlcywgdmFsaWRhdGVUcmlnZ2VyKSB7XG4gIHZhciB2YWxpZGF0ZVJ1bGVzID0gdmFsaWRhdGUubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgdmFyIG5ld0l0ZW0gPSBfZXh0ZW5kcyh7fSwgaXRlbSwge1xuICAgICAgdHJpZ2dlcjogaXRlbS50cmlnZ2VyIHx8IFtdXG4gICAgfSk7XG4gICAgaWYgKHR5cGVvZiBuZXdJdGVtLnRyaWdnZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgICBuZXdJdGVtLnRyaWdnZXIgPSBbbmV3SXRlbS50cmlnZ2VyXTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld0l0ZW07XG4gIH0pO1xuICBpZiAocnVsZXMpIHtcbiAgICB2YWxpZGF0ZVJ1bGVzLnB1c2goe1xuICAgICAgdHJpZ2dlcjogdmFsaWRhdGVUcmlnZ2VyID8gW10uY29uY2F0KHZhbGlkYXRlVHJpZ2dlcikgOiBbXSxcbiAgICAgIHJ1bGVzOiBydWxlc1xuICAgIH0pO1xuICB9XG4gIHJldHVybiB2YWxpZGF0ZVJ1bGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmFsaWRhdGVUcmlnZ2Vycyh2YWxpZGF0ZVJ1bGVzKSB7XG4gIHJldHVybiB2YWxpZGF0ZVJ1bGVzLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgIHJldHVybiAhIWl0ZW0ucnVsZXMgJiYgaXRlbS5ydWxlcy5sZW5ndGg7XG4gIH0pLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgIHJldHVybiBpdGVtLnRyaWdnZXI7XG4gIH0pLnJlZHVjZShmdW5jdGlvbiAocHJlLCBjdXJyKSB7XG4gICAgcmV0dXJuIHByZS5jb25jYXQoY3Vycik7XG4gIH0sIFtdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFZhbHVlRnJvbUV2ZW50KGUpIHtcbiAgLy8gVG8gc3VwcG9ydCBjdXN0b20gZWxlbWVudFxuICBpZiAoIWUgfHwgIWUudGFyZ2V0KSB7XG4gICAgcmV0dXJuIGU7XG4gIH1cbiAgdmFyIHRhcmdldCA9IGUudGFyZ2V0O1xuXG4gIHJldHVybiB0YXJnZXQudHlwZSA9PT0gJ2NoZWNrYm94JyA/IHRhcmdldC5jaGVja2VkIDogdGFyZ2V0LnZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RXJyb3JTdHJzKGVycm9ycykge1xuICBpZiAoZXJyb3JzKSB7XG4gICAgcmV0dXJuIGVycm9ycy5tYXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChlICYmIGUubWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gZS5tZXNzYWdlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGU7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGVycm9ycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBhcmFtcyhucywgb3B0LCBjYikge1xuICB2YXIgbmFtZXMgPSBucztcbiAgdmFyIG9wdGlvbnMgPSBvcHQ7XG4gIHZhciBjYWxsYmFjayA9IGNiO1xuICBpZiAoY2IgPT09IHVuZGVmaW5lZCkge1xuICAgIGlmICh0eXBlb2YgbmFtZXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNhbGxiYWNrID0gbmFtZXM7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgICBuYW1lcyA9IHVuZGVmaW5lZDtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkobmFtZXMpKSB7XG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2FsbGJhY2sgPSBvcHRpb25zO1xuICAgICAgICBvcHRpb25zID0ge307XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY2FsbGJhY2sgPSBvcHRpb25zO1xuICAgICAgb3B0aW9ucyA9IG5hbWVzIHx8IHt9O1xuICAgICAgbmFtZXMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG4gIHJldHVybiB7XG4gICAgbmFtZXM6IG5hbWVzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnMsXG4gICAgY2FsbGJhY2s6IGNhbGxiYWNrXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0VtcHR5T2JqZWN0KG9iaikge1xuICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5sZW5ndGggPT09IDA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNSdWxlcyh2YWxpZGF0ZSkge1xuICBpZiAodmFsaWRhdGUpIHtcbiAgICByZXR1cm4gdmFsaWRhdGUuc29tZShmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIGl0ZW0ucnVsZXMgJiYgaXRlbS5ydWxlcy5sZW5ndGg7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRzV2l0aChzdHIsIHByZWZpeCkge1xuICByZXR1cm4gc3RyLmxhc3RJbmRleE9mKHByZWZpeCwgMCkgPT09IDA7XG59IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbnZhciBUb3VjaEZlZWRiYWNrID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoVG91Y2hGZWVkYmFjaywgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBUb3VjaEZlZWRiYWNrKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVG91Y2hGZWVkYmFjayk7XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFRvdWNoRmVlZGJhY2suX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihUb3VjaEZlZWRiYWNrKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG5cbiAgICAgICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBhY3RpdmU6IGZhbHNlXG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLm9uVG91Y2hTdGFydCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBfdGhpcy50cmlnZ2VyRXZlbnQoJ1RvdWNoU3RhcnQnLCB0cnVlLCBlKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMub25Ub3VjaE1vdmUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgX3RoaXMudHJpZ2dlckV2ZW50KCdUb3VjaE1vdmUnLCBmYWxzZSwgZSk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLm9uVG91Y2hFbmQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgX3RoaXMudHJpZ2dlckV2ZW50KCdUb3VjaEVuZCcsIGZhbHNlLCBlKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMub25Ub3VjaENhbmNlbCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBfdGhpcy50cmlnZ2VyRXZlbnQoJ1RvdWNoQ2FuY2VsJywgZmFsc2UsIGUpO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5vbk1vdXNlRG93biA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAvLyBwYyBzaW11bGF0ZSBtb2JpbGVcbiAgICAgICAgICAgIF90aGlzLnRyaWdnZXJFdmVudCgnTW91c2VEb3duJywgdHJ1ZSwgZSk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLm9uTW91c2VVcCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBfdGhpcy50cmlnZ2VyRXZlbnQoJ01vdXNlVXAnLCBmYWxzZSwgZSk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLm9uTW91c2VMZWF2ZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBfdGhpcy50cmlnZ2VyRXZlbnQoJ01vdXNlTGVhdmUnLCBmYWxzZSwgZSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoVG91Y2hGZWVkYmFjaywgW3tcbiAgICAgICAga2V5OiAnY29tcG9uZW50RGlkVXBkYXRlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmRpc2FibGVkICYmIHRoaXMuc3RhdGUuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogZmFsc2VcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAndHJpZ2dlckV2ZW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHRyaWdnZXJFdmVudCh0eXBlLCBpc0FjdGl2ZSwgZXYpIHtcbiAgICAgICAgICAgIHZhciBldmVudFR5cGUgPSAnb24nICsgdHlwZTtcbiAgICAgICAgICAgIHZhciBjaGlsZHJlbiA9IHRoaXMucHJvcHMuY2hpbGRyZW47XG5cbiAgICAgICAgICAgIGlmIChjaGlsZHJlbi5wcm9wc1tldmVudFR5cGVdKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW4ucHJvcHNbZXZlbnRUeXBlXShldik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNBY3RpdmUgIT09IHRoaXMuc3RhdGUuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogaXNBY3RpdmVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkID0gX3Byb3BzLmRpc2FibGVkLFxuICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZSA9IF9wcm9wcy5hY3RpdmVDbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgYWN0aXZlU3R5bGUgPSBfcHJvcHMuYWN0aXZlU3R5bGU7XG5cbiAgICAgICAgICAgIHZhciBldmVudHMgPSBkaXNhYmxlZCA/IHVuZGVmaW5lZCA6IHtcbiAgICAgICAgICAgICAgICBvblRvdWNoU3RhcnQ6IHRoaXMub25Ub3VjaFN0YXJ0LFxuICAgICAgICAgICAgICAgIG9uVG91Y2hNb3ZlOiB0aGlzLm9uVG91Y2hNb3ZlLFxuICAgICAgICAgICAgICAgIG9uVG91Y2hFbmQ6IHRoaXMub25Ub3VjaEVuZCxcbiAgICAgICAgICAgICAgICBvblRvdWNoQ2FuY2VsOiB0aGlzLm9uVG91Y2hDYW5jZWwsXG4gICAgICAgICAgICAgICAgb25Nb3VzZURvd246IHRoaXMub25Nb3VzZURvd24sXG4gICAgICAgICAgICAgICAgb25Nb3VzZVVwOiB0aGlzLm9uTW91c2VVcCxcbiAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU6IHRoaXMub25Nb3VzZUxlYXZlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIGNoaWxkID0gUmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG4gICAgICAgICAgICBpZiAoIWRpc2FibGVkICYmIHRoaXMuc3RhdGUuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9jaGlsZCRwcm9wcyA9IGNoaWxkLnByb3BzLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZSA9IF9jaGlsZCRwcm9wcy5zdHlsZSxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gX2NoaWxkJHByb3BzLmNsYXNzTmFtZTtcblxuICAgICAgICAgICAgICAgIGlmIChhY3RpdmVTdHlsZSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFjdGl2ZVN0eWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZSA9IF9leHRlbmRzKHt9LCBzdHlsZSwgYWN0aXZlU3R5bGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoY2xhc3NOYW1lLCBhY3RpdmVDbGFzc05hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBfZXh0ZW5kcyh7IGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZTogc3R5bGUgfSwgZXZlbnRzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBldmVudHMpO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFRvdWNoRmVlZGJhY2s7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IFRvdWNoRmVlZGJhY2s7XG5cblRvdWNoRmVlZGJhY2suZGVmYXVsdFByb3BzID0ge1xuICAgIGRpc2FibGVkOiBmYWxzZVxufTsiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9Ub3VjaEZlZWRiYWNrJzsiLCJpbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eSc7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxudmFyIE5vdGljZSA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhOb3RpY2UsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIE5vdGljZSgpIHtcbiAgICB2YXIgX3JlZjtcblxuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTm90aWNlKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9yZWYgPSBOb3RpY2UuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihOb3RpY2UpKS5jYWxsLmFwcGx5KF9yZWYsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLmNsZWFyQ2xvc2VUaW1lcigpO1xuICAgICAgX3RoaXMucHJvcHMub25DbG9zZSgpO1xuICAgIH0sIF90aGlzLnN0YXJ0Q2xvc2VUaW1lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5kdXJhdGlvbikge1xuICAgICAgICBfdGhpcy5jbG9zZVRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMuY2xvc2UoKTtcbiAgICAgICAgfSwgX3RoaXMucHJvcHMuZHVyYXRpb24gKiAxMDAwKTtcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5jbGVhckNsb3NlVGltZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoX3RoaXMuY2xvc2VUaW1lcikge1xuICAgICAgICBjbGVhclRpbWVvdXQoX3RoaXMuY2xvc2VUaW1lcik7XG4gICAgICAgIF90aGlzLmNsb3NlVGltZXIgPSBudWxsO1xuICAgICAgfVxuICAgIH0sIF90ZW1wKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE5vdGljZSwgW3tcbiAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5zdGFydENsb3NlVGltZXIoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy5jbGVhckNsb3NlVGltZXIoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX2NsYXNzTmFtZTtcblxuICAgICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICAgIHZhciBjb21wb25lbnRDbGFzcyA9IHByb3BzLnByZWZpeENscyArICctbm90aWNlJztcbiAgICAgIHZhciBjbGFzc05hbWUgPSAoX2NsYXNzTmFtZSA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZSwgJycgKyBjb21wb25lbnRDbGFzcywgMSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lLCBjb21wb25lbnRDbGFzcyArICctY2xvc2FibGUnLCBwcm9wcy5jbG9zYWJsZSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lLCBwcm9wcy5jbGFzc05hbWUsICEhcHJvcHMuY2xhc3NOYW1lKSwgX2NsYXNzTmFtZSk7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiBjbGFzc05hbWVzKGNsYXNzTmFtZSksIHN0eWxlOiBwcm9wcy5zdHlsZSB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIHsgY2xhc3NOYW1lOiBjb21wb25lbnRDbGFzcyArICctY29udGVudCcgfSxcbiAgICAgICAgICBwcm9wcy5jaGlsZHJlblxuICAgICAgICApLFxuICAgICAgICBwcm9wcy5jbG9zYWJsZSA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2EnLFxuICAgICAgICAgIHsgdGFiSW5kZXg6ICcwJywgb25DbGljazogdGhpcy5jbG9zZSwgY2xhc3NOYW1lOiBjb21wb25lbnRDbGFzcyArICctY2xvc2UnIH0sXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHsgY2xhc3NOYW1lOiBjb21wb25lbnRDbGFzcyArICctY2xvc2UteCcgfSlcbiAgICAgICAgKSA6IG51bGxcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE5vdGljZTtcbn0oQ29tcG9uZW50KTtcblxuTm90aWNlLnByb3BUeXBlcyA9IHtcbiAgZHVyYXRpb246IFByb3BUeXBlcy5udW1iZXIsXG4gIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueVxufTtcbk5vdGljZS5kZWZhdWx0UHJvcHMgPSB7XG4gIG9uRW5kOiBmdW5jdGlvbiBvbkVuZCgpIHt9LFxuICBvbkNsb3NlOiBmdW5jdGlvbiBvbkNsb3NlKCkge30sXG5cbiAgZHVyYXRpb246IDEuNSxcbiAgc3R5bGU6IHtcbiAgICByaWdodDogJzUwJSdcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IE5vdGljZTsiLCJpbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcyc7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eSc7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgQW5pbWF0ZSBmcm9tICdyYy1hbmltYXRlJztcbmltcG9ydCBjcmVhdGVDaGFpbmVkRnVuY3Rpb24gZnJvbSAncmMtdXRpbC9lcy9jcmVhdGVDaGFpbmVkRnVuY3Rpb24nO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgTm90aWNlIGZyb20gJy4vTm90aWNlJztcblxudmFyIHNlZWQgPSAwO1xudmFyIG5vdyA9IERhdGUubm93KCk7XG5cbmZ1bmN0aW9uIGdldFV1aWQoKSB7XG4gIHJldHVybiAncmNOb3RpZmljYXRpb25fJyArIG5vdyArICdfJyArIHNlZWQrKztcbn1cblxudmFyIE5vdGlmaWNhdGlvbiA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhOb3RpZmljYXRpb24sIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIE5vdGlmaWNhdGlvbigpIHtcbiAgICB2YXIgX3JlZjtcblxuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTm90aWZpY2F0aW9uKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9yZWYgPSBOb3RpZmljYXRpb24uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihOb3RpZmljYXRpb24pKS5jYWxsLmFwcGx5KF9yZWYsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG5vdGljZXM6IFtdXG4gICAgfSwgX3RoaXMuYWRkID0gZnVuY3Rpb24gKG5vdGljZSkge1xuICAgICAgdmFyIGtleSA9IG5vdGljZS5rZXkgPSBub3RpY2Uua2V5IHx8IGdldFV1aWQoKTtcbiAgICAgIF90aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChwcmV2aW91c1N0YXRlKSB7XG4gICAgICAgIHZhciBub3RpY2VzID0gcHJldmlvdXNTdGF0ZS5ub3RpY2VzO1xuICAgICAgICBpZiAoIW5vdGljZXMuZmlsdGVyKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgcmV0dXJuIHYua2V5ID09PSBrZXk7XG4gICAgICAgIH0pLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBub3RpY2VzOiBub3RpY2VzLmNvbmNhdChub3RpY2UpXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSwgX3RoaXMucmVtb3ZlID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgX3RoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKHByZXZpb3VzU3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBub3RpY2VzOiBwcmV2aW91c1N0YXRlLm5vdGljZXMuZmlsdGVyKGZ1bmN0aW9uIChub3RpY2UpIHtcbiAgICAgICAgICAgIHJldHVybiBub3RpY2Uua2V5ICE9PSBrZXk7XG4gICAgICAgICAgfSlcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH0sIF90ZW1wKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE5vdGlmaWNhdGlvbiwgW3tcbiAgICBrZXk6ICdnZXRUcmFuc2l0aW9uTmFtZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFRyYW5zaXRpb25OYW1lKCkge1xuICAgICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICAgIHZhciB0cmFuc2l0aW9uTmFtZSA9IHByb3BzLnRyYW5zaXRpb25OYW1lO1xuICAgICAgaWYgKCF0cmFuc2l0aW9uTmFtZSAmJiBwcm9wcy5hbmltYXRpb24pIHtcbiAgICAgICAgdHJhbnNpdGlvbk5hbWUgPSBwcm9wcy5wcmVmaXhDbHMgKyAnLScgKyBwcm9wcy5hbmltYXRpb247XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJhbnNpdGlvbk5hbWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXMsXG4gICAgICAgICAgX2NsYXNzTmFtZTtcblxuICAgICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICAgIHZhciBub3RpY2VOb2RlcyA9IHRoaXMuc3RhdGUubm90aWNlcy5tYXAoZnVuY3Rpb24gKG5vdGljZSkge1xuICAgICAgICB2YXIgb25DbG9zZSA9IGNyZWF0ZUNoYWluZWRGdW5jdGlvbihfdGhpczIucmVtb3ZlLmJpbmQoX3RoaXMyLCBub3RpY2Uua2V5KSwgbm90aWNlLm9uQ2xvc2UpO1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBOb3RpY2UsXG4gICAgICAgICAgX2V4dGVuZHMoe1xuICAgICAgICAgICAgcHJlZml4Q2xzOiBwcm9wcy5wcmVmaXhDbHNcbiAgICAgICAgICB9LCBub3RpY2UsIHtcbiAgICAgICAgICAgIG9uQ2xvc2U6IG9uQ2xvc2VcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBub3RpY2UuY29udGVudFxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgICB2YXIgY2xhc3NOYW1lID0gKF9jbGFzc05hbWUgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWUsIHByb3BzLnByZWZpeENscywgMSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lLCBwcm9wcy5jbGFzc05hbWUsICEhcHJvcHMuY2xhc3NOYW1lKSwgX2NsYXNzTmFtZSk7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiBjbGFzc25hbWVzKGNsYXNzTmFtZSksIHN0eWxlOiBwcm9wcy5zdHlsZSB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIEFuaW1hdGUsXG4gICAgICAgICAgeyB0cmFuc2l0aW9uTmFtZTogdGhpcy5nZXRUcmFuc2l0aW9uTmFtZSgpIH0sXG4gICAgICAgICAgbm90aWNlTm9kZXNcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTm90aWZpY2F0aW9uO1xufShDb21wb25lbnQpO1xuXG5Ob3RpZmljYXRpb24ucHJvcFR5cGVzID0ge1xuICBwcmVmaXhDbHM6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRyYW5zaXRpb25OYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBhbmltYXRpb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKSxcbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3Rcbn07XG5Ob3RpZmljYXRpb24uZGVmYXVsdFByb3BzID0ge1xuICBwcmVmaXhDbHM6ICdybWMtbm90aWZpY2F0aW9uJyxcbiAgYW5pbWF0aW9uOiAnZmFkZScsXG4gIHN0eWxlOiB7XG4gICAgdG9wOiA2NSxcbiAgICBsZWZ0OiAnNTAlJ1xuICB9XG59O1xuXG5cbk5vdGlmaWNhdGlvbi5uZXdJbnN0YW5jZSA9IGZ1bmN0aW9uIG5ld05vdGlmaWNhdGlvbkluc3RhbmNlKHByb3BlcnRpZXMsIGNhbGxiYWNrKSB7XG4gIHZhciBfcmVmMiA9IHByb3BlcnRpZXMgfHwge30sXG4gICAgICBnZXRDb250YWluZXIgPSBfcmVmMi5nZXRDb250YWluZXIsXG4gICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmMiwgWydnZXRDb250YWluZXInXSk7XG5cbiAgdmFyIGRpdiA9IHZvaWQgMDtcbiAgaWYgKGdldENvbnRhaW5lcikge1xuICAgIGRpdiA9IGdldENvbnRhaW5lcigpO1xuICB9IGVsc2Uge1xuICAgIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgfVxuICB2YXIgY2FsbGVkID0gZmFsc2U7XG4gIGZ1bmN0aW9uIHJlZihub3RpZmljYXRpb24pIHtcbiAgICBpZiAoY2FsbGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNhbGxlZCA9IHRydWU7XG4gICAgY2FsbGJhY2soe1xuICAgICAgbm90aWNlOiBmdW5jdGlvbiBub3RpY2Uobm90aWNlUHJvcHMpIHtcbiAgICAgICAgbm90aWZpY2F0aW9uLmFkZChub3RpY2VQcm9wcyk7XG4gICAgICB9LFxuICAgICAgcmVtb3ZlTm90aWNlOiBmdW5jdGlvbiByZW1vdmVOb3RpY2Uoa2V5KSB7XG4gICAgICAgIG5vdGlmaWNhdGlvbi5yZW1vdmUoa2V5KTtcbiAgICAgIH0sXG5cbiAgICAgIGNvbXBvbmVudDogbm90aWZpY2F0aW9uLFxuICAgICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgUmVhY3RET00udW5tb3VudENvbXBvbmVudEF0Tm9kZShkaXYpO1xuICAgICAgICBpZiAoIWdldENvbnRhaW5lcikge1xuICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZGl2KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIFJlYWN0RE9NLnJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KE5vdGlmaWNhdGlvbiwgX2V4dGVuZHMoe30sIHByb3BzLCB7IHJlZjogcmVmIH0pKSwgZGl2KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5vdGlmaWNhdGlvbjsiLCJpbXBvcnQgTm90aWZpY2F0aW9uIGZyb20gJy4vTm90aWZpY2F0aW9uJztcbmV4cG9ydCBkZWZhdWx0IE5vdGlmaWNhdGlvbjsiXSwic291cmNlUm9vdCI6IiJ9