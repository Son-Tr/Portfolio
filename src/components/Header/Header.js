import './Header.scss'
import React, { useEffect, useState } from "react";
import { logo } from '../../assets/img/linkImg';
import resume from '../../assets/resume/Son-Tran-Resume.pdf'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";



const Header = () => {
    const [isNavBar, setNavBar] = useState(false);

    // handle when user scroll bar, display and hidden header-fixed
    useEffect(() => {
        const handleScroll = () => {
            document.querySelector(".nav-header").classList.toggle("nav-fixed", window.scrollY > 100)
        }

        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    // close navbar when user click option on this
    useEffect(() => {
        let navLinks = document.querySelectorAll(".nav-link")

        navLinks.forEach((navLink) => {
            navLink.addEventListener("click", () => {
                setNavBar(false)
            })
        })
        return () => {
            navLinks.forEach((navLink) => {
                navLink.removeEventListener("click", () => {
                    setNavBar(false)
                })
            })
        }
    }, [])

    /* --- handle open and close navBar --- */
    const onClickNavBar = () => {
        setNavBar(!isNavBar)
    }
    /* close navBar when user click on over-play */
    const onClickOverPlay = () => {
        setNavBar(false)
    }
    return (
        <>
            <div className="nav-header">
                <header className="container">
                    <a className="nav-link-logo" href='/' rel="noopener noreferrer">
                        <span className="icon-logo"><img src={logo} alt="logo" /></span>
                        <span className="logo">SonTr</span>
                    </a>

                    <nav className={isNavBar ? "show" : ""}>
                        <a className="nav-link" href='#project' rel="noopener noreferrer">Project</a>
                        <a className="nav-link" href='/' rel="noopener noreferrer">About</a>
                        <a className="nav-link" href='/' rel="noopener noreferrer">Contact</a>
                        <a className="nav-link" href={resume} target="_blank" rel="noopener noreferrer">Resume</a>
                    </nav>
                    <span className="bars-icon" onClick={onClickNavBar}>
                        {!isNavBar ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faX} />}
                    </span>
                </header>
                <div className={`over-play ${isNavBar ? "show" : ""}`} onClick={onClickOverPlay}
                ></div>
            </div >
        </>
    )
}

export default Header