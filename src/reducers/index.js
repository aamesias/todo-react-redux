import { combineReducers } from 'redux';
import todos from './todos'
import visibilityFilters from './visibilityFilter'

const rootReducer = combineReducers({ todos, visibilityFilters });

export default rootReducer;