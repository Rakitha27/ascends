import React, { Component } from 'react';
import './component.css'

class Login extends Component {

    render(){
        return(
            <div className='login'>
                <div><h2>Log in</h2></div>
                <form>
                    <div className="form-field">
                        <label className="field-name">Email address</label>
                        <input type="email" className="field" placeholder="john@gmail.com" style={{fontSize: 17}}/><br/>
                    </div>
                    <div className="form-field">
                        <label className="field-name">Password</label>
                        <input type="password" className="field" placeholder="password" style={{fontSize: 17}}/><br/>
                    </div>
                    <div className="form-field">
                        <button className="form-button" >Login</button>
                    </div>
                </form>
                
            </div>
        );
    }
}

export default Login;