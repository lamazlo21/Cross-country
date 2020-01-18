import React from 'react';

// Components
import User from "../components/User";

// Variables
const url = 'http://127.0.0.1:3100/profile';

const Profile = () => {
    return (
        <section className={'profile'}>
            <User url={url}/>
        </section>
    );
}

export default Profile;