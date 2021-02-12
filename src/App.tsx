import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Welcome from './components/welcome/Welcome';
import Login from './components/login/Login';
import Error from './components/error/Error';

function App() {
    return (
        <Router>
            <div className="App">

                <div>
                    <nav>

                    </nav>

                    <Route exact path="/welcome" component={Welcome}/>
                    <Route path="/login" component={Login}/>
                    <Route component={Error}/>


                </div>

                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        </Router>
    );
}

export default App;
