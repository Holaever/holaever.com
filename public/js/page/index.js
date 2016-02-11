'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PageHeader = function (_React$Component) {
    _inherits(PageHeader, _React$Component);

    function PageHeader(props) {
        _classCallCheck(this, PageHeader);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PageHeader).call(this, props));

        _this.displayName = '';
        return _this;
    }

    _createClass(PageHeader, [{
        key: 'render',
        value: function render() {
            var urku_search_useTag = '<use xlink:href="assets/img/symbols.svg#icon-search"></use>',
                mobile_menu_useTag_1 = '<use xlink:href="assets/img/symbols.svg#bar"></use>',
                mobile_menu_useTag_2 = '<use xlink:href="assets/img/symbols.svg#bar"></use>',
                mobile_menu_useTag_3 = '<use xlink:href="assets/img/symbols.svg#bar"></use>';
            return React.createElement(
                'header',
                { className: 'ae-container-fluid ae-container-fluid--full rk-header' },
                React.createElement('input', { type: 'checkbox', id: 'mobile-menu', className: 'rk-mobile-menu' }),
                React.createElement(
                    'label',
                    { 'for': 'mobile-menu' },
                    React.createElement('svg', { dangerouslySetInnerHTML: { __html: mobile_menu_useTag_1 } }),
                    React.createElement('svg', { dangerouslySetInnerHTML: { __html: mobile_menu_useTag_2 } }),
                    React.createElement('svg', { dangerouslySetInnerHTML: { __html: mobile_menu_useTag_3 } })
                ),
                React.createElement(
                    'div',
                    { className: 'ae-container-fluid rk-topbar' },
                    React.createElement(
                        'h1',
                        { className: 'rk-logo' },
                        React.createElement(
                            'a',
                            { href: 'index.html' },
                            'urku portfolio',
                            React.createElement(
                                'sup',
                                null,
                                'tm'
                            )
                        )
                    ),
                    React.createElement(
                        'nav',
                        { className: 'rk-navigation' },
                        React.createElement(
                            'ul',
                            { className: 'rk-menu' },
                            React.createElement(
                                'li',
                                { className: 'rk-menu__item' },
                                React.createElement(
                                    'a',
                                    { href: 'index.html', className: 'rk-menu__link' },
                                    'Home'
                                )
                            ),
                            React.createElement(
                                'li',
                                { className: 'rk-menu__item' },
                                React.createElement(
                                    'a',
                                    { href: 'portfolio.html', className: 'rk-menu__link' },
                                    'Portfolio'
                                ),
                                React.createElement(
                                    'nav',
                                    { className: 'rk-menu__sub' },
                                    React.createElement(
                                        'ul',
                                        { className: 'rk-container' },
                                        React.createElement(
                                            'li',
                                            { className: 'rk-menu__item' },
                                            React.createElement(
                                                'a',
                                                { href: 'portfolio.html', className: 'rk-menu__link' },
                                                'Flex'
                                            )
                                        ),
                                        React.createElement(
                                            'li',
                                            { className: 'rk-menu__item' },
                                            React.createElement(
                                                'a',
                                                { href: 'portfolio-alt.html', className: 'rk-menu__link' },
                                                'Switch'
                                            )
                                        ),
                                        React.createElement(
                                            'li',
                                            { className: 'rk-menu__item' },
                                            React.createElement(
                                                'a',
                                                { href: 'portfolio-raw.html', className: 'rk-menu__link' },
                                                'Static'
                                            )
                                        ),
                                        React.createElement(
                                            'li',
                                            { className: 'rk-menu__item' },
                                            React.createElement(
                                                'a',
                                                { href: 'portfolio-masonry.html', className: 'rk-menu__link' },
                                                'Masonry'
                                            )
                                        ),
                                        React.createElement(
                                            'li',
                                            { className: 'rk-menu__item' },
                                            React.createElement(
                                                'a',
                                                { href: 'blog.html', className: 'rk-menu__link' },
                                                'Blog'
                                            )
                                        ),
                                        React.createElement(
                                            'li',
                                            { className: 'active rk-menu__item' },
                                            React.createElement(
                                                'a',
                                                { href: '#0', className: 'rk-menu__link' },
                                                'Pages'
                                            ),
                                            React.createElement(
                                                'nav',
                                                { className: 'rk-menu__sub' },
                                                React.createElement(
                                                    'ul',
                                                    { className: 'rk-container' },
                                                    React.createElement(
                                                        'li',
                                                        { className: 'rk-menu__item' },
                                                        React.createElement(
                                                            'a',
                                                            { href: 'about.html', className: 'rk-menu__link' },
                                                            'About'
                                                        )
                                                    ),
                                                    React.createElement(
                                                        'li',
                                                        { className: 'rk-menu__item' },
                                                        React.createElement(
                                                            'a',
                                                            { href: 'documentation.html', className: 'rk-menu__link' },
                                                            'Documentation'
                                                        )
                                                    ),
                                                    React.createElement(
                                                        'li',
                                                        { className: 'rk-menu__item' },
                                                        React.createElement(
                                                            'a',
                                                            { href: 'design-styles.html', className: 'rk-menu__link' },
                                                            'Design Styles'
                                                        )
                                                    )
                                                )
                                            )
                                        ),
                                        React.createElement(
                                            'li',
                                            { className: 'rk-menu__item' },
                                            React.createElement(
                                                'a',
                                                { href: 'contact.html', className: 'rk-menu__link' },
                                                'Contact Us'
                                            )
                                        )
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            'form',
                            { className: 'rk-search' },
                            React.createElement('input', { type: 'text', placeholder: 'Search', id: 'urku-search', className: 'rk-search-field' }),
                            React.createElement(
                                'label',
                                { 'for': 'urku-search' },
                                React.createElement('svg', { dangerouslySetInnerHTML: { __html: urku_search_useTag } })
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

        var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(Portrait).call(this, props));

        _this2.displayName = '';
        return _this2;
    }

    _createClass(Portrait, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { 'class': 'ae-container-fluid ae-container-fluid--inner rk-main' },
                React.createElement(
                    'div',
                    { 'class': 'ae-grid au-xs-ta-center au-mb-4' },
                    React.createElement(
                        'div',
                        { 'class': 'ae-grid__item item-lg-4 ae-kappa au-mb-3' },
                        React.createElement('img', { src: 'assets/img/team-1.jpg', alt: '', 'class': 'au-mb-3' }),
                        React.createElement(
                            'h5',
                            { 'class': 'ae-u-bolder au-mt-2' },
                            'Robert T. Williams'
                        ),
                        React.createElement(
                            'p',
                            { 'class': 'ae-u-bolder au-mb-3' },
                            'Graphic Designer'
                        ),
                        React.createElement(
                            'p',
                            { 'class': 'au-lg-ta-left au-mb-3 au-pl-4 au-pr-4' },
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
                        ),
                        React.createElement(
                            'a',
                            { href: '#0', 'class': 'ae-u-bolder au-underline' },
                            '@robertwilliams'
                        )
                    )
                )
            );
        }
    }]);

    return Portrait;
}(React.Component);

ReactDOM.render(React.createElement(PageHeader, null), document.getElementById('page'));