import React from 'react';

const Admin = () => {
    return(
      <section className={"admin"}>
          <a href={'/admin/users'} className={"admin__button"}><p className={"admin--text"}>Show users</p></a>
          <a href={'/admin/runs'} className={"admin__button"}><p className={"admin--text"}>Show unaccepted runs</p></a>
          <a href={'/admin/add'} className={"admin__button"}><p className={"admin--text"}>Add user</p></a>
          <a href={'/admin/finished'} className={"admin__button"}><p className={"admin--text"}>Finished runs</p></a>
      </section>
    );
}

export default Admin;