class PageHeader extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = '';
    }
    render() {
        var urku_search_useTag = '<use xlink:href="assets/img/symbols.svg#icon-search"></use>',
              mobile_menu_useTag_1 = '<use xlink:href="assets/img/symbols.svg#bar"></use>',
              mobile_menu_useTag_2 = '<use xlink:href="assets/img/symbols.svg#bar"></use>',
              mobile_menu_useTag_3 = '<use xlink:href="assets/img/symbols.svg#bar"></use>';
        return (
            <header className="ae-container-fluid ae-container-fluid--full rk-header">
                <input type="checkbox" id="mobile-menu" className="rk-mobile-menu"/>
                <label for="mobile-menu">
                    <svg dangerouslySetInnerHTML={{__html: mobile_menu_useTag_1}}></svg>
                    <svg dangerouslySetInnerHTML={{__html: mobile_menu_useTag_2}}></svg>
                    <svg dangerouslySetInnerHTML={{__html: mobile_menu_useTag_3}}></svg>
                </label>
                <div className="ae-container-fluid rk-topbar">
                    <h1 className="rk-logo"><a href="index.html">urku portfolio<sup>tm</sup></a></h1>
                    <nav className="rk-navigation">
                        <ul className="rk-menu">
                            <li className="rk-menu__item">
                                <a href="index.html" className="rk-menu__link">Home</a>
                            </li>
                            <li className="rk-menu__item"><a href="portfolio.html" className="rk-menu__link">Portfolio</a>
                                <nav className="rk-menu__sub">
                                    <ul className="rk-container">
                                        <li className="rk-menu__item">
                                            <a href="portfolio.html" className="rk-menu__link">Flex</a>
                                        </li>
                                        <li className="rk-menu__item">
                                            <a href="portfolio-alt.html" className="rk-menu__link">Switch</a>
                                        </li>
                                        <li className="rk-menu__item">
                                            <a href="portfolio-raw.html" className="rk-menu__link">Static</a>
                                        </li>
                                        <li className="rk-menu__item">
                                            <a href="portfolio-masonry.html" className="rk-menu__link">Masonry</a>
                                        </li>
                                        <li className="rk-menu__item">
                                            <a href="blog.html" className="rk-menu__link">Blog</a>
                                        </li>
                                        <li className="active rk-menu__item">
                                            <a href="#0" className="rk-menu__link">Pages</a>
                                            <nav className="rk-menu__sub">
                                                <ul className="rk-container">
                                                    <li className="rk-menu__item">
                                                        <a href="about.html" className="rk-menu__link">About</a>
                                                    </li>
                                                    <li className="rk-menu__item">
                                                        <a href="documentation.html" className="rk-menu__link">Documentation</a>
                                                    </li>
                                                    <li className="rk-menu__item">
                                                        <a href="design-styles.html" className="rk-menu__link">Design Styles</a>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </li>
                                        <li className="rk-menu__item">
                                            <a href="contact.html" className="rk-menu__link">Contact Us</a>
                                        </li>
                                    </ul>
                                </nav>
                            </li>
                        </ul>
                        <form className="rk-search">
                            <input type="text" placeholder="Search" id="urku-search" className="rk-search-field"/>
                            <label for="urku-search">
                                <svg dangerouslySetInnerHTML={{__html: urku_search_useTag}}></svg>
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
        this.displayName = '';
    }
    render() {
        return (
            <div class="ae-container-fluid ae-container-fluid--inner rk-main">
                <div class="ae-grid au-xs-ta-center au-mb-4">
                    <div class="ae-grid__item item-lg-4 ae-kappa au-mb-3">
                        <img src="assets/img/team-1.jpg" alt="" class="au-mb-3"/>
                        <h5 class="ae-u-bolder au-mt-2">Robert T. Williams</h5>
                        <p class="ae-u-bolder au-mb-3">Graphic Designer</p>
                        <p class="au-lg-ta-left au-mb-3 au-pl-4 au-pr-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        <a href="#0" class="ae-u-bolder au-underline">@robertwilliams</a>
                    </div>
                </div>
            </div>
        );
    }
}


ReactDOM.render(
    <PageHeader/>,
    document.getElementById('page')
);
