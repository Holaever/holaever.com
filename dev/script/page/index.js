'use strict';



(function () {
    var page;
    page = document.createElement('div');
    page.id = 'page';
    document.body.insertBefore(page, document.body.firstChild);
})()




var content = {
    id: 0,
    members:[{
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
        disc: [
            '每一个成员见到别的伙伴，或面对新的工具、技术，或发现身边美好的事物，或面对客户，或面对每一次的挑战...... 都会亲切地说声 “哈喽”！'
        ]
    }, {
        id: 0.2,
        title: '能力',
        disc: [
            '每一个成员都在不停地学习、实践新的知识、技能，恰巧这些源源不断的积累让我们掌握了些什么以打造不同寻常、电影级别的软件产品。'
        ]
    }, {
        id: 0.3,
        title: '作为',
        disc: [
            '每一个成员都有自己的专长，但都不为职责、角色限制，全力以赴！'
        ]
    }]
};



class PageHeader extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var hs_search_useTag = '<use xlink:href="public/img/symbols.svg#icon-search"></use>',
            mobile_menu_useTag_1 = '<use xlink:href="public/img/symbols.svg#bar"></use>',
            mobile_menu_useTag_2 = '<use xlink:href="public/img/symbols.svg#bar"></use>',
            mobile_menu_useTag_3 = '<use xlink:href="public/img/symbols.svg#bar"></use>';
        return (
            <header className="ae-container-fluid ae-container-fluid--full rk-header">

                <input type="checkbox" id="mobile-menu" className="rk-mobile-menu"/>
                <label htmlFor="mobile-menu">
                    <svg dangerouslySetInnerHTML={{__html: mobile_menu_useTag_1}}></svg>
                    <svg dangerouslySetInnerHTML={{__html: mobile_menu_useTag_2}}></svg>
                    <svg dangerouslySetInnerHTML={{__html: mobile_menu_useTag_3}}></svg>
                </label>

                <div className="ae-container-fluid rk-topbar">
                    <h1 className="rk-logo"><a href="index.html">Holaever<sup>inc</sup></a></h1>
                    <nav className="rk-navigation">
                        <ul className="rk-menu">
                            <li className="rk-menu__item">
                                <a href="index.html" data-hint="敬请期待" className="rk-menu__link hint--bottom" onclick={false}>首页</a>
                            </li>
                            <li className="rk-menu__item">
                                <a href="portfolio.html" data-hint="敬请期待" className="rk-menu__link hint--bottom">作品</a>
                            </li>
                            <li className="rk-menu__item">
                                <a href="blog.html" data-hint="敬请期待" className="rk-menu__link hint--bottom">日志</a>
                            </li>
                            <li className="active rk-menu__item">
                                <a href="#0" className="rk-menu__link">关于</a>
                            </li>
                            <li className="rk-menu__item">
                                <a href="contact.html" data-hint="敬请期待" className="rk-menu__link hint--bottom">联系</a>
                            </li>
                        </ul>
                        <form className="rk-search">
                            <input type="text" placeholder="搜索" id="rk-search" className="rk-search-field"/>
                            <label htmlFor="rk-search">
                                <svg dangerouslySetInnerHTML={{__html: hs_search_useTag}}></svg>
                            </label>
                        </form>
                    </nav>
                </div>

            </header>
        );
    }
}




class Portrait extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="ae-grid__item item-lg-4 ae-kappa au-mb-3">
                <img src={this.props.member.photo} alt="" className="au-mb-3"/>
                <h5 className="ae-u-bolder au-mt-2">{this.props.member.name}</h5>
                <p className="ae-u-bolder au-mb-3">{this.props.member.function}</p>
                {/*

                <p className="au-lg-ta-left au-mb-3 au-pl-4 au-pr-4">{this.props.member.desc}</p>
                <a href="#" className="ae-u-bolder au-underline">{this.props.member.social}</a>
                */
                }
            </div>
        );
    }
}

class Portraits extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="ae-grid au-xs-ta-center au-mb-4">
                {
                    this.props.members.map((member) => {
                        return <Portrait key={member.id} member={member}/>;
                    })
                }
            </div>
        );
    }
}



class Quotes extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="ae-grid au-pt-2">
                <div className="ae-grid__item item-lg-8 item-lg--offset-2">
                    <h4 className="ae-u-bolder">我们致力于打造不同寻常、电影级别的软件产品！</h4>
                    <p>
                        我们是一群创意的思想家和制造者，致力于打造不同寻常、电影级别的软件产品，这是我们的品牌。我们只维护一份解决方案，不断迭代更新、追求完美，以确保较高程度的质量、灵活、效率，并与时俱进！团队、公司、产品，Holaever 的发展路线。
                    </p>
                </div>
            </div>
        );
    }
}



class About extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var theAbout = this.props.about.map((abt) => {
            return (
                <div className="ae-grid__item--alt item-lg-4">
                    <h6 className="ae-u-boldest">{abt.title}</h6>
                    {
                        abt.disc.map((element) => {
                            return (
                                <p className="au-lh-3">
                                    {element}
                                </p>
                            )
                        })
                    }
                </div>
            );
        });
        return (
            <div className="ae-grid ae-grid--alt au-xs-ptp-1">
                {theAbout}
            </div>
        );
    }
}



class Main extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="ae-container-fluid ae-container-fluid--inner rk-main">
                {/*<Portraits members={content.members}/>*/}
                <Portraits members={content.members}/>
                <Quotes/>
                <About about={content.about}/>
            </div>
        );
    }
}



class Footer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var facebook = '<use xlink:href="public/img/symbols.svg#icon-facebook"></use>',
            twitter = '<use xlink:href="public/img/symbols.svg#icon-twitter"></use>',
            pinterest = '<use xlink:href="public/img/symbols.svg#icon-pinterest"></use>',
            tumblr = '<use xlink:href="public/img/symbols.svg#icon-tumblr"></use>';
        return (
            <div className="ae-container-fluid rk-footer">
                <div className="ae-grid ae-grid--collapse">
                    <div className="ae-grid__item item-lg-4 au-xs-ta-center au-lg-ta-left">
                        <ul className="rk-menu rk-footer-menu">
                            <li className="rk-menu__item">
                                <a href="about.html" className="rk-menu__link">关于</a>
                            </li>
                            <li className="rk-menu__item">
                                <a href="documentation.html" data-hint="敬请期待" className="rk-menu__link hint--top">作品</a>
                            </li>
                            <li className="rk-menu__item">
                                <a href="contact.html" data-hint="敬请期待" className="rk-menu__link hint--top">联系</a>
                            </li>
                        </ul>
                        <p className="rk-footer__text rk-footer__copy ">
                            <span className="ae-u-bold">© </span>
                            <span className="ae-u-bolder">2016 Holaever, Inc </span>
                            保留一切权力。
                        </p>
                    </div>

                    <div className="ae-grid__item item-lg-4 au-xs-ta-center">
                        <a href="https://www.facebook.com/holaever/" className="rk-social-btn">
                            <svg>
                                <svg dangerouslySetInnerHTML={{__html: facebook}}></svg>
                            </svg>
                        </a>
                        <a href="#0" data-hint="敬请期待" className="rk-social-btn hint--top">
                            <svg>
                                <svg dangerouslySetInnerHTML={{__html: twitter}}></svg>
                            </svg>
                        </a>
                        <a href="#0" data-hint="敬请期待" className="rk-social-btn hint--top">
                            <svg>
                                <svg dangerouslySetInnerHTML={{__html: pinterest}}></svg>
                            </svg>
                        </a>
                        <a href="#0" data-hint="敬请期待" className="rk-social-btn hint--top">
                            <svg>
                                <svg dangerouslySetInnerHTML={{__html: tumblr}}></svg>
                            </svg>
                        </a>
                    </div>

                    <div className="ae-grid__item item-lg-4 au-xs-ta-center au-lg-ta-right">
                        <p className="rk-footer__text rk-footer__contact ">
                            <span className="ae-u-bold">电子邮件: </span>
                            <span className="ae-u-bolder">
                                <a href="mailto:hello@holaever.com" className="rk-dark-color ">hello@holaever.com</a>
                            </span>
                        </p>
                        <p className="rk-footer__text rk-footer__by">
                            我们打造非比寻常、电影级别的软件产品!
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}



class Page extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <PageHeader/>
                <Main/>
                <Footer/>
            </div>
        );
    }
}



ReactDOM.render(
    <Page/>,
    document.getElementById('page')
);
