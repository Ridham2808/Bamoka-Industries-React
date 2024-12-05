import phone from '../assets/phone.png';
import mail from '../assets/Mail.png';
import Facebook from '../assets/Facebook.png';
import twitter from '../assets/Twitter.png';
import instagram from '../assets/Instagram.png';
import navbrand from '../assets/nav-brand.png';

import './Navebar.css';

function Navebar(){
    return(
        <>
        <div>
            <div className="nave">
                <div className="one">
                    <img src={phone} alt="Phone" style={{ height: '25px', width: '25px' }} />&nbsp;&nbsp;
                    <span>+91 94261 05559</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <img src={mail} alt="Mail" style={{ height: '25px', width: '25px' }} />&nbsp;&nbsp;
                    <span>bamokamnc@gmail.com</span>
                </div>
                <div className="logo">
                    <img src={Facebook} alt="Facebook" />&nbsp;&nbsp;&nbsp;&nbsp;
                    <img src={twitter} alt="Twitter" />&nbsp;&nbsp;&nbsp;&nbsp;
                    <img src={instagram} alt="Instagram" />&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
            </div>

            <div className="navebar">
                <img src={navbrand} alt="Nav Brand" />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span>Home</span>&nbsp;&nbsp;&nbsp;&nbsp;
                <span>About Us</span>&nbsp;&nbsp;&nbsp;&nbsp;
                <span>Products</span>&nbsp;&nbsp;&nbsp;&nbsp;
                <span>Applications</span>&nbsp;&nbsp;&nbsp;&nbsp;
                <span>Packaging & Storage</span>&nbsp;&nbsp;&nbsp;&nbsp;
                <span>Quality Control</span>&nbsp;&nbsp;&nbsp;&nbsp;
                <span>Contact</span>
            </div>
        </div>
        </>
    );
}

export default Navebar;