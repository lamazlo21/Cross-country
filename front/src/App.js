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

// Data
const guestMenu =[{name: 'Sign in', url: '/login'}, {name: 'Sign up', url: '/register'}]

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navbar items={guestMenu}/>
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
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
