//import React from 'react';
import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
import '../App.css'; // Import the CSS file
import Diary1product from '../Images/Product/Diary1.png';
import Diary2product from '../Images/Product/Diary2.jpg';
import Diary3product from '../Images/Product/Diary3.jpg';
import Diary4product from '../Images/Product/Diary4.jpeg';
import Diary5product from '../Images/Product/Diary5.jpeg';
import Diary6product from '../Images/Product/Diary6.jpeg';
import Diary7product from '../Images/Product/Diary7.jpg';
import Diary8product from '../Images/Product/Diary8.jpeg';
function ProductSection() {
    return (
        <section className="products" id="products">
            <h1 className="heading">latest <span>products</span></h1>
            <div className="box-container">
                {/* Product 1 */}
                <div className="box">
                    <span className="discount">-40%</span>
                    <div className="image">
                        <img src={Diary1product} alt="Product 1"/>
                        <div className="icons">
                            <a href="#" className="fas fa-heart"></a>
                            <a href="#" className="cart-btn">add to cart</a>
                            <a href="#" className="fas fa-share"></a>
                        </div>
                    </div>
                    <div className="content">
                        <h3 style={{ fontSize: '2rem' }}>Diary Book</h3>
                        <div className="price">&#8377;378 <span>&#8377;630</span></div>
                    </div>
                </div>

                {/* Product 2 */}
                <div className="box">
                    <span className="discount">-24%</span>
                    <div className="image">
                        <img src={Diary2product} alt="Product 2"/>
                        <div className="icons">
                            <a href="#" className="fas fa-heart"></a>
                            <a href="#" className="cart-btn">add to cart</a>
                            <a href="#" className="fas fa-share"></a>
                        </div>
                    </div>
                    <div className="content">
                        <h3 style={{ fontSize: '2rem' }}>Happy-go-lucky</h3>
                        <div className="price">&#8377;399 <span>&#8377;525</span></div>
                    </div>
                </div>

                {/* product 3 */}
                <div className="box">
                    <span className="discount">-12%</span>
                    <div className="image">
                        <img src={Diary3product} alt="Product 2"></img>
                        <div className="icons">
                            <a href="#" className="fas fa-heart"></a>
                            <a href="#" className="cart-btn">add to cart</a>
                            <a href="#" className="fas fa-share"></a>
                        </div>
                    </div>
                    <div className="content">
                        <h3 style={{ fontSize: '2rem' }}>Dreamy Pages </h3>
                        <div className="price"> &#8377;351 <span> &#8377;399</span></div>
                    </div>
                </div>

                {/* product 4 */}
                <div className="box">
                    <span className="discount">-15%</span>
                    <div className="image">
                        <img src={Diary4product}></img>
                        <div className="icons">
                            <a href="#" className="fas fa-heart"></a>
                            <a href="#" className="cart-btn">add to cart</a>
                            <a href="#" className="fas fa-share"></a>
                        </div>
                    </div>
                    <div className="content">
                        <h3 style={{ fontSize: '2rem' }}>Daily Planner</h3>
                        <div className="price"> &#8377;381 <span> &#8377;449</span></div>
                    </div>
                </div>

                {/* product 5 */}
                <div className="box">
                    <span className="discount">-25%</span>
                    <div className="image">
                        <img src={Diary5product}></img>
                        <div className="icons">
                            <a href="#" className="fas fa-heart"></a>
                            <a href="#" className="cart-btn">add to cart</a>
                            <a href="#" className="fas fa-share"></a>
                        </div>
                    </div>
                    <div className="content">
                    <h3 style={{ fontSize: '2rem' }}> Limitless Talk pack of 2</h3>
                    <div className="price"> &#8377;510 <span> &#8377;680</span></div>
                    </div>
                </div>

                {/* product 6 */}
                <div className="box">
                    <span className="discount">-10%</span>
                    <div className="image">
                        <img src={Diary6product} ></img>
                        <div className="icons">
                            <a href="#" className="fas fa-heart"></a>
                            <a href="#" className="cart-btn">add to cart</a>
                            <a href="#" className="fas fa-share"></a>
                        </div>
                    </div>
                    <div className="content">
                        <h3 style={{ fontSize: '2rem' }}>Personal Moments</h3>
                        <div className="price"> &#8377;459 <span> &#8377;510</span></div>
                    </div>
                </div>
                {/* product 7 */}
                <div className="box">
                    <span className="discount">-15%</span>
                    <div className="image">
                        <img src={Diary7product}></img>
                        <div className="icons">
                            <a href="#" className="fas fa-heart"></a>
                            <a href="#" className="cart-btn">add to cart</a>
                            <a href="#" className="fas fa-share"></a>
                        </div>
                    </div>
                    <div className="content">
                        <h3 style={{ fontSize: '2rem' }}>A Walk to Talk Journal</h3>
                        <div className="price"> &#8377;424 <span> &#8377;499</span></div>
                    </div>
                </div>

                {/* product 8 */}
                <div className="box">
                    <span className="discount">-40%</span>
                    <div className="image">
                        <img src={Diary8product}></img>
                        <div className="icons">
                            <a href="#" className="fas fa-heart"></a>
                            <a href="#" className="cart-btn">add to cart</a>
                            <a href="#" className="fas fa-share"></a>
                        </div>
                    </div>
                    <div className="content">
                        <h3 style={{ fontSize: '2rem' }}>Monthly Planner</h3>
                        <div className="price"> &#8377;426 <span> &#8377;710</span></div>
                    </div>
                </div>

            </div>
        </section>
    );
}
export default ProductSection;