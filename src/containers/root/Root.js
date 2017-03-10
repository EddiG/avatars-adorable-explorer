import React from 'react'
import { Provider } from 'react-redux'
import configureStore from '../../store'
import RoutedApp from './Router'

const store = configureStore()

const ReduxedApp = () => (
  <Provider store={store}>
    <RoutedApp />
  </Provider>)

export default ReduxedApp
