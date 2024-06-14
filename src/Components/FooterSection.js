import React from 'react';
import '../App.css'; // Import the CSS file
import Credit from '../Images/icons/credit.png';

function FooterSection() {
    return (
        <section className="footer">
            <div className="box-container">
                <div className="box">
                    <h3>quick links</h3>
                    <a href="#">home</a>
                    <a href="#">about</a>
                    <a href="#">products</a>
                    <a href="#">review</a>
                    <a href="#">contact</a>
                </div>
                <div className="box">
                    <h3>extra links</h3>
                    <a href="#">my account</a>
                    <a href="#">my order</a>
                    <a href="#">my favorite</a>
                </div>

                <div className="box">
                    <h3>contact info</h3>
                    <a href="#">+91 9876543210</a>
                    <a href="#">diaryshowcase@gmail.com</a>
                    <a href="#">Pune, India</a>
                    <img src={Credit} alt="Credit Cards"></img>
                </div>

            </div>
            <div className="credit">&copy;2024<span> Divya Londhe. </span>All Rights Reserved. </div>

        </section>
    );
}
export default FooterSection;