import { combineReducers } from 'redux';
import todos from './todos'
import visibilityFilters from './visibilityFilter'

const rootReducer = combineReducers({ todos, visibilityFilters });

export default rootReducer;


// Router implemented with connected-react-router
// import { combineReducers } from 'redux';
// import todos from './todos'
// // import visibilityFilters from './visibilityFilter'
// import { connectRouter } from 'connected-react-router'

// const rootReducer = (history) => combineReducers({ 
//     router: connectRouter(history),
//     todos, 
//     //visibilityFilters,
// });

// export default rootReducer;