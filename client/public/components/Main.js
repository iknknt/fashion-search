var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';

var Main = function (_React$Component) {
  _inherits(Main, _React$Component);

  function Main() {
    _classCallCheck(this, Main);

    return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));
  }

  _createClass(Main, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'main-wrapper' },
        React.createElement(
          'div',
          { className: 'main' },
          React.createElement(
            'div',
            { className: 'copy-container' },
            React.createElement(
              'h1',
              null,
              'Hello, World.'
            ),
            React.createElement(
              'h2',
              null,
              '\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u306E\u4E16\u754C\u3078\u3088\u3046\u3053\u305D\uFF01'
            )
          ),
          React.createElement(
            'div',
            { className: 'lesson-container' },
            React.createElement(
              'h3',
              { className: 'section-title' },
              '\u5B66\u3079\u308B\u30EC\u30C3\u30B9\u30F3'
            ),
            React.createElement(
              'div',
              { className: 'lesson-card' },
              React.createElement(
                'div',
                { className: 'lesson-item' },
                React.createElement(
                  'p',
                  null,
                  'HTML & CSS'
                ),
                React.createElement('img', { src: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg' })
              )
            ),
            React.createElement(
              'div',
              { className: 'lesson-card' },
              React.createElement(
                'div',
                { className: 'lesson-item' },
                React.createElement(
                  'p',
                  null,
                  'Sass'
                ),
                React.createElement('img', { src: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/sass.svg' })
              )
            ),
            React.createElement(
              'div',
              { className: 'lesson-card' },
              React.createElement(
                'div',
                { className: 'lesson-item' },
                React.createElement(
                  'p',
                  null,
                  'JavaScript'
                ),
                React.createElement('img', { src: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/es6.svg' })
              )
            ),
            React.createElement(
              'div',
              { className: 'lesson-card' },
              React.createElement(
                'div',
                { className: 'lesson-item' },
                React.createElement(
                  'p',
                  null,
                  'React'
                ),
                React.createElement('img', { src: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/react.svg' })
              )
            )
          )
        )
      );
    }
  }]);

  return Main;
}(React.Component);

export default Main;