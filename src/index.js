import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'

import App from './App'
import store from './app/store'
import 'antd/dist/antd.css'

ReactDOM.render(
    <Router>
           <Provider store={store}>

        {/* Toute les components de notre app peuvent accéder aux variables du store */}

           <App />
           </Provider>
    </Router>,
    document.getElementById('root'));

