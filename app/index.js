import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

const loggerMiddleware = createLogger()

const reducer = combineReducers({
  routing: routerReducer
})

let store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )

)
// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

render(
  // <Provider store={store}>
  //   <Router history={history}>
  //     <Route path='/' component={App}>
  //     </Route>
  //   </Router>
  // </Provider>,
  document.getElementById('root')
)
