import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {App} from './app/index.jsx';
import "./index.html";
import "./styles.scss";

injectTapEventPlugin();

ReactDOM.render(<App />, document.getElementById("app"));