import React from 'react';
import '../App.css'; // Import the CSS file
import Video from '../Images/videoabout.mp4';

function AboutSection() {
    return (
        <section className="about" id="about">
            <h1 className="heading"> <span>about</span> us</h1>
            <div className="row">
                <div className="video-container">
                    <video src={Video} loop autoPlay muted/>
                    <h3>best diaries</h3>
                </div>

                <div className="content">
                    <h3>why choose us?</h3>
                    <p>What sets us apart is not just the carefully curated selection of diaries, but the commitment to turning ordinary moments into extraordinary memories. Our diaries are more than just blank pages, they are vessels for your thoughts, dreams, and aspirations. With exquisite designs and premium quality materials, each diary is a testament to our dedication to providing you with a writing companion that is as unique as you are. Choose us for an unparalleled journey of self-expression, where every stroke of the pen becomes a brushstroke on the canvas of your life. Let your story unfold with us, where every diary is a chapter waiting to be written.</p>
                    <a href="#" className="btn">learn more</a>
                </div>
            </div>
        </section>
    );
}
export default AboutSection;