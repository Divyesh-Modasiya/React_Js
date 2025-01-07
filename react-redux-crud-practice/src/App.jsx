import React from 'react'
import Home from './Home'
import { Provider } from 'react-redux'
import store from './Redux/Store'

function App() {
  return (
    <div>
      <Provider store={store}>
      <Home/>
      </Provider>
      
    </div>
  )
}

export default App
