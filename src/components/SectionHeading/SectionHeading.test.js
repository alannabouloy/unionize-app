import React from 'react'
import ReactDOM from 'react-dom'

import SectionHeading from './SectionHeading'

it('renders', () => {
    const div = document.createElement('div')

    ReactDOM.render(<SectionHeading text='test' className='test'/>, div)

    ReactDOM.unmountComponentAtNode(div)
})