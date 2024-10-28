import React, { useEffect } from 'react'
import "./Banner.scss"
import { lake, mountain } from '../../assets/img/linkImg';

const Banner = () => {

    useEffect(() => {
        let greeting = document.querySelector(".greeting");
        let introduce = document.querySelector(".introduce");

        //get position
        let greetingLeft = parseInt(getComputedStyle(greeting).left);
        let introduceRight = parseInt(getComputedStyle(introduce).right);


        const handleScroll = () => {
            let valueScroll = window.scrollY;
            // Update the left and right positions dynamically based on scroll
            greeting.style.left = `${greetingLeft - valueScroll}px`;
            introduce.style.right = `${introduceRight - valueScroll}px`;
        }

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])
    return (
        <div className='banner'>
            <div className="wrap">
                <h1 className='greeting'>
                    Hi,
                    <br />
                    I'm Son
                </h1>
                <h1 className='introduce' >
                    a passionate
                    <br />
                    Front End Developer.
                </h1>
                <img src={lake} alt="lake" className="lake" />
                <img src={mountain} alt="mountain" className="mountain" />
            </div>
        </div >
    )
}

export default Banner;