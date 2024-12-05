import React from 'react';
import banner from '../assets/banner.png';
import welfarm from '../assets/wel-farm.png';
import abguar from '../assets/ab-guar.png';

import './Intro.css';

function Intro(){
    return(
        <>
        <div className="intro">
                <img src={banner} alt="Banner" />
                <div className="center">
                    <span className="name">Bamoka Industries</span>
                    <span className="manu">Manufacturer, Exporters and Supplier</span>
                    <a href="#" className="contact-us-btn">Contact Us</a>
                    <span className="ignite">IGNITE YOUR IMAGINATION</span>
                </div>
            </div>

            <div className="container-1">
                <div className="text">
                    <span className="wel">Welcome</span>&nbsp;&nbsp;&nbsp;
                    <span className="to">To</span> <br />
                    <span className="bamoka">Bamoka Industries</span>
                    <br /><br />
                    <span className="we">
                        We are the leading manufacturer and exporter of Guar Gum products, offering
                        high-quality guar refined spilt, guar meals, and guar gum powder. With our
                        extensive experience in the industry, we strive to provide the best prices for our
                        valued customers while ensuring cost-effectiveness without compromising on
                        quality. Explore our website to discover the various applications of guar gum, a
                        natural thickening agent, and see how this incredible ingredient can enhance
                        your products!
                    </span>
                </div>
                <img src={welfarm} alt="Wel Farm" />
            </div>

            <div className="container-2">
                <img src={abguar} alt="About Guar" />
                <div className="text-2">
                    <div className="about-us">About Us</div>
                    <span className="bamoka">Bamoka Industries</span>
                    <br /><br />
                    <span className="manufacturer">
                        Manufacturers & Exporters of Guar Gum Powder, Guar refined spilt & Guar Meal
                    </span>
                    <br /><br />
                    <span className="we">
                        We are the leading manufacturer and exporter of Guar Gum products, offering
                        high-quality guar refined spilt, guar meals, and guar gum powder. With our
                        extensive experience in the industry, we strive to provide the best prices for our
                        valued customers while ensuring cost-effectiveness without compromising on
                        quality. Explore our website to discover the various applications of guar gum, a
                        natural thickening agent, and see how this incredible ingredient can enhance
                        your products!
                    </span>
                </div>
            </div>
        </>
    );
}

export default Intro;