// Contrib
import React from 'react';
import ReactDOM from 'react-dom';

// Custom
import './firebase/firebase';
import AppRouter from './routers/AppRouter';
import '../scss/main.scss';

ReactDOM.render(<AppRouter />, document.getElementById('root'));