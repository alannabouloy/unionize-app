import React from 'react'
import ReactDOM from 'react-dom'

import Comment from './Comment'

it('renders', () => {
  const div = document.createElement('div')

  ReactDOM.render(
    <Comment comment='a comment' name='name' date='2021-02-02T16:40:50.617Z'/>
 , div)

  ReactDOM.unmountComponentAtNode(div)
})
