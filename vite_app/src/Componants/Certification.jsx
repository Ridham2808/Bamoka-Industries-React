import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';
import logo4 from '../assets/logo4.png';
import logo5 from '../assets/logo5.png';

import './Certification.css';

function Certification(){
    return(
        <>
        <div className="container-3">
                <h2>Certification</h2>
            </div>

            <div className="Certification">
               <img src={logo1} alt="Logo 1" />
               <img src={logo2} alt="Logo 2" />
               <img src={logo3} alt="Logo 3" />
               <img src={logo4} alt="Logo 4" />
               <img src={logo5} alt="Logo 5" />
            </div>

            <div id="contact-section">
                <h1 id="contact-title">GET IN TOUCH</h1>
                <p id="contact-description">
                    Bamoka Industries is one of the most prominent Manufacturers, Exporters, and Suppliers of an amazing 
                    Guar Gum Powder in Navsari, Gujarat, India.
                </p>
                <form id="contact-form">
                    <div id="form-row">
                        <input type="text" placeholder="Name" className="form-input" id="name" required />
                        <input type="email" placeholder="E-mail" className="form-input" id="email" required />
                    </div>
                    <textarea placeholder="Comments" id="form-textarea" required></textarea>
                    <button type="button" id="form-button">Send</button>
                </form>
            </div>
        </>
    );
}

export default Certification;