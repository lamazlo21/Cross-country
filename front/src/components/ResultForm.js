import React, {useState} from 'react';

// Components
import {cleanErrors, Errors} from './Errors';

const Form = ({submitForm}) => {
    const [errors, updateErrors] = useState([]);
    return(
        <div className={"form__container"}>
            <Errors errors={errors}/>
            <form name={"signInForm"} className={"form"} onClick={() => cleanErrors(errors, updateErrors)}>
                <label className={"form__label"} htmlFor={"login"}>Login</label>
                <input className={"form__input"} type={"text"} placeholder={"Enter login..."} name={"login"} required></input>
                <label className={"form__label"} htmlFor={"password"}>Password</label>
                <input className={"form__input"} type={"password"} placeholder={"Enter password..."} name={"password"} required></input>

            </form>
            <button className={"form__button"} onClick={e => submitForm(e, updateErrors)}>Submit</button>
        </div>
    );
};

export default Form;