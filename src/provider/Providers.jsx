import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../store/store'
import { BrowserRouter } from 'react-router-dom'

const Providers = ({children}) => {
  return (
    <BrowserRouter>
       <Provider store={store}>
          {children}
       </Provider>
    </BrowserRouter>
  )
}

export default Providers
