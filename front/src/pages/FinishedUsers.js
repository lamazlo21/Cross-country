import React from 'react';

// Components
import List from "../components/List";

// Variables
const url = 'http://127.0.0.1:3100/finished/';

const Homepage = () => {
    return(
        <section className={"homepage"}>
            <List url={url}/>
        </section>
    );
}

export default Homepage;