import React from 'react'
import ReactDOM from 'react-dom'



import QuestionTab from './QuestionTab'

it('renders', () => {

    const q = 'question'
    const a = 'answer'

    const div = document.createElement('div')

    ReactDOM.render(<QuestionTab question={q} answer={a}/>, div)

    ReactDOM.unmountComponentAtNode(div)
})