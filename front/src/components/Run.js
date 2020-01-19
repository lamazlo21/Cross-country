import React, {useState} from 'react';

// Components
import AddRunForm from '../components/AddRunForm';

// Variables
const url = `http://127.0.0.1:3100/organizer/runs/`;

// Functions
import {updateUser} from "../components/Fetch";

const validateForm = async (e, changeState) => {
    let errors = [];
    const id = e.target.parentNode.parentNode.attributes.run_id.value;
    const form = document.forms['addRunForm'];
    if(form['name'].value.length < 8)
        errors.push({
            message: 'Run name field has to contain at least 8 characters!',
            success: false
        });
    if(!form['route'].value.length)
        errors.push({
            message: 'Route id field cannot be empty!',
            success: false
        });
    if(errors.length)
        changeState(errors);
    else {
        const data = {}
        data.name = form['name'].value;
        data.route = form['route'].value;
        data.date = '1998-11-18';
        await updateUser(url+id, data, changeState);
        form['name'].value = '';
        form['route'].value = '';
    }
};

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
    const [visibility, showForm] = useState(false);
    const date = data.DATA_BIEG.split('T');
    return (
      <div className={"run"} run_id={data.ID_BIEG}>
          {
              !visibility?(
              <div className={"run__left"}>
                  <p className={"run--text"}>{`Organizator: ${data.IMIE_UZYTKOWNIK} ${data.NAZWISKO_UZYTKOWNIK}`}</p>
                  <p className={"run--text"}>{`Data: ${date[0]}`}</p>
                  <p className={"run--text"}>{`Miasto: ${data.MIASTO_TRASA}`}</p>
                  <p className={"run--text"}>{`Start: ${data.POCZATEK_TRASA}`}</p>
                  <p className={"run--text"}>{`Meta: ${data.KONIEC_TRASA}`}</p>
                  <p className={"run--text"}>{`Długość: ${data.DLUGOSC_TRASA}km`}</p>
                  {
                      (localStorage.getItem('type') === "biegacz" && (
                          <button onClick={e => signRunner(e, updateText)}>{"Biegacz"}</button>))
                  }
                  {
                      (localStorage.getItem('type') === "biegacz" && (
                          <button onClick={e => signVolunteer(e, updateText)}>{"Wolontariusz"}</button>))
                  }
                  {
                      (localStorage.getItem('type') === "biegacz" && (<p className={"run--text"}>{text}</p>))
                  }
                  {
                      (localStorage.getItem('type') === "organizator" && window.location.href === 'http://127.0.0.1:3000/organizer/runs' && (
                          <a href={`/organizer/runs/${data.ID_BIEG}`}>Zobacz biegaczy</a>))
                  }
                  {
                      (localStorage.getItem('type') === "organizator" && window.location.href === 'http://127.0.0.1:3000/organizer/runs' && (
                              <button onClick={e => showForm(!visibility)}>{"Edytuj bieg"}</button>)
                      )
                  }
              </div>
              ):<AddRunForm submitForm={validateForm}/>
          }
          <div className={"run__right"}>
              <p className={"run--text big"}>{data.NAZWA_BIEG}</p>
          </div>
      </div>
    );
}

export default Run;