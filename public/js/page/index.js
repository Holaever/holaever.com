'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function () {
    var page;
    page = document.createElement('div');
    page.id = 'page';
    document.body.insertBefore(page, document.body.firstChild);
})();

var PageHeader = function (_React$Component) {
    _inherits(PageHeader, _React$Component);

    function PageHeader(props) {
        _classCallCheck(this, PageHeader);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(PageHeader).call(this, props));
    }

    _createClass(PageHeader, [{
        key: 'render',
        value: function render() {
            var hs_search_useTag = '<use xlink:href="public/img/st/symbols.svg#icon-search"></use>',
                mobile_menu_useTag_1 = '<use xlink:href="public/img/st/symbols.svg#bar"></use>',
                mobile_menu_useTag_2 = '<use xlink:href="public/img/st/symbols.svg#bar"></use>',
                mobile_menu_useTag_3 = '<use xlink:href="public/img/st/symbols.svg#bar"></use>';
            return React.createElement(
                'header',
                { className: 'hs-header' },
                React.createElement('input', { type: 'checkbox', id: 'mobile-menu', className: 'hs-mobile-menu' }),
                React.createElement(
                    'label',
                    { 'for': 'mobile-menu' },
                    React.createElement('svg', { dangerouslySetInnerHTML: { __html: mobile_menu_useTag_1 } }),
                    React.createElement('svg', { dangerouslySetInnerHTML: { __html: mobile_menu_useTag_2 } }),
                    React.createElement('svg', { dangerouslySetInnerHTML: { __html: mobile_menu_useTag_3 } })
                ),
                React.createElement(
                    'div',
                    { className: 'hs-topbar' },
                    React.createElement(
                        'h1',
                        { className: 'hs-logo' },
                        React.createElement(
                            'a',
                            { href: 'index.html' },
                            'Holaever',
                            React.createElement(
                                'sup',
                                null,
                                'tm'
                            )
                        )
                    ),
                    React.createElement(
                        'nav',
                        { className: 'hs-navigation' },
                        React.createElement(
                            'ul',
                            { className: 'hs-menu' },
                            React.createElement(
                                'li',
                                { className: 'hs-menu-item' },
                                React.createElement(
                                    'a',
                                    { href: 'index.html', className: 'hs-menu-link' },
                                    '首页'
                                )
                            ),
                            React.createElement(
                                'li',
                                { className: 'hs-menu-item' },
                                React.createElement(
                                    'a',
                                    { href: 'portfolio.html', className: 'hs-menu-link' },
                                    '作品'
                                )
                            ),
                            React.createElement(
                                'li',
                                { className: 'hs-menu-item' },
                                React.createElement(
                                    'a',
                                    { href: 'blog.html', className: 'hs-menu-link' },
                                    '日志'
                                )
                            ),
                            React.createElement(
                                'li',
                                { className: 'active hs-menu-item' },
                                React.createElement(
                                    'a',
                                    { href: '#0', className: 'hs-menu-link' },
                                    '关于'
                                )
                            ),
                            React.createElement(
                                'li',
                                { className: 'hs-menu-item' },
                                React.createElement(
                                    'a',
                                    { href: 'contact.html', className: 'hs-menu-link' },
                                    '联系'
                                )
                            )
                        ),
                        React.createElement(
                            'form',
                            { className: 'hs-search' },
                            React.createElement('input', { type: 'text', placeholder: 'Search', id: 'hs-search', className: 'hs-search-field' }),
                            React.createElement(
                                'label',
                                { 'for': 'hs-search' },
                                React.createElement('svg', { dangerouslySetInnerHTML: { __html: hs_search_useTag } })
                            )
                        )
                    )
                )
            );
        }
    }]);

    return PageHeader;
}(React.Component);

var Portrait = function (_React$Component2) {
    _inherits(Portrait, _React$Component2);

    function Portrait(props) {
        _classCallCheck(this, Portrait);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Portrait).call(this, props));
    }

    _createClass(Portrait, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'hs-main' },
                React.createElement(
                    'div',
                    { className: '' },
                    React.createElement(
                        'div',
                        { className: '' },
                        React.createElement('img', { src: 'public/img/st/team-1.jpg', alt: '', className: '' }),
                        React.createElement(
                            'h5',
                            { className: '' },
                            'Robert T. Williams'
                        ),
                        React.createElement(
                            'p',
                            { className: '' },
                            'Graphic Designer'
                        ),
                        React.createElement(
                            'p',
                            { className: '' },
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
                        ),
                        React.createElement(
                            'a',
                            { href: '#', className: '' },
                            '@robertwilliams'
                        )
                    )
                )
            );
        }
    }]);

    return Portrait;
}(React.Component);

var Page = function (_React$Component3) {
    _inherits(Page, _React$Component3);

    function Page(props) {
        _classCallCheck(this, Page);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Page).call(this, props));
    }

    _createClass(Page, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(PageHeader, null),
                React.createElement(Portrait, null)
            );
        }
    }]);

    return Page;
}(React.Component);

ReactDOM.render(React.createElement(Page, null), document.getElementById('page'));