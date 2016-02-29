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

var content = {
    id: 0,
    members: [{
        id: 0.1,
        'photo': 'public/img/judy.jpg',
        'name': '丁洁岚',
        'function': '视觉设计师',
        'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
        'social': '@robertwilliams'
    }, {
        id: 0.2,
        'photo': 'public/img/tony.jpg',
        'name': '沈维忠',
        'function': '创始人 & CEO',
        'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
        'social': '@robertwilliams'
    }, {
        id: 0.3,
        'photo': 'public/img/kain.jpg',
        'name': '石胜',
        'function': '全堆工程师',
        'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
        'social': '@robertwilliams'
    }],
    about: [{
        id: 0.1,
        title: '心态',
        disc: ['每一个成员见到别的伙伴，或面对新的工具、技术，或发现身边美好的事物，或面对客户，或面对每一次的挑战...... 都会亲切地说声 “哈喽”！']
    }, {
        id: 0.1,
        title: '能力',
        disc: ['每一个成员都在不停地学习、实践新的知识、技能，恰巧这些源源不断的积累让我们掌握了些什么以打造不同寻常、电影级别的软件产品。']
    }, {
        id: 0.1,
        title: '作为',
        disc: ['每一个成员都有自己的专长，但都不为职责、角色限制，全力以赴！']
    }]
};

var PageHeader = function (_React$Component) {
    _inherits(PageHeader, _React$Component);

    function PageHeader(props) {
        _classCallCheck(this, PageHeader);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(PageHeader).call(this, props));
    }

    _createClass(PageHeader, [{
        key: 'render',
        value: function render() {
            var hs_search_useTag = '<use xlink:href="public/img/symbols.svg#icon-search"></use>',
                mobile_menu_useTag_1 = '<use xlink:href="public/img/symbols.svg#bar"></use>',
                mobile_menu_useTag_2 = '<use xlink:href="public/img/symbols.svg#bar"></use>',
                mobile_menu_useTag_3 = '<use xlink:href="public/img/symbols.svg#bar"></use>';
            return React.createElement(
                'header',
                { className: 'ae-container-fluid ae-container-fluid--full rk-header' },
                React.createElement('input', { type: 'checkbox', id: 'mobile-menu', className: 'rk-mobile-menu' }),
                React.createElement(
                    'label',
                    { htmlFor: 'mobile-menu' },
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
                            'Holaever',
                            React.createElement(
                                'sup',
                                null,
                                'inc'
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
                                    { href: 'index.html', 'data-hint': '敬请期待', className: 'rk-menu__link hint--bottom', onclick: false },
                                    '首页'
                                )
                            ),
                            React.createElement(
                                'li',
                                { className: 'rk-menu__item' },
                                React.createElement(
                                    'a',
                                    { href: 'portfolio.html', 'data-hint': '敬请期待', className: 'rk-menu__link hint--bottom' },
                                    '作品'
                                )
                            ),
                            React.createElement(
                                'li',
                                { className: 'rk-menu__item' },
                                React.createElement(
                                    'a',
                                    { href: 'blog.html', 'data-hint': '敬请期待', className: 'rk-menu__link hint--bottom' },
                                    '日志'
                                )
                            ),
                            React.createElement(
                                'li',
                                { className: 'active rk-menu__item' },
                                React.createElement(
                                    'a',
                                    { href: '#0', className: 'rk-menu__link' },
                                    '关于'
                                )
                            ),
                            React.createElement(
                                'li',
                                { className: 'rk-menu__item' },
                                React.createElement(
                                    'a',
                                    { href: 'contact.html', 'data-hint': '敬请期待', className: 'rk-menu__link hint--bottom' },
                                    '联系'
                                )
                            )
                        ),
                        React.createElement(
                            'form',
                            { className: 'rk-search' },
                            React.createElement('input', { type: 'text', placeholder: '搜索', id: 'rk-search', className: 'rk-search-field' }),
                            React.createElement(
                                'label',
                                { htmlFor: 'rk-search' },
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
                { className: 'ae-grid__item item-lg-4 ae-kappa au-mb-3' },
                React.createElement('img', { src: this.props.member.photo, alt: '', className: 'au-mb-3' }),
                React.createElement(
                    'h5',
                    { className: 'ae-u-bolder au-mt-2' },
                    this.props.member.name
                ),
                React.createElement(
                    'p',
                    { className: 'ae-u-bolder au-mb-3' },
                    this.props.member.function
                )
            );
        }
    }]);

    return Portrait;
}(React.Component);

var Portraits = function (_React$Component3) {
    _inherits(Portraits, _React$Component3);

    function Portraits(props) {
        _classCallCheck(this, Portraits);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Portraits).call(this, props));
    }

    _createClass(Portraits, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'ae-grid au-xs-ta-center au-mb-4' },
                this.props.members.map(function (member) {
                    return React.createElement(Portrait, { key: member.id, member: member });
                })
            );
        }
    }]);

    return Portraits;
}(React.Component);

var Quotes = function (_React$Component4) {
    _inherits(Quotes, _React$Component4);

    function Quotes(props) {
        _classCallCheck(this, Quotes);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Quotes).call(this, props));
    }

    _createClass(Quotes, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'ae-grid au-pt-2' },
                React.createElement(
                    'div',
                    { className: 'ae-grid__item item-lg-8 item-lg--offset-2' },
                    React.createElement(
                        'h4',
                        { className: 'ae-u-bolder' },
                        '我们致力于打造不同寻常、电影级别的软件产品！'
                    ),
                    React.createElement(
                        'p',
                        null,
                        '我们是一群创意的思想家和制造者，致力于打造不同寻常、电影级别的软件产品，这是我们的品牌。我们只维护一份解决方案，不断迭代更新、追求完美，以确保较高程度的质量、灵活、效率，并与时俱进！团队、公司、产品，Holaever 的发展路线。'
                    )
                )
            );
        }
    }]);

    return Quotes;
}(React.Component);

var About = function (_React$Component5) {
    _inherits(About, _React$Component5);

    function About(props) {
        _classCallCheck(this, About);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(About).call(this, props));
    }

    _createClass(About, [{
        key: 'render',
        value: function render() {
            var theAbout = this.props.about.map(function (abt) {
                return React.createElement(
                    'div',
                    { className: 'ae-grid__item--alt item-lg-4' },
                    React.createElement(
                        'h6',
                        { className: 'ae-u-boldest' },
                        abt.title
                    ),
                    abt.disc.map(function (element) {
                        return React.createElement(
                            'p',
                            { className: 'au-lh-3' },
                            element
                        );
                    })
                );
            });
            return React.createElement(
                'div',
                { className: 'ae-grid ae-grid--alt au-xs-ptp-1' },
                theAbout
            );
        }
    }]);

    return About;
}(React.Component);

var Main = function (_React$Component6) {
    _inherits(Main, _React$Component6);

    function Main(props) {
        _classCallCheck(this, Main);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Main).call(this, props));
    }

    _createClass(Main, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'ae-container-fluid ae-container-fluid--inner rk-main' },
                React.createElement(Portraits, { members: content.members }),
                React.createElement(Quotes, null),
                React.createElement(About, { about: content.about })
            );
        }
    }]);

    return Main;
}(React.Component);

var Footer = function (_React$Component7) {
    _inherits(Footer, _React$Component7);

    function Footer(props) {
        _classCallCheck(this, Footer);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Footer).call(this, props));
    }

    _createClass(Footer, [{
        key: 'render',
        value: function render() {
            var facebook = '<use xlink:href="public/img/symbols.svg#icon-facebook"></use>',
                twitter = '<use xlink:href="public/img/symbols.svg#icon-twitter"></use>',
                pinterest = '<use xlink:href="public/img/symbols.svg#icon-pinterest"></use>',
                tumblr = '<use xlink:href="public/img/symbols.svg#icon-tumblr"></use>';
            return React.createElement(
                'div',
                { className: 'ae-container-fluid rk-footer' },
                React.createElement(
                    'div',
                    { className: 'ae-grid ae-grid--collapse' },
                    React.createElement(
                        'div',
                        { className: 'ae-grid__item item-lg-4 au-xs-ta-center au-lg-ta-left' },
                        React.createElement(
                            'ul',
                            { className: 'rk-menu rk-footer-menu' },
                            React.createElement(
                                'li',
                                { className: 'rk-menu__item' },
                                React.createElement(
                                    'a',
                                    { href: 'about.html', className: 'rk-menu__link' },
                                    '关于'
                                )
                            ),
                            React.createElement(
                                'li',
                                { className: 'rk-menu__item' },
                                React.createElement(
                                    'a',
                                    { href: 'documentation.html', 'data-hint': '敬请期待', className: 'rk-menu__link hint--top' },
                                    '作品'
                                )
                            ),
                            React.createElement(
                                'li',
                                { className: 'rk-menu__item' },
                                React.createElement(
                                    'a',
                                    { href: 'contact.html', 'data-hint': '敬请期待', className: 'rk-menu__link hint--top' },
                                    '联系'
                                )
                            )
                        ),
                        React.createElement(
                            'p',
                            { className: 'rk-footer__text rk-footer__copy ' },
                            React.createElement(
                                'span',
                                { className: 'ae-u-bold' },
                                '© '
                            ),
                            React.createElement(
                                'span',
                                { className: 'ae-u-bolder' },
                                '2016 Holaever, Inc '
                            ),
                            '保留一切权力。'
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'ae-grid__item item-lg-4 au-xs-ta-center' },
                        React.createElement(
                            'a',
                            { href: 'https://www.facebook.com/holaever/', className: 'rk-social-btn' },
                            React.createElement(
                                'svg',
                                null,
                                React.createElement('svg', { dangerouslySetInnerHTML: { __html: facebook } })
                            )
                        ),
                        React.createElement(
                            'a',
                            { href: '#0', 'data-hint': '敬请期待', className: 'rk-social-btn hint--top' },
                            React.createElement(
                                'svg',
                                null,
                                React.createElement('svg', { dangerouslySetInnerHTML: { __html: twitter } })
                            )
                        ),
                        React.createElement(
                            'a',
                            { href: '#0', 'data-hint': '敬请期待', className: 'rk-social-btn hint--top' },
                            React.createElement(
                                'svg',
                                null,
                                React.createElement('svg', { dangerouslySetInnerHTML: { __html: pinterest } })
                            )
                        ),
                        React.createElement(
                            'a',
                            { href: '#0', 'data-hint': '敬请期待', className: 'rk-social-btn hint--top' },
                            React.createElement(
                                'svg',
                                null,
                                React.createElement('svg', { dangerouslySetInnerHTML: { __html: tumblr } })
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'ae-grid__item item-lg-4 au-xs-ta-center au-lg-ta-right' },
                        React.createElement(
                            'p',
                            { className: 'rk-footer__text rk-footer__contact ' },
                            React.createElement(
                                'span',
                                { className: 'ae-u-bold' },
                                '电子邮件: '
                            ),
                            React.createElement(
                                'span',
                                { className: 'ae-u-bolder' },
                                React.createElement(
                                    'a',
                                    { href: 'mailto:hello@holaever.com', className: 'rk-dark-color ' },
                                    'hello@holaever.com'
                                )
                            )
                        ),
                        React.createElement(
                            'p',
                            { 'class': 'rk-footer__text rk-footer__by' },
                            '我们打造非比寻常、电影级别的软件产品!'
                        )
                    )
                )
            );
        }
    }]);

    return Footer;
}(React.Component);

var Page = function (_React$Component8) {
    _inherits(Page, _React$Component8);

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
                React.createElement(Main, null),
                React.createElement(Footer, null)
            );
        }
    }]);

    return Page;
}(React.Component);

ReactDOM.render(React.createElement(Page, null), document.getElementById('page'));