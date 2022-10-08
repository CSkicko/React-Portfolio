import React from 'react';

export default function Contact() {
    return (
        <div className="container">
            <h2 className="mb-5">Contact</h2>
            <form className="w-50 mx-auto px-5 pb-5 pt-4 bg-brand">
                <div className="form-group py-2">
                    <label for="name" className="text-white mb-2">Name</label>
                    <input type="text" class="form-control" id="name" placeholder="Name" />
                </div>
                <div className="form-group py-2">
                    <label for="email" className="text-white mb-2">Email address</label>
                    <input type="email" class="form-control" id="email" placeholder="name@example.com" />
                </div>
                <div className="form-group py-2">
                    <label for="message" className="text-white mb-2">Message</label>
                    <textarea class="form-control" id="message" rows="5"></textarea>
                </div>
            </form>
        </div>
    );
}