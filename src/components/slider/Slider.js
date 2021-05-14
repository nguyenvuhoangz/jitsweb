import React, { Component } from 'react';

class Slider extends Component {
    render() {
        return (

            <div className="slider-area slider-layout1">
                <div className="slider-bg-img1" data-sal="zoom-in" data-sal-duration="1500" data-sal-delay="300">
                    <img src="img/figure/figure96.png" alt="figure" />
                </div>
                <div className="slider-bg-img2">
                    <img src="img/figure/figure97.png" alt="figure" data-sal="slide-up" data-sal-duration="1300" data-sal-delay="700" />
                </div>
                <div className="bend niceties preview-1">
                    <div id="ensign-nivoslider-1" className="slides">
                        <img src="img/slider/slider1.png" alt="slider" title="#slider-direction-1" />
                        <img src="img/slider/slider2.png" alt="slider" title="#slider-direction-2" />
                        <img src="img/slider/slider1.png" alt="slider" title="#slider-direction-3" />
                    </div>
                    <div id="slider-direction-1" className="t-cn slider-direction">
                        <div className="slider-content s-tb slide-1">
                            <div className="text-left title-container s-tb-c">
                                <div className="container">
                                    <p className="item-subtitle">Find The Right Way</p>
                                    <h2 className="item-title">Banking Solutions For All Enterprises</h2>
                                    <div className="item-paragraph">
                                        <span className="jits">JUST-IN-TIME SOLUTIONS (JITS)</span>
									is a leading regional financial software provider. We partner with banks, microfinance institutions and financial leasing firms to support them overcome the challenge of intense competition and stay ahead of the changing market. We have served many financial institutions with millions of customers using our products for their daily banking activities. We commit to provide the best solutions to extract maximum value and performance from our partner’s investment.</div>
                                    <ul className="item-btn">
                                        <li><a href="service1.html">Free Consulting<i className="fas fa-long-arrow-alt-right"></i></a></li>
                                        <li><a href="index.html" className="circle-btn"><span className="circle-icon"><i className="fas fa-play-circle"></i>Watch The Video</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="slider-direction-2" className="t-cn slider-direction">
                        <div className="slider-content s-tb slide-2">
                            <div className="text-left title-container s-tb-c">
                                <div className="container">
                                    <p className="item-subtitle">Find The Right Way</p>
                                    <h2 className="item-title">Banking Solutions For All Enterprises</h2>
                                    <div className="item-paragraph">Bhen an unknown printer took a galley of type and scrambled ype specimen book. It has survived .</div>
                                    <ul className="item-btn">
                                        <li><a href="service2.html">Free Consulting<i className="fas fa-long-arrow-alt-right"></i></a></li>
                                        <li><a href="index.html" className="circle-btn"><span className="circle-icon"><i className="fas fa-play-circle"></i>Watch The Video</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="slider-direction-3" className="t-cn slider-direction">
                        <div className="slider-content s-tb slide-3">
                            <div className="text-left title-container s-tb-c">
                                <div className="container">
                                    <p className="item-subtitle">Find The Right Way</p>
                                    <h2 className="item-title">Business Solutions For All Enterprises</h2>
                                    <div className="item-paragraph">Bhen an unknown printer took a galley of type and scrambled ype specimen book. It has survived .</div>
                                    <ul className="item-btn">
                                        <li><a href="service1.html">Free Consulting<i className="fas fa-long-arrow-alt-right"></i></a></li>
                                        <li><a href="index.html" className="circle-btn"><span className="circle-icon"><i className="fas fa-play-circle"></i>Watch The Video</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default Slider;
