import React, { useState } from 'react';
import './Header.scss';
import Bars from '../../assets/bars.png';
import Logo from '../../assets/logo.png';
import { Link } from 'react-scroll';

const Header = () => {

    const mobile = window.innerWidth <= 768 ? true : false;
    const [menuOpened, setMenuOpened] = useState(false);
    return (
        <div className="header" id="home">
            <img className="logo" src={Logo} alt="" />
            {menuOpened === false && mobile === true ? (
                <div
                    style={{
                        backgroundColor: 'var(--appColor)',
                        padding: '0.5rem',
                        borderRadius: '5px'
                    }}

                    onClick={() => setMenuOpened(true)}
                >
                    <img src={Bars} alt="Menu" style={{ width: '1.5rem', height: '1.5rem' }} />
                </div>
            ) : (
                <ul className="header-menu">
                    <li>
                            <Link 
                                onClick={() => setMenuOpened(false)}
                                to="home">
                                    Home
                            </Link>
                    </li>
                    <li onClick={() => setMenuOpened(false)}><Link to="programs">Programs</Link></li>
                    <li onClick={() => setMenuOpened(false)}><Link to="reasons">Why us</Link></li>
                    <li onClick={() => setMenuOpened(false)}><Link to="plans">Plans</Link></li>
                    <li>
                        <Link 
                            onClick={() => setMenuOpened(false)}
                            spy={true}
                            smooth={true}
                            to="testimonials">
                                Testimonials
                        </Link>
                    </li>
                </ul>
            )}
            
        </div>
    );
}

export default Header;