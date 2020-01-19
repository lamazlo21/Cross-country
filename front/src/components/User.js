import React, {useState} from 'react';

const removeUser = async (e, updateState) => {
    e.preventDefault();
    const login = e.target.parentElement.attributes.login.value;
    const res = await fetch(`http://127.0.0.1:3100/admin/users/${login}`, {
        method: "DELETE",
        mode: "cors",
        credentials: "include"
    })
    const data = await res.text();
    updateState(data);
}

const User = ({data}) => {
    const [text, updateText] = useState('');
    const date = data.date.split('T');
    return(
      <div className={'user'} login={data.login}>
          <p className={'user--text'}>{`Name: ${data.name}`}</p>
          <p className={'user--text'}>{`Surname: ${data.surname}`}</p>
          <p className={'user--text'}>{`Birth date: ${date[0]}`}</p>
          <p className={'user--text'}>{`Type: ${data.type}`}</p>
          {
              (window.location.href === 'http://127.0.0.1:3000/admin/users'&&(<button onClick={(e) => removeUser(e, updateText)}>Remove</button>))
          }
          <p className={'user--text'}>{text}</p>
      </div>
    );
}

export default User;