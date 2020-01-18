import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// Styles
import './styles/css/main.css';

// Components
import Navbar from './components/Navbar';

// Pages
import Homepage from './pages/Homepage';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Stats from './pages/Stats';

// Data
const guestMenu =[{name: 'Sign in', url: '/login'}, {name: 'Sign up', url: '/register'}];
const runnerMenu = [{name: 'Profile', url: '/profile'}, {name: 'Sign out'}];
const organizerMenu = [{name: 'Profile', url: '/profile'}, {name: 'Sign out'}];
const adminMenu = [{name: 'Profile', url: '/profile'}, {name: 'Sign out'}];

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Navbar items={localStorage.getItem('type') === 'guest' ?
                    guestMenu : localStorage.getItem('typw') === 'biegacz' ?
                        runnerMenu : localStorage.getItem('typw') === 'biegacz' ?
                        organizerMenu : adminMenu}/>
                <div>
                    <Switch>
                        <Route exact path="/">
                            <Homepage/>
                        </Route>
                        <Route path="/login">
                            <Signin/>
                        </Route>
                        <Route path="/register">
                            <Signup/>
                        </Route>
                        <Route exact path="/profile">
                            <Profile/>
                        </Route>
                        <Route path="/profile/stats">
                            <Stats/>
                        </Route>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
