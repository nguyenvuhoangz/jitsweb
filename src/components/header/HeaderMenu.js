import React, { Component } from 'react';

class HeaderMenu extends Component {
    render()
    {
        return (
            
            <div id="header-menu" className="header-menu menu-layout1">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-xl-2 col-lg-2">
                            <div className="logo-area">
                                <a href="index.html" className="temp-logo">
                                    <img src="img/logo/logo2.png" alt="logo" className="img-fluid" />
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7 d-flex justify-content-end position-static">
                            <nav id="dropdown" className="template-main-menu">
                                <ul>
                                <li>
                                        <a href="index.html">Home</a>
                                        <ul className="dropdown-menu-col-1">
                                            <li>
                                                <a href="index.html">Home Page 1</a>
                                            </li>
                                            <li>
                                                <a href="index2.html">Home Page 2</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="about.html">About Us</a>
                                    </li>
                                    <li>
                                        <a href="index.html">Services</a>
                                        <ul className="dropdown-menu-col-1">
                                            <li>
                                                <a href="service1.html">Services 1</a>
                                            </li>
                                            <li>
                                                <a href="service2.html">Services 2</a>
                                            </li>
                                            <li>
                                                <a href="single-service1.html">Single Services 1</a>
                                            </li>
                                            <li>
                                                <a href="single-service2.html">Single Services 2</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="index.html">Blog</a>
                                        <ul className="dropdown-menu-col-1">
                                            <li>
                                                <a href="blog1.html">Blog 1</a>
                                            </li>
                                            <li>
                                                <a href="blog2.html">Blog 2</a>
                                            </li>
                                            <li>
                                                <a href="single-blog.html">Blog Details</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="position-static hide-on-mobile-menu">
                                        <a href="index.html">Pages</a>
                                        <div className="template-mega-menu">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-3">
                                                        <div className="menu-ctg-title">Pages</div>
                                                        <ul className="sub-menu">
                                                            <li>
                                                                <a href="portfolio1.html">
                                                                    <i className="fas fa-chart-pie"></i>Portfolio1</a>
                                                            </li>
                                                            <li>
                                                                <a href="portfolio2.html">
                                                                    <i className="fas fa-chart-pie"></i>Portfolio2</a>
                                                            </li>
                                                            <li>
                                                                <a href="single-portfolio.html">
                                                                    <i className="fas fa-chart-pie"></i>Single-portfolio</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-3">
                                                        <div className="menu-ctg-title">Pages</div>
                                                        <ul className="sub-menu">
                                                            <li>
                                                                <a href="team1.html">
                                                                    <i className="fas fa-user-tie"></i>Team 1</a>
                                                            </li>
                                                            <li>
                                                                <a href="team2.html">
                                                                    <i className="fas fa-user-tie"></i>Team 2</a>
                                                            </li>
                                                            <li>
                                                                <a href="single-team.html">
                                                                    <i className="fas fa-user-tie"></i>Single Team</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-3">
                                                        <div className="menu-ctg-title">Pages</div>
                                                        <ul className="sub-menu">
                                                            <li>
                                                                <a href="pricing.html">
                                                                    <i className="far fa-money-bill-alt"></i>Pricing Page</a>
                                                            </li>
                                                            <li>
                                                                <a href="gallery.html">
                                                                    <i className="fas fa-camera"></i>Gallery page</a>
                                                            </li>
                                                            <li>
                                                                <a href="about.html">
                                                                    <i className="far fa-address-card"></i>About</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-3">
                                                        <div className="menu-ctg-title">Pages</div>
                                                        <ul className="sub-menu">
                                                            <li>
                                                                <a href="faq.html">
                                                                    <i className="fas fa-chalkboard-teacher"></i>Faq Page</a>
                                                            </li>
                                                            <li>
                                                                <a href="404.html">
                                                                    <i className="fas fa-exclamation-triangle"></i>404 Error</a>
                                                            </li>
                                                            <li>
                                                                <a href="contact.html">
                                                                    <i className="fas fa-spinner"></i>Contact Page</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="hide-on-desktop-menu">
                                        <a href="index.html">Pages</a>
                                        <ul>
                                            <li>
                                                <a href="about1.html">About</a>
                                            </li>
                                            <li>
                                                <a href="service1.html">Services</a>
                                            </li>
                                            <li>
                                                <a href="project1.html">Project</a>
                                            </li>
                                            <li>
                                                <a href="404.html">404 Error</a>
                                            </li>
                                            <li>
                                                <a href="contact.html">Contact</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="contact.html">Contact</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-xl-4 col-lg-3 d-flex justify-content-end">
                            <div className="header-action-layout1">
                                <ul>
                                    <li className="search-btn">
                                        <a href="#header-search" title="Search">
                                            <i className="fas fa-search"></i>
                                        </a>
                                    </li>
                                    <li className="header-number">
                                        <div className="media">
                                            <div className="item-icon">
                                                <i className="far fa-comments"></i>
                                            </div>
                                            <div className="media-body">
                                                <div className="item-label">Hotline Number</div>
                                                <div className="item-number">(+84) 836 205 249</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="offcanvas-menu-trigger-wrap">
                                        <button type="button" className="offcanvas-menu-btn menu-status-open">
                                            <span className="btn-icon-wrap">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                            
            
        );
    }
}

export default HeaderMenu;
