import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reducers from './reducers';

import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

//for redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 
const store = createStore ( 
    reducers,
    composeEnhancers(applyMiddleware(reduxThunk))
 );


ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, 
document.getElementById('root'))