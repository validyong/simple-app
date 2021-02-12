import React from 'react';
import logo from '../../../src/logo.svg'
import './Welcome.css'
import { Button, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Welcome() {
    return (
        <div className="Welcome">
            <header className="Welcome-header">
                <img src={logo} className="Welcome-logo" alt="logo" />
                <p>
                    THE Library System
                </p>
                <Box p={1}>
                    <Link to="/login" style={{ textDecoration: 'none' }}>
                        <Button variant="outlined" color="primary">
                            Login
                        </Button>
                    </Link>
                </Box>

                <Box p={1}>
                    <Link to="/sign-up" style={{ textDecoration: 'none' }}>
                        <Button variant="outlined" color="primary">
                            Sign Up
                        </Button>
                    </Link>
                </Box>

            </header>
        </div>
    );
}

export default Welcome;