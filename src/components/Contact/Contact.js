import './Contact.scss';
import emailjs from 'emailjs-com'; // Import EmailJSz
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {

    const [formData, setFormData] = useState({
        text: '',
        email: '',
        number: '',
        message: ''
    });

    //Handle input changes and update state
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission

        // Send email using EmailJS
        toast.promise(
            emailjs.send(
                'service_aih5yjc',
                'template_09jz79q',
                formData, // Send formData directly
                'Xjyfx29v4VeYkicPa'),
            {
                //The state of the notification system
                pending: "Sending your message...",
                success: "Message sent successfully!",
                error: "Failed to send message."
            }
        ).then((result) => {
            // console.log('Email successfully sent:', result.text);

            // clear input when user submit
            setFormData({
                text: '',
                email: '',
                number: '',
                message: ''
            });
        }).catch((error) => {
            // console.error('Error sending email:', error.text);
        })
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
                </div>
                <form className="form-input" onSubmit={handleSubmit}>
                    <input
                        className='input'
                        type="text"
                        name="text"
                        value={formData.text}
                        onChange={handleChange}
                        placeholder="Name" />
                    <input
                        className='input'
                        type="number"
                        name="number"
                        value={formData.number}
                        onChange={handleChange}
                        placeholder="Phone Number" />
                    <div className="wrap-iput">
                        <input
                            className="input"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="Email*" />
                    </div>
                    <textarea
                        className='input'
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder='Message*'>
                    </textarea>

                    <div className="wrap-btn">
                        <button className='button-back' type='submit'>
                            Send
                        </button>
                    </div>
                </form>
                <ToastContainer
                    limit={1}
                />
            </div>
        </div>
    );
};

export default Contact;
