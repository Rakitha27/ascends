import React, { Component } from 'react';
import './component.css';
import img from '../assets/info2.jpg';
import fb from '../assets/fb.png';
import ig from '../assets/ig.webp';
import In from '../assets/in.png';
import yt from '../assets/yt.png';

class Footer extends Component {

    render(){
        return(
            <div className='footer'>
                <div className='footer-line'>Reach to us!</div>
                    <div className='footer-contact'>
                        <div className='f1'>
                            <img className="footer-img" src={img} alt="" /><br/>
                            <h3>Contact Info</h3>
                            <hr /> <br />
                            <div className='f-contact'>
                            <div className='f-c'> <b>Mobile</b>&nbsp;&nbsp;:&nbsp; &nbsp;<a href="tel:+94777540000" className="u-line">+94 77 754 0000</a></div>
                            <div className='f-c'><b>Land</b> &nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; &nbsp;<a href="tel: +94114572139" className="u-line">+94 11 457 2139</a></div>
                            <div className='f-c'><b>Email </b>&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp; <a href="mailto:name@gmail.com" className="u-line">name@gmail.com</a></div>
                            <div className='f-c'><b>Address </b>&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp; 22/1D Fifth Floor, Colombo 03 </div>
                            </div>
                        </div>
                    <div className='f2'>
                        We are a team of passionate people whose goal is to
                        improve everyone's life through disruptive products. 
                        We build great products to solve your business 
                        problems. Our products are designed for small to large
                        scale companies willing to optimize their performance. <br/><br/>
                        We love engaging with new clients and our community. If you have an 
                        inquiry about building digital products or any other questions, get 
                        in touch!​
                        <br/><br/>
                        <h3>Follow Us</h3><hr/> <br/>
                        <div className="f-f">
                        <div className='f-follow'>
                            <div className='f-c'> <a href="https://www.youtube.com" className="u-line"><img className="follow-img" src={yt} alt="" style={{paddingBottom: '10px'}} /> </a></div>
                            <div className='f-c'> <a href="https://www.facebook.com" className="u-line"><img className="follow-img" src={fb} alt="" /></a></div>

                        </div>
                        <div className='f-follow2'>   
                            <div className='f-c'> <a href="https://www.linkedin.com" className="u-line"><img className="follow-img" src={In} alt="" style={{paddingBottom: '12px'}} /></a></div>
                            <div className='f-c'> <a href="https://www.instagram.com" className="u-line"><img className="follow-img" src={ig} alt="" /></a></div>
                        </div>
                        
                        </div>
                    </div>
                    
                </div>
                    <div style={{display: 'flex', backgroundColor: 'black'}}>
                        <div style={{width:'300px'}}>c</div>
                        <div className='f-end'>Copyrights © 2020 All Rights Reserved by Ascends</div>
                    </div>
            </div>
        );
    }
}

export default Footer;

