import React, {useState, useEffect} from 'react';

// Functions
import {fetchData} from "../components/Fetch";

const User = ({url}) => {
    const [data, updateData] =  useState({});

    useEffect(() => {
        fetchData(updateData, url);
    }, []);

    return(
      <div className={'user'}>
          <p className={'user--text'}>{`Imie: ${data.name}`}</p>
          <p className={'user--text'}>{`Nazwisko ${data.surname}`}</p>
          <p className={'user--text'}>{`Data urodzenia ${data.date}`}</p>
          <p className={'user--text'}>{`Typ: ${data.type}`}</p>
          <a className={'user__button'} href={'/profile/stats'}><p className={'user--text user--button'}>Pokaż statystyki</p></a>
      </div>
    );
}

export default User;