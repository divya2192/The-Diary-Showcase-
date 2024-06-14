import React from 'react';
import styles from '../App.css'
import '../App.css'; // Import the CSS file
//import'./Images';

function Header() {
    return (
        <header>
            <input type="checkbox" name="" id="toggler" />
            <label htmlFor="toggler" className="fas fa-bars"></label>

            <a href="#" className="logo">The Diary Showcase</a>
            <nav className="navbar">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#products">Products</a>
                <a href="#review">Review</a>
                <a href="#contact">Contact</a>
            </nav>

            <div className="icons">
            <a href="#" className="fas fa-heart"></a>
            <a href="#" className="fas fa-shopping-cart"></a>
            <a href="#" className="fas fa-user"></a>

            </div>
        </header>
    );
}
export default Header;