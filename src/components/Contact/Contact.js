import React, { useState } from 'react';
import './Contact.scss';
import { input } from '../../assets/data/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import emailjs from 'emailjs-com'; // Import EmailJS

const Contact = () => {
    // Step 1: Create state variables for the input fields
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    // Step 2: Handle input changes and update state
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Step 3: Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission

        // Send email using EmailJS
        emailjs.send(
            'service_aih5yjc', // Your service ID from EmailJS
            'template_09jz79q', // Your template ID from EmailJS
            formData, // Send form data directly
            'Xjyfx29v4VeYkicPa' // Your user ID from EmailJS
        ).then((result) => {
            console.log('Email successfully sent:', result.text);
            alert('Message sent successfully!');
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: ''
            });
        }).catch((error) => {
            console.error('Error sending email:', error.text);
            alert('Failed to send message!');
        });
    };

    return (
        <div id='contact' className='bg'>
            <div className="container">
                <h1 className="title">Let's Connect</h1>
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/sontr" target='_blank' rel="noopener noreferrer">
                        <span className='button-back'><FontAwesomeIcon icon={faLinkedinIn} /></span>
                    </a>
                    <a href="https://github.com/Son-Tr" target='_blank' rel="noopener noreferrer">
                        <span className='button-back'><FontAwesomeIcon icon={faGithub} /></span>
                    </a>
                    <a href="mailto:sontran.kh1502@gmail.com" target='_blank' rel="noopener noreferrer">
                        <span className='button-back'><FontAwesomeIcon icon={faEnvelopeOpen} /></span>
                    </a>
                </div>
                <form className="form-input" onSubmit={handleSubmit}>
                    {input.map(({ type, placeholder, name }, index) => {
                        return (
                            <input
                                className='input'
                                key={index}
                                type={type}
                                name={name}
                                value={formData[name]} // Bind state to input
                                onChange={handleChange} // Update state on change
                                required
                                placeholder={placeholder} />
                        );
                    })}
                    <textarea
                        className='input'
                        name="message"
                        value={formData.message} // Bind state to textarea
                        onChange={handleChange} // Update state on change
                        placeholder='Message*'>
                    </textarea>

                    <div className="wrap-btn">
                        <button className='button-back' type='submit'>
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
