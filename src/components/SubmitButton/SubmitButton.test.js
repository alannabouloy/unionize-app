import React from 'react'
import ReactDOM from 'react-dom'

import SubmitButton from './SubmitButton'

it('renders', () => {
    const div = document.createElement('div')

    ReactDOM.render(<SubmitButton text='submit'/>, div)

    ReactDOM.unmountComponentAtNode(div)
})