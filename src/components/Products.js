import React, { Component } from 'react';
import './component.css';
import img1 from '../assets/p2.jpg';
import img2 from '../assets/p1.webp';
import img3 from '../assets/p3.webp';
import img4 from '../assets/p4.webp';
import img5 from '../assets/p5.jpg';
import img6 from '../assets/p6.jpg';

class Products extends Component {
    render(){
        return(
            <div className='products-main'>
                <div className='p-main-title'>
                    What we do ?
                </div>
                <div className='p-main-para'>
                We help product vendors create impactful and 
                futuristic digital <br/> solutions to solve real user problems.​
                </div>
            <div className="products">
                <div className='.p-card-container'>
                    <div className="p-card" style={{backgroundColor: 'rgb(245, 245, 245)'}}>
                        <img className="p-card-img" src={img1} alt="" />
                        <div>
                            <div className="p-card-t">Smark Banking <br/>Mobile App</div>
                                <div className="p-card-p">This is our very first online Mobile Banking
                                app which we implemented for our loyal client. Simply you can download
                                this from any store. You have to create an account in this app by 
                                adding your personla data to work with the bank.
                                </div>
                        </div> 
                    </div>
                </div>
                <div className='.p-card-container'>
                    <div className="p-card" style={{backgroundColor: 'rgb(189, 236, 255)'}}>
                        <img className="p-card-img" src={img2} alt="" />
                        <div>
                            <div className="p-card-t">Food delivery <br/>Mobile App</div>
                                <div className="p-card-p">Food delivery apps have become such useful
                                apps during this pandemic time to all the restaurant owners. Theres is an
                                option to track your order until you get it to your hand. All the 
                                personal data is secure in this app.
                                </div>
                        </div> 
                    </div>
                </div>
                <div className='.p-card-container'>
                    <div className="p-card" style={{backgroundColor: 'rgb(242, 243, 250)'}}>
                        <img className="p-card-img" src={img3} alt="" />
                        <div>
                            <div className="p-card-t">Travelling <br/>Mobile App</div>
                                <div className="p-card-p">This app is useful to all the travellers
                                in Sri-Lanka to get the accurate maps around the country. It shows 
                                the exact path with the time taken to reach there with the data of
                                weather forcast also.
                                </div>
                        </div> 
                    </div>
                </div><br/>
            </div>
            <div className="products">
            <div className='.p-card-container'>
                <div className="p-card" style={{backgroundColor: 'rgb(240, 250, 250)'}}>
                    <img className="p-card-img" src={img5} alt="" />
                    <div>
                        <div className="p-card-t">Tutoring <br/>Website</div>
                            <div className="p-card-p">Online education has become a major thing during
                            this pandemic time. It is easy to both tutor and the students to login 
                            to a website to continue their classes and specially for students to upload
                            their assignments also.
                            </div>
                    </div> 
                </div>
            </div>
            <div className='.p-card-container'>
                <div className="p-card" style={{backgroundColor: 'rgb(109, 109, 110)', color: 'white'}}>
                    <img className="p-card-img" src={img4} alt="" />
                    <div>
                        <div className="p-card-t">Restaurant <br/>Website</div>
                            <div className="p-card-p">This is a restaurant website where you can
                            order online by checking their menus or looking by the given pictures and
                            feedbacks. You'll recieve a notification after your order is ready.
                            </div>
                    </div> 
                </div>
            </div>
            <div className='.p-card-container'>
                <div className="p-card" style={{backgroundColor: 'rgb(220, 226, 232)'}}>
                    <img className="p-card-img" src={img6} alt="" />
                    <div>
                        <div className="p-card-t">Hotel Booking <br/>Website</div>
                            <div className="p-card-p">This is an online hotel booking site. You can 
                            select a room by your own choice with the given reasonable price range. 
                            You can book the days and your lunch menus also as you choice.
                            </div>
                    </div> 
                </div>
            </div><br/>
        </div>
        </div>
        )}}
            


export default Products;