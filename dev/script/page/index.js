(function () {
    var page;
    page = document.createElement('div');
    page.id = 'page';
    document.body.insertBefore(page, document.body.firstChild);
})()

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
            <header className="hs-header">

                <input type="checkbox" id="mobile-menu" className="hs-mobile-menu"/>
                <label for="mobile-menu">
                    <svg dangerouslySetInnerHTML={{__html: mobile_menu_useTag_1}}></svg>
                    <svg dangerouslySetInnerHTML={{__html: mobile_menu_useTag_2}}></svg>
                    <svg dangerouslySetInnerHTML={{__html: mobile_menu_useTag_3}}></svg>
                </label>

                <div className="hs-topbar">
                    <h1 className="hs-logo"><a href="index.html">Holaever<sup>tm</sup></a></h1>
                    <nav className="hs-navigation">
                        <ul className="hs-menu">
                            <li className="hs-menu-item">
                                <a href="index.html" className="hs-menu-link">首页</a>
                            </li>
                            <li className="hs-menu-item">
                                <a href="portfolio.html" className="hs-menu-link">作品</a>
                            </li>
                            <li className="hs-menu-item">
                                <a href="blog.html" className="hs-menu-link">日志</a>
                            </li>
                            <li className="active hs-menu-item">
                                <a href="#0" className="hs-menu-link">关于</a>
                            </li>
                            <li className="hs-menu-item">
                                <a href="contact.html" className="hs-menu-link">联系</a>
                            </li>
                        </ul>
                        <form className="hs-search">
                            <input type="text" placeholder="Search" id="hs-search" className="hs-search-field"/>
                            <label for="hs-search">
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
            <div className="hs-main">
                <div className="">
                    <div className="">
                        <img src="public/img/st/team-1.jpg" alt="" className=""/>
                        <h5 className="">Robert T. Williams</h5>
                        <p className="">Graphic Designer</p>
                        <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        <a href="#" className="">@robertwilliams</a>
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
                <Portrait/>
            </div>
        );
    }
}



ReactDOM.render(
    <Page/>,
    document.getElementById('page')
);
