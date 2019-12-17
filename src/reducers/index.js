import { combineReducers } from 'redux';
import todos from './todos'
// import visibilityFilters from './visibilityFilter'
import { connectRouter } from 'connected-react-router'

const rootReducer = (history) => combineReducers({ 
    router: connectRouter(history),
    todos, 
    //visibilityFilters,
});

export default rootReducer;