import footerBrand from '../assets/footer-brand.png';
import facebookIcon from '../assets/Facebook.png';
import twitterIcon from '../assets/Twitter.png';
import instagramIcon from '../assets/Instagram.png';
import phoneIcon from '../assets/phone.png';
import mailIcon from '../assets/mail.png';

import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="footer-upper">
                <div className="footer-logo">
                    <img src={footerBrand} alt="Bamoka Industries Logo" className="logo-image" />
                    <div className="social">
                        <img src={facebookIcon} alt="Facebook" className="social-logo" />
                        <img src={twitterIcon} alt="Twitter" className="social-logo" />
                        <img src={instagramIcon} alt="Instagram" className="social-logo" />
                    </div>
                </div>
                <div className="footer-text">
                    <p><span>Home</span></p>
                    <p>About Us</p>
                    <p>Our Products</p>
                    <p>Applications</p>
                    <p>Packaging & Storage</p>
                    <p>Quality Control</p>
                    <p>Contact</p>
                </div>
                <div className="footer-contact">
                    <h3>Get In Touch</h3>
                    <p><strong>Head Office:</strong> U1 JD Complex, Aat Road, Eru, Navsari - 396445</p>
                    <p>
                        <img src={phoneIcon} alt="Call Icon" className="contact-icon" /> +91 94261 05559
                    </p>
                    <p>
                        <img src={mailIcon} alt="Mail Icon" className="contact-icon" /> bamokamnc@gmail.com
                    </p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>2024 Bamoka Industries. All Rights Reserved</p>
            </div>
        </div>
    );
}

export default Footer;
