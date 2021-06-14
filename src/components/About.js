import React, { Component } from 'react';
import './component.css';
import img from '../assets/story.webp';
import img2 from '../assets/mission.png';


class About extends Component {

    render(){
        return(
            <div className='about'>
                <div className='about-head'>
                    We are Ascends!
                </div>
                <div className='about-para'>
                    <div className='aPara'>
                        <h1>Our Story</h1>
                        How it all started was when we saw the difficulties
                        our friends were going through in the consulting,
                        fitness, coaching, and psychology industries to
                        continue their business during the COVID-19 
                        pandemic. On a gloomy late-night in April, 
                        pondering about the effects of the pandemic on 
                        business, we took a step forward into building 
                        an app to solve this particular problem. We 
                        always wanted to build things that actually help 
                        people and we couldn’t sit back this time when we 
                        saw an opportunity.  
                    </div>
                    <div> 
                        <img className="about-img1" alt="" src={img}/>
                    </div>
                </div>
                <div className='about-para2'>
                    <div> 
                        <img className="about-img2" alt="" src={img2}/>
                    </div>
                    <div className='aPara2'>
                        <h1>What we do?</h1>
                        We allows customers to browse Experts in diverse
                        industries, search through all Experts from many 
                        categories and make a booking. After the booking
                        is placed, the Expert will start the video call.
                        Once the session is done, the customer can leave
                        ratings and reviews to help the ecosystem. Our
                        goal is to help professionals do seamless 1-1
                        video consultations with customers while 
                        getting paid without any friction. We want to build
                        a community of experts worldwide providing a range of
                        useful services to our users.
                    </div>
                </div>
                
            </div>
        );
    }
}

export default About;