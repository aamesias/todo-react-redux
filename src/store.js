import { createStore } from 'redux';
import rootReducer from './reducers/index'

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;



// import { applyMiddleware, compose, createStore } from 'redux'
// import rootReducer from './reducers/index'
// import {createHashHistory} from 'history'
// import { routerMiddleware} from 'connected-react-router'

// export const history = createHashHistory()

// export default function configureStore(preloadedState) {
//     const store = createStore(
//         rootReducer(history),
//         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//         preloadedState,
//         compose(
//             applyMiddleware(
//                 routerMiddleware(history),
//             ),
//         ),
//     )
//     return store
// }