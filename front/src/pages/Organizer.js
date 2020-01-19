import React from 'react';

// Components
import Form from "../components/AddRunForm";

// Variables
const url = 'http://127.0.0.1:3100/organizer/add';

// Functions
import {submitForm} from "../components/Fetch";

const validateForm = async (e, changeState) => {
    let errors = [];
    const form = document.forms['addRunForm'];
    if(form['name'].value.length < 8)
        errors.push({
            message: 'Run name field has to contain at least 8 characters!',
            success: false
        });
    if(!form['route'].value.length)
        errors.push({
            message: 'Route id field cannot be empty!',
            success: false
        });
    if(errors.length)
        changeState(errors);
    else {
        const data = {}
        data.name = form['name'].value;
        data.route = form['route'].value;
        data.date = '1998-11-18';
        await submitForm(url, data, changeState);
        form['name'].value = '';
        form['route'].value = '';
    }
};

const Organizer = () => {
    return(
      <section className={'profile'}>
            <Form submitForm={validateForm}/>
          <a className={'user__button'} href={'organizer/runs'}><p className={'user--text user--button'}>Twoje biegi</p></a>
      </section>
    );
}

export default Organizer;