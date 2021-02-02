import React from 'react'
import ReactDOM from 'react-dom'

import Description from './Description'

it('renders', () => {
  const div = document.createElement('div')

  ReactDOM.render(
    <Description text='a desciption'/>
 , div)

  ReactDOM.unmountComponentAtNode(div)
})
