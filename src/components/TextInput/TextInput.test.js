import React from 'react'
import ReactDOM from 'react-dom'

import TextInput from './TextInput'

it('renders', () => {
  const div = document.createElement('div')

  ReactDOM.render(
    <TextInput/>
 , div)

  ReactDOM.unmountComponentAtNode(div)
})