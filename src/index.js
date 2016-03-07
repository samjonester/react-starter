import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'

import './index.scss'
import App from './components/app'
//import todoApp from './reducers'

let reactElement = document.getElementById('root')
//let store = createStore(todoApp)

render(
  <App />,
  reactElement
)
