import React from 'react'
import AddTask from './component/AddTask '
import { Provider } from 'react-redux'
import store from './Redux/Store'

export default function App() {
  return (
    <div>
     <Provider store={store}>
      <AddTask/>
     </Provider>
    </div>
  )
}
