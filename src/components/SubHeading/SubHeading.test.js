import React from 'react'
import ReactDOM from 'react-dom'

import SubHeading from './SubHeading'

it('renders', () => {
  const div = document.createElement('div')

  ReactDOM.render(
    <SubHeading text='heading'/>
 , div)

  ReactDOM.unmountComponentAtNode(div)
})
