import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RateCalc from './components/rate-calc';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RateCalc />, document.getElementById('root'));
registerServiceWorker();
