import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import counter from './reducer.js';
const store = createStore(counter);

function render(){
  return ReactDOM.render(<App store={store} />,
  document.getElementById('root'));
}

render();
store.subscribe(render);

registerServiceWorker();
