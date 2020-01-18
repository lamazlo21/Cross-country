import React from 'react';

const Result = ({data}) => {
    const time = data.time.split(':');
    return(
        <div className={"result"}>
            <p className={"result--text"}>{`Nazwa biegu: ${data.name}`}</p>
            <p className={"result--text"}>{`Miejsce: ${data.place}`}</p>
            <p className={"result--text"}>{`Czas: ${time[0]}h ${time[1]}m ${time[2]}s`}</p>
        </div>
    );
}

export default Result;