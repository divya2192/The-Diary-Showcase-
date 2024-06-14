import React from 'react';
import '../App.css'; // Import the CSS file
import Card from '../Images/icons/card.jpg';
import Credit from '../Images/icons/card.jpg';
import Delivery from '../Images/icons/delivery.png';
import Payment from '../Images/icons/payment.png';
import Money from '../Images/icons/money.png'

function IconSection() {
    return (
        <section className="icons-container">
            <div className="icons">
                <img src={Delivery} style={{ height: '130px', width: '130px' }} alt="delivery"/> 
                                        
                <div className="info">
                    <h3>free delivery</h3>
                    <span>on all orders</span>
                </div>
            </div>

            <div className="icons">
                <img src={Money} style={{ height: '100px', width: '100px' }} alt="money"/>
                <div className="info">
                    <h3>10 days return policy</h3>
                    <span>moneyback guarantee</span>
                </div>
            </div>

            <div className="icons">
                <img src={Card}  style={{ height: '150px', width: '150px' }} alt="card"></img>
                <div className="info">
                    <h3>offer & gifts</h3>
                    <span>on all orders</span>
                </div>
            </div>

            <div className="icons">
                <img src={Payment} style={{ height: '120px', width: '120px' }} alt="payment"/>
                <div className="info">
                    <h3>secure payments</h3>
                    <span>protected by PayPal</span>
                </div>
            </div>
        </section>
    );
}
export default IconSection;