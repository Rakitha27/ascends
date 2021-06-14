import React, { Component } from 'react';
import './component.css';
import img from '../assets/career.png';

class About extends Component {

    render(){
        return(
            <div className='main-career'>
                <div className='p-main-title'>
                    Be a part of Ascends
                </div>
                <div className='p-main-para'>We are on a journey to deliver products 
                that will make a difference and <div/>make tomorrow a safe and inclusive
                place. If you like to be part of our<div/> growth story, we’d 
                love to hear from you!
                </div>
                <div className='career-descrip'>
                    <div><img className="about-img1" alt="" src={img}/></div>
                    <div className='career-para'>Our employees are the greatest asset
                    at Ascends. We take great pride in having the best talent in the 
                    industry and are constantly on the lookout for innovative, 
                    disruptive minds to be a part of our dynamic, cross-functional
                    teams.​<br/><br/>
                    We are building something new, something cool, something exciting
                    everyday. Thus, we are bringing out the smartest brains in the
                    island together for a collective goal where you would end up 
                    enjoying delivering something great to the world at the end of 
                    the day.</div>
                </div>
                <div className='hiring-t'>We are Hiring!</div>
                <div className='hiring-option'>
                Software Quality Assurance - SQAE / QAE <hr/>
                UX - Senior Engineer <hr/>
                Security Engineer <hr/>
                Frontend Developer - React.js <hr/>
                Database Administrator <hr/>
                Software Engineer - Intern <hr/>
                </div>
            </div>
        );
    }
}

export default About;