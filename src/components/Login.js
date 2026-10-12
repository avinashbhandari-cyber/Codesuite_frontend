import React, { Component } from 'react'
import AuthenticationService from '../Service/AuthenticationService';
import { Button, Input, Jumbotron} from 'reactstrap'
import { Link } from 'react-router-dom';

class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            emailError: '',
            passwordError: '',
            hasLoginFailed: false,
            showSuccessMessage: false,
            }

        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }

    validate = () => {
        let emailError = "";
        let passwordError = "";
         
        if (!this.state.email.includes('@')) {
            emailError = 'invalid email';
        }

        if (!this.state.password) {
            passwordError = 'Password cannot be empty, or Please recheck you password';
        }
        if(emailError) {
            this.setState({emailError})
            return false;
        }

        if (emailError || passwordError) {
            this.setState({ emailError, passwordError });
            return false;
        }

        return true;
    }

    loginClicked() {
        const isValid = this.validate();
        if (!isValid) {
            return false;    
        }
        
         AuthenticationService
             .executeJwtAuthenticationService(this.state.email, this.state.password)
             .then((response) => {
                 console.log("response: "+response.data)
                 AuthenticationService.registerSuccessfulLoginForJwt(this.state.email, response.data)
                this.setState({ showSuccessMessage: true })
                this.setState({ hasLoginFailed: false })
                 this.props.history.push(`/`)
             }).catch(() => {
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
                    {this.state.hasLoginFailed && <div className="alert alert-danger">Invalid Credentials. Please enter valid E-mail/Password</div>}
                    {this.state.showSuccessMessage && <div>Login Sucessful</div>}
                    <form
                    style={{
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
                    }}
                    >
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
                        onClick={this.loginClicked}
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
                        >Login</Button>
                </form><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                
                </div>
                <br />
                <br />
                </center>
            </div>
        )
    }
}

export default Login