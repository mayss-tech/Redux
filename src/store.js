import {combineReducers, createStore} from 'redux';
import TaskReducer from './reducers/taskReducer.js';
const Store=createStore(combineReducers({
task:TaskReducer
}))
export default Store;