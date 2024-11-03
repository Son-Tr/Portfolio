import './Header.scss'
import React, { useEffect, useState } from "react";
import { logo } from '../../assets/img/linkImg';
import resume from '../../assets/resume/Son-Tran-Resume.pdf'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import Banner from '../Banner/Banner';


const Header = () => {
    const [isMenu, setIsMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            document.querySelector(".nav-header").classList.toggle("nav-fixed", window.scrollY > 150)
        }

        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])


    return (
        <>
            <div className="nav-header">
                <header className="container">
                    <a className="nav-link-logo" href='/' rel="noopener noreferrer">
                        <span className="icon-logo"><img src={logo} alt="logo" /></span>
                        <span className="logo">SonTr</span>
                    </a>

                    <nav className={isMenu ? "show" : ""}>
                        <a className="nav-link" href='#project' rel="noopener noreferrer">Project</a>
                        <a className="nav-link" href='/' rel="noopener noreferrer">About</a>
                        <a className="nav-link" href='/' rel="noopener noreferrer">Contact</a>
                        <a className="nav-link" href={resume} target="_blank" rel="noopener noreferrer">Resume</a>
                    </nav>
                    <span className="bars-icon">
                        {!isMenu ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faX} />}
                    </span>
                </header>
            </div>
        </>
    )
}

export default Header