import React from 'react';

// Components
import List from "../components/List";
import FinishedRun from "../components/FinishedRun";

// Variables
const url = 'http://127.0.0.1:3100/admin/finished';

const Finished = () => {
    return(
        <section className={"runs"}>
            <List url={url} child={FinishedRun}/>
        </section>
    );
}

export default Finished;