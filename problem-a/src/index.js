import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import senatorsList from './data/senators.json';

//render the App component here!

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App senatorsList={{senatorsList}}/>
    </React.StrictMode>
);

