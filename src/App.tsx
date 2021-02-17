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
import AuthenticatedRoute from './components/welcome/AuthenticatedRoute';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <MyRoutes />
            </BrowserRouter>
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
                <AuthenticatedRoute exact path="/" component={Home}/>
                <Route path="/book" component={Book}/>
                <Route component={Error} />
            </Switch>
        </>
    )
};

export default App;
