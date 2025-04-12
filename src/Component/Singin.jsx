import React from 'react'
import './Contact.css'
function Singin() {
    return (
        <div>
            <div className="Home" >
 
                <div className="form-container">
                    
                    <div className="sign-in-side">
                        
                        <h2 className="sign-in-title">Sign in </h2>

                        <div className="social-icons">
                            <div className="social-icon">
                                <span>f</span>
                            </div>
                            <div className="social-icon">
                                <span>G+</span>
                            </div>
                            <div className="social-icon">
                                <span>in</span>
                            </div>
                        </div>

                        <div className="divider">or use your account</div>

                        <div className="form-group">
                            <input type="email" className="form-input" placeholder="Email" />
                        </div>

                        <div className="form-group">
                            <input type="password" className="form-input" placeholder="Password" />
                        </div>

                        <div className="forgot-password">
                            <a href="#">Forgot your password?</a>
                        </div>

                        <button className="sign-in-btn">SIGN IN</button>
                    </div>

                    <div className="sign-up-side">
                        
                        <div className="sign-up-content">
                        <a href="/" className="text-amber-50 font-bold text-2xl">NETFLIX</a>
                            <h2>Hello, Friend!</h2>
                            <p>Enter your personal details and start journey with us</p>
                            <button  className="sign-up-btn">SIGN UP</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Singin
