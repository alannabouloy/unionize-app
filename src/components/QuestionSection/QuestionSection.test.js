import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'


import QuestionSection from './QuestionSection'

it('renders', () => {

    const questions = [{question: 'question', answer:'answer'}]

    const div = document.createElement('div')

    ReactDOM.render(
            <BrowserRouter>
                <QuestionSection questions={questions}/>
            </BrowserRouter>, div)
        

    ReactDOM.unmountComponentAtNode(div)
})