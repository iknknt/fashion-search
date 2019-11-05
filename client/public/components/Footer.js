var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';

var Footer = function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'footer' },
        React.createElement(
          'div',
          { className: 'footer-inner' },
          React.createElement(
            'div',
            { className: 'footer-logo' },
            React.createElement('img', { src: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/type_logo.png' }),
            React.createElement(
              'p',
              null,
              'Learn to code, learn to creative.'
            )
          ),
          React.createElement(
            'ul',
            { className: 'footer-list' },
            React.createElement(
              'li',
              null,
              '\u4F1A\u793E\u6982\u8981'
            ),
            React.createElement(
              'li',
              null,
              '\u63A1\u7528'
            ),
            React.createElement(
              'li',
              null,
              '\u304A\u554F\u3044\u5408\u308F\u305B'
            )
          )
        )
      );
    }
  }]);

  return Footer;
}(React.Component);

export default Footer;