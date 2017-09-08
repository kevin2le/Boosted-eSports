import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/pages/App/App';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';


ReactDOM.render(
    <Router>
        <Route render={(props)=><App history={props.history} />}/>
    </Router>
, document.getElementById('root'));



