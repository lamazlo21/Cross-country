import React, {useState} from 'react';

// Components
import {cleanErrors, Errors} from './Errors';

const Form = ({submitForm}) => {
    const [errors, updateErrors] = useState([]);
    return(
        <div className={"form__container"}>
            <Errors errors={errors}/>
            <form name={"addUser"} className={"form"} onClick={() => cleanErrors(errors, updateErrors)}>
                <label className={"form__label"} htmlFor={"login"}>Login</label>
                <input className={"form__input"} type={"text"} placeholder={"Enter login..."} name={"login"} required></input>
                <label className={"form__label"} htmlFor={"firstName"}>First name</label>
                <input className={"form__input"} type={"text"} placeholder={"Enter first name..."} name={"firstName"} required></input>
                <label className={"form__label"} htmlFor={"lastName"}>Last name</label>
                <input className={"form__input"} type={"text"} placeholder={"Enter last name..."} name={"lastName"} required></input>
                <label className={"form__label"} htmlFor={"birthDate"}>Birth date</label>
                <input className={"form__input"} type={"date"} name={"birthDate"} required></input>
                <label className={"form__label"} htmlFor={"password1"}>Password</label>
                <input className={"form__input"} type={"password"} placeholder={"Enter password..."} name={"password1"} required></input>
                <label className={"form__label"} htmlFor={"password2"}>Confirm password</label>
                <input className={"form__input"} type={"password"} placeholder={"Enter password..."} name={"password2"}></input>
                <label className={"form__label"} htmlFor={"type"}>User type</label>
                <input className={"form__input"} type={"text"} placeholder={"Enter type..."} name={"type"}></input>
            </form>
            <button className={"form__button"} onClick={e => submitForm(e, updateErrors)}>Submit</button>
        </div>
    );
};

export default Form;