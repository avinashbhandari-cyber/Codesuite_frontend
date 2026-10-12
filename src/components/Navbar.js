import React, { useState, useEffect } from 'react';
import '../App.css';
import { Link, useHistory, useLocation } from 'react-router-dom';
import logo from '../images/logo1.png';
import AuthenticationService from '../Service/AuthenticationService';

export default function Navbar() {
    const history = useHistory();
    const location = useLocation();
    const [isLoggedIn, setIsLoggedIn] = useState(AuthenticationService.isUserLoggedIn());
    const [username, setUsername] = useState(AuthenticationService.getLoggedInUserName());

    const updateAuthState = () => {
        setIsLoggedIn(AuthenticationService.isUserLoggedIn());
        setUsername(AuthenticationService.getLoggedInUserName());
    };

    useEffect(() => {
        updateAuthState();
        window.addEventListener('auth-change', updateAuthState);
        return () => {
            window.removeEventListener('auth-change', updateAuthState);
        };
    }, [location]);

    const handleLogout = () => {
        AuthenticationService.logout();
        updateAuthState();
        history.push('/login');
    };

    return (
        <nav> 
            <div className="Nav-elem" style={{ width: '80%', maxWidth: '1200px' }}> 
                <div id="logo">
                    <Link to="/"><img src={logo} alt="CodeSuite Logo" width="180px" /></Link>
                </div> 
                <ul className="li-item" style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/courses">Courses</Link></li>
                    <li><Link to="/compiler">Compiler</Link></li>
                    <li><Link to="/practiceques">Practice</Link></li>
                    <li><Link to="/ContestPortal">Contest</Link></li>
                </ul>
                <div style={{ display: 'flex', alignItems: 'center', marginLeft: '20px' }}>
                    {isLoggedIn ? (
                        <>
                            <span style={{ color: '#68d391', marginRight: '15px', fontWeight: 'bold', fontSize: '14px' }}>
                                👤 {username}
                            </span>
                            <div className="btn" onClick={handleLogout} style={{ cursor: 'pointer' }}>
                                Logout
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="btn"><Link to="/login">Login</Link></div>
                            <div className="btn"><Link to="/signup">Register</Link></div>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}
