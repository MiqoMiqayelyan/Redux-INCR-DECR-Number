import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './conteiners/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import store from './store';



ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,
 document.getElementById('root'));
registerServiceWorker();





// import { createStore } from 'redux';




// const addTrackBtn = document.querySelectorAll('.addTrack')[0];
// const trackInput = document.querySelectorAll('.trackInput')[0];
// const list = document.querySelectorAll('.list')[0];

// store.subscribe(() => {
//     list.innerHTML = '';
//     trackInput.value = '';
//     store.getState().forEach(track => {
//         const li = document.createElement('li');
//         li.textContent = track;
//         list.appendChild(li);
//     })
// });




// addTrackBtn.addEventListener('click', () => {
//     const trackName = trackInput.value;
//     store.dispatch({ type: 'ADD_Track', payload: trackName });
// })