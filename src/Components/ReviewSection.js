import React from 'react';
import '../App.css'; // Import the CSS file
import Review1 from '../Images/Review/Random1.jpeg';
import Review2 from '../Images/Review/Random2.jpeg';
import Review3 from '../Images/Review/Random3.jpeg';

function ReviewSection() {
    return (
        <section className="review" id="review">
            <h1 className="heading">customers <span> review </span></h1>
            <div className="box-container">
                {/* Review 1 */}
                <div className="box">
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <p>I absolutely love my new diary! The design is not only aesthetically pleasing but also functional. It adds a touch of elegance to my daily routine, making me excited to write down my thoughts every day.</p>
                    <div className="user">
                        <img src={Review1} alt="User 1"></img>
                        <div className="user-info">
                            <h3>Ranee</h3>
                            <span>Happy Customer</span>
                        </div>
                    </div>
                    <span className="fas fa-quote-right"></span>
                </div>

                {/* review 2 */}
                <div className="box">
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <p>I've been using this diary for months, and it still looks as good as new. The durability is impressive, and it holds up well to daily wear and tear. Highly recommended to buy! Definitely worth the investment! </p>
                    <div className="user">
                        <img src={Review2}></img> 
                        <div className="user-info">
                            <h3>Shaun</h3>
                            <span>Happy Customer</span>
                        </div>
                    </div>
                    <span className="fas fa-quote-right"></span>
                </div>

                {/*review 3*/}
                <div className="box">
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <p>Received this diary as a gift, and it's one of the best presents I've ever gotten. The attention to detail, from the cover design to the quality of the paper, makes it feel like a truly special and thoughtful gift</p>
                    <div className="user">
                        <img src={Review3}></img>
                        <div className="user-info">
                            <h3>Martin</h3>
                            <span>Happy Customer</span>
                        </div>
                    </div>
                    <span className="fas fa-quote-right"></span>
                </div>

            </div>
        </section>
    );
}
export default ReviewSection;