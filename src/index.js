import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import state from "./State/State";
import {Test} from "./State/Test";

ReactDOM.render(<App state={state}/>, document.getElementById('root'));
registerServiceWorker();

Test.basic(state).then();
