import React, { Component } from 'react';
import './component.css';
import img from '../assets/contact.png';

class About extends Component {

    render(){
        return(
            <div className='main-contact'>
                <div className='contact-bar'>
                    Contact us!
                </div>
                <div className='contact-bar-p'>Get in touch with us for business-related matters or other enquiries.
We’re ready to help.
                </div>
                <div className='contact-descrip'>
                    <div><img className="contact-img" alt="" src={img}/></div>
                    <div className='contact-para'>Our employees are the greatest asset
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
                <div className='contact-t'>Fill the below form</div>
                <div className='contact-form'>
                
                </div>
            </div>
        ); 
    }
}

export default About;