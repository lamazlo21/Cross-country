import React from 'react';

// Components
import List from "../components/List";
import User from "../components/User";

// Variables
const href = window.location.href.split('/');
const url = `http://127.0.0.1:3100/organizer/runs/${href[href.length-1]}`;
const OrganizerUsers = () => {
    return(
        <section className={"runs"}>
            <List url={url} child={User}/>
        </section>
    );
}

export default OrganizerUsers;