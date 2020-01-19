import React from 'react';

// Components
import List from "../components/List";
import Run from "../components/Run";

// Variables
const url = 'http://127.0.0.1:3100/organizer/runs';

const Runs = () => {
    return(
        <section className={"runs"}>
            <List url={url} child={Run}/>
        </section>
    );
}

export default Runs;