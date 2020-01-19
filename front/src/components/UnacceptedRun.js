import React, {useState} from 'react';

const acceptRun = async (e, updateState) =>{
    e.preventDefault();
    const id = e.target.parentElement.parentElement.attributes.run_id.value;
    const res = await fetch(`http://127.0.0.1:3100/admin/runs/accept/${id}`, {
        method: 'PUT',
        mode: 'cors',
        credentials: 'include',
    });
    const data = await res.text();
    updateState(data);
}

const UnacceptedRun = ({data}) => {
    const [text, updateText] = useState('');
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
                <button onClick={e => acceptRun(e, updateText)}>{"Akceptuj"}</button>
                <p className={"run--text"}>{text}</p>
            </div>
            <div className={"run__right"}>
                <p className={"run--text big"}>{data.NAZWA_BIEG}</p>
            </div>
        </div>
    );
}


export default UnacceptedRun;