import React from 'react';

// Components
import List from "../components/List";
import Run from "../components/Run";

// Variables
const runsApi = 'http://127.0.0.1:3100/';

const Homepage = () => {
        return(
            <section className={"homepage"}>
                <List url={runsApi} child={Run}/>
            </section>
        );
}

export default Homepage;