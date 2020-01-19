import React from 'react';

// Components
import Form from '../components/AddUserForm';

// Functions
import {submitForm} from "../components/Fetch";

// Variables
const url = 'http://127.0.0.1:3100/admin/add';

const validateForm = async (e, changeState) => {
    let errors = [];
    const form = document.forms['addUser'];
    if(form['login'].value.length < 8)
        errors.push({
            message: 'Login field cannot has less than 8 characters!',
            success: false
        });
    if(!form['firstName'].value.length)
        errors.push({
            message: 'First name field cannot be empty!',
            success: false
        });
    if(!form['lastName'].value.length)
        errors.push({
            message: 'Last name field cannot be empty!',
            success: false
        });
    if(!form['password1'].value.length)
        errors.push({
            message: 'Password field cannot has less than 8 characters!',
            success: false
        });
    if(form['password1'].value !== form['password2'].value)
        errors.push({
            message: 'Passwords doesn\'t match!',
            success: false
        });
    if(form['type'].value !== 'admin' && form['type'].value !== 'biegacz' && form['type'].value !== 'organizator')
        errors.push({
            message: 'Incorrect user type. Enable values are: biegacz, organizator, admin!',
            success: false
        });
    if(errors.length)
        changeState(errors);
    else {
        const data = {}
        data.login = form['login'].value;
        data.first_name = form['firstName'].value;
        data.last_name = form['lastName'].value;
        data.birth_date = '1998-11-18';
        data.pass = form['password1'].value;
        data.type = form['type'].value;
        await submitForm(url, data, changeState);
        form['login'].value = '';
        form['firstName'].value = '';
        form['lastName'].value = '';
        form['password1'].value = '';
        form['password2'].value = '';
        form['type'].value = '';
    }
};

const AddUser = () => {
    return (
        <section className={"sign"}>
            <Form submitForm={validateForm}/>
        </section>
    );
}

export default AddUser;