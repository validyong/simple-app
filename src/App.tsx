import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Welcome from './components/welcome/Welcome';
import Login from './components/login/Login';
import Error from './components/error/Error';
import SignUp from './components/sign-up/SignUp';
import Home from './components/home/Home';
import Book from './components/book/Book';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <MyRoutes />
            </BrowserRouter>

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

    );
}

export const MyRoutes = () => {
    return (
        <>
            <Switch>
                <Route exact path="/welcome" component={Welcome} />
                <Route path="/login" component={Login} />
                <Route path="/sign-up" component={SignUp} />
                <Route exact path="/" component={Home}/>
                <Route path="/book" component={Book}/>
                <Route component={Error} />
            </Switch>
        </>
    )
};

export default App;
