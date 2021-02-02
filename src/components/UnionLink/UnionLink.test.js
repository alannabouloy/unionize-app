import React from 'react'
import ReactDOM from 'react-dom'

import UnionLink from './UnionLink'

it('renders', () => {
  const div = document.createElement('div')

  ReactDOM.render(
    <UnionLink link='http://alink.com'/>
 , div)

  ReactDOM.unmountComponentAtNode(div)
})