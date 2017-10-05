import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from './counter'
import requests from './requests'

export default combineReducers({
  routing: routerReducer,
  counter,
  requests
})