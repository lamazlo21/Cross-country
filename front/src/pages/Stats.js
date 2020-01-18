import React from 'react';

// Components
import List from '../components/List';
import Result from '../components/Result';

// Variables
const url = 'http://127.0.0.1:3100/profile/stats';

const Stats = () => {
    return(
      <section className={'stats'}>
          <List url={url} child={Result}/>
      </section>
    );
}

export default Stats;