import React from 'react';

// Components
import List from "../components/List";
import UnacceptedRun from "../components/UnacceptedRun";

// Variables
const url = 'http://127.0.0.1:3100/admin/runs';

const Runs = () => {
    return(
        <section className={"runs"}>
            <List url={url} child={UnacceptedRun}/>
        </section>
    );
}

export default Runs;