import React, {useState} from 'react';

// Components
import {cleanErrors, Errors} from './Errors';

const Form = ({submitForm}) => {
    const [errors, updateErrors] = useState([]);
    return(
        <div className={"form__container"}>
            <Errors errors={errors}/>
            <form name={"addRunForm"} className={"form"} onClick={() => cleanErrors(errors, updateErrors)}>
                <label className={"form__label"} htmlFor={"name"}>Run name</label>
                <input className={"form__input"} type={"text"} placeholder={"Enter run name..."} name={"name"} required></input>
                <label className={"form__label"} htmlFor={"route"}>Route id</label>
                <input className={"form__input"} type={"text"} placeholder={"Enter route id..."} name={"route"} required></input>
                <label className={"form__label"} htmlFor={"date"}>Run date</label>
                <input className={"form__input"} type={"date"} name={"date"} required></input>
            </form>
            <button className={"form__button"} onClick={e => submitForm(e, updateErrors)}>Submit</button>
        </div>
    );
};

export default Form;