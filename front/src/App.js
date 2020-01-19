import React, {useState, useEffect} from 'react';
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
import Admin from './pages/Admin';
import Users from "./pages/Users";
import Runs from "./pages/Runs";
import AddUser from "./pages/AddUser";
import Finished from "./pages/Finished";
import FinishedUsers from "./pages/FinishedUsers";
import Organizer from "./pages/Organizer";
import OrganizerRuns from "./pages/OrganizerRuns";
import OrganizerUsers from "./pages/OrganizerUsers";

// Data
const guestMenu =[{name: 'Sign in', url: '/login'}, {name: 'Sign up', url: '/register'}];
const runnerMenu = [{name: 'Profile', url: '/profile'}, {name: 'Sign out'}];
const organizerMenu = [{name: 'Profile', url: '/profile'}, {name: 'Organizer', url: '/organizer'}, {name: 'Sign out'}];
const adminMenu = [{name: 'Admin panel', url: '/admin'}, {name: 'Sign out'}];

const App = () => {
        const [menu, changeMenu] = useState(guestMenu);

        useEffect(() => {
            if(localStorage.getItem('type') === 'guest')
                changeMenu(guestMenu);
            else if(localStorage.getItem('type') === 'biegacz')
                changeMenu(runnerMenu);
            else if(localStorage.getItem('type') === 'organizator')
                changeMenu(organizerMenu);
            else
                changeMenu(adminMenu);
        }, [menu])

        return (
            <BrowserRouter>
                <Navbar items={menu}/>
                <div>
                    <Switch>
                        <Route exact path="/">
                            <Homepage/>
                        </Route>
                        <Route exact path="/login">
                            <Signin/>
                        </Route>
                        <Route exact path="/register">
                            <Signup/>
                        </Route>
                        <Route exact path="/profile">
                            <Profile/>
                        </Route>
                        <Route  exact path="/profile/stats">
                            <Stats/>
                        </Route>
                        <Route exact path="/admin">
                            <Admin/>
                        </Route>
                        <Route exact path="/admin/users">
                            <Users/>
                        </Route>
                        <Route exact path="/admin/runs">
                            <Runs/>
                        </Route>
                        <Route exact path="/admin/add">
                            <AddUser/>
                        </Route>
                        <Route exact path="/admin/finished">
                            <Finished/>
                        </Route>
                        <Route exact path="/admin/finished/users">
                            <FinishedUsers/>
                        </Route>
                        <Route exact path="/organizer">
                            <Organizer/>
                        </Route>
                        <Route exact path="/organizer/runs">
                            <OrganizerRuns/>
                        </Route>
                        <Route path="/organizer/runs">
                            <OrganizerUsers/>
                        </Route>
                    </Switch>
                </div>
            </BrowserRouter>
        );
}

export default App;
