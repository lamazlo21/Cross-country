import React, {useState, useEffect} from 'react';

const signRunner = async (e, updateState) =>{
    e.preventDefault();
    const id = e.target.parentElement.parentElement.attributes.run_id.value;
    const res = await fetch(`http://127.0.0.1:3100/${id}/runner`, {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
    });
    const data = await res.text();
    updateState(data);
}

const signVolunteer = async (e, updateState) =>{
    e.preventDefault();
    const id = e.target.parentElement.parentElement.attributes.run_id.value;
    const res = await fetch(`http://127.0.0.1:3100/${id}/volunter`, {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
    });
    const data = await res.text();
    updateState(data);
}

const Run = ({data}) => {
    const [text, updateText] = useState('');

    return (
      <div className={"run"} run_id={data.ID_BIEG}>
          <div className={"run__left"}>
              <p className={"run--text"}>{`Organizator: ${data.IMIE_UZYTKOWNIK} ${data.NAZWISKO_UZYTKOWNIK}`}</p>
              <p className={"run--text"}>{`Data: ${data.DATA_BIEG}`}</p>
              <p className={"run--text"}>{`Miasto: ${data.MIASTO_TRASA}`}</p>
              <p className={"run--text"}>{`Data: ${data.DATA_BIEG}`}</p>
              <p className={"run--text"}>{`Start: ${data.POCZATEK_TRASA}`}</p>
              <p className={"run--text"}>{`Meta: ${data.KONIEC_TRASA}`}</p>
              <p className={"run--text"}>{`Długość: ${data.DLUGOSC_TRASA}km`}</p>
              <button onClick={e => signRunner(e, updateText)}>{"Biegacz"}</button>
              <button onClick={e => signVolunteer(e, updateText)}>{"Wolontariusz"}</button>
              <p className={"run--text"}>{text}</p>
          </div>
          <div className={"run__right"}>
              <p className={"run--text big"}>{data.NAZWA_BIEG}</p>
          </div>
      </div>
    );
}

export default Run;