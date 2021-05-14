import React, { Component } from 'react';

class HeaderTopBar extends Component {
    render()
    {
        return (
            
                <div id="header-topbar" className="header-topbar-layout1">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="topbar-left">
                                    <p className="item-paragraph">Are you ready to grow up your business?</p>
                                    <div className="header-button">
                                        <a href="https://jits.com.vn/">Join our team <i className="fas fa-long-arrow-alt-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 d-flex justify-content-end">
                                <div className="topbar-right">
                                    <ul>
                                        <li className="topbar-social">
                                            <div className="social-icon">
                                                <a href="https://www.facebook.com/groups/997969170330434"><i className="fab fa-facebook-square"></i></a> 
                                                <a href="https://jits.com.vn/"><i className="fab fa-twitter"></i></a>
                                                <a href="https://jits.com.vn/"><i className="fab fa-linkedin-in"></i></a>
                                                <a href="https://jits.com.vn/"><i className="fab fa-pinterest"></i></a>
                                                <a href="https://jits.com.vn/"><i className="fab fa-skype"></i></a>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="header-right-button">
                                        <a href="https://jits.com.vn/"  className="header-btn">Find An Advicer</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            
        );
    }
}

export default HeaderTopBar;
