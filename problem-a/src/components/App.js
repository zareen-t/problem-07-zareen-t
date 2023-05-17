import React from 'react'; //import React library
import { SenatorTable } from './SenatorTable';


function App(props) {
    return (
        <div className="container">
            <h1>US Senators (Jan 2022)</h1>
            <SenatorTable senatorsList={props.senatorsList} />
        </div>
    );
};

export { App } ;
