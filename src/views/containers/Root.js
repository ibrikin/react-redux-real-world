import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import { routes } from '../routes-web'

import DevTools from '../../redux-state/utils/DevTools';

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
        {routes.map((item, index) => <Route key={index} {...item} />)}
       {process.env.NODE_ENV !== 'production' && <DevTools />}
    </div>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root
