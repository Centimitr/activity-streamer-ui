import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import state from "./State/State";
import {Test} from "./State/Test";

ReactDOM.render(<App stream={state}/>, document.getElementById('root'));
registerServiceWorker();

const test = new Test();
test.run(state).then();