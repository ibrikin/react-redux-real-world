import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Root from '../views/containers/Root'
import configureStore from '../redux-state/store/configureStore'

const store = configureStore()

render(
    <Router>
        <Root store={store} />
    </Router>,
    document.getElementById('root')
)