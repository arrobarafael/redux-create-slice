import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import  {Provider} from "react-redux";
import { createStore } from 'redux';

const initialState = {
  idade: 31,
  nome: 'rafael'
}

function reducer(state = initialState, action){
  switch(action.type){
    case 'INCREMENTAR':
      return state.idade + 1;
    default:
      return state;
  }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
