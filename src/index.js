import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import ToDos from "./features/mainPage/index";

ReactDOM.render(<ToDos/>, document.getElementById('root'));
registerServiceWorker();
