import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import 'bootstrap/dist/css/bootstrap-grid.min.css'

ReactDOM.render(

    <BrowserRouter><App /></BrowserRouter>,

    document.getElementById('root')
);


//ReactDOM.render(<Routes />, document.getElementById('root'));

reportWebVitals();
