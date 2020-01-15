import React from 'react';

const signRunner = async (e) =>{
    e.preventDefault();
}

const signVolunteer = async (e) =>{
    e.preventDefault();
}

const Run = ({data}) => {
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
              <button onClick={e => signRunner(e)}>{"Biegacz"}</button>
              <button onClick={e => signVolunteer(e)}>{"Wolontariusz"}</button>
          </div>
          <div className={"run__right"}>
              <p className={"run--text big"}>{data.NAZWA_BIEG}</p>
          </div>
      </div>
    );
}

export default Run;