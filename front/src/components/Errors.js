import React from 'react';

const Errors = ({errors}) => {
    return (
        <ul className={"errors"}>
            {
                errors.map((data, index) => {
                    return(
                        <li key={index} className={data.success===true?"success__item":"errors__item"}>
                            <p className={"errors__item--text"}>{data.message}</p>
                        </li>
                    );
                })
            }
        </ul>
    );
}

const cleanErrors = (errors, updateState) => {
    if(errors.length) {
        updateState([]);
    }
}

export {
    Errors,
    cleanErrors
}