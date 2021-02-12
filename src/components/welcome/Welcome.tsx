import React from 'react';
import logo from '../../../src/logo.svg'
import './Welcome.css'
import {Button} from '@material-ui/core';
import {Link} from 'react-router-dom';

function Welcome() {
    return (
        <div className="Welcome">
            <header className="Welcome-header">
                <img src={logo} className="Welcome-logo" alt="logo" />
                <p>
                    THE Library System
                </p>
                <Link to="/login" style={{ textDecoration: 'none' }}>
                <Button variant="outlined" color="primary">
                    Login
                </Button>
                </Link>
                <Button variant="outlined" color="primary">
                    Sign Up
                </Button>
            </header>
        </div>
    );
}

export default Welcome;