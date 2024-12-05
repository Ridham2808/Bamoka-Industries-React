import slide1 from '../assets/slide1.png';
import slide2 from '../assets/slide2.png';
import slide3 from '../assets/slide3.png';
import slide4 from '../assets/slide4.png';
import slide5 from '../assets/slide5.png';
import bgsection from '../assets/bg-section-banner.png';
import homemask from '../assets/home-mask-group.png';
import product1 from '../assets/ga-product1.png';
import product2 from '../assets/ga-product2.png';
import product3 from '../assets/ga-product3.png';
import product4 from '../assets/ga-product4.png';
import product5 from '../assets/ga-product5.png';
import product6 from '../assets/ga-product6.png';

import './Range.css';

function Range(){
    return(
        <>
        <div className="container-3">
                <h2>Range Of Guar Gum Products</h2>
                <div className="card-container">
                    <div
                        className="card"
                        style={{ backgroundImage: `url(${slide1})` }}
                    >
                        <div className="card-text">
                            <h3>Guar Protein (Churi and Korma)</h3>
                            <p>
                                Caesalpiniaceae belongs to the Leguminosae family and is popularly seen as a weed or
                                wild crop that grows in tropical regions.
                            </p>
                        </div>
                    </div>
                    <div
                        className="card"
                        style={{ backgroundImage: `url(${slide2})` }}
                    >
                        <div className="card-text">
                            <h3>Guar Gum Refined Split</h3>
                            <p>
                                Refined split generally contains galactose and mannose units. Along with carrageenan,
                                these refined splits form a gel and act as thickeners.
                            </p>
                        </div>
                    </div>
                    <div
                        className="card"
                        style={{ backgroundImage: `url(${slide3})` }}
                    >
                        <div className="card-text">
                            <h3>Fast Hydration Guar Gum</h3>
                            <p>
                                We are Manufacturers, Exporters, and Suppliers of an amazing Oil & Fast Hydration Guar
                                Gum Powder in Gujarat, India.
                            </p>
                        </div>
                    </div>
                    <div
                        className="card"
                        style={{ backgroundImage: `url(${slide4})` }}
                    >
                        <div className="card-text">
                            <h3>Food Grade Guar Gum</h3>
                            <p>
                                We are Manufacturers, Exporters, and Suppliers of an amazing Guar Gum Refined refined
                                split in Gujarat, India.
                            </p>
                        </div>
                    </div>
                    <div
                        className="card"
                        style={{ backgroundImage: `url(${slide5})` }}
                    >
                        <div className="card-text">
                            <h3>Industrial Grade Guar Gum</h3>
                            <p>
                                We are Manufacturers, Exporters, and Suppliers of an amazing Industrial Grade Guar Gum
                                in Gujarat, India.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="big-logo">
                <img src={bgsection} alt="Background Banner" className="bg-mask" />
                <img src={homemask} alt="Home Mask Group" className="mask" />
            </div>

            <div className="container-3">
                <h2>GUAR AND ITS ALLIED PRODUCTS</h2>
            </div>

            <div className="card-container-2">
                <div className="card-2">
                    <h3 className="card-title-2">Guar Pods</h3>
                    <img src={product1} alt="Guar Pods" />
                </div>

                <div className="card-2">
                    <h3 className="card-title-2">Guar Seed</h3>
                    <img src={product2} alt="Guar Seed" />
                </div>

                <div className="card-2">
                    <h3 className="card-title-2">Guar Meal Korma</h3>
                    <img src={product3} alt="Guar Meal Korma" />
                </div>

                <div className="card-2">
                    <h3 className="card-title-2">Guar Meal Churi</h3>
                    <img src={product4} alt="Guar Meal Churi" />
                </div>

                <div className="card-2">
                    <h3 className="card-title-2">Guar Refined Split</h3>
                    <img src={product5} alt="Guar Refined Split" />
                </div>

                <div className="card-2">
                    <h3 className="card-title-2">Guar Gum Powder</h3>
                    <img src={product6} alt="Guar Gum Powder" />
                </div>
            </div>
        </>
    );
}

export default Range;