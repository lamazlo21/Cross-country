import React from 'react';

// Components
import Form from '../components/SignInForm';

// Functions
import {submitForm} from "../components/Fetch";

// Variables
const url = 'http://127.0.0.1:3100/api/login';

const validateForm = async (e, changeState) => {
    let errors = [];
    const form = document.forms['signInForm'];
    if(form['login'].value.length < 8)
        errors.push({
            message: 'Login field cannot has less than 8 characters!',
            success: false
        });
    if(!form['password'].value.length)
        errors.push({
            message: 'Password field cannot has less than 8 characters!',
            success: false
        });
    if(errors.length)
        changeState(errors);
    else {
        const data = {}
        data.login = form['login'].value;
        data.pass = form['password'].value;
        let redirect = await submitForm(url, data, changeState);
        form['login'].value = '';
        form['password'].value = '';
        if(redirect) {
            window.location.href = 'http://127.0.0.1:3000/';
        }
    }
};

const SignIn = () => {
    return(
      <section className={"sign"}>
        <Form submitForm={validateForm}/>
      </section>
    );
}

export default SignIn;