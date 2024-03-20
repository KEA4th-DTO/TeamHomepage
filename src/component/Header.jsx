import React, { useState } from "react";

export default function Header(){
    const [show, setShow] = useState(false);

    const toggleMenu = () => {
        setShow((prevShow) => !prevShow);
    }

    const headerNav = [
        {
            title: "intro",
            url: "#intro"
        },
        {
            title: "logo",
            url: "#logo"
        },
        {
            title: "slogan",
            url: "#slogan"
        },
        {
            title: "team",
            url: "#team"
        },
        {
            title: "members",
            url: "#members"
        }
    ];

    return (
        <header id="header" role="banner">
        <div className="header__inner">
            <div className="header__logo">
                <h1>
                    <a href="/">DTO<em>Homepage</em></a>
                </h1>
            </div>
            <nav 
                className={`header__nav ${show ? "show" : ""}`} 
                role="navigation" 
                aria-label="메인메뉴"
            >
                <ul>
                    {headerNav.map((nav, key) => (
                        <li key={key}>
                            <a href={nav.url}>{nav.title}</a>
                        </li>
                    ))}
                </ul>
            </nav>
            <div 
                className="header__nav__mobile" 
                id="headerToggle" 
                aria-controls="primary-menu" 
                aria-expanded={show ? "true" : "false"} 
                role="button"
                tabIndex="0"
                onClick={toggleMenu}
            >
                <span></span>
            </div>
        </div>
    </header>
    );
}