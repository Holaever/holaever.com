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



// class Portrait extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return (
//             <div className="rk-main">
//                 <div className="">
//                     <div className="">
//                         <img src="public/img/st/team-1.jpg" alt="" className=""/>
//                         <h5 className="">Robert T. Williams</h5>
//                         <p className="">Graphic Designer</p>
//                         <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
//                         <a href="#" className="">@robertwilliams</a>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }



class Page extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <PageHeader/>
                {/*<Portrait/>*/}
            </div>
        );
    }
}



ReactDOM.render(
    <Page/>,
    document.getElementById('page')
);
