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
        'photo': 'public/img/st/team-1.jpg',
        'name': 'Robert T. Williams',
        'function': 'Graphic Designer',
        'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
        'social': '@robertwilliams'
    }, {
        id: 0.2,
        'photo': 'public/img/st/team-1.jpg',
        'name': 'Robert T. Williams',
        'function': 'Graphic Designer',
        'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
        'social': '@robertwilliams'
    }, {
        id: 0.3,
        'photo': 'public/img/st/team-1.jpg',
        'name': 'Robert T. Williams',
        'function': 'Graphic Designer',
        'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
        'social': '@robertwilliams'
    }],
    about: [{
        id: 0.1,
        title: 'About Us',
        disc: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        ]
    }, {
        id: 0.1,
        title: 'Our Mission',
        disc: [
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        ]
    }, {
        id: 0.1,
        title: 'Our Clients',
        disc: [
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ',
            'Nemo enim ipsam voluptatem quia voluptas'
        ]
    }]
};



class PageHeader extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var hs_search_useTag = '<use xlink:href="public/img/st/symbols.svg#icon-search"></use>',
            mobile_menu_useTag_1 = '<use xlink:href="public/img/st/symbols.svg#bar"></use>',
            mobile_menu_useTag_2 = '<use xlink:href="public/img/st/symbols.svg#bar"></use>',
            mobile_menu_useTag_3 = '<use xlink:href="public/img/st/symbols.svg#bar"></use>';
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
                                <a href="index.html" className="rk-menu__link">首页</a>
                            </li>
                            <li className="rk-menu__item">
                                <a href="portfolio.html" className="rk-menu__link">作品</a>
                            </li>
                            <li className="rk-menu__item">
                                <a href="blog.html" className="rk-menu__link">日志</a>
                            </li>
                            <li className="active rk-menu__item">
                                <a href="#0" className="rk-menu__link">关于</a>
                            </li>
                            <li className="rk-menu__item">
                                <a href="contact.html" className="rk-menu__link">联系</a>
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
                <p className="au-lg-ta-left au-mb-3 au-pl-4 au-pr-4">{this.props.member.desc}</p>
                <a href="#" className="ae-u-bolder au-underline">{this.props.member.social}</a>
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
                    <h4 className="ae-u-bolder">Title example</h4>
                    <p>
                        Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.
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
        var facebook = '<use xlink:href="public/img/st/symbols.svg#icon-facebook"></use>',
            twitter = '<use xlink:href="public/img/st/symbols.svg#icon-twitter"></use>',
            pinterest = '<use xlink:href="public/img/st/symbols.svg#icon-pinterest"></use>',
            tumblr = '<use xlink:href="public/img/st/symbols.svg#icon-tumblr"></use>';
        return (
            <div className="ae-container-fluid rk-footer">
                <div className="ae-grid ae-grid--collapse">
                    <div className="ae-grid__item item-lg-4 au-xs-ta-center au-lg-ta-left">
                        <ul className="rk-menu rk-footer-menu">
                            <li className="rk-menu__item">
                                <a href="about.html" className="rk-menu__link">关于</a>
                            </li>
                            <li className="rk-menu__item">
                                <a href="documentation.html" className="rk-menu__link">作品</a>
                            </li>
                            <li className="rk-menu__item">
                                <a href="contact.html" className="rk-menu__link">联系</a>
                            </li>
                        </ul>
                        <p className="rk-footer__text rk-footer__copy ">
                            <span className="ae-u-bold">© </span>
                            <span className="ae-u-bolder">2016 Holaever, Inc </span>
                            保留一切权力。
                        </p>
                    </div>

                    <div className="ae-grid__item item-lg-4 au-xs-ta-center">
                        <a href="#0" className="rk-social-btn">
                            <svg>
                                <svg dangerouslySetInnerHTML={{__html: facebook}}></svg>
                            </svg>
                        </a>
                        <a href="#0" className="rk-social-btn">
                            <svg>
                                <svg dangerouslySetInnerHTML={{__html: twitter}}></svg>
                            </svg>
                        </a>
                        <a href="#0" className="rk-social-btn">
                            <svg>
                                <svg dangerouslySetInnerHTML={{__html: pinterest}}></svg>
                            </svg>
                        </a>
                        <a href="#0" className="rk-social-btn">
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
                        <p class="rk-footer__text rk-footer__by">
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
