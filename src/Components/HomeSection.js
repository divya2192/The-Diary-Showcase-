import React from 'react';
import '../App.css'; // Import the CSS file
//import'./Images';
function HomeSection() {
    return (
        <section className="home" id="home">
            <div className="content">
                <h4>Get the Best</h4>
                <span>Diary Products!</span>
                <p>"Discover the art of expression through our diverse range of diaries. From elegant leather-bound classNameics to vibrant modern designs, find the perfect companion for your thoughts at our diary shopping haven."</p>
                <a href="#" className="btn">shop now</a>
            </div>
        </section>
    );
}
export default HomeSection;