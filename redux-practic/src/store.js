import {createStore , applyMiddleware , } from 'redux';
import Increment from './reducers/Increment';
import thunk from 'redux-thunk';


const store = createStore( Increment, applyMiddleware(thunk));

export default store;