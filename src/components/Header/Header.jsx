import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import "./Header.css";
import { Link } from "react-router-dom";
import Bars from "../../assets/bars.png";
import logo from '../../assets/Logo 2.png'

const Header = () => {
    const mobile = window.innerWidth <= 768 ? true : false;
    const [menuOpened, setMenuOpened] = useState(false);
    return (
        <div className="header" id="header">
            <Link to="/"><img src={logo} alt="logo here" className="logo" /></Link>

            {(menuOpened === false && mobile === true) ? (
                <div
                    style={{ backgroundColor: "var(--appColor)", padding: "0.5rem", borderRadius: "5px" }}
                    onClick={() => setMenuOpened(true)}
                >
                    <img
                        src={Bars}
                        alt="bars"
                        style={{ width: "1.5rem", height: "1.5rem" }}
                    />
                </div>
            ) : (
                <ul className="header-menu">
                    <li>
                        <Link
                            onClick={() => setMenuOpened(false)}
                            activeClass="active"
                            to="/"
                            spy={true}
                            smooth={true}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={() => setMenuOpened(false)}
                            to="/services"
                            spy={true}
                            smooth={true}
                        >
                            Services
                        </Link>
                    </li>

                    <li>
                        <Link
                            onClick={() => setMenuOpened(false)}
                            to="events"
                            spy={true}
                            smooth={true}
                        >
                            Events
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={() => setMenuOpened(false)}
                            to="/joinus"
                            spy={true}
                            smooth={true}
                        >
                            Join Us
                        </Link>
                    </li>

                    <li>
                        <Link
                            onClick={() => setMenuOpened(false)}
                            to="/contactus"
                            spy={true}
                            smooth={true}
                        >
                            Contact us
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={() => setMenuOpened(false)}
                            to="/aboutus"
                            spy={true}
                            smooth={true}
                        >
                            About us
                        </Link>
                    </li>

                </ul>
            )

            }

            <div className="button">
                <Link className="btn"
                    to="/joinus"
                    spy={true}
                    smooth={true}
                >
                    Join now
                </Link>
            </div>
        </div>
    );
};

export default Header;