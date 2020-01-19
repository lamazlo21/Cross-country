import React from 'react';

const FinishedRun = ({data}) => {
    const date = data.DATA_BIEG.split('T');
    return (
        <div className={"run"} run_id={data.ID_BIEG} route_id={data.ID_TRASA}>
            <div className={"run__left"}>
                <p className={"run--text"}>{`Organizator: ${data.IMIE_UZYTKOWNIK} ${data.NAZWISKO_UZYTKOWNIK}`}</p>
                <p className={"run--text"}>{`Data: ${date[0]}`}</p>
                <p className={"run--text"}>{`Miasto: ${data.MIASTO_TRASA}`}</p>
                <p className={"run--text"}>{`Start: ${data.POCZATEK_TRASA}`}</p>
                <p className={"run--text"}>{`Meta: ${data.KONIEC_TRASA}`}</p>
                <p className={"run--text"}>{`Długość: ${data.DLUGOSC_TRASA}km`}</p>
                <a className={"run__button"} href={`/admin/finished/users`}><p className={"run--text"}>Dodaj wyniki</p></a>
            </div>
            <div className={"run__right"}>
                <p className={"run--text big"}>{data.NAZWA_BIEG}</p>
            </div>
        </div>
    );
}


export default FinishedRun;