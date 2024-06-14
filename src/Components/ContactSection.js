import React from 'react';
import '../App.css'; // Import the CSS file
//import'./Images';

function ContactSection() {
    return (
        <section className="contact" id="contact">
            <h1 className="heading"><span>contact</span> us </h1>
            <div className="row">
                <form action="">
                    <input type="text" placeholder="Name" className="box"></input>
                    <input type="email" placeholder="Email" className="box"></input>
                    <input type="number" placeholder="Number" className="box"></input>
                    <textarea name="" className="box" placeholder="Message" cols="30" rows="10"></textarea>
                    <input type="submit" value="Send message" className="box"></input>
                </form>
            </div>
        </section>
    );
}
export default ContactSection;