import React, { useState } from 'react';

export default function Contact() {

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

    const handleInput = (e) => {
        // Check for the type of input and update the associated variable
        if (e.target.id === "name"){
            setUserName(e.target.value);
        };
        if (e.target.id === "email"){
            setEmail(e.target.value);
        };
        if (e.target.id === "message"){
            setMessage(e.target.value);
        };
    }

    const checkInput = (e) => {
        // Check whether the user inputted data and if not set the error message
        if (!e.target.value){
            alert(`You must insert a ${e.target.id}`)
        };
        // For email inputs, check that the email is a valid email address
        if (e.target.id === "email"){
            if (!emailRegex.test(email)) {
                alert('Email address is invalid. Please try again');
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!userName || !email || !message){
            alert('Missing information! Please complete all form fields.');
        } else{
            alert('Thanks for reaching out!');
        };
    }

    return (
        <div className="container">
            <h2 className="mb-5">Contact</h2>
            <form className="w-50 mx-auto px-5 pb-3 pt-4 bg-brand">
                <div className="form-group py-2">
                    <label for="name" className="text-white mb-2">Name</label>
                    <input type="text" class="form-control" id="name" placeholder="Name" value={userName} onBlur={checkInput} onChange={handleInput} />
                </div>
                <div className="form-group py-2">
                    <label for="email" className="text-white mb-2">Email address</label>
                    <input type="email" class="form-control" id="email" placeholder="name@example.com" value={email} onBlur={checkInput} onChange={handleInput} />
                </div>
                <div className="form-group py-2 mb-4">
                    <label for="message" className="text-white mb-2">Message</label>
                    <textarea class="form-control" id="message" rows="5" value={message} onBlur={checkInput} onChange={handleInput}></textarea>
                </div>
                <button type="submit" class="btn btn-submit" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
}