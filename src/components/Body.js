import React, { Component } from 'react';
import './component.css';
import img1 from '../assets/mApp.png';
import img2 from '../assets/wDev.png';
import img3 from '../assets/gDev.png';
import img from '../assets/h-img1.png';


class Body extends Component {
    render(){
        return(
            
            <div className='body'>
                <div className='header'>
                <div className='header-body'>
                    <div className="header-para">
                    At Ascends we are experts in building and managing 
                    dedicated teams of software engineers who become a 
                    regular part of your in-house workforce, contributing 
                    to the development, maintenance and support of your 
                    software applications.
                    </div>
                    <div><img className="header-img" src={img} alt="" /></div>
                </div>
                </div>
                <div className='card-topic'>
               <h4 className="topic"> Here's some services provided by our Experts </h4>
                </div>
                <div className="card-container">
                <div className="card">
                        <div >
                        <img className="card-img" src={img1} alt="" />
                        <div className="card-detail">
                            <div className="card-t">Mobile App Development</div>
                            <div className="card-p">Our mobile app development team has deep
                                 expertise and experience building mobile apps 
                                 across all mobile platforms</div>
                        </div>
                        </div>
                </div>    
                <div className="card">
                        <div >
                        <img className="card-img" src={img2} alt="" />
                        <div className="card-detail">
                            <div className="card-t">Web Development</div>
                            <div className="card-p">Our web applications are highly polished, performant,
                                fully mobile responsive, 
                                and utilize the latest web-based technologies.</div>
                        </div>
                        </div>
                </div>  
                <div className="card">
                        <div >
                        <img className="card-img" src={img3} alt="" />
                        <div className="card-detail">
                            <div className="card-t">Game Development</div>
                            <div className="card-p">Our Game development team has 
                                deep expertise and experience building mobile games 
                                across all mobile platforms</div>
                        </div>
                        </div>
                </div>
                </div>
                <div className='header-b'>
                    Why Ascends?
                </div>
                <div className='header-b-p'>
                Working with us, our clients can extend their teams with 
                exceptional technical talent, quickly <br/> build and retain 
                relevant domain expertise, improve their agility and 
                become more profitable.<br/> Our highly skilled software
                professionals and almost two decades of experience working with <br/>
                geographically dispersed teams have made us a trusted 
                partner to clients around the world.
                </div>
            </div>
        );
    }
}

export default Body;