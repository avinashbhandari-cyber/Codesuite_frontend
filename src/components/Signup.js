import React, { Component } from 'react'
import { Button, Input, Jumbotron } from 'reactstrap'
import AuthenticationService from '../Service/AuthenticationService';
import { Link } from 'react-router-dom';

class Signup extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            email: '',
            password: '',
            usernameError: '',
            emailError: '',
            passwordError: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.signupClicked = this.signupClicked.bind(this)
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }

    validate = () => {
        let usernameError = "";
        let emailError = "";
        let passwordError = "";

        if (!this.state.username) {
            usernameError = 'Username cannot be empty'
        }
        if (!this.state.email.includes('@')) {
            emailError = 'invalid email';
        }

        if (!this.state.password) {
            passwordError = 'Password cannot be empty';
        }
        if (emailError) {
            this.setState({ emailError })
            return false;
        }

        if (emailError || usernameError || passwordError) {
            this.setState({ emailError, usernameError, passwordError });
            return false;
        }

        return true;
    }

    signupClicked() {
        const isValid = this.validate();
        if (!isValid) {
            return false;
        }
        AuthenticationService
            .userRegistrationService(this.state.email, this.state.username, this.state.password)
            .then(() => {
                this.setState({ showSuccessMessage: true })
                this.setState({ hasLoginFailed: false })
            })
            .catch(() => {
                this.setState({ showSuccessMessage: false })
                this.setState({ hasLoginFailed: true })
            })
    }

    render() {

        return (
            <div
                style={{ color: 'white' }}
            >
                <center>
                <div className="container">
                    {this.state.hasLoginFailed && <div className="alert alert-danger">Email already registered!</div>}
                    {this.state.showSuccessMessage && <div className="alert alert-success">Sucessfully Registered</div>}
                        <form style={{
                            height: '520px',
                            width: '400px',
                            backgroundColor: "rgba(255,255,255,0.1)",
                            position: 'absolute',
                            transform: 'translate(-50%,-50%)',
                            top: '50%',
                            left: '50%',
                            borderRadius: '10px',
                            backdropFilter: 'blur(10px)',
                            border: '2px solid rgba(255,255,255,0.1)',
                            boxShadow: '0 0 40px rgba(8,7,16,0.6)',
                            padding: '50px 35px',
                            fontFamily: 'Poppins, sans-serif',
                            color: '#ffffff',
                            letterSpacing: '0.5px',
                            outline: 'none',
                            border: 'none'
                        }}>
                            <label style={{
                                fontSize: '22px',
                                fontWeight: '500',
                                lineHeight: '42px',
                                textAlign: 'center',
                            }}>Username</label>
                            <Input
                                type="text"
                                name="username"
                                value={this.state.username}
                                onChange={this.handleChange}
                                style={{
                                    display: 'block',
                                    height: '50px',
                                    width: '100%',
                                    backgroundColor: 'rgba(255,255,255,0.07)',
                                    fontFamily: 'Poppins, sans-serif',
                                    borderRadius: '3px',
                                    padding: '0 10px',
                                    marginTop: '8px',
                                    fontSize: '14px',
                                    fontWeight: '300',
                                    color: '#e5e5e5'
                    }}
                />
                            <div style={{ fontSize: 12, color: "red" }}> {this.state.usernameError} </div>
                            <br />
                            <label style={{
                                fontSize: '22px',
                                fontWeight: '500',
                                lineHeight: '42px',
                                textAlign: 'center',
                            }}>Email</label>

                            <Input
                                type="text"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                style={{
                                    display: 'block',
                                    height: '50px',
                                    width: '100%',
                                    backgroundColor: 'rgba(255,255,255,0.07)',
                                    fontFamily: 'Poppins, sans-serif',
                                    borderRadius: '3px',
                                    padding: '0 10px',
                                    marginTop: '8px',
                                    fontSize: '14px',
                                    fontWeight: '300',
                                    color: '#e5e5e5'
                    }}
                            />
                            <div style={{ fontSize: 12, color: "red" }}> {this.state.emailError} </div>

                            <br />
                            <label style={{
                                fontSize: '22px',
                                fontWeight: '500',
                                lineHeight: '42px',
                                textAlign: 'center',
                            }}>Password</label>

                            <Input
                                type="password"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                                style={{
                                    display: 'block',
                                    height: '50px',
                                    width: '100%',
                                    backgroundColor: 'rgba(255,255,255,0.07)',
                                    fontFamily: 'Poppins, sans-serif',
                                    borderRadius: '3px',
                                    padding: '0 10px',
                                    marginTop: '8px',
                                    fontSize: '14px',
                                    fontWeight: '300',
                                    color: '#e5e5e5'
                    }}
                            />
                            <div style={{ fontSize: 12, color: "red" }}> {this.state.passwordError} </div>
                            <br />
                            <Button 
                                className="btn btn-success" 
                                onClick={this.signupClicked}
                                style={{
                                marginTop: '20px',
                                height: '50px',
                                width: '100%',
                                backgroundColor: '#0071bc',
                                fontWeight: '600',
                                borderRadius: '3px',
                                padding: '0 10px',
                                marginLeft:'0px',   
                                cursor: 'pointer'         
                            }}
                                >Signup</Button>
                        </form> <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                </div>
                <br />
                <br />
                </center>
                
            </div>
        )
    }
}

export default Signup