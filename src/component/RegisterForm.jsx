import React, { Component } from 'react';
import '../css/w3.css';

class RegisterForm extends Component {
    submitHandler(e) {
        e.preventDefault();
        alert('Register');
        // Post register info to api here...
    }

    render() {
        var s = {
            width: '50px'
        };
        return (
            <div className="w3-section">
                <div className="w3-container w3-twothird">
                    <div className="w3-padding w3-card-4">
                        <h2 className="w3-text-blue-gray">Register</h2>

                        <form className="w3-text-blue-gray" onSubmit={this.submitHandler.bind(this)}>

                            <div className="w3-row w3-section">
                                <div className="w3-half w3-container">
                                    <div className="w3-col" style={s}><i className="w3-xxlarge fa fa-user"></i></div>
                                    <div className="w3-rest">
                                        <input className="w3-input w3-border" name="first" type="text" placeholder="First Name" />
                                    </div>
                                </div>

                                <div className="w3-half w3-container">
                                    <div className="w3-col" style={s}><i className="w3-xxlarge fa fa-user"></i></div>
                                    <div className="w3-rest">
                                        <input className="w3-input w3-border" name="last" type="text" placeholder="Last Name" />
                                    </div>
                                </div>
                            </div>

                            <div className="w3-row w3-section w3-container">
                                <div className="w3-col" style={s}><i className="w3-xxlarge fa fa-envelope-o"></i></div>
                                <div className="w3-rest">
                                    <input className="w3-input w3-border" name="email" type="text" placeholder="Email" />
                                </div>
                            </div>

                            <div className="w3-row w3-section w3-container">
                                <div className="w3-col" style={s}><i className="w3-xxlarge fa fa-user"></i></div>
                                <div className="w3-rest">
                                    <input className="w3-input w3-border" name="phone" type="text" placeholder="User Name" />
                                </div>
                            </div>

                            <div className="w3-row w3-section">
                                <div className="w3-half w3-container">
                                    <div className="w3-col" style={s}><i className="w3-xxlarge fa fa-key"></i></div>
                                    <div className="w3-rest">
                                        <input className="w3-input w3-border" name="phone" type="text" placeholder="Password" />
                                    </div>
                                </div>

                                <div className="w3-half w3-container">
                                    <div className="w3-col" style={s}><i className="w3-xxlarge fa fa-key"></i></div>
                                    <div className="w3-rest">
                                        <input className="w3-input w3-border" name="message" type="text" placeholder="Confirm Password" />
                                    </div>
                                </div>
                            </div>

                            <p className="w3-center">
                                <button className="w3-btn w3-section w3-blue-gray w3-ripple"> Register </button>
                            </p>

                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default RegisterForm;