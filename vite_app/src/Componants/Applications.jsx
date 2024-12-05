import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';
import img6 from '../assets/img6.png';
import img7 from '../assets/img7.png';
import img8 from '../assets/img8.png';
import img9 from '../assets/img9.png';
import img10 from '../assets/img10.png';
import img11 from '../assets/img11.png';
import img12 from '../assets/img12.png';
import cp1 from '../assets/cp1.png';

import './Applications.css';

function Applications(){
    return(
        <>
        <div className="container-3">
                <h2>Industrial Applications of Guar Gum</h2>
            </div>

            <div className="main">
                {[
                    {
                        image: img1,
                        title: "Confectionary",
                        description: "An invaluable ingredient in creating the desirable textures, flavors & stability of our favorite candies & treats.",
                    },
                    {
                        image: img2,
                        title: "Beverages",
                        description: "Contributes to the texture, taste & shelf life of various beverages, enhancing the overall consumer experience.",
                    },
                    {
                        image: img3,
                        title: "Dairy Products",
                        description: "Shaping the future of the Dairy Industry with the creation of high-quality, delicious, & sustainable dairy products.",
                    },
                    {
                        image: img4,
                        title: "Pharmaceuticals",
                        description: "Plays a crucial role in the development, effectiveness & safety of medications.",
                    },
                    {
                        image: img5,
                        title: "Pet Food",
                        description: "Creates delicious textures, health benefits & visual appeal of your Pet’s Food.",
                    },
                    {
                        image: img6,
                        title: "Ketchup & Pickles",
                        description: "Invaluable tool for condiment manufacturers and acts as a secret sauce for various Ketchups, Pickles, Sauces, Dips, etc.",
                    },
                    {
                        image: img7,
                        title: "Mining & Construction",
                        description: "Offers a unique combination of properties to the industrial sectors such as coating, shaping & binding of buildings, etc.",
                    },
                    {
                        image: img8,
                        title: "Tobacco Industry",
                        description: "Increases the flavor & aroma of cigars, cigarettes, kreteks & gutka and is generally considered a safe substance for consuming.",
                    },
                    {
                        image: img9,
                        title: "Paper Industry",
                        description: "Offers a range of benefits such as improving paper quality, increasing efficiency, & sustainability.",
                    },
                    {
                        image: img10,
                        title: "Oil Drilling",
                        description: "Acts as an indispensable resource by ensuring efficient & effective resource extraction.",
                    },
                    {
                        image: img11,
                        title: "Textile Industry",
                        description: "Enhances textile production & quality by acting as a binder, contributing to a smooth & creamy texture of fabrics.",
                    },
                    {
                        image: img12,
                        title: "Toothpaste",
                        description: "Guar Gum can be effectively used in Toothpaste, Ointments & Conditioners to protect oral care routine.",
                    },
                ].map((item, index) => (
                    <div className="main-card" key={index}>
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={item.image} alt={item.title} style={{ height: "250px", width: "395px" }} />
                                </div>
                                <div className="flip-card-back">
                                    <p className="para1">{item.title}</p>
                                    <p className="para2">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="container-4">
                <img src={cp1} alt="Why Choose Us" />
                <div className="text-section">
                    <span className="why">WHY CHOOSE US</span><br /><br />
                    <span className="we-are">We are Best In Industries</span><br /><br />
                    <span className="cp-con">
                        We serve our Customers with the best quality and consistency of our products. 
                        <br />
                        We have dedicated our skills, knowledge, and experience combined with state-of-the-art manufacturing 
                        <br />
                        facility and committing necessary resources to R&D are values that built up our Mission Statement and Quality Policy.
                    </span><br /><br />
                    <div className="list-container">
                        {[
                            "Customer Satisfaction is our Prime Moto",
                            "Supplying Best Quality and Consistent Product",
                            "Maintaining industry's best Hygiene Conditions",
                            "Sourcing of Top Quality Raw Material",
                            "Strong Supply Chain",
                            "On Time Delivery",
                        ].map((item, index) => (
                            <div className="list-item" key={index}>
                                <span className="tick">✔</span> {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Applications;